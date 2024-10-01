import React from "react";
import ContentBox from "@/components/Content/ContentBox/ContentBox";
import ContentTitle from "@/components/Content/ContentTitle/ContentTitle";
import PageWrapper from "@/components/Content/PageWrapper/PageWrapper";
import SectionBody from "@/components/Content/SectionBody/SectionBody";

export default function Faq() {
  return (
    <>
      <ContentTitle title="よくある質問" size={1} bigTitle={true} />
      <PageWrapper>
        <SectionBody>
          <ContentBox title={"第62回工大祭の開催日時は?"}>
            <p>第62回工大祭「Ignition」は<span className="highlight-underline">2024年11月16日(土)・17日(日) 10:00-18:00</span>に開催予定!!</p>
          </ContentBox>
          <ContentBox title={"来場予約や整理券は必要ですか?"}>
            <p><span className="highlight-underline">来場予約は不要です!</span>是非ご来場ください!<br/>また、<span className="highlight-underline">一部企画は整理券が必要です。</span><br/>詳しくは<a href="../project" aria-label="企画一覧を開く">企画一覧</a>をご覧ください。</p>
          </ContentBox>
          <ContentBox title={"駐輪場はありますか?"}>
            <p>2号館裏, 52号館前にあります。必ず指定場所に駐輪するようにお願いします。</p>
          </ContentBox>
          <ContentBox title={"どのエリアを回ることができますか?"}>
            <p>準備中</p>
          </ContentBox>
        </SectionBody>
        <SectionBody>
          <ContentBox title={"今年の工大祭のテーマは何ですか?"}>
            <p>第62回工大祭のテーマは「Ignition」!</p>
          </ContentBox>
          <ContentBox title={"企画一覧/タイムテーブル"}>
            <p> <a href="../project" aria-label="企画一覧を開く">企画一覧</a> / <a href="../timetable" aria-label="タイムテーブルを開く">タイムテーブル</a></p>
          </ContentBox>
          <ContentBox title={"駐車場はありますか?"}>
            <p>学内に来訪者用の駐車場はございません。近くの有料駐車場、もしくは公共交通機関をご利用ください。公共交通機関は<a href="../access">アクセス</a>をご覧ください。</p>
          </ContentBox>
          <ContentBox title={"飲食できる場所はありますか?"}>
            <p>模擬店で購入したものは<span className="highlight-underline">外で食べ歩き可能</span>です。</p>
          </ContentBox>
          <ContentBox title={"ゴミ箱はどこにありますか?"}>
            <p>2号館西, 3号館南, 52号館南にあります。</p>
          </ContentBox>
          <ContentBox title={"生協の施設を利用することはできますか?"}>
            <p>生協の施設は工大祭当日は営業しておりません。</p>
          </ContentBox>
          <ContentBox title={"ステージ企画や声優の撮影はできますか?"}>
            <p>ステージ企画や声優の撮影は禁止されています。</p>
          </ContentBox>
          <ContentBox title={"学内の自動販売機を使うことはできますか?"}>
            <p>利用可能です。</p>
          </ContentBox>
        </SectionBody>
        </PageWrapper>

        <ContentTitle title="お問い合わせ" size={1} bigTitle={true} />
        <PageWrapper>
        <SectionBody>
          <ContentTitle title="お問合せ先" size={1} />
          <ContentBox title={""}>
            <p>お問い合わせの前に、このページに同じ内容が無いか確認の後、お問い合わせいただくようよろしくお願いします。
              <br/>工大祭についてのお問い合わせは以下の連絡先にて承っております。
              <br/>工大祭当日のメールでのお問い合わせは返信ができないこともございますのでご了承ください。</p>
              <ContentBox title={"メールアドレス"}>
                <p><a href="mailto:info@koudaisai.com">info@koudaisai.com</a></p>
          </ContentBox>
          </ContentBox>
        </SectionBody>

        <SectionBody>
          <ContentTitle title="郵便" size={1} />
          <ContentBox title={"住所"}>
            <p>〒466-8555
              <br/>愛知県名古屋市昭和区御器所町大学会館地下一階
              <br/>第62回名古屋工業大学工大祭実行委員会</p>
          </ContentBox>
        </SectionBody>
      </PageWrapper>
    </>
  );
}
