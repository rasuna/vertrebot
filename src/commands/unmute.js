module.exports = {
  name: 'unmute',
  description: 'Unmute everyone in the voice channel',
  execute(message) {
    const channel = message.member.voice.channel;
    channel.members.forEach((member) => {
      member.voice.setMute(false);
    });
  },
};
