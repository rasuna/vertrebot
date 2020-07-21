module.exports = {
  name: 'clear',
  description: 'Clear messages in the channel',
  execute(message, args) {
    // Check member permission
    if (!message.member.hasPermission('MANAGE_MESSAGES')) {
      return message.reply('You do not have permission to perform that command!');
    }

    // Delete all message if no args or "all" is passed as args
    // otherwise delete messages as defined in args.
    const count = !args.length || args[0] === 'all' ? 99 : parseInt(args[0]) + 1;

    message.channel.bulkDelete(count)
      .then((messages) => console.log(`Deleted ${messages.size} messages in \`${message.channel.guild}/${message.channel.name}\``))
      .catch(console.error);
  },
};
