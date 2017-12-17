using System;
using System.Threading.Tasks;

using Microsoft.Bot.Connector;
using Microsoft.Bot.Builder.Dialogs;
using System.Net.Http;


namespace Microsoft.Bot.Sample.SimpleEchoBot
{
    [Serializable]
    public class EchoDialog : IDialog<object>
    {
        protected int count = 1;

        public async Task StartAsync(IDialogContext context)
        {
            context.Wait(MessageReceivedAsync);
        }

        public async Task MessageReceivedAsync(IDialogContext context, IAwaitable<IMessageActivity> argument)
        {
            try
            {
                var message = await argument;
                string userId = message.Id;
                string chatId = message.ChannelId;
                string[] messageData = message.Text.Split('@');
                //HttpClient client = new HttpClient();
                //client.BaseAddress = new Uri(URL);
                if (messageData[0] == "/reset")
                {
                    PromptDialog.Confirm(
                        context,
                        AfterResetAsync,
                        "Are you sure you want to reset the count?",
                        "Didn't get that!",
                        promptStyle: PromptStyle.Auto);
                }
                else if (messageData[0] == "/report")
                {
                    await context.PostAsync("The reports will be available soon." );
                    context.Wait(MessageReceivedAsync);
                }
                else
                {
                    await context.PostAsync($"{this.count++}: This bot is not completed yet!");
                    context.Wait(MessageReceivedAsync);
                }
            }
            catch (Exception ex)
            {
                await context.PostAsync("error Message:" + ex.Message + "%%%" + ex.InnerException + "%%%" + ex.StackTrace);
                context.Wait(MessageReceivedAsync);
                throw;
            }
            
        }

        public async Task AfterResetAsync(IDialogContext context, IAwaitable<bool> argument)
        {
            var confirm = await argument;
            if (confirm)
            {
                this.count = 1;
                await context.PostAsync("Reset count.");
            }
            else
            {
                await context.PostAsync("Did not reset count.");
            }
            context.Wait(MessageReceivedAsync);
        }

    }
}