import React from "react";
import ContentTitle from "@/components/Content/ContentTitle/ContentTitle";
import ContentBox from "@/components/Content/ContentBox/ContentBox";
import ContentImage from "@/components/Content/ContentImage/ContentImage";
import PageWrapper from "@/components/Content/PageWrapper/PageWrapper";
import SectionBody from "@/components/Content/SectionBody/SectionBody";
import Underline from "@/components/Content/Underline/Underline";
import {
  NITFES_DATE1,
  NITFES_DATE2,
  NITFES_DAY1,
  NITFES_DAY2,
  NITFES_EDITION,
  NITFES_MONTH,
  NITFES_THEME,
  NITFES_TIME_DATE1,
  NITFES_TIME_DATE2,
  NITFES_YEAR,
} from "@/const/const";

export const metadata = {
  title: `よくある質問 - 第${NITFES_EDITION}回工大祭`,
  description: `${NITFES_YEAR}年 第${NITFES_EDITION}回工大祭 - 工大祭でよくある質問について掲載しています。`,
};

export default function Faq() {
  return (
    <>
      <ContentTitle title="よくある質問" size={1} bigTitle />
      <PageWrapper>
        <SectionBody>
          <ContentBox title={`第${NITFES_EDITION}回工大祭の開催日時は?`}>
            <p>
              第{NITFES_EDITION}回工大祭「{NITFES_THEME}」は
              <Underline>
                {`${NITFES_YEAR}年${NITFES_MONTH}月${NITFES_DATE1}日(${NITFES_DAY1})${NITFES_TIME_DATE1}、${NITFES_DATE2}日(${NITFES_DAY2})${NITFES_TIME_DATE2}`}
              </Underline>
              に開催!!
            </p>
          </ContentBox>
          <ContentBox title={"来場予約や整理券は必要ですか?"}>
            <p>
              <Underline>来場予約は不要です!</Underline>
              是非ご来場ください!
              <br />
              また、
              <Underline>一部企画は整理券が必要です。</Underline>
              <br />
              詳しくは
              <a href="../project" aria-label="企画一覧を開く">
                企画一覧
              </a>
              をご覧ください。
            </p>
          </ContentBox>
          <ContentBox title={"駐輪場はありますか?"}>
            <p>
              2号館裏,
              52号館前にあります。必ず指定場所に駐輪するようにお願いします。
            </p>
          </ContentBox>
          <ContentBox title={"どのエリアを回ることができますか?"}>
            <p>
              <a href="../project">企画一覧はこちらから</a>
            </p>
            <ContentImage src="/62nd/img/map.webp" alt="エリア" />
          </ContentBox>
        </SectionBody>
        <SectionBody>
          <ContentBox title={"今年の工大祭のテーマは何ですか?"}>
            <p>
              第{NITFES_EDITION}回工大祭のテーマは「{NITFES_THEME}」!
            </p>
          </ContentBox>
          <ContentBox title={"企画一覧/タイムテーブル"}>
            <p>
              <a href="../project" aria-label="企画一覧を開く">
                企画一覧
              </a>{" "}
              /{" "}
              <a href="../timetable" aria-label="タイムテーブルを開く">
                タイムテーブル
              </a>
            </p>
          </ContentBox>
          <ContentBox title={"駐車場はありますか?"}>
            <p>
              学内に一般の来訪者用の駐車場はございませんが、徒歩や公共交通機関などでのご来場が困難な方のために身体障害者用駐車スペースをご用意しています。詳細は
              <a href="#BarrierFree">バリアフリーに関して</a>
              をご確認ください。なお、一般の方は近くの有料駐車場、もしくは公共交通機関をご利用ください。公共交通機関は
              <a href="../access">アクセス</a>をご覧ください。
            </p>
          </ContentBox>
          <ContentBox title={"飲食できる場所はありますか?"}>
            <p>
              模擬店で購入したものは
              <Underline>外で食べ歩き可能</Underline>
              です。
            </p>
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

      <div id={"BarrierFree"}>
        <ContentTitle title="バリアフリーに関して" size={3} bigTitle />
      </div>
      <PageWrapper>
        <SectionBody>
          <ContentBox title={"委員の補助"}>
            建物や教室に入る際、工大祭実行委員が補助いたします。
            <br />
            最寄りのインフォメーションやオレンジ色の工大祭STAFFジャンパーを着ている委員にお声がけください。
          </ContentBox>
          <ContentBox title={"多目的トイレ"}>
            以下の会場地図に多目的トイレの位置を掲載しております。なお、このマップは当日頒布する工大祭パンフレットにも掲載されております。
            <ContentImage src="/62nd/img/map.webp" alt="マップ" />
          </ContentBox>
          <ContentBox title={"車いす貸し出し"}>
            インフォメーションにて車いすの貸し出しを行っております。ただし、数に限りがございます。貸し出しできない場合がございますので、あらかじめご了承ください。
          </ContentBox>
          <ContentBox title={"筆談などによるご案内"}>
            インフォメーションにて、筆談用ボードや音声書き起こしアプリを用いた案内をいたします。
          </ContentBox>
        </SectionBody>

        <SectionBody>
          <ContentTitle title={"身体障害者用駐車スペース"} size={6} />
          <ContentBox title={""}>
            <p>
              工大祭期間中、一般来場者用の駐車場はご用意しておりませんが、徒歩での来場が困難な方のために、障害者用の駐車スペースを数台分ご用意しております。なお、ご利用には
              <Underline>事前予約が必要</Underline>
              ですので、希望される方は以下の必要事項をご記入のうえ、メール（info@koudaisai.com）にてお申込みください。
            </p>
          </ContentBox>
          <ContentBox title={"必要事項"}>
            <ul>
              <li>ご予約される方のお名前</li>
              <li>ご来場されるお車のナンバー</li>
              <li>車種</li>
              <li>色</li>
              <li>来場予定日（両日予約も可能）</li>
            </ul>
          </ContentBox>
          <ContentBox title={"注意事項"}>
            <p>
              <Underline>予約期間は工大祭前日(11月15日(金))まで</Underline>
              とさせていただきます。駐車枠には限りがございますので、満車になり次第、予約受付を終了させていただきます。
              <br />
              <Underline>
                一般の来訪者用の駐車場は学内にございません。
              </Underline>
              近くの有料駐車場、もしくは公共交通機関をご利用ください。
            </p>
          </ContentBox>
        </SectionBody>
      </PageWrapper>

      <ContentTitle title="お問い合わせ" size={1} bigTitle />
      <PageWrapper>
        <SectionBody>
          <ContentTitle title="お問い合せ先" size={2} />
          <ContentBox title={""}>
            <p>
              お問い合わせの前に、このページに同じ内容が無いか確認の後、お問い合わせいただくようよろしくお願いします。
              <br />
              工大祭についてのお問い合わせは以下の連絡先にて承っております。
              <br />
              工大祭当日のメールでのお問い合わせは返信ができないこともございますのでご了承ください。
            </p>
            <ContentBox title={"メールアドレス"}>
              <p>
                <a href="mailto:info@koudaisai.com">info@koudaisai.com</a>
              </p>
            </ContentBox>
          </ContentBox>
        </SectionBody>

        <SectionBody>
          <ContentTitle title="郵便" size={2} />
          <ContentBox title={"住所"}>
            <p>
              〒466-8555
              <br />
              愛知県名古屋市昭和区御器所町大学会館地下一階
              <br />第{NITFES_EDITION}回名古屋工業大学工大祭実行委員会
            </p>
          </ContentBox>
        </SectionBody>
      </PageWrapper>
    </>
  );
}
