Damage.getContext(). FriendlyFire.Value = true; 
 
// ��������� ��������� �������� ��� 
Damage.GetContext().DamageOut.Value = GameMode.Parameters.GetBool("Damage"); 
BreackGraph.OnlyPlayerBlocksDmg = GameMode.Parameters.GetBool("PartialDesruction"); 
BreackGraph.WeakBlocks = GameMode.Parameters.GetBool("LoosenBlocks"); 
Build.GetContext().FloodFill.Value = GameMode.Parameters.GetBool("FloodFill"); 
Build.GetContext().FillQuad.Value = GameMode.Parameters.GetBool("FillQuad"); 
Build.GetContext().RemoveQuad.Value = GameMode.Parameters.GetBool("RemoveQuad"); 
Build.GetContext().FlyEnable.Value = GameMode.Parameters.GetBool("Fly"); 
 
// ������ ��������� ������ ��� ����� 
BreackGraph.BreackAll = true; 
// ���������� ���������� ������ 
Ui.GetContext().QuadsCount.Value = true; 
// ��� ������������ ����� 
Build.GetContext().Pipette.Value = false; 
Build.GetContext().BalkLenChange.Value = false; 
Build.GetContext().SetSkyEnable.Value = false; 
Build.GetContext().GenMapEnable.Value = false; 
Build.GetContext().ChangeCameraPointsEnable.Value = false; 
Build.GetContext().QuadChangeEnable.Value = false; 
Build.GetContext().BuildModeEnable.Value = false; 
Build.GetContext().CollapseChangeEnable.Value = false; 
Build.GetContext().RenameMapEnable.Value = false; 
Build.GetContext().ChangeMapAuthorsEnable.Value = false; 
Build.GetContext().LoadMapEnable.Value = false; 
Build.GetContext().ChangeSpawnsEnable.Value = false; 
Build.GetContext().BuildRangeEnable.Value = false; 
Build.GetContext().FlyEnable.Value = false; 
// ��������� ���� 
Properties.GetContext().GameModeName.Value = "<color=redPEACE</a>"; 
// ������� ������� 
red = GameMode.Parameters.GetBool("RedTeam"); 
blue = GameMode.Parameters.GetBool("BlueTeam"); 
if (red || !red && !blue) { 
 Teams.Add("Red", "Red", { r: 1 }); 
 Teams.Get("Red").Spawns.SpawnPointsGroups.Add(2); 
} 
if (blue || !red && !blue) { 
 Teams.Add("Blue", "Blue", { b: 1 }); 
 Teams.Get("Blue").Spawns.SpawnPointsGroups.Add(1); 
 if(GameMode.Parameters.GetBool("BlueHasNothing")){ 
  var inventory = Inventory.GetContext(); 
  Teams.Get("Blue").Inventory.Main.Value = false; 
  Teams.Get("Blue").Inventory.Secondary.Value = false; 
  Teams.Get("Blue").Inventory.Melee.Value = false; 
  Teams.Get("Blue").Inventory.Explosive.Value = false; 
  Teams.Get("Blue").Inventory.Build.Value = false; 
 } 
} 
 
// ��������� ���� � ������� �� ������� 
Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);}); 
// ����� �� ����� � ������� 
Teams.OnPlayerChangeTeam.Add(function(player){ player.Spawns.Spawn()}); 
 
// ������ ��������� 
Ui.getContext().Hint.Value = "Hint/BuildBase"; 
 
// ������������ ��������� 
var inventory = Inventory.GetContext(); 
inventory.Main.Value = false; 
inventory.Secondary.Value = false; 
inventory.Melee.Value = false; 
inventory.Explosive.Value = false; 
inventory.Build.Value = false; 
inventory.BuildInfinity.Value = false; 
 
// ��������� ��� ������ ����� 
Build.GetContext().BlocksSet.Value = BuildBlocksSet.AllClear; 
 
// ������������ ����� 
Spawns.GetContext().RespawnTime.Value = 0; 
 
var rsTrigger = AreaPlayerTriggerService.Get("rsTrigger");  
rsTrigger.Tags = ["rsTrigger"]; rsTrigger.Enable = true; rsTrigger.OnEnter.Add(function (player) { Game.RestartGame(); }); 
 
var banTrigger =  
AreaPlayerTriggerService.Get("banTrigger");  
banTrigger.Tags = ["banTrigger"];  
banTrigger.Enable = true;  
banTrigger.OnEnter.Add(function (player, area) {  
player.Spawns.Enable = false; player.Spawns.Despawn();  
 
player.Ui.Hint.Value = player + " " + "ТЫ ЗАБАНЕН(А)";  
}); 
 
 
 
// ��������� ���� � ������� �� �������  
Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);  
 
 
Ui.GetContext().Hint.Value = player +"Ку бро";    
}); 
 
var LeDo = AreaPlayerTriggerService.Get("LeDoTrigger");
