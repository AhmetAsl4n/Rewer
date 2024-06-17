const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");
const Discord = require("discord.js")
const db = require("croxydb")
module.exports = {
  name: "button-rol",
  description: " You create the role-playing system!",
  type: 1,
  options: [
    {
        name:"role",
        description:"Please tag a role!",
        type:8,
        required:true
    },
    {
      name:"text",
      description:"Please enter an embed message post!",
      type:3,
      required:true
  },
   
   
],

  run: async(client, interaction) => {
 
 if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageRoles)) return interaction.reply({content: "❌ | Rolleri Yönet Yetkin Yok!", ephemeral: true})
  
 const rol = interaction.options.getRole('role')
 const yazı = interaction.options.getString('text')

 let buttonid = rol.name
 const embed = new EmbedBuilder()
 .setTitle("SeaDevils - Button Role System!")
 .setDescription(`${yazı}`)
 .setColor("#ff0000")
 const row = new Discord.ActionRowBuilder()
 .addComponents(
 new Discord.ButtonBuilder()
 .setLabel(rol.name)
 .setStyle(Discord.ButtonStyle.Primary)
 .setCustomId("rol_everyone")
 )
 interaction.reply({embeds: [embed], components: [row]}).then((mesaj) => {
db.set(`buton_rol${interaction.guild.id}`, rol.id)
})
 

  }

};
