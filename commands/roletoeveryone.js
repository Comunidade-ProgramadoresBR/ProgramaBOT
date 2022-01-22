const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('roletoeveryone')
        .setDescription('Give a role to everyone')
        .addRoleOption(option =>
            option.setName('role')
                .setDescription('The role to give to everyone')
                .setRequired(true)
        ),
    async execute(interaction) {
        interaction.guild.members.cache.forEach(member => {
            member.roles.add(interaction.options.getRole('role').id)
        })
        interaction.reply({ content: 'Role given to everyone' })
    }
};