
Ext.define('Ext.app.JSONRPC_API',
{
"transport":"POST",
"envelope":"JSON-RPC-2.0",
"contentType":"application\/json",
"SMDVersion":"2.0",
"target":"\/api\/json\/1.0\/jsonrpc.php",
"services":{
"Game.Player.read":{
"envelope":"JSON-RPC-2.0",
"transport":"POST",
"parameters":[
{
"type":"array",
"name":"params",
"optional":false
}
],
"returns":"array",
"formHandler":false
},
"Game.Player.create":{
"envelope":"JSON-RPC-2.0",
"transport":"POST",
"parameters":[
{
"type":"array",
"name":"params",
"optional":false
}
],
"returns":"array",
"formHandler":false
},
"Game.Player.update":{
"envelope":"JSON-RPC-2.0",
"transport":"POST",
"parameters":[
{
"type":"array",
"name":"params",
"optional":false
}
],
"returns":"array",
"formHandler":false
},
"Game.Player.destroy":{
"envelope":"JSON-RPC-2.0",
"transport":"POST",
"parameters":[
{
"type":"array",
"name":"params",
"optional":false
}
],
"returns":"array",
"formHandler":false
}
},
"singleton":true
} );
