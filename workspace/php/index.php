<?php
 $a =  <<<EOT
 ああああああああ
EOT;
// 変数は＄で始まる。大文字小文字を認識。<<<EOTの後はコメントすら入れちゃダメ
  echo($a);
?>

<!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>

	<pre>
		<?php
		 $db = new PDO('mysql:host=localhost;dbname=acthouse;charset=utf8mb4','root', ''); /*PHP Data Objectでデーターベースに対しで言語を変えてくれる	*/
		 $db->setAttribute(PDO::ATTR_ERRMODE, PDO:: /*これはエラーが出てたらわかるように書いている。$db->はdbの中の関数を呼び出している*/
		 	ERRMODE_EXCEPTION);

		 if (isset($_POST['name'])) {/*issetはこの変数があればtrue*/
		 	// isset()はこの変数が入ってなければの意味
		 $insert_sql = "insert into students (name, gender, age) values (?, ?, ?)";
		 $name = $_POST['name'];
		 $gender = $_POST['gender'];
		 $age = $_POST['age'];
		 $stmt = $db->prepare($insert_sql);
		 $success = $stmt->execute(array($name, $gender, $age)
		 	// prepareは準備して、executeは実行の意味
		 	);
		}

		 $sql = 'select * from students';
		 $stmt = $db->query($sql);
		 // queryでsqlを実行して結果を返す
		 // newはインスタンスを生成する
		 // 今データベースmysqlにアクセスしようとしている
		 // foreach ($stmt as $row) {
		 	// print_r($row);
		 // }
		 ?>
		 <style>
		 	table { border-collapse: collapse; }
		 	table td { border: 1px solid gray; }
		 	}
		 </style>
		 <table>
		 	<tr>
			 	<td>id</td>
			 	<td>名前</td>
			 	<td>性別</td>
			 	<td>年齢</td>
			 	<td></td>
			</tr>
			<?php foreach($stmt as $row) { ?> <!--この場合のforeachは一行ずつ進んで行く指令。stmtを一方進めると次の行が帰ってくる。echoは表示するの意味-->
			 <tr>
			 	<td><?php echo $row['id'];?></td>
			 	<td><?php echo $row['name'];?></td>
			 	<td><?php echo $row['gender'];?></td>
			 	<td><?php echo $row['age'];?></td>
			 	<td>
			 		<a href="edit.php?id=<?php echo $row['id']; ?>">編集</a>
			 		<a href="delete.php?id=<?php echo $row['id']; ?>">削除</a>
			 	</td>
			 </tr>

			<?php } ?> 
		 </table>
		 <div>
		 	<form action="" method="post">
		 		名前:<input type="text" name="name">
		 		性別:<input type="text" name="gender">
		 		年齢:<input type="text" name="age">
		 		<button>作成</button>
		 	</form>
		 </div>
		 }
		 ?>
	</pre>
	<pre>
	<!--連想配列の中の配列（多次元配列）-->
		<?php
		 $arr = array(
		 		 'red' => array('apple', 'cherry'),
		 		 'yellow' => array('banana', 'mango'),
		 		 'purple' => 'grape'
		 		 );
		 print_r($arr);
		?> 
	</pre>
	<pre>
			<!--連想配列 arr['red']でappleが表示できる。print_r($arr)でブラウザで表示させる-->
			<?php
				$arr = array('red' => 'apple', 'yellow' => 'banana', 'orange' => 'orange');
				print_r($arr);
			?>
		</pre>
	</pre>
	<pre>
	<?php
		$arr = array('apple', 'banana', 'cherry');
		print_r($arr);/*print_r 命令。メソッド。*/
	?>
	</pre>
	<!--スーパーグローバル変数。PHPのどこからでもアクセスできる-->
	<h4>$_SERVER</h4>
	<pre><?php print_r($_SERVER); ?></pre>
	<h4>$_GET</h4>
	<pre><?php print_r($_GET); ?></pre>
	<h4>$_POST</h4>
	<pre><?php print_r($_POST); ?></pre>
	<h4>$_FILES</h4>
	<pre><?php print_r($_FILES); ?></pre>
	<h4>$_COOKIE</h4>
	<pre><?php print_r($_COOKIE); ?></pre>
	<!--cookie webサーバーがそれぞれのブラウザに保存される　facebookなどのログイン情報。-->

	<form action="" method="post" enctype="multipart/form-data"><!-- 画像を送る際はformにmultipart/form-dataをつける-->
		<input type="text" name="test1" value="テスト">
		<input type="radio" name="radio1" value="r1">R1
		<input type="radio" name="radio2" value="r2">R2
		<input type="radio" name="radio3" value="r3">R3
		<input type="file" name="file">
		<button>送信</button>
	</form>
	<?php echo($a); ?>
</body>
</html>