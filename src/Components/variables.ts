import { atom } from 'recoil';


function isLargerThanZero(value: string) {
	const val = parseFloat(value);
	return val > 0;
}

//if true, it is Valid
export const VarValids = atom({
	key: 'Errors',
	default: {
		VarDesignSpectrum: (value: any) => true,
		VarCalcDS: (value: any) => value,
	},
});

export const VarFuncName = atom({
	key: 'VarFuncName',
	default: '',
});

export interface ChartData {
	id: string;
	color: string;
	data: { x: string, y: string }[];
}
const chartData: ChartData[] = [
	// Design Spectrum
	{
		id: '',
		color: '',
		data: [],
	},
	// Artificial Spectrum
	{
		id: '',
		color: '',
		data: [],
	},
	// Artificial Earthquake Acceleration
	{
		id: '',
		color: '',
		data: [],
	},
];
export const VarChartData = atom({
	key: 'VarChartData',
	default: chartData,
});

export const VarCalcDS = atom({
	key: 'VarCalcDS',
	default: false,
});

const designSpectrumCodes: Array<[string, number]> = [
	[ "KDS(41-17-00:2019)", 1 ],
    [ "KDS(17-10-00:2018)", 2 ],
    [ "KBC(2016)", 3 ],
    [ "KBC(2009)", 4 ],
    [ "KBC(2005)", 5 ],
    [ "Korea(Arch.2000)", 6 ],
    [ "Korea(Arch.1992)", 7 ],
    [ "Korea(Bridge)", 8 ],
]
export const VarDesignSpectrumList = atom({
	key: 'VarDesignSpectrumList',
	default: designSpectrumCodes,
});

export const getDesignSpectrumCodeName = (index: number): string => {
	const codeNames = designSpectrumCodes;
	if (codeNames.length !== 0 && codeNames[index - 1]) {
		return codeNames[index - 1][0];
	} else {
		return '';
	}
}

export const VarDesignSpectrum = atom({
	key: 'VarDesignSpectrum',
	default: 1,
});

// seismicZoneCodes
const seismicZoneCodes: Array<[string, number]> = [
	[ '1', 1 ],
	[ '2', 2 ],
];
export const VarSeismicZoneList = atom({
	key: 'VarSeismicZoneList',
	default: seismicZoneCodes,
});
export const VarSeismicZone = atom({
	key: 'VarSeismicZone',
	default: 1,
});

// Zone Factor (S)
const zoneFactorCodes: Array<[string, number]> = [
	[ "0.14", 0.14 ],
	[ "0.22", 0.22 ],	
]

export const VarZoneFactorList = atom({
	key: 'VarZoneFactorList',
	default: zoneFactorCodes,
});

export const VarZoneFactor = atom({
	key: 'VarZoneFactor',
	default: 0.22,
});

// Site Class
const siteClassCodes: Array<[string, number]> = [
	[ "S1", 1 ],
	[ "S2", 2 ],
	[ "S3", 3 ],
	[ "S4", 4 ],
	[ "S5", 5 ],
	[ "S6", 6 ],
]

export const VarSiteClassList = atom({
	key: 'VarSiteClassList',
	default: siteClassCodes,
});

export const VarSiteClass = atom({
	key: 'VarSiteClass',
	default: 2,
});

export const VarMaximumPeriod = atom({
	key: 'VarMaximumPeriod',
	default: '10.0',
});

// Fa, Fv, Sds, Sd1
export const VarFa = atom({
	key: 'VarFa',
	default: '1.38',
});
export const VarFv = atom({
	key: 'VarFv',
	default: '1.38',
});
export const VarSds = atom({
	key: 'VarSds',
	default: '0.506',
});
export const VarSd1 = atom({
	key: 'VarSd1',
	default: '0.2024',
});


// Importance Factor
const importanceFactorCodes: Array<[string, number]> = [
	[ "1.0", 1.0 ],
	[ "1.2", 1.2 ],	
	[ "1.5", 1.5 ],	
]

export const VarImportanceFactorList = atom({
	key: 'VarImportanceFactorList',
	default: importanceFactorCodes,
});

export const VarImportanceFactor = atom({
	key: 'VarImportanceZone',
	default: 1.2,
});

// Response Modification Coefficient
const responseModiCoefCodes: Array<[string, number]> = [
	[ "1.25", 1.25 ],
	[ "1.50", 1.50 ],	
	[ "2.50", 2.50 ],	
	[ "3.00", 3.00 ],	
	[ "3.35", 3.35 ],	
	[ "4.00", 4.00 ],	
	[ "4.50", 4.50 ],	
	[ "5.00", 5.00 ],	
	[ "5.50", 5.50 ],	
	[ "6.00", 6.00 ],	
	[ "6.50", 6.50 ],	
	[ "7.00", 7.00 ],	
	[ "7.50", 7.50 ],	
	[ "8.00", 8.00 ],	
]

export const VarResponseModiCoefList = atom({
	key: 'VarResponseModiCoefList',
	default: responseModiCoefCodes,
});

export const VarResponseModiCoef = atom({
	key: 'VarResponseModiCoef',
	default: 4.00,
});

export const VarRiseTime = atom({
	key: 'VarRiseTime',
	default: '1',
});

export const VarLevelTime = atom({
	key: 'VarLevelTime',
	default: '2',
});

export const VarTotalTime = atom({
	key: 'VarTotalTime',
	default: '3',
});

export const VarMaxIteration = atom({
	key: 'VarMaxIteration',
	default: '1',
});

export const VarDampingRatio = atom({
	key: 'VarDampingRatio',
	default: '0.02',
});

export const VarRandomSeedChk = atom({
	key: 'VarRandomSeedChk',
	default: false,
});

export const VarRandomSeed = atom({
	key: 'VarRandomSeed',
	default: String(new Date().getTime()),
});

export const VarMaxAccelChk = atom({
	key: 'VarMaxAccelChk',
	default: false,
});

export const VarMaxAccel = atom({
	key: 'VarMaxAccel',
	default: '0.',
});

export const VarGraphType = atom({
	key: 'VarGraphType',
	default: '1',	// 1: Spectrum, 2: Acceleration
});


