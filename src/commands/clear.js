module.exports = {
  name: 'clear',
  description: 'Clear messages in the channel',
  execute(message, args) {
    let count = 0;

    if (!args.length || args[0] === "all") {
      count = 99;
    } else {
      count = (parseInt(args[0]) + 1);
    }

    message.channel.bulkDelete(count)
      .then((messages) => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
  },
};
