const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('roletonobody')
        .setDescription('Remove a role from everyone')
        .addRoleOption(option =>
            option.setName('role')
                .setDescription('The role to be removed from everyone')
                .setRequired(true)
        ),
    async execute(interaction) {
        interaction.guild.members.cache.forEach(member => {
            member.roles.remove(interaction.options.getRole('role').id)
        })
        interaction.reply({ content: 'Role removed from everyone' })
    }
};