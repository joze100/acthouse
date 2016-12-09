<?php
 function get_db() {
 	$db = new PDO('mysql:host=localhost;dbname=blog_l;charset=utf8mb4', 'root', '');//get_dbはPHPからデータベースにアクセスする
		$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		return $db;
 }
 function get_post($id) {
		$sql = "select * from posts where id = '${id}'";//get_postはidを渡してそこのidのデータをもらってくる
		$post = get_db()->query($sql)->fetch();
		return $post;
 }
 function get_limit() {
 		return 5;
 }
 function get_posts($offset) {//offsetから何件か持ってくる
 		$limit = get_limit();
 		if ($offset < 0) {
 			$offset = 0;
 		}
		$sql = "select * from posts where status !='draft' order by created_at desc limit ${limit} offset ${offset}";//"aa".$i."bb"="aa${i}bb"　ドラフト以外を取ってくる
		$stmt = get_db()->query($sql);
		return $stmt;
 }

 function get_all_posts() {
 	$sql = "select * from posts order by created_at desc";
 	return get_db()->query($sql);
 }

 function get_drafts($offset) {//ドラフトは下書き
 	$limit = get_limit();
 	$sql = "select * from posts where status = 'draft' order by created_at desc limit ${limit} offset ${offset}";//ドラフトだけもらってくる
 	return get_db()->query($sql);
 }
 function get_drafts_count() {
 		$sql = "select count(*) as count from posts where status = 'draft'";//件数を取ってくるときだけcount(*)になる
 		$result = get_db()->query($sql)->fetch();
 		return $result['count'];
 }

 function get_posts_count() {
 		$sql = "select count(*) as count from posts where status != 'draft'";
 		$result = get_db()->query($sql)->fetch();
 		return $result['count'];
 }

 function link_tag($url, $label, $params) {//link_tagはaタグを出力するもの（link_tagは自分で作ったもの）
 		$qs = "?";
 		foreach($params as $key => $param) {
 			$qs = "${qs}${key}=${param}&";
 		}
 		$url = "${url}${qs}";
 		$tag = "<a href='${url}'>${label}</a>";
 		echo $tag;
 }

 function is_valid_image($image_path) {
 		return (!empty($image_path) and file_exists($image_path) and !ends_with($image_path));
 }

 function ends_with($str) {
		$end = substr($str, strlen($str) - 1);//　substr($str, strlen($str) - 1)は指定した位置から後ろを抜き出す。
		return $end == '/';
	}
?>
