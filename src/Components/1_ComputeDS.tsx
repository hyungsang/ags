import React from 'react';
import {
    TemplatesFunctionalComponentsValidCheckDialog,
    Color,
} from "@midasit-dev/moaui";
import { useSnackbar } from 'notistack';
import { useRecoilState, useRecoilValue } from "recoil";
import {
    VarValids,
    getDesignSpectrumCodeName,
    VarSds, VarSd1,
    VarImportanceFactor,
    VarResponseModiCoef,
    VarMaximumPeriod,
    VarChartData,
    VarCalcDS,
} from "./variables";
import { DS_KDS_2019 } from '../utils_pyscript';

const ComputeDS_1 = (props: any) => {
    const { open, setOpen, design_spectrum } = props;
    const sds = useRecoilValue(VarSds);
    const sd1 = useRecoilValue(VarSd1);
    const importance_factor = useRecoilValue(VarImportanceFactor);
    const response_modi_coef = useRecoilValue(VarResponseModiCoef);
    const maximum_period = useRecoilValue(VarMaximumPeriod);

    const [chartData, setChartData] = useRecoilState(VarChartData);
    const [calcDS, setCalcDS] = useRecoilState(VarCalcDS);

    //for CheckList
    const [checkList, setCheckList] = React.useState<any>([]);
    const processing = React.useRef(false);

    const { enqueueSnackbar } = useSnackbar();

    //Create CheckList
    const valids = useRecoilValue(VarValids);
    React.useEffect(() => {
        setCheckList([
            { title: "Design Spectrum", value: getDesignSpectrumCodeName(design_spectrum), error: !valids.VarDesignSpectrum(design_spectrum), reason: "" },
        ]);
    }, [design_spectrum, chartData, valids]);

    return (
        <TemplatesFunctionalComponentsValidCheckDialog
            open={open}
            setOpen={setOpen}
            checkList={checkList}
            buttonText="Calculate Design Spectrum"
            buttonClick={() => {
                if (processing.current) return;
                setTimeout(() => {
                    try {
                        processing.current = true;

                        const result = DS_KDS_2019(
                            String(importance_factor),
                            String(response_modi_coef),
                            String(maximum_period),
                            String(sds),
                            String(sd1)
                        );

                        const arrX = result["period"];
                        const arrY = result["value"];

                        if (arrX.length !== arrY.length) {
                            enqueueSnackbar(
                                "Creating graph data is failed (Calc Input Error)",
                                { variant: "error" }
                            );
                            throw new Error("Creating graph data is failed (Calc Input Error)");
                        }

                        const data_of_chart = [];
                        for (let i = 0; i < arrX.length; i++) {
                            data_of_chart.push({ x: arrX[i], y: arrY[i] });
                        }
                        const new_chartdata = [{
                            id: getDesignSpectrumCodeName(design_spectrum),
                            color: Color.secondary.main,
                            data: data_of_chart
                        }, { id: '', color: '', data: [] }, { id: '', color: '', data: [] }];

                        setChartData(new_chartdata);
                        setCalcDS(true);
                    } catch (e: any) {
                        console.error(e);
                    } finally {
                        enqueueSnackbar("Calculate design spectrum graph data is successfully", {
                            variant: "success",
                            autoHideDuration: 1000,
                        });

                        processing.current = false;
                    }
                }, 500);
            }

            }
            maxPanelRows={8}
        />

    )
}

export default ComputeDS_1;
