module.exports = {
    name: 'unmute',
    description: "This unmutes everyone in a voice channel.",
    execute(message, args) {
        // if (message.member.roles.cache.has(765209398029058081)) {
        if (message.member.roles.cache.some(role => role.name === 'Mod')) {
            if (message.member.voice.channel) {
                let channel = message.guild.channels.cache.get(message.member.voice.channel.id);
                for (const [memberID, member] of channel.members) {
                    member.voice.setMute(false);
                    // console.log('Muted everyone!');
                }
            } else {
                message.reply('you need to join a voice channel first!');
            }
        } else {
            message.reply('you have insufficient permissions.');
        }
    }
}