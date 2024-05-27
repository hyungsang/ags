import React from 'react';
import {
  Panel,
  GuideBox,
  Typography,
  TextFieldV2,
  RadioGroup,
  Radio,
  Dialog,
  IconButton,
  Icon,
} from "@midasit-dev/moaui";
import { useRecoilState, useRecoilValue } from "recoil";
import CompTypographyAndTextField from "./TypographyAndTextField";
import {
    VarValids,
  VarSeismicZone,
  VarSeismicZoneList,
  VarZoneFactor,
  VarZoneFactorList,
  VarSiteClass,
  VarSiteClassList,
  VarImportanceFactor,
  VarImportanceFactorList,
  VarResponseModiCoef,
  VarResponseModiCoefList,
  VarFa, VarFv, VarSds, VarSd1,
  VarMaximumPeriod
  } from "./variables";
import CompTypographyAndDropList from './TypographyAndDropList';


const KDS_2019 = (props: any) => {
    
    const [seismic_zone, setSiesmiZone] = useRecoilState(VarSeismicZone);
	const seismic_zone_list = useRecoilValue(VarSeismicZoneList);

    const [zone_factor, setZoneFactor] = useRecoilState(VarZoneFactor);
	const zone_factor_list = useRecoilValue(VarZoneFactorList);

    const [site_class, setSiteClass] = useRecoilState(VarSiteClass);
	const site_class_list = useRecoilValue(VarSiteClassList);

    const [importance_factor, setImportanceFactor] = useRecoilState(VarImportanceFactor);
    const importance_factor_list = useRecoilValue(VarImportanceFactorList);

    const [response_modi_coef, setResponseModiCoef] = useRecoilState(VarResponseModiCoef);
    const response_modi_coef_list = useRecoilValue(VarResponseModiCoefList);

    const [fa, setFa] = useRecoilState(VarFa);
    const [fv, setFv] = useRecoilState(VarFv);
    const [sds, setSds] = useRecoilState(VarSds);
    const [sd1, setSd1] = useRecoilState(VarSd1);
    const [max_period, setMaxPeriod] = useRecoilState(VarMaximumPeriod);

    return (
        <Panel variant="strock" width="100%" padding={2} border="1px solid #ddd">
        <GuideBox width="100%" verSpaceBetween>
            <CompTypographyAndDropList title="Seismic Zone" state={seismic_zone} setState={setSiesmiZone} droplist={seismic_zone_list} width={150}/>
            <CompTypographyAndDropList title="Zone Factor (S)" state={zone_factor} setState={setZoneFactor} droplist={zone_factor_list} width={150}/>
            <CompTypographyAndDropList title="Site Class" state={site_class} setState={setSiteClass} droplist={site_class_list} width={150}/>
        </GuideBox>
        <GuideBox width="100%" padding={0.5}>              
        </GuideBox>
        <GuideBox width="100%" row spacing={2} verSpaceBetween>
            <CompTypographyAndTextField title="Fa" state={fa} setState={setFa} width={80}/>
            <CompTypographyAndTextField title="Sds (g)" state={sds} setState={setSds} width={80}/>
        </GuideBox>            
        <GuideBox width="100%" row spacing={2} verSpaceBetween>
            <CompTypographyAndTextField title="Fv" state={fv} setState={setFv} width={80}/>
            <CompTypographyAndTextField title="Sd1 (g)" state={sd1} setState={setSd1} width={80}/>
        </GuideBox>
        <GuideBox width="100%" padding={0.5}>              
        </GuideBox>
        <GuideBox width="100%" verSpaceBetween>
            <CompTypographyAndDropList title="Importance Factor (I)" state={importance_factor} setState={setImportanceFactor} droplist={importance_factor_list} width={150}/>
            <CompTypographyAndDropList title="Response Modification Coeff. (R)" state={response_modi_coef} setState={setResponseModiCoef} droplist={response_modi_coef_list} width={150}/>
            <CompTypographyAndTextField title="Max. Period (sec)" state={max_period} setState={setMaxPeriod}  width={150}/>
        </GuideBox>        
        </Panel>
    )
}

export default KDS_2019;
