'use client';

import { WorkInProgress } from '@/components/layout/work-in-progress';
import { otherPages } from '@/constant/config';

export default function KidsMinistryPage() {
  return (
    <WorkInProgress
      pageTitle="Kids' Ministry"
      pageDescription={
        <>
          To develop in our children a genuine love for the Lord our God with all their heart, soul,
          and strength (Book of Deuteronomy 6:5-9).
          <br />
          <br />
          We recognize that this command is given primarily to parents, who are entrusted with the
          responsibility of nurturing their children in the faith. As a church, our role is to
          faithfully complement and strengthen the work of parents as they raise their children in
          the nurture and admonition of the Lord.
          <br />
          <br />
          The local church cannot and should not replace parents in fulfilling God's design for the
          raising of children, but rather partner with them in obedience to His Word.
        </>
      }
      otherPagesData1={otherPages[1]}
      otherPagesData2={otherPages[2]}
    />
  );
}