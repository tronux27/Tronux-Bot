/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
let handler=async(a,{conn:i,args:e})=>{try{let o=await fetchJson(`https://latam-api.vercel.app/api/github?apikey=${MyApiKey}&q=${e[0]?e[0]:"NeKosmic"}`),t=o.nick,u=`[ USUARIO-GITHUB-🐱 ]

🧿 ID: ${o.id}
⚡ Usuario: < ${o.nick} />
🔥 Nombre: ${o.nombre}
🫂 Seguidores: ${o.seguidores}
🤝 Siguiendo: ${o.siguiendo}
🧰 Repositorios: ${o.repositorios}
🏗️ Compa\xf1\xeda: ${o.empresa}
🧑‍💻 Blog: ${o.blog}
🌎 Ubicaci\xf3n: ${o.ubicacion}
📈 Fecha de creacion: ${o.fechaDeCreacion}
📉 Ultima actualizacion: ${o.ultimaActualizacion}
📜 Biografia: ${o.biografia}`;if(!t.includes("NeKosmic"))return await i.sendMessage(a.chat,{image:{url:o.imagen},caption:u},{quoted:a});i.sendMessage(a.chat,{image:{url:o.imagen},caption:u},{quoted:a}),await i.sendMessage(a.chat,{audio:{url:"https://github.com/NeKosmic/Quantum-Bot/blob/main/multimedia/sonidos/audiouwu/OP.m4a?raw=true"},fileName:"Wowner.mp3",mimetype:"audio/mpeg",ptt:!0},{quoted:a})}catch(r){a.reply(MultiNK.Error0())}};handler.help=["github"].map(a=>a+" <usuario>"),handler.tags=["busqueda"],handler.command=/^(github|githubuser)$/i,handler.limit=!0;export default handler;
