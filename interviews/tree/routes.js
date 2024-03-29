export const routes = [
  {
    score: 0.999529,
    molecules: [
      {
        smiles: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        catalog_entries: [],
        is_building_block: false,
      },
      {
        smiles: 'Clc1ccc(NCc2ccsc2)cc1',
        catalog_entries: [
          {
            vendor_id: '3162059',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'BBV-131088',
            catalog_name: 'enamine_made',
            lead_time_weeks: 6.0,
          },
          {
            vendor_id: '1536185',
            catalog_name: 'emolecules',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'EN300-161145',
            catalog_name: 'enamine_bb',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 's_38____56070____13230996',
            catalog_name: 'enamine_real',
            lead_time_weeks: 4.0,
          },
          {
            vendor_id: 'MolPort-046-846-280',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: 'MCULE-3563800686',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
        ],
        is_building_block: true,
      },
      {
        smiles: 'O=C(O)Cn1nnc2ccccc21',
        catalog_entries: [
          {
            vendor_id: 'MCULE-6198639583',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: 's_270034____11622716____7554828',
            catalog_name: 'enamine_real',
            lead_time_weeks: 4.0,
          },
          {
            vendor_id: '653350',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'BBV-2156413',
            catalog_name: 'enamine_made',
            lead_time_weeks: 6.0,
          },
          {
            vendor_id: 'EN300-24347',
            catalog_name: 'enamine_bb',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'MolPort-002-471-199',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: 'SCHEMBL361654',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'WXCD01003197',
            catalog_name: 'wuxi_bb_screening',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '154446254',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: '',
            catalog_name: 'generic',
            lead_time_weeks: 2.0,
          },
        ],
        is_building_block: true,
      },
    ],
    reactions: [
      {
        name: 'Amidation',
        target: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        sources: ['Clc1ccc(NCc2ccsc2)cc1', 'O=C(O)Cn1nnc2ccccc21'],
        smartsTemplate:
          '[C:2](=[O:3])[N;!$(N(C=O)(C=O)):1]>>([N:1][#1].[C:2](=[O:3])[O][#1])',
      },
    ],
    disconnections: {
      rxns: [
        {
          atms: [1, 12],
          bnds: [11],
          p_smi: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        },
      ],
      route: {
        atms: [[1, 12]],
        bnds: [[11]],
      },
    },
  },
  {
    score: 1.816204733281074e-77,
    molecules: [
      {
        smiles: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        catalog_entries: [],
        is_building_block: false,
      },
      {
        smiles: 'O=C(Cl)Cn1nnc2ccccc21',
        catalog_entries: [
          {
            vendor_id: 'MCULE-1652996022',
            catalog_name: 'mcule',
            lead_time_weeks: 5.0,
          },
          {
            vendor_id: 'SCHEMBL16286769',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: '852016',
            catalog_name: 'emolecules',
            lead_time_weeks: 4.0,
          },
          {
            vendor_id: '14922579',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
        ],
        is_building_block: true,
      },
      {
        smiles: 'Clc1ccc(NCc2ccsc2)cc1',
        catalog_entries: [
          {
            vendor_id: '3162059',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'BBV-131088',
            catalog_name: 'enamine_made',
            lead_time_weeks: 6.0,
          },
          {
            vendor_id: '1536185',
            catalog_name: 'emolecules',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'EN300-161145',
            catalog_name: 'enamine_bb',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 's_38____56070____13230996',
            catalog_name: 'enamine_real',
            lead_time_weeks: 4.0,
          },
          {
            vendor_id: 'MolPort-046-846-280',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: 'MCULE-3563800686',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
        ],
        is_building_block: true,
      },
    ],
    reactions: [
      {
        name: 'Amide Schotten-Baumann',
        target: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        sources: ['O=C(Cl)Cn1nnc2ccccc21', 'Clc1ccc(NCc2ccsc2)cc1'],
        smartsTemplate:
          '[#6:2][CX3:1](=[O:3])-;!@[n,NX3;!$(N=*);!$([#7]([#6]=[O,N])[#6]=[O,N]):4]>>([*:2][C:1](=[O:3])[Cl].[*:4][#1])',
      },
    ],
    disconnections: {
      rxns: [
        {
          atms: [1, 12],
          bnds: [11],
          p_smi: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        },
      ],
      route: {
        atms: [[1, 12]],
        bnds: [[11]],
      },
    },
  },
  {
    score: 1.966234175824082e-18,
    molecules: [
      {
        smiles: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        catalog_entries: [],
        is_building_block: false,
      },
      {
        smiles: 'CCOC(=O)Cn1nnc2ccccc21',
        catalog_entries: [
          {
            vendor_id: 'BBV-2156488',
            catalog_name: 'enamine_made',
            lead_time_weeks: 6.0,
          },
          {
            vendor_id: 's_7____128806____5825034',
            catalog_name: 'enamine_real',
            lead_time_weeks: 4.0,
          },
          {
            vendor_id: 'MolPort-002-143-260',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '620404',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'MCULE-6124919644',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: 'SCHEMBL2490943',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: '684169',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
        ],
        is_building_block: true,
      },
      {
        smiles: 'Clc1ccc(NCc2ccsc2)cc1',
        catalog_entries: [
          {
            vendor_id: '3162059',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'BBV-131088',
            catalog_name: 'enamine_made',
            lead_time_weeks: 6.0,
          },
          {
            vendor_id: '1536185',
            catalog_name: 'emolecules',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'EN300-161145',
            catalog_name: 'enamine_bb',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 's_38____56070____13230996',
            catalog_name: 'enamine_real',
            lead_time_weeks: 4.0,
          },
          {
            vendor_id: 'MolPort-046-846-280',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: 'MCULE-3563800686',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
        ],
        is_building_block: true,
      },
    ],
    reactions: [
      {
        name: 'Ester amidation',
        target: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        sources: ['CCOC(=O)Cn1nnc2ccccc21', 'Clc1ccc(NCc2ccsc2)cc1'],
        smartsTemplate:
          '[c,C:1][C:2](=[O:3])[N:4]>>([*:1][C:2](=[O:3])[O]CC.[N:4][#1])',
      },
    ],
    disconnections: {
      rxns: [
        {
          atms: [1, 12],
          bnds: [11],
          p_smi: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        },
      ],
      route: {
        atms: [[1, 12]],
        bnds: [[11]],
      },
    },
  },
  {
    score: 0.0,
    molecules: [
      {
        smiles: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        catalog_entries: [],
        is_building_block: false,
      },
      {
        smiles: 'COC(=O)Cn1nnc2ccccc21',
        catalog_entries: [
          {
            vendor_id: 'MolPort-002-492-362',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '4340565',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'MCULE-7236067687',
            catalog_name: 'mcule',
            lead_time_weeks: 5.0,
          },
          {
            vendor_id: '313449',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'BBV-2156454',
            catalog_name: 'enamine_made',
            lead_time_weeks: 6.0,
          },
          {
            vendor_id: 's_7____128806____5534970',
            catalog_name: 'enamine_real',
            lead_time_weeks: 4.0,
          },
        ],
        is_building_block: true,
      },
      {
        smiles: 'Clc1ccc(NCc2ccsc2)cc1',
        catalog_entries: [
          {
            vendor_id: '3162059',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'BBV-131088',
            catalog_name: 'enamine_made',
            lead_time_weeks: 6.0,
          },
          {
            vendor_id: '1536185',
            catalog_name: 'emolecules',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'EN300-161145',
            catalog_name: 'enamine_bb',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 's_38____56070____13230996',
            catalog_name: 'enamine_real',
            lead_time_weeks: 4.0,
          },
          {
            vendor_id: 'MolPort-046-846-280',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: 'MCULE-3563800686',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
        ],
        is_building_block: true,
      },
    ],
    reactions: [
      {
        name: 'Ester amidation',
        target: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        sources: ['COC(=O)Cn1nnc2ccccc21', 'Clc1ccc(NCc2ccsc2)cc1'],
        smartsTemplate:
          '[c,C:1][C:2](=[O:3])[N:4]>>([*:1][C:2](=[O:3])[O]C.[N:4][#1])',
      },
    ],
    disconnections: {
      rxns: [
        {
          atms: [1, 12],
          bnds: [11],
          p_smi: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        },
      ],
      route: {
        atms: [[1, 12]],
        bnds: [[11]],
      },
    },
  },
  {
    score: 0.0,
    molecules: [
      {
        smiles: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        catalog_entries: [],
        is_building_block: false,
      },
      {
        smiles: 'Clc1ccc(I)cc1',
        catalog_entries: [
          {
            vendor_id: 'MolPort-000-153-151',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '477526',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'SCHEMBL208292',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: '12510',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'EN300-77395',
            catalog_name: 'enamine_bb',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: '',
            catalog_name: 'generic',
            lead_time_weeks: 2.0,
          },
          {
            vendor_id: 'MCULE-3776065149',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
        ],
        is_building_block: true,
      },
      {
        smiles: 'O=C(Cn1nnc2ccccc21)NCc1ccsc1',
        catalog_entries: [
          {
            vendor_id: '122211285',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
        ],
        is_building_block: false,
      },
      {
        smiles: 'NCc1ccsc1',
        catalog_entries: [
          {
            vendor_id: 'SCHEMBL120232',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'WXCD01006275',
            catalog_name: 'wuxi_bb_screening',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: 'MolPort-000-140-225',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '',
            catalog_name: 'generic',
            lead_time_weeks: 2.0,
          },
          {
            vendor_id: 'MCULE-1358443205',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '720302',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: '4328338',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'EN300-110525',
            catalog_name: 'enamine_bb',
            lead_time_weeks: 1.4,
          },
        ],
        is_building_block: true,
      },
      {
        smiles: 'COC(=O)Cn1nnc2ccccc21',
        catalog_entries: [
          {
            vendor_id: 'MolPort-002-492-362',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '4340565',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'MCULE-7236067687',
            catalog_name: 'mcule',
            lead_time_weeks: 5.0,
          },
          {
            vendor_id: '313449',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'BBV-2156454',
            catalog_name: 'enamine_made',
            lead_time_weeks: 6.0,
          },
          {
            vendor_id: 's_7____128806____5534970',
            catalog_name: 'enamine_real',
            lead_time_weeks: 4.0,
          },
        ],
        is_building_block: true,
      },
    ],
    reactions: [
      {
        name: 'Ester amidation',
        target: 'O=C(Cn1nnc2ccccc21)NCc1ccsc1',
        sources: ['NCc1ccsc1', 'COC(=O)Cn1nnc2ccccc21'],
        smartsTemplate:
          '[c,C:1][C:2](=[O:3])[N:4]>>([*:1][C:2](=[O:3])[O]C.[N:4][#1])',
      },
      {
        name: 'Buchwald-Hartwig amination with amide',
        target: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        sources: ['Clc1ccc(I)cc1', 'O=C(Cn1nnc2ccccc21)NCc1ccsc1'],
        smartsTemplate: '[c:1][NX3;$(NC=O):2]>>([c:1][I].[N:2][#1])',
      },
    ],
    disconnections: {
      rxns: [
        {
          atms: [1, 12],
          bnds: [11],
          p_smi: 'O=C(Cn1nnc2ccccc21)NCc1ccsc1',
        },
        {
          atms: [19, 12],
          bnds: [18],
          p_smi: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        },
      ],
      route: {
        atms: [
          [1, 12],
          [19, 12],
        ],
        bnds: [[11], [18]],
      },
    },
  },
  {
    score: 0.0,
    molecules: [
      {
        smiles: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        catalog_entries: [],
        is_building_block: false,
      },
      {
        smiles: 'OB(O)c1ccsc1',
        catalog_entries: [
          {
            vendor_id: 'MolPort-000-139-880',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: 'EN300-73578',
            catalog_name: 'enamine_bb',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'WXCD00900756',
            catalog_name: 'wuxi_bb_screening',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '',
            catalog_name: 'generic',
            lead_time_weeks: 2.0,
          },
          {
            vendor_id: '507898',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: '581760',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'MCULE-6184290126',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: 'BBV-181964',
            catalog_name: 'enamine_made',
            lead_time_weeks: 6.0,
          },
          {
            vendor_id: 'SCHEMBL42265',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
        ],
        is_building_block: true,
      },
      {
        smiles: 'O=C(Cn1nnc2ccccc21)N(CCl)c1ccc(Cl)cc1',
        catalog_entries: [],
        is_building_block: false,
      },
      {
        smiles: 'ClCNc1ccc(Cl)cc1',
        catalog_entries: [
          {
            vendor_id: '117574983',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'BBV-106129097',
            catalog_name: 'enamine_made',
            lead_time_weeks: 6.0,
          },
        ],
        is_building_block: true,
      },
      {
        smiles: 'O=C(O)Cn1nnc2ccccc21',
        catalog_entries: [
          {
            vendor_id: 'MCULE-6198639583',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: 's_270034____11622716____7554828',
            catalog_name: 'enamine_real',
            lead_time_weeks: 4.0,
          },
          {
            vendor_id: '653350',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'BBV-2156413',
            catalog_name: 'enamine_made',
            lead_time_weeks: 6.0,
          },
          {
            vendor_id: 'EN300-24347',
            catalog_name: 'enamine_bb',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'MolPort-002-471-199',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: 'SCHEMBL361654',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'WXCD01003197',
            catalog_name: 'wuxi_bb_screening',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '154446254',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: '',
            catalog_name: 'generic',
            lead_time_weeks: 2.0,
          },
        ],
        is_building_block: true,
      },
    ],
    reactions: [
      {
        name: 'Amidation',
        target: 'O=C(Cn1nnc2ccccc21)N(CCl)c1ccc(Cl)cc1',
        sources: ['ClCNc1ccc(Cl)cc1', 'O=C(O)Cn1nnc2ccccc21'],
        smartsTemplate:
          '[C:2](=[O:3])[N;!$(N(C=O)(C=O)):1]>>([N:1][#1].[C:2](=[O:3])[O][#1])',
      },
      {
        name: 'Sp3-sp2 Suzuki coupling umpolung',
        target: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        sources: ['OB(O)c1ccsc1', 'O=C(Cn1nnc2ccccc21)N(CCl)c1ccc(Cl)cc1'],
        smartsTemplate:
          '[$([cX3](:*):*),$([CX3]=*):1]-[CX4;!$([CX4]-[CX4]-[H]):2]>>([*:1]B(O)O.[*:2][Cl])',
      },
    ],
    disconnections: {
      rxns: [
        {
          atms: [1, 12],
          bnds: [11],
          p_smi: 'O=C(Cn1nnc2ccccc21)N(CCl)c1ccc(Cl)cc1',
        },
        {
          atms: [13, 14],
          bnds: [13],
          p_smi: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        },
      ],
      route: {
        atms: [
          [1, 12],
          [13, 14],
        ],
        bnds: [[11], [13]],
      },
    },
  },
  {
    score: 0.08656311289015042,
    molecules: [
      {
        smiles: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        catalog_entries: [],
        is_building_block: false,
      },
      {
        smiles: 'OB(O)c1ccsc1',
        catalog_entries: [
          {
            vendor_id: 'MolPort-000-139-880',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: 'EN300-73578',
            catalog_name: 'enamine_bb',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'WXCD00900756',
            catalog_name: 'wuxi_bb_screening',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '',
            catalog_name: 'generic',
            lead_time_weeks: 2.0,
          },
          {
            vendor_id: '507898',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: '581760',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'MCULE-6184290126',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: 'BBV-181964',
            catalog_name: 'enamine_made',
            lead_time_weeks: 6.0,
          },
          {
            vendor_id: 'SCHEMBL42265',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
        ],
        is_building_block: true,
      },
      {
        smiles: 'O=C(Cn1nnc2ccccc21)N(CCl)c1ccc(Cl)cc1',
        catalog_entries: [],
        is_building_block: false,
      },
      {
        smiles: 'ClCNc1ccc(Cl)cc1',
        catalog_entries: [
          {
            vendor_id: '117574983',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'BBV-106129097',
            catalog_name: 'enamine_made',
            lead_time_weeks: 6.0,
          },
        ],
        is_building_block: true,
      },
      {
        smiles: 'O=C(Cl)Cn1nnc2ccccc21',
        catalog_entries: [
          {
            vendor_id: 'MCULE-1652996022',
            catalog_name: 'mcule',
            lead_time_weeks: 5.0,
          },
          {
            vendor_id: 'SCHEMBL16286769',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: '852016',
            catalog_name: 'emolecules',
            lead_time_weeks: 4.0,
          },
          {
            vendor_id: '14922579',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
        ],
        is_building_block: true,
      },
    ],
    reactions: [
      {
        name: 'Amide Schotten-Baumann',
        target: 'O=C(Cn1nnc2ccccc21)N(CCl)c1ccc(Cl)cc1',
        sources: ['ClCNc1ccc(Cl)cc1', 'O=C(Cl)Cn1nnc2ccccc21'],
        smartsTemplate:
          '[#6:2][CX3:1](=[O:3])-;!@[n,NX3;!$(N=*);!$([#7]([#6]=[O,N])[#6]=[O,N]):4]>>([*:2][C:1](=[O:3])[Cl].[*:4][#1])',
      },
      {
        name: 'Sp3-sp2 Suzuki coupling umpolung',
        target: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        sources: ['OB(O)c1ccsc1', 'O=C(Cn1nnc2ccccc21)N(CCl)c1ccc(Cl)cc1'],
        smartsTemplate:
          '[$([cX3](:*):*),$([CX3]=*):1]-[CX4;!$([CX4]-[CX4]-[H]):2]>>([*:1]B(O)O.[*:2][Cl])',
      },
    ],
    disconnections: {
      rxns: [
        {
          atms: [1, 12],
          bnds: [11],
          p_smi: 'O=C(Cn1nnc2ccccc21)N(CCl)c1ccc(Cl)cc1',
        },
        {
          atms: [13, 14],
          bnds: [13],
          p_smi: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        },
      ],
      route: {
        atms: [
          [1, 12],
          [13, 14],
        ],
        bnds: [[11], [13]],
      },
    },
  },
  {
    score: 0.0,
    molecules: [
      {
        smiles: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        catalog_entries: [],
        is_building_block: false,
      },
      {
        smiles: 'Clc1ccc(I)cc1',
        catalog_entries: [
          {
            vendor_id: 'MolPort-000-153-151',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '477526',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'SCHEMBL208292',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: '12510',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'EN300-77395',
            catalog_name: 'enamine_bb',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: '',
            catalog_name: 'generic',
            lead_time_weeks: 2.0,
          },
          {
            vendor_id: 'MCULE-3776065149',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
        ],
        is_building_block: true,
      },
      {
        smiles: 'O=C(Cn1nnc2ccccc21)NCc1ccsc1',
        catalog_entries: [
          {
            vendor_id: '122211285',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
        ],
        is_building_block: false,
      },
      {
        smiles: 'NCc1ccsc1',
        catalog_entries: [
          {
            vendor_id: 'SCHEMBL120232',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'WXCD01006275',
            catalog_name: 'wuxi_bb_screening',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: 'MolPort-000-140-225',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '',
            catalog_name: 'generic',
            lead_time_weeks: 2.0,
          },
          {
            vendor_id: 'MCULE-1358443205',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '720302',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: '4328338',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'EN300-110525',
            catalog_name: 'enamine_bb',
            lead_time_weeks: 1.4,
          },
        ],
        is_building_block: true,
      },
      {
        smiles: 'CCOC(=O)Cn1nnc2ccccc21',
        catalog_entries: [
          {
            vendor_id: 'BBV-2156488',
            catalog_name: 'enamine_made',
            lead_time_weeks: 6.0,
          },
          {
            vendor_id: 's_7____128806____5825034',
            catalog_name: 'enamine_real',
            lead_time_weeks: 4.0,
          },
          {
            vendor_id: 'MolPort-002-143-260',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '620404',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'MCULE-6124919644',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: 'SCHEMBL2490943',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: '684169',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
        ],
        is_building_block: true,
      },
    ],
    reactions: [
      {
        name: 'Ester amidation',
        target: 'O=C(Cn1nnc2ccccc21)NCc1ccsc1',
        sources: ['NCc1ccsc1', 'CCOC(=O)Cn1nnc2ccccc21'],
        smartsTemplate:
          '[c,C:1][C:2](=[O:3])[N:4]>>([*:1][C:2](=[O:3])[O]CC.[N:4][#1])',
      },
      {
        name: 'Buchwald-Hartwig amination with amide',
        target: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        sources: ['Clc1ccc(I)cc1', 'O=C(Cn1nnc2ccccc21)NCc1ccsc1'],
        smartsTemplate: '[c:1][NX3;$(NC=O):2]>>([c:1][I].[N:2][#1])',
      },
    ],
    disconnections: {
      rxns: [
        {
          atms: [1, 12],
          bnds: [11],
          p_smi: 'O=C(Cn1nnc2ccccc21)NCc1ccsc1',
        },
        {
          atms: [19, 12],
          bnds: [18],
          p_smi: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        },
      ],
      route: {
        atms: [
          [1, 12],
          [19, 12],
        ],
        bnds: [[11], [18]],
      },
    },
  },
  {
    score: 0.0,
    molecules: [
      {
        smiles: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        catalog_entries: [],
        is_building_block: false,
      },
      {
        smiles: 'Clc1ccc(I)cc1',
        catalog_entries: [
          {
            vendor_id: 'MolPort-000-153-151',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '477526',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'SCHEMBL208292',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: '12510',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'EN300-77395',
            catalog_name: 'enamine_bb',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: '',
            catalog_name: 'generic',
            lead_time_weeks: 2.0,
          },
          {
            vendor_id: 'MCULE-3776065149',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
        ],
        is_building_block: true,
      },
      {
        smiles: 'O=C(Cn1nnc2ccccc21)NCc1ccsc1',
        catalog_entries: [
          {
            vendor_id: '122211285',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
        ],
        is_building_block: false,
      },
      {
        smiles: 'NCc1ccsc1',
        catalog_entries: [
          {
            vendor_id: 'SCHEMBL120232',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'WXCD01006275',
            catalog_name: 'wuxi_bb_screening',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: 'MolPort-000-140-225',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '',
            catalog_name: 'generic',
            lead_time_weeks: 2.0,
          },
          {
            vendor_id: 'MCULE-1358443205',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '720302',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: '4328338',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'EN300-110525',
            catalog_name: 'enamine_bb',
            lead_time_weeks: 1.4,
          },
        ],
        is_building_block: true,
      },
      {
        smiles: 'O=C(O)Cn1nnc2ccccc21',
        catalog_entries: [
          {
            vendor_id: 'MCULE-6198639583',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: 's_270034____11622716____7554828',
            catalog_name: 'enamine_real',
            lead_time_weeks: 4.0,
          },
          {
            vendor_id: '653350',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'BBV-2156413',
            catalog_name: 'enamine_made',
            lead_time_weeks: 6.0,
          },
          {
            vendor_id: 'EN300-24347',
            catalog_name: 'enamine_bb',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'MolPort-002-471-199',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: 'SCHEMBL361654',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'WXCD01003197',
            catalog_name: 'wuxi_bb_screening',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '154446254',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: '',
            catalog_name: 'generic',
            lead_time_weeks: 2.0,
          },
        ],
        is_building_block: true,
      },
    ],
    reactions: [
      {
        name: 'Amidation',
        target: 'O=C(Cn1nnc2ccccc21)NCc1ccsc1',
        sources: ['NCc1ccsc1', 'O=C(O)Cn1nnc2ccccc21'],
        smartsTemplate:
          '[C:2](=[O:3])[N;!$(N(C=O)(C=O)):1]>>([N:1][#1].[C:2](=[O:3])[O][#1])',
      },
      {
        name: 'Buchwald-Hartwig amination with amide',
        target: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        sources: ['Clc1ccc(I)cc1', 'O=C(Cn1nnc2ccccc21)NCc1ccsc1'],
        smartsTemplate: '[c:1][NX3;$(NC=O):2]>>([c:1][I].[N:2][#1])',
      },
    ],
    disconnections: {
      rxns: [
        {
          atms: [1, 12],
          bnds: [11],
          p_smi: 'O=C(Cn1nnc2ccccc21)NCc1ccsc1',
        },
        {
          atms: [19, 12],
          bnds: [18],
          p_smi: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        },
      ],
      route: {
        atms: [
          [1, 12],
          [19, 12],
        ],
        bnds: [[11], [18]],
      },
    },
  },
  {
    score: 0.0,
    molecules: [
      {
        smiles: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        catalog_entries: [],
        is_building_block: false,
      },
      {
        smiles: 'Clc1ccc(I)cc1',
        catalog_entries: [
          {
            vendor_id: 'MolPort-000-153-151',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '477526',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'SCHEMBL208292',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: '12510',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'EN300-77395',
            catalog_name: 'enamine_bb',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: '',
            catalog_name: 'generic',
            lead_time_weeks: 2.0,
          },
          {
            vendor_id: 'MCULE-3776065149',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
        ],
        is_building_block: true,
      },
      {
        smiles: 'O=C(Cn1nnc2ccccc21)NCc1ccsc1',
        catalog_entries: [
          {
            vendor_id: '122211285',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
        ],
        is_building_block: false,
      },
      {
        smiles: 'NCc1ccsc1',
        catalog_entries: [
          {
            vendor_id: 'SCHEMBL120232',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'WXCD01006275',
            catalog_name: 'wuxi_bb_screening',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: 'MolPort-000-140-225',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '',
            catalog_name: 'generic',
            lead_time_weeks: 2.0,
          },
          {
            vendor_id: 'MCULE-1358443205',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '720302',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: '4328338',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'EN300-110525',
            catalog_name: 'enamine_bb',
            lead_time_weeks: 1.4,
          },
        ],
        is_building_block: true,
      },
      {
        smiles: 'O=C(Cl)Cn1nnc2ccccc21',
        catalog_entries: [
          {
            vendor_id: 'MCULE-1652996022',
            catalog_name: 'mcule',
            lead_time_weeks: 5.0,
          },
          {
            vendor_id: 'SCHEMBL16286769',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: '852016',
            catalog_name: 'emolecules',
            lead_time_weeks: 4.0,
          },
          {
            vendor_id: '14922579',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
        ],
        is_building_block: true,
      },
    ],
    reactions: [
      {
        name: 'Amide Schotten-Baumann',
        target: 'O=C(Cn1nnc2ccccc21)NCc1ccsc1',
        sources: ['NCc1ccsc1', 'O=C(Cl)Cn1nnc2ccccc21'],
        smartsTemplate:
          '[#6:2][CX3:1](=[O:3])-;!@[n,NX3;!$(N=*);!$([#7]([#6]=[O,N])[#6]=[O,N]):4]>>([*:2][C:1](=[O:3])[Cl].[*:4][#1])',
      },
      {
        name: 'Buchwald-Hartwig amination with amide',
        target: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        sources: ['Clc1ccc(I)cc1', 'O=C(Cn1nnc2ccccc21)NCc1ccsc1'],
        smartsTemplate: '[c:1][NX3;$(NC=O):2]>>([c:1][I].[N:2][#1])',
      },
    ],
    disconnections: {
      rxns: [
        {
          atms: [1, 12],
          bnds: [11],
          p_smi: 'O=C(Cn1nnc2ccccc21)NCc1ccsc1',
        },
        {
          atms: [19, 12],
          bnds: [18],
          p_smi: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        },
      ],
      route: {
        atms: [
          [1, 12],
          [19, 12],
        ],
        bnds: [[11], [18]],
      },
    },
  },
  {
    score: 0.0,
    molecules: [
      {
        smiles: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        catalog_entries: [],
        is_building_block: false,
      },
      {
        smiles: 'O=C(CCl)N(Cc1ccsc1)c1ccc(Cl)cc1',
        catalog_entries: [],
        is_building_block: false,
      },
      {
        smiles: 'O=C(O)CCl',
        catalog_entries: [
          {
            vendor_id: '',
            catalog_name: 'generic',
            lead_time_weeks: 2.0,
          },
          {
            vendor_id: '518964',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'MCULE-9228754880',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: 'SCHEMBL16859461',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'MolPort-000-871-803',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
        ],
        is_building_block: true,
      },
      {
        smiles: 'Clc1ccc(NCc2ccsc2)cc1',
        catalog_entries: [
          {
            vendor_id: '3162059',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'BBV-131088',
            catalog_name: 'enamine_made',
            lead_time_weeks: 6.0,
          },
          {
            vendor_id: '1536185',
            catalog_name: 'emolecules',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'EN300-161145',
            catalog_name: 'enamine_bb',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 's_38____56070____13230996',
            catalog_name: 'enamine_real',
            lead_time_weeks: 4.0,
          },
          {
            vendor_id: 'MolPort-046-846-280',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: 'MCULE-3563800686',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
        ],
        is_building_block: true,
      },
      {
        smiles: 'c1ccc2[nH]nnc2c1',
        catalog_entries: [
          {
            vendor_id: 'SCHEMBL8956',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: '480215',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'EN300-17964',
            catalog_name: 'enamine_bb',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'MolPort-000-151-332',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '5210778',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'MCULE-2848618742',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '',
            catalog_name: 'generic',
            lead_time_weeks: 2.0,
          },
        ],
        is_building_block: true,
      },
    ],
    reactions: [
      {
        name: 'Amidation',
        target: 'O=C(CCl)N(Cc1ccsc1)c1ccc(Cl)cc1',
        sources: ['O=C(O)CCl', 'Clc1ccc(NCc2ccsc2)cc1'],
        smartsTemplate:
          '[C:2](=[O:3])[N;!$(N(C=O)(C=O)):1]>>([N:1][#1].[C:2](=[O:3])[O][#1])',
      },
      {
        name: 'Nucleophilic substitution with amine',
        target: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        sources: ['O=C(CCl)N(Cc1ccsc1)c1ccc(Cl)cc1', 'c1ccc2[nH]nnc2c1'],
        smartsTemplate:
          '[N,n;!$(N=*);!$(NC=[*]):2][CX4H3,CX4H2,CX4H1R1,CX4H1R0&$(Cc),CX4H1R0&$(CC=C);!$([CX4][CX4](C)(C)C);!$([Cr3]):1]>>([C:1][Cl].[#1][*:2])',
      },
    ],
    disconnections: {
      rxns: [
        {
          atms: [1, 4],
          bnds: [3],
          p_smi: 'O=C(CCl)N(Cc1ccsc1)c1ccc(Cl)cc1',
        },
        {
          atms: [2, 3],
          bnds: [2],
          p_smi: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        },
      ],
      route: {
        atms: [
          [1, 12],
          [2, 3],
        ],
        bnds: [[11], [2]],
      },
    },
  },
  {
    score: 0.0,
    molecules: [
      {
        smiles: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        catalog_entries: [],
        is_building_block: false,
      },
      {
        smiles: 'O=S(=O)(Oc1ccc(Cl)cc1)C(F)(F)F',
        catalog_entries: [
          {
            vendor_id: '581424',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'BBV-45162451',
            catalog_name: 'enamine_made',
            lead_time_weeks: 6.0,
          },
          {
            vendor_id: 'SCHEMBL2941459',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'MolPort-001-775-385',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '10896987',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'MCULE-6488782876',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
        ],
        is_building_block: true,
      },
      {
        smiles: 'O=C(Cn1nnc2ccccc21)NCc1ccsc1',
        catalog_entries: [
          {
            vendor_id: '122211285',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
        ],
        is_building_block: false,
      },
      {
        smiles: 'NCc1ccsc1',
        catalog_entries: [
          {
            vendor_id: 'SCHEMBL120232',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'WXCD01006275',
            catalog_name: 'wuxi_bb_screening',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: 'MolPort-000-140-225',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '',
            catalog_name: 'generic',
            lead_time_weeks: 2.0,
          },
          {
            vendor_id: 'MCULE-1358443205',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '720302',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: '4328338',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'EN300-110525',
            catalog_name: 'enamine_bb',
            lead_time_weeks: 1.4,
          },
        ],
        is_building_block: true,
      },
      {
        smiles: 'O=C(O)Cn1nnc2ccccc21',
        catalog_entries: [
          {
            vendor_id: 'MCULE-6198639583',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: 's_270034____11622716____7554828',
            catalog_name: 'enamine_real',
            lead_time_weeks: 4.0,
          },
          {
            vendor_id: '653350',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'BBV-2156413',
            catalog_name: 'enamine_made',
            lead_time_weeks: 6.0,
          },
          {
            vendor_id: 'EN300-24347',
            catalog_name: 'enamine_bb',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'MolPort-002-471-199',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: 'SCHEMBL361654',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'WXCD01003197',
            catalog_name: 'wuxi_bb_screening',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '154446254',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: '',
            catalog_name: 'generic',
            lead_time_weeks: 2.0,
          },
        ],
        is_building_block: true,
      },
    ],
    reactions: [
      {
        name: 'Amidation',
        target: 'O=C(Cn1nnc2ccccc21)NCc1ccsc1',
        sources: ['NCc1ccsc1', 'O=C(O)Cn1nnc2ccccc21'],
        smartsTemplate:
          '[C:2](=[O:3])[N;!$(N(C=O)(C=O)):1]>>([N:1][#1].[C:2](=[O:3])[O][#1])',
      },
      {
        name: 'Buchwald-Hartwig amination with amide',
        target: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        sources: [
          'O=S(=O)(Oc1ccc(Cl)cc1)C(F)(F)F',
          'O=C(Cn1nnc2ccccc21)NCc1ccsc1',
        ],
        smartsTemplate:
          '[c:1][NX3;$(NC=O):2]>>([c:1][O][S](=[O])(=[O])[C]([F])([F])[F].[N:2][#1])',
      },
    ],
    disconnections: {
      rxns: [
        {
          atms: [1, 12],
          bnds: [11],
          p_smi: 'O=C(Cn1nnc2ccccc21)NCc1ccsc1',
        },
        {
          atms: [19, 12],
          bnds: [18],
          p_smi: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        },
      ],
      route: {
        atms: [
          [1, 12],
          [19, 12],
        ],
        bnds: [[11], [18]],
      },
    },
  },
  {
    score: 0.0,
    molecules: [
      {
        smiles: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        catalog_entries: [],
        is_building_block: false,
      },
      {
        smiles: 'O=S(=O)(Oc1ccc(Cl)cc1)C(F)(F)F',
        catalog_entries: [
          {
            vendor_id: '581424',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'BBV-45162451',
            catalog_name: 'enamine_made',
            lead_time_weeks: 6.0,
          },
          {
            vendor_id: 'SCHEMBL2941459',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'MolPort-001-775-385',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '10896987',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'MCULE-6488782876',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
        ],
        is_building_block: true,
      },
      {
        smiles: 'O=C(Cn1nnc2ccccc21)NCc1ccsc1',
        catalog_entries: [
          {
            vendor_id: '122211285',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
        ],
        is_building_block: false,
      },
      {
        smiles: 'NCc1ccsc1',
        catalog_entries: [
          {
            vendor_id: 'SCHEMBL120232',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'WXCD01006275',
            catalog_name: 'wuxi_bb_screening',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: 'MolPort-000-140-225',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '',
            catalog_name: 'generic',
            lead_time_weeks: 2.0,
          },
          {
            vendor_id: 'MCULE-1358443205',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '720302',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: '4328338',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'EN300-110525',
            catalog_name: 'enamine_bb',
            lead_time_weeks: 1.4,
          },
        ],
        is_building_block: true,
      },
      {
        smiles: 'O=C(Cl)Cn1nnc2ccccc21',
        catalog_entries: [
          {
            vendor_id: 'MCULE-1652996022',
            catalog_name: 'mcule',
            lead_time_weeks: 5.0,
          },
          {
            vendor_id: 'SCHEMBL16286769',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: '852016',
            catalog_name: 'emolecules',
            lead_time_weeks: 4.0,
          },
          {
            vendor_id: '14922579',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
        ],
        is_building_block: true,
      },
    ],
    reactions: [
      {
        name: 'Amide Schotten-Baumann',
        target: 'O=C(Cn1nnc2ccccc21)NCc1ccsc1',
        sources: ['NCc1ccsc1', 'O=C(Cl)Cn1nnc2ccccc21'],
        smartsTemplate:
          '[#6:2][CX3:1](=[O:3])-;!@[n,NX3;!$(N=*);!$([#7]([#6]=[O,N])[#6]=[O,N]):4]>>([*:2][C:1](=[O:3])[Cl].[*:4][#1])',
      },
      {
        name: 'Buchwald-Hartwig amination with amide',
        target: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        sources: [
          'O=S(=O)(Oc1ccc(Cl)cc1)C(F)(F)F',
          'O=C(Cn1nnc2ccccc21)NCc1ccsc1',
        ],
        smartsTemplate:
          '[c:1][NX3;$(NC=O):2]>>([c:1][O][S](=[O])(=[O])[C]([F])([F])[F].[N:2][#1])',
      },
    ],
    disconnections: {
      rxns: [
        {
          atms: [1, 12],
          bnds: [11],
          p_smi: 'O=C(Cn1nnc2ccccc21)NCc1ccsc1',
        },
        {
          atms: [19, 12],
          bnds: [18],
          p_smi: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        },
      ],
      route: {
        atms: [
          [1, 12],
          [19, 12],
        ],
        bnds: [[11], [18]],
      },
    },
  },
  {
    score: 0.0,
    molecules: [
      {
        smiles: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        catalog_entries: [],
        is_building_block: false,
      },
      {
        smiles: 'O=S(=O)(Oc1ccc(Cl)cc1)C(F)(F)F',
        catalog_entries: [
          {
            vendor_id: '581424',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'BBV-45162451',
            catalog_name: 'enamine_made',
            lead_time_weeks: 6.0,
          },
          {
            vendor_id: 'SCHEMBL2941459',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'MolPort-001-775-385',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '10896987',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'MCULE-6488782876',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
        ],
        is_building_block: true,
      },
      {
        smiles: 'O=C(Cn1nnc2ccccc21)NCc1ccsc1',
        catalog_entries: [
          {
            vendor_id: '122211285',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
        ],
        is_building_block: false,
      },
      {
        smiles: 'NCc1ccsc1',
        catalog_entries: [
          {
            vendor_id: 'SCHEMBL120232',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'WXCD01006275',
            catalog_name: 'wuxi_bb_screening',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: 'MolPort-000-140-225',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '',
            catalog_name: 'generic',
            lead_time_weeks: 2.0,
          },
          {
            vendor_id: 'MCULE-1358443205',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '720302',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: '4328338',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'EN300-110525',
            catalog_name: 'enamine_bb',
            lead_time_weeks: 1.4,
          },
        ],
        is_building_block: true,
      },
      {
        smiles: 'CCOC(=O)Cn1nnc2ccccc21',
        catalog_entries: [
          {
            vendor_id: 'BBV-2156488',
            catalog_name: 'enamine_made',
            lead_time_weeks: 6.0,
          },
          {
            vendor_id: 's_7____128806____5825034',
            catalog_name: 'enamine_real',
            lead_time_weeks: 4.0,
          },
          {
            vendor_id: 'MolPort-002-143-260',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '620404',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'MCULE-6124919644',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: 'SCHEMBL2490943',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: '684169',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
        ],
        is_building_block: true,
      },
    ],
    reactions: [
      {
        name: 'Ester amidation',
        target: 'O=C(Cn1nnc2ccccc21)NCc1ccsc1',
        sources: ['NCc1ccsc1', 'CCOC(=O)Cn1nnc2ccccc21'],
        smartsTemplate:
          '[c,C:1][C:2](=[O:3])[N:4]>>([*:1][C:2](=[O:3])[O]CC.[N:4][#1])',
      },
      {
        name: 'Buchwald-Hartwig amination with amide',
        target: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        sources: [
          'O=S(=O)(Oc1ccc(Cl)cc1)C(F)(F)F',
          'O=C(Cn1nnc2ccccc21)NCc1ccsc1',
        ],
        smartsTemplate:
          '[c:1][NX3;$(NC=O):2]>>([c:1][O][S](=[O])(=[O])[C]([F])([F])[F].[N:2][#1])',
      },
    ],
    disconnections: {
      rxns: [
        {
          atms: [1, 12],
          bnds: [11],
          p_smi: 'O=C(Cn1nnc2ccccc21)NCc1ccsc1',
        },
        {
          atms: [19, 12],
          bnds: [18],
          p_smi: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        },
      ],
      route: {
        atms: [
          [1, 12],
          [19, 12],
        ],
        bnds: [[11], [18]],
      },
    },
  },
  {
    score: 0.0,
    molecules: [
      {
        smiles: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        catalog_entries: [],
        is_building_block: false,
      },
      {
        smiles: 'O=S(=O)(Oc1ccc(Cl)cc1)C(F)(F)F',
        catalog_entries: [
          {
            vendor_id: '581424',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'BBV-45162451',
            catalog_name: 'enamine_made',
            lead_time_weeks: 6.0,
          },
          {
            vendor_id: 'SCHEMBL2941459',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'MolPort-001-775-385',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '10896987',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'MCULE-6488782876',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
        ],
        is_building_block: true,
      },
      {
        smiles: 'O=C(Cn1nnc2ccccc21)NCc1ccsc1',
        catalog_entries: [
          {
            vendor_id: '122211285',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
        ],
        is_building_block: false,
      },
      {
        smiles: 'NCc1ccsc1',
        catalog_entries: [
          {
            vendor_id: 'SCHEMBL120232',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'WXCD01006275',
            catalog_name: 'wuxi_bb_screening',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: 'MolPort-000-140-225',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '',
            catalog_name: 'generic',
            lead_time_weeks: 2.0,
          },
          {
            vendor_id: 'MCULE-1358443205',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '720302',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: '4328338',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'EN300-110525',
            catalog_name: 'enamine_bb',
            lead_time_weeks: 1.4,
          },
        ],
        is_building_block: true,
      },
      {
        smiles: 'COC(=O)Cn1nnc2ccccc21',
        catalog_entries: [
          {
            vendor_id: 'MolPort-002-492-362',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '4340565',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'MCULE-7236067687',
            catalog_name: 'mcule',
            lead_time_weeks: 5.0,
          },
          {
            vendor_id: '313449',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'BBV-2156454',
            catalog_name: 'enamine_made',
            lead_time_weeks: 6.0,
          },
          {
            vendor_id: 's_7____128806____5534970',
            catalog_name: 'enamine_real',
            lead_time_weeks: 4.0,
          },
        ],
        is_building_block: true,
      },
    ],
    reactions: [
      {
        name: 'Ester amidation',
        target: 'O=C(Cn1nnc2ccccc21)NCc1ccsc1',
        sources: ['NCc1ccsc1', 'COC(=O)Cn1nnc2ccccc21'],
        smartsTemplate:
          '[c,C:1][C:2](=[O:3])[N:4]>>([*:1][C:2](=[O:3])[O]C.[N:4][#1])',
      },
      {
        name: 'Buchwald-Hartwig amination with amide',
        target: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        sources: [
          'O=S(=O)(Oc1ccc(Cl)cc1)C(F)(F)F',
          'O=C(Cn1nnc2ccccc21)NCc1ccsc1',
        ],
        smartsTemplate:
          '[c:1][NX3;$(NC=O):2]>>([c:1][O][S](=[O])(=[O])[C]([F])([F])[F].[N:2][#1])',
      },
    ],
    disconnections: {
      rxns: [
        {
          atms: [1, 12],
          bnds: [11],
          p_smi: 'O=C(Cn1nnc2ccccc21)NCc1ccsc1',
        },
        {
          atms: [19, 12],
          bnds: [18],
          p_smi: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        },
      ],
      route: {
        atms: [
          [1, 12],
          [19, 12],
        ],
        bnds: [[11], [18]],
      },
    },
  },
  {
    score: 0.0,
    molecules: [
      {
        smiles: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        catalog_entries: [],
        is_building_block: false,
      },
      {
        smiles: 'O=C(CCl)N(Cc1ccsc1)c1ccc(Cl)cc1',
        catalog_entries: [],
        is_building_block: false,
      },
      {
        smiles: 'O=C(Cl)CCl',
        catalog_entries: [
          {
            vendor_id: 'MolPort-000-872-020',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '6577',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'SCHEMBL9584',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'MCULE-7076914635',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
        ],
        is_building_block: true,
      },
      {
        smiles: 'Clc1ccc(NCc2ccsc2)cc1',
        catalog_entries: [
          {
            vendor_id: '3162059',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'BBV-131088',
            catalog_name: 'enamine_made',
            lead_time_weeks: 6.0,
          },
          {
            vendor_id: '1536185',
            catalog_name: 'emolecules',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'EN300-161145',
            catalog_name: 'enamine_bb',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 's_38____56070____13230996',
            catalog_name: 'enamine_real',
            lead_time_weeks: 4.0,
          },
          {
            vendor_id: 'MolPort-046-846-280',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: 'MCULE-3563800686',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
        ],
        is_building_block: true,
      },
      {
        smiles: 'c1ccc2[nH]nnc2c1',
        catalog_entries: [
          {
            vendor_id: 'SCHEMBL8956',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: '480215',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'EN300-17964',
            catalog_name: 'enamine_bb',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'MolPort-000-151-332',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '5210778',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'MCULE-2848618742',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '',
            catalog_name: 'generic',
            lead_time_weeks: 2.0,
          },
        ],
        is_building_block: true,
      },
    ],
    reactions: [
      {
        name: 'Amide Schotten-Baumann',
        target: 'O=C(CCl)N(Cc1ccsc1)c1ccc(Cl)cc1',
        sources: ['O=C(Cl)CCl', 'Clc1ccc(NCc2ccsc2)cc1'],
        smartsTemplate:
          '[#6:2][CX3:1](=[O:3])-;!@[n,NX3;!$(N=*);!$([#7]([#6]=[O,N])[#6]=[O,N]):4]>>([*:2][C:1](=[O:3])[Cl].[*:4][#1])',
      },
      {
        name: 'Nucleophilic substitution with amine',
        target: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        sources: ['O=C(CCl)N(Cc1ccsc1)c1ccc(Cl)cc1', 'c1ccc2[nH]nnc2c1'],
        smartsTemplate:
          '[N,n;!$(N=*);!$(NC=[*]):2][CX4H3,CX4H2,CX4H1R1,CX4H1R0&$(Cc),CX4H1R0&$(CC=C);!$([CX4][CX4](C)(C)C);!$([Cr3]):1]>>([C:1][Cl].[#1][*:2])',
      },
    ],
    disconnections: {
      rxns: [
        {
          atms: [1, 4],
          bnds: [3],
          p_smi: 'O=C(CCl)N(Cc1ccsc1)c1ccc(Cl)cc1',
        },
        {
          atms: [2, 3],
          bnds: [2],
          p_smi: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        },
      ],
      route: {
        atms: [
          [1, 12],
          [2, 3],
        ],
        bnds: [[11], [2]],
      },
    },
  },
  {
    score: 1.530266e-317,
    molecules: [
      {
        smiles: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        catalog_entries: [],
        is_building_block: false,
      },
      {
        smiles: 'O=C(CBr)N(Cc1ccsc1)c1ccc(Cl)cc1',
        catalog_entries: [],
        is_building_block: false,
      },
      {
        smiles: 'O=C(O)CBr',
        catalog_entries: [
          {
            vendor_id: 'EN300-19170',
            catalog_name: 'enamine_bb',
            lead_time_weeks: 1.4,
          },
          {
            vendor_id: 'MolPort-028-746-053',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '476131',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'SCHEMBL16859465',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: '',
            catalog_name: 'generic',
            lead_time_weeks: 2.0,
          },
          {
            vendor_id: '6226',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'MCULE-1503716137',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
        ],
        is_building_block: true,
      },
      {
        smiles: 'Clc1ccc(NCc2ccsc2)cc1',
        catalog_entries: [
          {
            vendor_id: '3162059',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'BBV-131088',
            catalog_name: 'enamine_made',
            lead_time_weeks: 6.0,
          },
          {
            vendor_id: '1536185',
            catalog_name: 'emolecules',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'EN300-161145',
            catalog_name: 'enamine_bb',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 's_38____56070____13230996',
            catalog_name: 'enamine_real',
            lead_time_weeks: 4.0,
          },
          {
            vendor_id: 'MolPort-046-846-280',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: 'MCULE-3563800686',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
        ],
        is_building_block: true,
      },
      {
        smiles: 'c1ccc2[nH]nnc2c1',
        catalog_entries: [
          {
            vendor_id: 'SCHEMBL8956',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: '480215',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'EN300-17964',
            catalog_name: 'enamine_bb',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'MolPort-000-151-332',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '5210778',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'MCULE-2848618742',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '',
            catalog_name: 'generic',
            lead_time_weeks: 2.0,
          },
        ],
        is_building_block: true,
      },
    ],
    reactions: [
      {
        name: 'Amidation',
        target: 'O=C(CBr)N(Cc1ccsc1)c1ccc(Cl)cc1',
        sources: ['O=C(O)CBr', 'Clc1ccc(NCc2ccsc2)cc1'],
        smartsTemplate:
          '[C:2](=[O:3])[N;!$(N(C=O)(C=O)):1]>>([N:1][#1].[C:2](=[O:3])[O][#1])',
      },
      {
        name: 'Nucleophilic substitution with amine',
        target: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        sources: ['O=C(CBr)N(Cc1ccsc1)c1ccc(Cl)cc1', 'c1ccc2[nH]nnc2c1'],
        smartsTemplate:
          '[N,n;!$(N=*);!$(NC=[*]):2][CX4H3,CX4H2,CX4H1R1,CX4H1R0&$(Cc),CX4H1R0&$(CC=C);!$([CX4][CX4](C)(C)C);!$([Cr3]):1]>>([C:1][Br].[#1][*:2])',
      },
    ],
    disconnections: {
      rxns: [
        {
          atms: [1, 4],
          bnds: [3],
          p_smi: 'O=C(CBr)N(Cc1ccsc1)c1ccc(Cl)cc1',
        },
        {
          atms: [2, 3],
          bnds: [2],
          p_smi: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        },
      ],
      route: {
        atms: [
          [1, 12],
          [2, 3],
        ],
        bnds: [[11], [2]],
      },
    },
  },
  {
    score: 0.0,
    molecules: [
      {
        smiles: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        catalog_entries: [],
        is_building_block: false,
      },
      {
        smiles: 'O=C(CBr)N(Cc1ccsc1)c1ccc(Cl)cc1',
        catalog_entries: [],
        is_building_block: false,
      },
      {
        smiles: 'O=C(Cl)CBr',
        catalog_entries: [
          {
            vendor_id: 'MCULE-7684029984',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '484297',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: '',
            catalog_name: 'generic',
            lead_time_weeks: 2.0,
          },
          {
            vendor_id: 'MolPort-003-926-941',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '89602',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'SCHEMBL140291',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
        ],
        is_building_block: true,
      },
      {
        smiles: 'Clc1ccc(NCc2ccsc2)cc1',
        catalog_entries: [
          {
            vendor_id: '3162059',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'BBV-131088',
            catalog_name: 'enamine_made',
            lead_time_weeks: 6.0,
          },
          {
            vendor_id: '1536185',
            catalog_name: 'emolecules',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'EN300-161145',
            catalog_name: 'enamine_bb',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 's_38____56070____13230996',
            catalog_name: 'enamine_real',
            lead_time_weeks: 4.0,
          },
          {
            vendor_id: 'MolPort-046-846-280',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: 'MCULE-3563800686',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
        ],
        is_building_block: true,
      },
      {
        smiles: 'c1ccc2[nH]nnc2c1',
        catalog_entries: [
          {
            vendor_id: 'SCHEMBL8956',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: '480215',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'EN300-17964',
            catalog_name: 'enamine_bb',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'MolPort-000-151-332',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '5210778',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'MCULE-2848618742',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '',
            catalog_name: 'generic',
            lead_time_weeks: 2.0,
          },
        ],
        is_building_block: true,
      },
    ],
    reactions: [
      {
        name: 'Amide Schotten-Baumann',
        target: 'O=C(CBr)N(Cc1ccsc1)c1ccc(Cl)cc1',
        sources: ['O=C(Cl)CBr', 'Clc1ccc(NCc2ccsc2)cc1'],
        smartsTemplate:
          '[#6:2][CX3:1](=[O:3])-;!@[n,NX3;!$(N=*);!$([#7]([#6]=[O,N])[#6]=[O,N]):4]>>([*:2][C:1](=[O:3])[Cl].[*:4][#1])',
      },
      {
        name: 'Nucleophilic substitution with amine',
        target: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        sources: ['O=C(CBr)N(Cc1ccsc1)c1ccc(Cl)cc1', 'c1ccc2[nH]nnc2c1'],
        smartsTemplate:
          '[N,n;!$(N=*);!$(NC=[*]):2][CX4H3,CX4H2,CX4H1R1,CX4H1R0&$(Cc),CX4H1R0&$(CC=C);!$([CX4][CX4](C)(C)C);!$([Cr3]):1]>>([C:1][Br].[#1][*:2])',
      },
    ],
    disconnections: {
      rxns: [
        {
          atms: [1, 4],
          bnds: [3],
          p_smi: 'O=C(CBr)N(Cc1ccsc1)c1ccc(Cl)cc1',
        },
        {
          atms: [2, 3],
          bnds: [2],
          p_smi: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        },
      ],
      route: {
        atms: [
          [1, 12],
          [2, 3],
        ],
        bnds: [[11], [2]],
      },
    },
  },
  {
    score: 0.0,
    molecules: [
      {
        smiles: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        catalog_entries: [],
        is_building_block: false,
      },
      {
        smiles: 'Clc1ccc(Br)cc1',
        catalog_entries: [
          {
            vendor_id: 'EN300-19639',
            catalog_name: 'enamine_bb',
            lead_time_weeks: 1.4,
          },
          {
            vendor_id: '',
            catalog_name: 'generic',
            lead_time_weeks: 2.0,
          },
          {
            vendor_id: 'MolPort-001-760-872',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '484811',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'MCULE-2703502243',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '7806',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'SCHEMBL197605',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
        ],
        is_building_block: true,
      },
      {
        smiles: 'O=C(Cn1nnc2ccccc21)NCc1ccsc1',
        catalog_entries: [
          {
            vendor_id: '122211285',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
        ],
        is_building_block: false,
      },
      {
        smiles: 'NCc1ccsc1',
        catalog_entries: [
          {
            vendor_id: 'SCHEMBL120232',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'WXCD01006275',
            catalog_name: 'wuxi_bb_screening',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: 'MolPort-000-140-225',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '',
            catalog_name: 'generic',
            lead_time_weeks: 2.0,
          },
          {
            vendor_id: 'MCULE-1358443205',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '720302',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: '4328338',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'EN300-110525',
            catalog_name: 'enamine_bb',
            lead_time_weeks: 1.4,
          },
        ],
        is_building_block: true,
      },
      {
        smiles: 'O=C(O)Cn1nnc2ccccc21',
        catalog_entries: [
          {
            vendor_id: 'MCULE-6198639583',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: 's_270034____11622716____7554828',
            catalog_name: 'enamine_real',
            lead_time_weeks: 4.0,
          },
          {
            vendor_id: '653350',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'BBV-2156413',
            catalog_name: 'enamine_made',
            lead_time_weeks: 6.0,
          },
          {
            vendor_id: 'EN300-24347',
            catalog_name: 'enamine_bb',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'MolPort-002-471-199',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: 'SCHEMBL361654',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'WXCD01003197',
            catalog_name: 'wuxi_bb_screening',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '154446254',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: '',
            catalog_name: 'generic',
            lead_time_weeks: 2.0,
          },
        ],
        is_building_block: true,
      },
    ],
    reactions: [
      {
        name: 'Amidation',
        target: 'O=C(Cn1nnc2ccccc21)NCc1ccsc1',
        sources: ['NCc1ccsc1', 'O=C(O)Cn1nnc2ccccc21'],
        smartsTemplate:
          '[C:2](=[O:3])[N;!$(N(C=O)(C=O)):1]>>([N:1][#1].[C:2](=[O:3])[O][#1])',
      },
      {
        name: 'Buchwald-Hartwig amination with amide',
        target: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        sources: ['Clc1ccc(Br)cc1', 'O=C(Cn1nnc2ccccc21)NCc1ccsc1'],
        smartsTemplate: '[c:1][NX3;$(NC=O):2]>>([c:1][Br].[N:2][#1])',
      },
    ],
    disconnections: {
      rxns: [
        {
          atms: [1, 12],
          bnds: [11],
          p_smi: 'O=C(Cn1nnc2ccccc21)NCc1ccsc1',
        },
        {
          atms: [19, 12],
          bnds: [18],
          p_smi: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        },
      ],
      route: {
        atms: [
          [1, 12],
          [19, 12],
        ],
        bnds: [[11], [18]],
      },
    },
  },
  {
    score: 0.0,
    molecules: [
      {
        smiles: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        catalog_entries: [],
        is_building_block: false,
      },
      {
        smiles: 'Clc1ccc(Br)cc1',
        catalog_entries: [
          {
            vendor_id: 'EN300-19639',
            catalog_name: 'enamine_bb',
            lead_time_weeks: 1.4,
          },
          {
            vendor_id: '',
            catalog_name: 'generic',
            lead_time_weeks: 2.0,
          },
          {
            vendor_id: 'MolPort-001-760-872',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '484811',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'MCULE-2703502243',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '7806',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'SCHEMBL197605',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
        ],
        is_building_block: true,
      },
      {
        smiles: 'O=C(Cn1nnc2ccccc21)NCc1ccsc1',
        catalog_entries: [
          {
            vendor_id: '122211285',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
        ],
        is_building_block: false,
      },
      {
        smiles: 'NCc1ccsc1',
        catalog_entries: [
          {
            vendor_id: 'SCHEMBL120232',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'WXCD01006275',
            catalog_name: 'wuxi_bb_screening',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: 'MolPort-000-140-225',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '',
            catalog_name: 'generic',
            lead_time_weeks: 2.0,
          },
          {
            vendor_id: 'MCULE-1358443205',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '720302',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: '4328338',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'EN300-110525',
            catalog_name: 'enamine_bb',
            lead_time_weeks: 1.4,
          },
        ],
        is_building_block: true,
      },
      {
        smiles: 'O=C(Cl)Cn1nnc2ccccc21',
        catalog_entries: [
          {
            vendor_id: 'MCULE-1652996022',
            catalog_name: 'mcule',
            lead_time_weeks: 5.0,
          },
          {
            vendor_id: 'SCHEMBL16286769',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: '852016',
            catalog_name: 'emolecules',
            lead_time_weeks: 4.0,
          },
          {
            vendor_id: '14922579',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
        ],
        is_building_block: true,
      },
    ],
    reactions: [
      {
        name: 'Amide Schotten-Baumann',
        target: 'O=C(Cn1nnc2ccccc21)NCc1ccsc1',
        sources: ['NCc1ccsc1', 'O=C(Cl)Cn1nnc2ccccc21'],
        smartsTemplate:
          '[#6:2][CX3:1](=[O:3])-;!@[n,NX3;!$(N=*);!$([#7]([#6]=[O,N])[#6]=[O,N]):4]>>([*:2][C:1](=[O:3])[Cl].[*:4][#1])',
      },
      {
        name: 'Buchwald-Hartwig amination with amide',
        target: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        sources: ['Clc1ccc(Br)cc1', 'O=C(Cn1nnc2ccccc21)NCc1ccsc1'],
        smartsTemplate: '[c:1][NX3;$(NC=O):2]>>([c:1][Br].[N:2][#1])',
      },
    ],
    disconnections: {
      rxns: [
        {
          atms: [1, 12],
          bnds: [11],
          p_smi: 'O=C(Cn1nnc2ccccc21)NCc1ccsc1',
        },
        {
          atms: [19, 12],
          bnds: [18],
          p_smi: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        },
      ],
      route: {
        atms: [
          [1, 12],
          [19, 12],
        ],
        bnds: [[11], [18]],
      },
    },
  },
  {
    score: 0.0,
    molecules: [
      {
        smiles: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        catalog_entries: [],
        is_building_block: false,
      },
      {
        smiles: 'Clc1ccc(Br)cc1',
        catalog_entries: [
          {
            vendor_id: 'EN300-19639',
            catalog_name: 'enamine_bb',
            lead_time_weeks: 1.4,
          },
          {
            vendor_id: '',
            catalog_name: 'generic',
            lead_time_weeks: 2.0,
          },
          {
            vendor_id: 'MolPort-001-760-872',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '484811',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'MCULE-2703502243',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '7806',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'SCHEMBL197605',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
        ],
        is_building_block: true,
      },
      {
        smiles: 'O=C(Cn1nnc2ccccc21)NCc1ccsc1',
        catalog_entries: [
          {
            vendor_id: '122211285',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
        ],
        is_building_block: false,
      },
      {
        smiles: 'NCc1ccsc1',
        catalog_entries: [
          {
            vendor_id: 'SCHEMBL120232',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'WXCD01006275',
            catalog_name: 'wuxi_bb_screening',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: 'MolPort-000-140-225',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '',
            catalog_name: 'generic',
            lead_time_weeks: 2.0,
          },
          {
            vendor_id: 'MCULE-1358443205',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '720302',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: '4328338',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'EN300-110525',
            catalog_name: 'enamine_bb',
            lead_time_weeks: 1.4,
          },
        ],
        is_building_block: true,
      },
      {
        smiles: 'CCOC(=O)Cn1nnc2ccccc21',
        catalog_entries: [
          {
            vendor_id: 'BBV-2156488',
            catalog_name: 'enamine_made',
            lead_time_weeks: 6.0,
          },
          {
            vendor_id: 's_7____128806____5825034',
            catalog_name: 'enamine_real',
            lead_time_weeks: 4.0,
          },
          {
            vendor_id: 'MolPort-002-143-260',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '620404',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'MCULE-6124919644',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: 'SCHEMBL2490943',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: '684169',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
        ],
        is_building_block: true,
      },
    ],
    reactions: [
      {
        name: 'Ester amidation',
        target: 'O=C(Cn1nnc2ccccc21)NCc1ccsc1',
        sources: ['NCc1ccsc1', 'CCOC(=O)Cn1nnc2ccccc21'],
        smartsTemplate:
          '[c,C:1][C:2](=[O:3])[N:4]>>([*:1][C:2](=[O:3])[O]CC.[N:4][#1])',
      },
      {
        name: 'Buchwald-Hartwig amination with amide',
        target: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        sources: ['Clc1ccc(Br)cc1', 'O=C(Cn1nnc2ccccc21)NCc1ccsc1'],
        smartsTemplate: '[c:1][NX3;$(NC=O):2]>>([c:1][Br].[N:2][#1])',
      },
    ],
    disconnections: {
      rxns: [
        {
          atms: [1, 12],
          bnds: [11],
          p_smi: 'O=C(Cn1nnc2ccccc21)NCc1ccsc1',
        },
        {
          atms: [19, 12],
          bnds: [18],
          p_smi: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        },
      ],
      route: {
        atms: [
          [1, 12],
          [19, 12],
        ],
        bnds: [[11], [18]],
      },
    },
  },
  {
    score: 0.0,
    molecules: [
      {
        smiles: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        catalog_entries: [],
        is_building_block: false,
      },
      {
        smiles: 'O=C(CI)N(Cc1ccsc1)c1ccc(Cl)cc1',
        catalog_entries: [],
        is_building_block: false,
      },
      {
        smiles: 'O=C(O)CI',
        catalog_entries: [
          {
            vendor_id: 'MolPort-002-990-500',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: 'SCHEMBL16859447',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: '519093',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: '474498',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: '',
            catalog_name: 'generic',
            lead_time_weeks: 2.0,
          },
          {
            vendor_id: 'EN300-19476',
            catalog_name: 'enamine_bb',
            lead_time_weeks: 1.4,
          },
          {
            vendor_id: 'MCULE-3146792857',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
        ],
        is_building_block: true,
      },
      {
        smiles: 'Clc1ccc(NCc2ccsc2)cc1',
        catalog_entries: [
          {
            vendor_id: '3162059',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'BBV-131088',
            catalog_name: 'enamine_made',
            lead_time_weeks: 6.0,
          },
          {
            vendor_id: '1536185',
            catalog_name: 'emolecules',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'EN300-161145',
            catalog_name: 'enamine_bb',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 's_38____56070____13230996',
            catalog_name: 'enamine_real',
            lead_time_weeks: 4.0,
          },
          {
            vendor_id: 'MolPort-046-846-280',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: 'MCULE-3563800686',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
        ],
        is_building_block: true,
      },
      {
        smiles: 'c1ccc2[nH]nnc2c1',
        catalog_entries: [
          {
            vendor_id: 'SCHEMBL8956',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: '480215',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'EN300-17964',
            catalog_name: 'enamine_bb',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'MolPort-000-151-332',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '5210778',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'MCULE-2848618742',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '',
            catalog_name: 'generic',
            lead_time_weeks: 2.0,
          },
        ],
        is_building_block: true,
      },
    ],
    reactions: [
      {
        name: 'Amidation',
        target: 'O=C(CI)N(Cc1ccsc1)c1ccc(Cl)cc1',
        sources: ['O=C(O)CI', 'Clc1ccc(NCc2ccsc2)cc1'],
        smartsTemplate:
          '[C:2](=[O:3])[N;!$(N(C=O)(C=O)):1]>>([N:1][#1].[C:2](=[O:3])[O][#1])',
      },
      {
        name: 'Nucleophilic substitution with amine',
        target: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        sources: ['O=C(CI)N(Cc1ccsc1)c1ccc(Cl)cc1', 'c1ccc2[nH]nnc2c1'],
        smartsTemplate:
          '[N,n;!$(N=*);!$(NC=[*]):2][CX4H3,CX4H2,CX4H1R1,CX4H1R0&$(Cc),CX4H1R0&$(CC=C);!$([CX4][CX4](C)(C)C);!$([Cr3]):1]>>([C:1][I].[#1][*:2])',
      },
    ],
    disconnections: {
      rxns: [
        {
          atms: [1, 4],
          bnds: [3],
          p_smi: 'O=C(CI)N(Cc1ccsc1)c1ccc(Cl)cc1',
        },
        {
          atms: [2, 3],
          bnds: [2],
          p_smi: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        },
      ],
      route: {
        atms: [
          [1, 12],
          [2, 3],
        ],
        bnds: [[11], [2]],
      },
    },
  },
  {
    score: 0.0,
    molecules: [
      {
        smiles: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        catalog_entries: [],
        is_building_block: false,
      },
      {
        smiles: 'Clc1ccc(Br)cc1',
        catalog_entries: [
          {
            vendor_id: 'EN300-19639',
            catalog_name: 'enamine_bb',
            lead_time_weeks: 1.4,
          },
          {
            vendor_id: '',
            catalog_name: 'generic',
            lead_time_weeks: 2.0,
          },
          {
            vendor_id: 'MolPort-001-760-872',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '484811',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'MCULE-2703502243',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '7806',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'SCHEMBL197605',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
        ],
        is_building_block: true,
      },
      {
        smiles: 'O=C(Cn1nnc2ccccc21)NCc1ccsc1',
        catalog_entries: [
          {
            vendor_id: '122211285',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
        ],
        is_building_block: false,
      },
      {
        smiles: 'NCc1ccsc1',
        catalog_entries: [
          {
            vendor_id: 'SCHEMBL120232',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'WXCD01006275',
            catalog_name: 'wuxi_bb_screening',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: 'MolPort-000-140-225',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '',
            catalog_name: 'generic',
            lead_time_weeks: 2.0,
          },
          {
            vendor_id: 'MCULE-1358443205',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '720302',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: '4328338',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'EN300-110525',
            catalog_name: 'enamine_bb',
            lead_time_weeks: 1.4,
          },
        ],
        is_building_block: true,
      },
      {
        smiles: 'COC(=O)Cn1nnc2ccccc21',
        catalog_entries: [
          {
            vendor_id: 'MolPort-002-492-362',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '4340565',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'MCULE-7236067687',
            catalog_name: 'mcule',
            lead_time_weeks: 5.0,
          },
          {
            vendor_id: '313449',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'BBV-2156454',
            catalog_name: 'enamine_made',
            lead_time_weeks: 6.0,
          },
          {
            vendor_id: 's_7____128806____5534970',
            catalog_name: 'enamine_real',
            lead_time_weeks: 4.0,
          },
        ],
        is_building_block: true,
      },
    ],
    reactions: [
      {
        name: 'Ester amidation',
        target: 'O=C(Cn1nnc2ccccc21)NCc1ccsc1',
        sources: ['NCc1ccsc1', 'COC(=O)Cn1nnc2ccccc21'],
        smartsTemplate:
          '[c,C:1][C:2](=[O:3])[N:4]>>([*:1][C:2](=[O:3])[O]C.[N:4][#1])',
      },
      {
        name: 'Buchwald-Hartwig amination with amide',
        target: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        sources: ['Clc1ccc(Br)cc1', 'O=C(Cn1nnc2ccccc21)NCc1ccsc1'],
        smartsTemplate: '[c:1][NX3;$(NC=O):2]>>([c:1][Br].[N:2][#1])',
      },
    ],
    disconnections: {
      rxns: [
        {
          atms: [1, 12],
          bnds: [11],
          p_smi: 'O=C(Cn1nnc2ccccc21)NCc1ccsc1',
        },
        {
          atms: [19, 12],
          bnds: [18],
          p_smi: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        },
      ],
      route: {
        atms: [
          [1, 12],
          [19, 12],
        ],
        bnds: [[11], [18]],
      },
    },
  },
  {
    score: 0.0,
    molecules: [
      {
        smiles: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        catalog_entries: [],
        is_building_block: false,
      },
      {
        smiles: 'O=C(CI)N(Cc1ccsc1)c1ccc(Cl)cc1',
        catalog_entries: [],
        is_building_block: false,
      },
      {
        smiles: 'O=C(Cl)CI',
        catalog_entries: [
          {
            vendor_id: 'SCHEMBL56487',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: '889010',
            catalog_name: 'emolecules',
            lead_time_weeks: 1.4,
          },
          {
            vendor_id: 'MolPort-006-127-720',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '',
            catalog_name: 'generic',
            lead_time_weeks: 2.0,
          },
          {
            vendor_id: 'MCULE-5719121455',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '3084680',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
        ],
        is_building_block: true,
      },
      {
        smiles: 'Clc1ccc(NCc2ccsc2)cc1',
        catalog_entries: [
          {
            vendor_id: '3162059',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'BBV-131088',
            catalog_name: 'enamine_made',
            lead_time_weeks: 6.0,
          },
          {
            vendor_id: '1536185',
            catalog_name: 'emolecules',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'EN300-161145',
            catalog_name: 'enamine_bb',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 's_38____56070____13230996',
            catalog_name: 'enamine_real',
            lead_time_weeks: 4.0,
          },
          {
            vendor_id: 'MolPort-046-846-280',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: 'MCULE-3563800686',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
        ],
        is_building_block: true,
      },
      {
        smiles: 'c1ccc2[nH]nnc2c1',
        catalog_entries: [
          {
            vendor_id: 'SCHEMBL8956',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: '480215',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'EN300-17964',
            catalog_name: 'enamine_bb',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'MolPort-000-151-332',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '5210778',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'MCULE-2848618742',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '',
            catalog_name: 'generic',
            lead_time_weeks: 2.0,
          },
        ],
        is_building_block: true,
      },
    ],
    reactions: [
      {
        name: 'Amide Schotten-Baumann',
        target: 'O=C(CI)N(Cc1ccsc1)c1ccc(Cl)cc1',
        sources: ['O=C(Cl)CI', 'Clc1ccc(NCc2ccsc2)cc1'],
        smartsTemplate:
          '[#6:2][CX3:1](=[O:3])-;!@[n,NX3;!$(N=*);!$([#7]([#6]=[O,N])[#6]=[O,N]):4]>>([*:2][C:1](=[O:3])[Cl].[*:4][#1])',
      },
      {
        name: 'Nucleophilic substitution with amine',
        target: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        sources: ['O=C(CI)N(Cc1ccsc1)c1ccc(Cl)cc1', 'c1ccc2[nH]nnc2c1'],
        smartsTemplate:
          '[N,n;!$(N=*);!$(NC=[*]):2][CX4H3,CX4H2,CX4H1R1,CX4H1R0&$(Cc),CX4H1R0&$(CC=C);!$([CX4][CX4](C)(C)C);!$([Cr3]):1]>>([C:1][I].[#1][*:2])',
      },
    ],
    disconnections: {
      rxns: [
        {
          atms: [1, 4],
          bnds: [3],
          p_smi: 'O=C(CI)N(Cc1ccsc1)c1ccc(Cl)cc1',
        },
        {
          atms: [2, 3],
          bnds: [2],
          p_smi: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        },
      ],
      route: {
        atms: [
          [1, 12],
          [2, 3],
        ],
        bnds: [[11], [2]],
      },
    },
  },
  {
    score: 0.00043356046118538864,
    molecules: [
      {
        smiles: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        catalog_entries: [],
        is_building_block: false,
      },
      {
        smiles: 'O=C(CCl)N(Cc1ccsc1)c1ccc(Cl)cc1',
        catalog_entries: [],
        is_building_block: false,
      },
      {
        smiles: 'O=C(CCl)NCc1ccsc1',
        catalog_entries: [
          {
            vendor_id: 'MCULE-7859939466',
            catalog_name: 'mcule',
            lead_time_weeks: 5.0,
          },
          {
            vendor_id: 'BBV-37117076',
            catalog_name: 'enamine_made',
            lead_time_weeks: 6.0,
          },
          {
            vendor_id: '63246074',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: '39696466',
            catalog_name: 'emolecules',
            lead_time_weeks: 12.0,
          },
        ],
        is_building_block: true,
      },
      {
        smiles: 'Clc1ccc(I)cc1',
        catalog_entries: [
          {
            vendor_id: 'MolPort-000-153-151',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '477526',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'SCHEMBL208292',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: '12510',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'EN300-77395',
            catalog_name: 'enamine_bb',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: '',
            catalog_name: 'generic',
            lead_time_weeks: 2.0,
          },
          {
            vendor_id: 'MCULE-3776065149',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
        ],
        is_building_block: true,
      },
      {
        smiles: 'c1ccc2[nH]nnc2c1',
        catalog_entries: [
          {
            vendor_id: 'SCHEMBL8956',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: '480215',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'EN300-17964',
            catalog_name: 'enamine_bb',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'MolPort-000-151-332',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '5210778',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'MCULE-2848618742',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '',
            catalog_name: 'generic',
            lead_time_weeks: 2.0,
          },
        ],
        is_building_block: true,
      },
    ],
    reactions: [
      {
        name: 'Buchwald-Hartwig amination with amide',
        target: 'O=C(CCl)N(Cc1ccsc1)c1ccc(Cl)cc1',
        sources: ['O=C(CCl)NCc1ccsc1', 'Clc1ccc(I)cc1'],
        smartsTemplate: '[c:1][NX3;$(NC=O):2]>>([c:1][I].[N:2][#1])',
      },
      {
        name: 'Nucleophilic substitution with amine',
        target: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        sources: ['O=C(CCl)N(Cc1ccsc1)c1ccc(Cl)cc1', 'c1ccc2[nH]nnc2c1'],
        smartsTemplate:
          '[N,n;!$(N=*);!$(NC=[*]):2][CX4H3,CX4H2,CX4H1R1,CX4H1R0&$(Cc),CX4H1R0&$(CC=C);!$([CX4][CX4](C)(C)C);!$([Cr3]):1]>>([C:1][Cl].[#1][*:2])',
      },
    ],
    disconnections: {
      rxns: [
        {
          atms: [11, 4],
          bnds: [10],
          p_smi: 'O=C(CCl)N(Cc1ccsc1)c1ccc(Cl)cc1',
        },
        {
          atms: [2, 3],
          bnds: [2],
          p_smi: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        },
      ],
      route: {
        atms: [
          [19, 12],
          [2, 3],
        ],
        bnds: [[18], [2]],
      },
    },
  },
  {
    score: 2.3531370806805125e-38,
    molecules: [
      {
        smiles: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        catalog_entries: [],
        is_building_block: false,
      },
      {
        smiles: 'O=C(CCl)N(Cc1ccsc1)c1ccc(Cl)cc1',
        catalog_entries: [],
        is_building_block: false,
      },
      {
        smiles: 'O=C(CCl)NCc1ccsc1',
        catalog_entries: [
          {
            vendor_id: 'MCULE-7859939466',
            catalog_name: 'mcule',
            lead_time_weeks: 5.0,
          },
          {
            vendor_id: 'BBV-37117076',
            catalog_name: 'enamine_made',
            lead_time_weeks: 6.0,
          },
          {
            vendor_id: '63246074',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: '39696466',
            catalog_name: 'emolecules',
            lead_time_weeks: 12.0,
          },
        ],
        is_building_block: true,
      },
      {
        smiles: 'Clc1ccc(Br)cc1',
        catalog_entries: [
          {
            vendor_id: 'EN300-19639',
            catalog_name: 'enamine_bb',
            lead_time_weeks: 1.4,
          },
          {
            vendor_id: '',
            catalog_name: 'generic',
            lead_time_weeks: 2.0,
          },
          {
            vendor_id: 'MolPort-001-760-872',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '484811',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'MCULE-2703502243',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '7806',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'SCHEMBL197605',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
        ],
        is_building_block: true,
      },
      {
        smiles: 'c1ccc2[nH]nnc2c1',
        catalog_entries: [
          {
            vendor_id: 'SCHEMBL8956',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: '480215',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'EN300-17964',
            catalog_name: 'enamine_bb',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'MolPort-000-151-332',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '5210778',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'MCULE-2848618742',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '',
            catalog_name: 'generic',
            lead_time_weeks: 2.0,
          },
        ],
        is_building_block: true,
      },
    ],
    reactions: [
      {
        name: 'Buchwald-Hartwig amination with amide',
        target: 'O=C(CCl)N(Cc1ccsc1)c1ccc(Cl)cc1',
        sources: ['O=C(CCl)NCc1ccsc1', 'Clc1ccc(Br)cc1'],
        smartsTemplate: '[c:1][NX3;$(NC=O):2]>>([c:1][Br].[N:2][#1])',
      },
      {
        name: 'Nucleophilic substitution with amine',
        target: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        sources: ['O=C(CCl)N(Cc1ccsc1)c1ccc(Cl)cc1', 'c1ccc2[nH]nnc2c1'],
        smartsTemplate:
          '[N,n;!$(N=*);!$(NC=[*]):2][CX4H3,CX4H2,CX4H1R1,CX4H1R0&$(Cc),CX4H1R0&$(CC=C);!$([CX4][CX4](C)(C)C);!$([Cr3]):1]>>([C:1][Cl].[#1][*:2])',
      },
    ],
    disconnections: {
      rxns: [
        {
          atms: [11, 4],
          bnds: [10],
          p_smi: 'O=C(CCl)N(Cc1ccsc1)c1ccc(Cl)cc1',
        },
        {
          atms: [2, 3],
          bnds: [2],
          p_smi: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        },
      ],
      route: {
        atms: [
          [19, 12],
          [2, 3],
        ],
        bnds: [[18], [2]],
      },
    },
  },
  {
    score: 0.0,
    molecules: [
      {
        smiles: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        catalog_entries: [],
        is_building_block: false,
      },
      {
        smiles: 'Clc1ccc(I)cc1',
        catalog_entries: [
          {
            vendor_id: 'MolPort-000-153-151',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '477526',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'SCHEMBL208292',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: '12510',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'EN300-77395',
            catalog_name: 'enamine_bb',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: '',
            catalog_name: 'generic',
            lead_time_weeks: 2.0,
          },
          {
            vendor_id: 'MCULE-3776065149',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
        ],
        is_building_block: true,
      },
      {
        smiles: 'O=C(Cn1nnc2ccccc21)NCc1ccsc1',
        catalog_entries: [
          {
            vendor_id: '122211285',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
        ],
        is_building_block: false,
      },
      {
        smiles: 'O=C(CCl)NCc1ccsc1',
        catalog_entries: [
          {
            vendor_id: 'MCULE-7859939466',
            catalog_name: 'mcule',
            lead_time_weeks: 5.0,
          },
          {
            vendor_id: 'BBV-37117076',
            catalog_name: 'enamine_made',
            lead_time_weeks: 6.0,
          },
          {
            vendor_id: '63246074',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: '39696466',
            catalog_name: 'emolecules',
            lead_time_weeks: 12.0,
          },
        ],
        is_building_block: true,
      },
      {
        smiles: 'c1ccc2[nH]nnc2c1',
        catalog_entries: [
          {
            vendor_id: 'SCHEMBL8956',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: '480215',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'EN300-17964',
            catalog_name: 'enamine_bb',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'MolPort-000-151-332',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '5210778',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'MCULE-2848618742',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '',
            catalog_name: 'generic',
            lead_time_weeks: 2.0,
          },
        ],
        is_building_block: true,
      },
    ],
    reactions: [
      {
        name: 'Nucleophilic substitution with amine',
        target: 'O=C(Cn1nnc2ccccc21)NCc1ccsc1',
        sources: ['O=C(CCl)NCc1ccsc1', 'c1ccc2[nH]nnc2c1'],
        smartsTemplate:
          '[N,n;!$(N=*);!$(NC=[*]):2][CX4H3,CX4H2,CX4H1R1,CX4H1R0&$(Cc),CX4H1R0&$(CC=C);!$([CX4][CX4](C)(C)C);!$([Cr3]):1]>>([C:1][Cl].[#1][*:2])',
      },
      {
        name: 'Buchwald-Hartwig amination with amide',
        target: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        sources: ['Clc1ccc(I)cc1', 'O=C(Cn1nnc2ccccc21)NCc1ccsc1'],
        smartsTemplate: '[c:1][NX3;$(NC=O):2]>>([c:1][I].[N:2][#1])',
      },
    ],
    disconnections: {
      rxns: [
        {
          atms: [2, 3],
          bnds: [2],
          p_smi: 'O=C(Cn1nnc2ccccc21)NCc1ccsc1',
        },
        {
          atms: [19, 12],
          bnds: [18],
          p_smi: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        },
      ],
      route: {
        atms: [
          [2, 3],
          [19, 12],
        ],
        bnds: [[2], [18]],
      },
    },
  },
  {
    score: 5.124151395382009e-9,
    molecules: [
      {
        smiles: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        catalog_entries: [],
        is_building_block: false,
      },
      {
        smiles: 'O=S(=O)(Oc1ccc(Cl)cc1)C(F)(F)F',
        catalog_entries: [
          {
            vendor_id: '581424',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'BBV-45162451',
            catalog_name: 'enamine_made',
            lead_time_weeks: 6.0,
          },
          {
            vendor_id: 'SCHEMBL2941459',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'MolPort-001-775-385',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '10896987',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'MCULE-6488782876',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
        ],
        is_building_block: true,
      },
      {
        smiles: 'O=C(Cn1nnc2ccccc21)NCc1ccsc1',
        catalog_entries: [
          {
            vendor_id: '122211285',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
        ],
        is_building_block: false,
      },
      {
        smiles: 'O=C(CCl)NCc1ccsc1',
        catalog_entries: [
          {
            vendor_id: 'MCULE-7859939466',
            catalog_name: 'mcule',
            lead_time_weeks: 5.0,
          },
          {
            vendor_id: 'BBV-37117076',
            catalog_name: 'enamine_made',
            lead_time_weeks: 6.0,
          },
          {
            vendor_id: '63246074',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: '39696466',
            catalog_name: 'emolecules',
            lead_time_weeks: 12.0,
          },
        ],
        is_building_block: true,
      },
      {
        smiles: 'c1ccc2[nH]nnc2c1',
        catalog_entries: [
          {
            vendor_id: 'SCHEMBL8956',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: '480215',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'EN300-17964',
            catalog_name: 'enamine_bb',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'MolPort-000-151-332',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '5210778',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'MCULE-2848618742',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '',
            catalog_name: 'generic',
            lead_time_weeks: 2.0,
          },
        ],
        is_building_block: true,
      },
    ],
    reactions: [
      {
        name: 'Nucleophilic substitution with amine',
        target: 'O=C(Cn1nnc2ccccc21)NCc1ccsc1',
        sources: ['O=C(CCl)NCc1ccsc1', 'c1ccc2[nH]nnc2c1'],
        smartsTemplate:
          '[N,n;!$(N=*);!$(NC=[*]):2][CX4H3,CX4H2,CX4H1R1,CX4H1R0&$(Cc),CX4H1R0&$(CC=C);!$([CX4][CX4](C)(C)C);!$([Cr3]):1]>>([C:1][Cl].[#1][*:2])',
      },
      {
        name: 'Buchwald-Hartwig amination with amide',
        target: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        sources: [
          'O=S(=O)(Oc1ccc(Cl)cc1)C(F)(F)F',
          'O=C(Cn1nnc2ccccc21)NCc1ccsc1',
        ],
        smartsTemplate:
          '[c:1][NX3;$(NC=O):2]>>([c:1][O][S](=[O])(=[O])[C]([F])([F])[F].[N:2][#1])',
      },
    ],
    disconnections: {
      rxns: [
        {
          atms: [2, 3],
          bnds: [2],
          p_smi: 'O=C(Cn1nnc2ccccc21)NCc1ccsc1',
        },
        {
          atms: [19, 12],
          bnds: [18],
          p_smi: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        },
      ],
      route: {
        atms: [
          [2, 3],
          [19, 12],
        ],
        bnds: [[2], [18]],
      },
    },
  },
  {
    score: 3.2800338218268205e-156,
    molecules: [
      {
        smiles: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        catalog_entries: [],
        is_building_block: false,
      },
      {
        smiles: 'Clc1ccc(Br)cc1',
        catalog_entries: [
          {
            vendor_id: 'EN300-19639',
            catalog_name: 'enamine_bb',
            lead_time_weeks: 1.4,
          },
          {
            vendor_id: '',
            catalog_name: 'generic',
            lead_time_weeks: 2.0,
          },
          {
            vendor_id: 'MolPort-001-760-872',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '484811',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'MCULE-2703502243',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '7806',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'SCHEMBL197605',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
        ],
        is_building_block: true,
      },
      {
        smiles: 'O=C(Cn1nnc2ccccc21)NCc1ccsc1',
        catalog_entries: [
          {
            vendor_id: '122211285',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
        ],
        is_building_block: false,
      },
      {
        smiles: 'O=C(CCl)NCc1ccsc1',
        catalog_entries: [
          {
            vendor_id: 'MCULE-7859939466',
            catalog_name: 'mcule',
            lead_time_weeks: 5.0,
          },
          {
            vendor_id: 'BBV-37117076',
            catalog_name: 'enamine_made',
            lead_time_weeks: 6.0,
          },
          {
            vendor_id: '63246074',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: '39696466',
            catalog_name: 'emolecules',
            lead_time_weeks: 12.0,
          },
        ],
        is_building_block: true,
      },
      {
        smiles: 'c1ccc2[nH]nnc2c1',
        catalog_entries: [
          {
            vendor_id: 'SCHEMBL8956',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: '480215',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'EN300-17964',
            catalog_name: 'enamine_bb',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'MolPort-000-151-332',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '5210778',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'MCULE-2848618742',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '',
            catalog_name: 'generic',
            lead_time_weeks: 2.0,
          },
        ],
        is_building_block: true,
      },
    ],
    reactions: [
      {
        name: 'Nucleophilic substitution with amine',
        target: 'O=C(Cn1nnc2ccccc21)NCc1ccsc1',
        sources: ['O=C(CCl)NCc1ccsc1', 'c1ccc2[nH]nnc2c1'],
        smartsTemplate:
          '[N,n;!$(N=*);!$(NC=[*]):2][CX4H3,CX4H2,CX4H1R1,CX4H1R0&$(Cc),CX4H1R0&$(CC=C);!$([CX4][CX4](C)(C)C);!$([Cr3]):1]>>([C:1][Cl].[#1][*:2])',
      },
      {
        name: 'Buchwald-Hartwig amination with amide',
        target: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        sources: ['Clc1ccc(Br)cc1', 'O=C(Cn1nnc2ccccc21)NCc1ccsc1'],
        smartsTemplate: '[c:1][NX3;$(NC=O):2]>>([c:1][Br].[N:2][#1])',
      },
    ],
    disconnections: {
      rxns: [
        {
          atms: [2, 3],
          bnds: [2],
          p_smi: 'O=C(Cn1nnc2ccccc21)NCc1ccsc1',
        },
        {
          atms: [19, 12],
          bnds: [18],
          p_smi: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        },
      ],
      route: {
        atms: [
          [2, 3],
          [19, 12],
        ],
        bnds: [[2], [18]],
      },
    },
  },
  {
    score: 0.0,
    molecules: [
      {
        smiles: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        catalog_entries: [],
        is_building_block: false,
      },
      {
        smiles: 'Clc1ccc(I)cc1',
        catalog_entries: [
          {
            vendor_id: 'MolPort-000-153-151',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '477526',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'SCHEMBL208292',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: '12510',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'EN300-77395',
            catalog_name: 'enamine_bb',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: '',
            catalog_name: 'generic',
            lead_time_weeks: 2.0,
          },
          {
            vendor_id: 'MCULE-3776065149',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
        ],
        is_building_block: true,
      },
      {
        smiles: 'O=C(Cn1nnc2ccccc21)NCc1ccsc1',
        catalog_entries: [
          {
            vendor_id: '122211285',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
        ],
        is_building_block: false,
      },
      {
        smiles: 'NCc1ccsc1',
        catalog_entries: [
          {
            vendor_id: 'SCHEMBL120232',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'WXCD01006275',
            catalog_name: 'wuxi_bb_screening',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: 'MolPort-000-140-225',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '',
            catalog_name: 'generic',
            lead_time_weeks: 2.0,
          },
          {
            vendor_id: 'MCULE-1358443205',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '720302',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: '4328338',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'EN300-110525',
            catalog_name: 'enamine_bb',
            lead_time_weeks: 1.4,
          },
        ],
        is_building_block: true,
      },
      {
        smiles: 'O=C(O)Cn1nnc2ccccc21',
        catalog_entries: [
          {
            vendor_id: 'MCULE-6198639583',
            catalog_name: 'mcule',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: 's_270034____11622716____7554828',
            catalog_name: 'enamine_real',
            lead_time_weeks: 4.0,
          },
          {
            vendor_id: '653350',
            catalog_name: 'emolecules',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'BBV-2156413',
            catalog_name: 'enamine_made',
            lead_time_weeks: 6.0,
          },
          {
            vendor_id: 'EN300-24347',
            catalog_name: 'enamine_bb',
            lead_time_weeks: 0.7,
          },
          {
            vendor_id: 'MolPort-002-471-199',
            catalog_name: 'molport',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: 'SCHEMBL361654',
            catalog_name: 'surechembl',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: 'WXCD01003197',
            catalog_name: 'wuxi_bb_screening',
            lead_time_weeks: 0.0,
          },
          {
            vendor_id: '154446254',
            catalog_name: 'pubchem',
            lead_time_weeks: 12.0,
          },
          {
            vendor_id: '',
            catalog_name: 'generic',
            lead_time_weeks: 2.0,
          },
        ],
        is_building_block: true,
      },
    ],
    reactions: [
      {
        name: 'Amidation',
        target: 'O=C(Cn1nnc2ccccc21)NCc1ccsc1',
        sources: ['NCc1ccsc1', 'O=C(O)Cn1nnc2ccccc21'],
        smartsTemplate:
          '[C:2](=[O:3])[N;!$(N(C=O)(C=O)):1]>>([N:1][#1].[C:2](=[O:3])[O][#1])',
      },
      {
        name: 'Iodo N-arylation',
        target: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        sources: ['Clc1ccc(I)cc1', 'O=C(Cn1nnc2ccccc21)NCc1ccsc1'],
        smartsTemplate: '[c:1]-;!@[$(n),$([N][C]=[O]):2]>>([*:1][I].[*:2][#1])',
      },
    ],
    disconnections: {
      rxns: [
        {
          atms: [1, 12],
          bnds: [11],
          p_smi: 'O=C(Cn1nnc2ccccc21)NCc1ccsc1',
        },
        {
          atms: [19, 12],
          bnds: [18],
          p_smi: 'O=C(Cn1nnc2ccccc21)N(Cc1ccsc1)c1ccc(Cl)cc1',
        },
      ],
      route: {
        atms: [
          [1, 12],
          [19, 12],
        ],
        bnds: [[11], [18]],
      },
    },
  },
]
