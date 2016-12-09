<?php $page_title = "Hello World"; ?>
<?php include "parts/header.php"; ?>
	<ul id="mainmenu">
		<li><a href="#sidemenu">自己紹介</a></li>
		<li><a href="#sitemap">最新記事</a></li>
		<li><a href="pictures.php">画像一覧</a></li>
		<li><a href="new.php">新規投稿</a></li>
		<li><a href="index.php?draft">下書き一覧</a></li>
	</ul>
	<header>
		<h1>Hello World</h1>
	</header>
	<?php
		if (!isset($_GET['o']) or empty($_GET['o']) or $_GET['o'] < 0) {
			$offset = 0;
		} else {
			$offset = $_GET['o'];
		}
		if (isset($_GET['draft'])) {
			$posts = get_drafts($offset);
			$count = get_drafts_count();
			$params = ["draft" => ""];
		} else {
			$posts = get_posts($offset);
			$count = get_posts_count();
			$params = [];
		}
	?>
	 <div id="container">
	 	<div id="main">
			<div>

				<a href="new.php">新規投稿</a>
				<a href="index.php?draft">下書き一覧</a>
			</div>
			<h2>最新記事</h2>
			<div>
				<?php foreach ($posts as $index=>$main) :?>
				<a href="show.php?id=<?php echo $main['id']; ?>">
					<p>投稿日時 :<?php echo $main['created_at']; ?></p>
			 	 	<img src="image.php?id=<?php echo $main['id'];?>" alt="<?php echo $main['title']; ?>">
	   			<p><?php echo $main['title']; ?></p>
	   			<?php
					$likes = $main['likes'];
					if ($likes == 0) : ?>
						<p>いいね！はまだありません</p>
						<?php else : ?>
						<p><?php echo $main['likes']; ?>回いいね！されています。</p>
					<?php endif; ?>
		   		<?php
		   			$content = $main['content'];
	   				if (mb_strlen($content) >= 18) {//文字の長さを持ってくる  multibiteの略で２bite以上で１文字認識する
	   					$content = mb_substr($content, 0, 18);//substrは抜き出す
	   					$content .= '...';//$content .= は$content = $content . の意味。
	   				}
	   			?>
	   			<p><?php echo $content; ?></p>
	   			<?php if ($index == 2) {
						break;
					}
					?>
				<?php endforeach; ?>
				</a>
			</div>
		</div>
		<div id="sidemenu">
			<img src="blog1/images/shiki.jpg" alt="shiki">
			<div id="int">オレオ９０’s</div>
			<p>活動場所：R部屋,5B,Tancor1,Cebu City,Philippines<br>シングル：インディアンポーカー・オレオ中毒・年齢詐欺<br>初ライブ：ケツばかり at One to one English
			</p>

			<nav aria-label="Page navigation">
			  <ul class="pagination">

					<?php
						$limit = get_limit();
						$prev_offset = $offset - $limit;
						$next_offset = $offset + $limit;
					?>
					<?php if ($prev_offset >= 0) : ?>
					<li>
						<?php
							$params["0"] = $prev_offset;
						link_tag("index.php", "前へ", $params);
						?>
					</li>
					<!-- <a href="index.php?o=<?php echo $prev_offset; ?>">前へ</a> -->
				  <?php endif; ?>
				  <li>
					  <?php
					  	for($i =0; $i<$count; $i++) {
					  		if ($i % $limit == 0) {
					  			$page = $i / $limit;
					  			$page_offset = $page * $limit;
					  			$params["o"] = $page_offset;
					  			link_tag("index.php", $page + 1, $params);
					  		}
					  	}
					  ?>
				  </li>
				  <?php if ($next_offset < $count) : ?>
				  <li>
				  	<?php
							$params["0"] = $next_offset;
							link_tag("index.php", "次へ", $params);
						?>
					</li>
					<!-- <a href="index.php?o=<?php echo $next_offset; ?>">次へ</a> -->
				  <?php endif; ?>
			  </ul>
			</nav>
			<?php
				if (!isset($_GET['o']) or empty($_GET['o']) or $_GET['o'] < 0) {
					$offset = 0;
				} else {
					$offset = $_GET['o'];
				}
				if (isset($_GET['draft'])) {
					$posts = get_drafts($offset);
					$count = get_drafts_count();
					$params = ["draft" => ""];
				} else {
					$posts = get_posts($offset);
					$count = get_posts_count();
					$params = [];
				}
			?>
			<?php foreach ($posts as $row) : ?>
	 	  <ul>
				<li id="sitemap">
						<a href="show.php?id=<?php echo $row['id']; ?>">
		 	 				<img src="image.php?id=<?php echo $row['id'];?>" alt="<?php echo $row['title']; ?>">
		 	 				<div class="sitemaptext">
								投稿日時:<?php echo $row['created_at']; ?>
			 	   			<p><?php echo $row['title']; ?></p>
			 	   			<?php
									$likes = $row['likes'];
									if ($likes == 0) : ?>
									<p>いいね！はまだありません</p>
								<?php else : ?>
									<p><?php echo $row['likes']; ?>回いいね！されています。</p>
								<?php endif; ?>
			 	   			<?php
			 	   				$content = $row['content'];
			 	   				if (mb_strlen($content) >= 18) {//文字の長さを持ってくる  multibiteの略で２bite以上で１文字認識する
			 	   					$content = mb_substr($content, 0, 18);//substrは抜き出す
			 	   					$content .= '...';//$content .= は$content = $content . の意味。
			 	   				}
			 	   			?>
			 	   			<p><?php echo $content; ?></p>
		 	   			</div>
						</a>
				</li>
			</ul>
		 	<hr>
		 	<?php endforeach; ?>
	 	</div>
	 </div>
<?php include "parts/footer.php"; ?>