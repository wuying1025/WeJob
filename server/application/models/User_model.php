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
}
?>