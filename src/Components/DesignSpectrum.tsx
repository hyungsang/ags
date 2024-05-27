import React from 'react';
import {
  GuideBox,  
} from "@midasit-dev/moaui";
import { useRecoilValue } from "recoil";
import {
  VarDesignSpectrum,
 } from "./variables";
import KDS_2019 from './1_KDS_2019';

const DesignSpectrum = (props: any) => {
    const design_spectrum = useRecoilValue(VarDesignSpectrum);

    return (
        <GuideBox width="100%">
          { design_spectrum === 1 && <KDS_2019 /> }
        </GuideBox>
    )
}

export default DesignSpectrum;
