<?php
use QCloud_WeApp_SDK\Mysql\Mysql as DB;
class User_model extends CI_Model{   

    public function check_pos($id){
        $rows = DB::row('t_resume', ['*'], 'u_id = "'.$id.'"');
        return $rows;
    }
    public function get_user_by_name($tel){
        $rows = DB::row('t_user', ['*'], "u_tel = '$tel'");
        return $rows;
    }
    public function add($user){
         $query = DB::insert('t_user', $user);
         return $query;
    }
    public function add_insert($message){
        $query = DB::insert('t_resume', $message);

   }
    public function add_updata($message,$id){
    $query  = DB::update('t_resume', $message, 'u_id = "'.$id.'"');
       return $query;
}

    public function get_full_message(){
          $rows = DB::select('t_position', ['*'],'p_type = "全职"');
            return $rows;
        }
    public function get_study_message(){
       $rows = DB::select('t_position', ['*'],'p_type = "实习"');
        return $rows;
    }

    public function get_pos_by_id($id){
        $rows = DB::row('t_position', ['*'], 'p_id = "'.$id.'"');
        return $rows;
    }

    public function collect_position($u_id,$p_id)
    {
        date_default_timezone_set('Asia/Shanghai');//设置时区
        $time=date("Y-m-d H:i:s");
        $row = DB::insert('t_user_collect', [
            'u_id' => $u_id,
            'p_id' => $p_id,
            'c_date' => $time
        ]);
        return $row;
    }

    public function get_collect_by_u_id_p_id($u_id,$id)
    {
        $rows = DB::row('t_user_collect', ['*'], ['u_id' => "$u_id",'p_id' => "$id"]);
        return $rows;
    }

    public function del_collect_by_c_id($c_id)
    {
        $row = DB::update('t_user_collect',['is_del' => 1], "c_id = '$c_id'");
        return $row;
    }

    public function update_collect($c_id)
    {
        $row = DB::update('t_user_collect',['is_del' => 0], "c_id = '$c_id'");
        return $row;
    }

    public function search_position_or_company($key)
    {   
        $rows = DB::select('t_position', ['*'], "p_company like '%".$key."%' or p_name like '%".$key."%'");
        return $rows;
    }


    public function get_collect_by_u_id($u_id)
    {
        $rows = DB::select('t_user_collect', ['p_id'],['u_id' => "$u_id",'is_del' => 0]);
        return $rows;
    }
    public function get_collect_c_id_by_u_id($u_id,$p_id)
    {
        $rows = DB::row('t_user_collect', ['c_id'], ['u_id' => "$u_id",'p_id' => "$p_id"]);
        return $rows;
    }


    public function get_user_position_by_u_id($u_id)
    {
        $rows = DB::select('t_user_position', ['*'], "u_id = '$u_id'");
        return $rows;
    }

    public function get_collect_by_p_id($str)
    {
        $pdo = DB::getInstance();
       $query = $pdo->query("select * from t_position where p_id in ($str)");
       return $query->fetchAll();
    }
    public function get_me_look($u_id,$p_id){
        $row = DB::insert('t_me_look', [
            'u_id' => $u_id,
            'p_id' => $p_id
        ]);
      //  return $query;
   }
   public function send($u_id,$p_id){
    date_default_timezone_set('Asia/Shanghai');//设置时区
    $time=date("Y-m-d H:i:s");
    $row = DB::insert('t_user_position', [
        'u_id' => $u_id,
        'p_id' => $p_id,
        'send_time' =>$time
    ]);

    return $row;
}
   public function get_p_id($u_id)
   {
       $rows = DB::select('t_me_look', ['p_id'],['u_id' => "$u_id",'is_del' => 0]);
       return $rows;
   }
   public function get_user_position_p_id($u_id)
   {
       $rows = DB::select('t_user_position', ['p_id'],['u_id' => "$u_id"]);
       return $rows;
   }
   
}
?>