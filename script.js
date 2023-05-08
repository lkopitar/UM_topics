var years = [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022];

var data = [
  {
    data: [],
    label: "No data",
    borderColor: "#3e95cd",
    fill: false
  }
];

function roughSizeOfObject( object ) {

    var objectList = [];
    var stack = [ object ];
    var bytes = 0;

    while ( stack.length ) {
        var value = stack.pop();

        if ( typeof value === 'boolean' ) {
            bytes += 4;
        }
        else if ( typeof value === 'string' ) {
            bytes += value.length * 2;
        }
        else if ( typeof value === 'number' ) {
            bytes += 8;
        }
        else if
        (
            typeof value === 'object'
            && objectList.indexOf( value ) === -1
        )
        {
            objectList.push( value );

            for( var i in value ) {
                stack.push( value[ i ] );
            }
        }
    }
    return bytes;
}

$(document).ready(function () {
 

  $(".chosen-select").chosen({max_selected_options: 2}).change(function () {
	  //myChart.destroy();


    var selectedOption = $(this).val();
    var filteredData = [];
	
    if (selectedOption.includes("Art")) {
		filteredData.push(
		{"data": [0, 2, 0, 4, 1, 1, 3, 2, 2, 2], "label": "-1_sloven_art_music_author", "borderColor": "#CAC442", "fill": false}, {"data": [0, 1, 0, 0, 0, 1, 4, 0, 2, 0], "label": "0_english_origin_sloven_award", "borderColor": "#8B9EC8", "fill": false}, {"data": [0, 1, 0, 3, 0, 0, 0, 0, 1, 2], "label": "1_soviet_steven_guitar_translat", "borderColor": "#ABBD9C", "fill": false}
		)
    }

    if (selectedOption.includes("Biology")) {
      filteredData.push(
			{ 
			  data: [4, 7, 8, 10, 6, 2, 4, 9, 2, 3],
			  label: "-1_motoneuron_screen_activ_microbiota",
			  borderColor: "#8e5ea2",
			  fill: false
			},
			{ 
			  data: [10, 17, 8, 9, 6, 6, 2, 9, 2, 2],
			  label: "0_cooper_game_network_strategi",
			  borderColor: "#3cba9f",
			  fill: false
			},
			{ 
			  data: [2, 1, 1, 5, 2, 2, 6, 6, 2, 2],
			  label: "1_bee_coloni_queen_honey be",
			  borderColor: "#e8c3b9",
			  fill: false
			},
			{ 
			  data: [1, 2, 2, 4, 3, 3, 2, 3, 2, 0],
			  label: "2_probiot_hospit_microbiota_coli",
			  borderColor: "#c45850",
			  fill: false
			},
			{ 
			  data: [3, 2, 0, 2, 3, 2, 2, 2, 3, 0],
			  label: "3_plant_habitat_speci_grassland",
			  borderColor: "#8e5ea2",
			  fill: false
			},
			{ 
			  data: [2, 2, 0, 2, 5, 2, 1, 1, 2, 2],
			  label: "4_bind_protein_site_drug",
			  borderColor: "#3cba9f",
			  fill: false
			},
			{ 
			  data: [2, 3, 3, 1, 1, 3, 1, 3, 0, 0],
			  label: "5_difficil_ribotyp_toxin_pcr ribotyp",
			  borderColor: "#e8c3b9",
			  fill: false
			},
			{ 
			  data: [0, 2, 1, 2, 3, 0, 2, 1, 2, 1],
			  label: "6_extract_pullulan_antioxid_acid",
			  borderColor: "#c45850",
			  fill: false
			},
			{ 
			  data: [0, 0, 0, 4, 4, 4, 2, 0, 0, 0],
			  label: "7_multipl_sle_diseas_suscept",
			  borderColor: "#8e5ea2",
			  fill: false
			},
			{ 
			  data: [1, 1, 1, 3, 2, 0, 2, 1, 2, 0],
			  label: "8_genotyp_rootstock_fruit_hybrid",
			  borderColor: "#3cba9f",
			  fill: false
			}
	  );
	
    }

    if (selectedOption.includes("Business")) {
		filteredData.push(
		{"data": [13, 22, 27, 34, 34, 33, 47, 76, 56, 67], "label": "0_manag_compani_studi_model", "borderColor": "#849B53", "fill": false}, {"data": [0, 1, 3, 2, 1, 0, 1, 2, 2, 0], "label": "1_cooper_game_punish_reward", "borderColor": "#F206C7", "fill": false}		)
    }
	
	if (selectedOption.includes("Chemistry")) {
		filteredData.push(
		{"data": [9, 3, 10, 8, 4, 5, 6, 8, 4, 5], "label": "-1_reaction_pet_increas_transport", "borderColor": "#45AF09", "fill": false}, {"data": [2, 6, 2, 5, 6, 7, 15, 8, 2, 0], "label": "0_chitosan_cellulos_film_coat", "borderColor": "#416B9B", "fill": false}, {"data": [1, 0, 2, 4, 4, 9, 9, 16, 5, 0], "label": "1_extract_content_phenol_seed", "borderColor": "#7C9DBB", "fill": false}, {"data": [0, 1, 0, 3, 2, 5, 7, 6, 2, 0], "label": "2_inhibitor_dock_compound_protein", "borderColor": "#A5CF28", "fill": false}, {"data": [2, 0, 2, 3, 0, 3, 3, 3, 1, 3], "label": "3_magnet_immobil_nanoparticl_enzym", "borderColor": "#755D0A", "fill": false}, {"data": [1, 2, 1, 1, 3, 2, 2, 4, 2, 1], "label": "4_membran_flux_remov_solut", "borderColor": "#005973", "fill": false}, {"data": [3, 1, 5, 1, 3, 3, 0, 0, 2, 0], "label": "5_dye_fluoresc_photochrom_fluorin", "borderColor": "#B5061A", "fill": false}, {"data": [1, 0, 1, 1, 2, 1, 3, 1, 3, 0], "label": "6_cell_ca2_motor_fire", "borderColor": "#B0777E", "fill": false}, {"data": [0, 2, 3, 1, 1, 1, 1, 3, 0, 0], "label": "7_bind_multival_probe_superselect", "borderColor": "#B5C5A2", "fill": false}, {"data": [0, 0, 1, 2, 1, 1, 1, 3, 1, 0], "label": "8_corros_indolizin_indolizine deriv_deriv", "borderColor": "#ED3965", "fill": false}
		)
	}
	
	if (selectedOption.includes("Economics")) {
		filteredData.push(
		{"data": [11, 10, 18, 18, 19, 20, 11, 4, 16, 21], "label": "0_model_paper_studi_develop", "borderColor": "#927784", "fill": false}, {"data": [3, 9, 3, 2, 3, 4, 3, 8, 1, 0], "label": "1_cooper_strategi_game_defector", "borderColor": "#5C84B6", "fill": false}		
		)
	}

	if (selectedOption.includes("Education")) {
		filteredData.push(
		{"data": [0, 0, 0, 0, 1, 1, 2, 3, 10, 12], "label": "-1_career_teacher_student_teach", "borderColor": "#DC8451", "fill": false}, {"data": [0, 0, 0, 0, 0, 2, 1, 2, 11, 6], "label": "0_educ_creativ_student_scientif", "borderColor": "#E5463C", "fill": false}, {"data": [0, 0, 1, 0, 0, 0, 1, 2, 4, 8], "label": "1_learn_onlin_student_studi", "borderColor": "#81C487", "fill": false}, {"data": [0, 0, 1, 0, 0, 0, 0, 1, 3, 3], "label": "2_children_approach_child_develop", "borderColor": "#8B0225", "fill": false}		
		)
	}

	if (selectedOption.includes("Engineering")) {
		filteredData.push(
		{"data": [10, 5, 10, 8, 5, 6, 6, 0, 2, 3], "label": "-1_aircraft_emiss_thz_lamp", "borderColor": "#525ADE", "fill": false}, {"data": [6, 8, 2, 5, 4, 3, 9, 4, 3, 2], "label": "0_project_smart_student_mainten", "borderColor": "#AFAB7F", "fill": false}, {"data": [1, 3, 2, 1, 3, 2, 5, 0, 5, 8], "label": "1_timber_crack_structur_soil", "borderColor": "#F81078", "fill": false}, {"data": [3, 4, 3, 5, 4, 6, 2, 0, 0, 0], "label": "2_cut_machin_vibrat_gear", "borderColor": "#69A023", "fill": false}, {"data": [2, 3, 3, 1, 6, 0, 3, 0, 1, 0], "label": "3_measur_sensor_optic_fiber", "borderColor": "#4FF263", "fill": false}, {"data": [0, 4, 0, 1, 1, 2, 1, 1, 2, 4], "label": "4_particl_granul_fluid_cavit", "borderColor": "#4E798D", "fill": false}, {"data": [0, 1, 4, 0, 1, 0, 2, 0, 4, 2], "label": "5_power_transmiss_fault_voltag", "borderColor": "#8BD815", "fill": false}, {"data": [2, 6, 3, 1, 0, 1, 0, 0, 0, 1], "label": "6_roundabout_interject_types roundabout_port", "borderColor": "#57202C", "fill": false}, {"data": [1, 0, 0, 1, 0, 3, 0, 0, 3, 4], "label": "7_membran_filter_wastewat_treatment", "borderColor": "#65EEFA", "fill": false}, {"data": [1, 0, 2, 0, 2, 1, 0, 1, 0, 5], "label": "8_heat_heat pump_collector_steam", "borderColor": "#C703E6", "fill": false}
		)
	}

	if (selectedOption.includes("Geography")) {
		filteredData.push(
		{"data": [3, 6, 2, 10, 1, 3, 2, 8, 3, 0], "label": "0_develop_citi_slovenia_studi", "borderColor": "#D3B5BA", "fill": false}, {"data": [2, 2, 1, 2, 1, 3, 1, 5, 5, 0], "label": "1_speci_plant_studi_divers", "borderColor": "#B932BA", "fill": false}
		)
	}
	
	if (selectedOption.includes("Geology")) {
		filteredData.push(
		{"data": [3, 0, 0, 2, 2, 1, 2, 0, 6, 1], "label": "-1_timber_model_studi_structur", "borderColor": "#DEC5D4", "fill": false}
		)
	}
	
	if (selectedOption.includes("History")) {
		filteredData.push(
		{"data": [0, 0, 1, 0, 0, 2, 1, 2, 3, 1], "label": "-1_street_italian_dictionari_institut", "borderColor": "#F07AC7", "fill": false}, {"data": [0, 1, 0, 0, 1, 0, 0, 4, 3, 1], "label": "0_creativ_cultur_sloven_posit", "borderColor": "#7F6705", "fill": false}, {"data": [1, 0, 0, 0, 0, 1, 0, 2, 0, 1], "label": "1_violenc_war_19_bulgakov", "borderColor": "#D5AFF1", "fill": false}
		)
	}
		
	if (selectedOption.includes("Law")) {
		filteredData.push(
		{"data": [0, 0, 0, 0, 0, 0, 0, 0, 1, 6], "label": "-1_polic_offic_police offic_law", "borderColor": "#D3CA78", "fill": false}
		)
	}
	
	if (selectedOption.includes("Linguistics")) {
		filteredData.push(
		{"data": [0, 0, 0, 0, 0, 1, 1, 2, 5, 2], "label": "-1_languag_sloven_translat_english", "borderColor": "#6A5DBF", "fill": false}
		)
	}
	
	if (selectedOption.includes("Mathematics")) {
		filteredData.push(
		{"data": [2, 4, 1, 2, 1, 4, 2, 3, 2, 0], "label": "-1_plant_control_inverse limit_planting spe", "borderColor": "#A18D4A", "fill": false}, {"data": [2, 1, 2, 4, 14, 14, 19, 23, 11, 6], "label": "0_graph_domin_vertic_vertex", "borderColor": "#2883CF", "fill": false}, {"data": [0, 3, 0, 3, 7, 4, 5, 4, 1, 1], "label": "1_cooper_network_social_popul", "borderColor": "#D33779", "fill": false}, {"data": [2, 2, 1, 2, 1, 3, 4, 4, 2, 1], "label": "2_algebra_map_linear map_lie", "borderColor": "#572AD7", "fill": false}, {"data": [6, 3, 1, 4, 1, 3, 1, 3, 0, 0], "label": "3_solut_method_optim_approxim", "borderColor": "#692B7F", "fill": false}, {"data": [1, 0, 2, 1, 2, 6, 1, 2, 3, 2], "label": "4_bifurc_limit cycl_system_cycl", "borderColor": "#57297E", "fill": false}, {"data": [1, 1, 2, 2, 0, 3, 2, 0, 1, 2], "label": "5_prime_semiprim_additive map_deriv", "borderColor": "#F8906D", "fill": false}, {"data": [2, 1, 2, 1, 1, 0, 1, 5, 0, 0], "label": "6_regress_interpret_model_featur", "borderColor": "#FB1D13", "fill": false}, {"data": [0, 0, 1, 1, 1, 2, 3, 3, 0, 0], "label": "7_partial_star_star parti_array", "borderColor": "#BB8100", "fill": false}, {"data": [0, 1, 0, 3, 3, 1, 1, 1, 0, 0], "label": "8_motor unit_motor_emg_signal", "borderColor": "#E6084D", "fill": false}
		)
	}

    if (selectedOption.includes("Medicine")) {
      filteredData.push(
			{
			data: [4, 7, 5, 2, 7, 8, 5, 6, 17, 8],
			label: "0_famili_family medicin_care_physician",
			borderColor: "#3e95cd",
			fill: false
		  },
		  {
			data: [8, 11, 7, 8, 3, 3, 5, 9, 6, 6],
			label: "1_cooper_game_punish_dilemma",
			borderColor: "#8e5ea2",
			fill: false
		  },
		  {
			data: [1, 1, 1, 2, 2, 3, 6, 12, 13, 14],
			label: "2_extract_phenol_antioxid_content",
			borderColor: "#3cba9f",
			fill: false
		  },
		  {
			data: [5, 3, 4, 4, 5, 3, 3, 3, 12, 6],
			label: "3_ckd_creatinin_kidney_cystatin",
			borderColor: "#e8c3b9",
			fill: false
		  },
		  {
			data: [5, 6, 6, 4, 3, 5, 3, 9, 2, 2],
			label: "4_nemat_chiral_phase_liquid cryst",
			borderColor: "#c45850",
			fill: false
		  },
		  {
			data: [2, 2, 1, 2, 6, 2, 6, 7, 14, 3],
			label: "5_cov_resect_endoscop_surgeri",
			borderColor: "#3e95cd",
			fill: false
		  },
		  {
			data: [5, 1, 3, 0, 4, 1, 5, 2, 12, 9],
			label: "6_beta cel_ca2_beta_islet",
			borderColor: "#8e5ea2",
			fill: false
		  },
		  {
			data: [7, 0, 5, 5, 4, 4, 3, 2, 6, 0],
			label: "7_decay_branching fract_bell_1s",
			borderColor: "#3cba9f",
			fill: false
		  },
		  {
			data: [3, 3, 1, 3, 2, 1, 3, 1, 7, 7],
			label: "8_probi_bind_binding sit_site",
			borderColor: "#e8c3b9",
			fill: false
		  }
	  );
    }

	if (selectedOption.includes("Philosophy")) {
		filteredData.push(
		{"data": [1, 0, 0, 0, 0, 2, 0, 1, 3, 2], "label": "-1_scienc_slovenian_dialogu_histor", "borderColor": "#3C7EAD", "fill": false}
		)
	}
	
	if (selectedOption.includes("Physics")) {
		filteredData.push(
{"data": [0, 1, 0, 1, 2, 3, 4, 5, 2, 5], "label": "-1_water_miner_h2_vaccin", "borderColor": "#A7FD37", "fill": false}, {"data": [23, 17, 21, 17, 21, 25, 14, 18, 14, 2], "label": "0_pi_decay_bell_branch", "borderColor": "#653F3A", "fill": false}, {"data": [8, 18, 8, 6, 9, 8, 4, 8, 9, 3], "label": "1_cooper_strategi_network_game", "borderColor": "#B5F161", "fill": false}, {"data": [5, 8, 4, 4, 6, 5, 6, 5, 5, 0], "label": "2_nemat_liquid_membran_crystal", "borderColor": "#B75E35", "fill": false}, {"data": [2, 3, 3, 5, 6, 6, 5, 6, 2, 2], "label": "3_neuron_oscil_chimera_synchron", "borderColor": "#C20172", "fill": false}, {"data": [1, 1, 1, 1, 8, 7, 8, 1, 3, 4], "label": "4_pedestrian_model_tool_develop", "borderColor": "#7E96B3", "fill": false}, {"data": [2, 2, 2, 3, 2, 2, 2, 2, 0, 0], "label": "5_document_document docu_invas_speci", "borderColor": "#B15F8D", "fill": false}, {"data": [3, 2, 1, 0, 0, 2, 0, 2, 1, 2], "label": "6_turbul_heat_vortex_centrifug", "borderColor": "#DB09AA", "fill": false}, {"data": [2, 0, 1, 0, 0, 1, 2, 1, 3, 2], "label": "7_scienc_univers_institut_nation", "borderColor": "#C052DD", "fill": false}, {"data": [0, 1, 0, 1, 2, 0, 1, 3, 2, 2], "label": "8_magnet_permanent magnet_disk_perman", "borderColor": "#538C56", "fill": false}

		)
	}
	
	if (selectedOption.includes("Psychology")) {
		filteredData.push(
{"data": [3, 5, 2, 6, 8, 10, 5, 16, 5, 2], "label": "-1_school_care_compet_intervent", "borderColor": "#22543D", "fill": false}, {"data": [1, 1, 2, 5, 3, 10, 3, 7, 3, 1], "label": "0_crime_victim_prison_interrog", "borderColor": "#7CEC8A", "fill": false}, {"data": [2, 1, 2, 1, 2, 5, 1, 7, 4, 0], "label": "1_employe_engag_compani_wfc", "borderColor": "#592449", "fill": false}, {"data": [0, 2, 3, 4, 2, 2, 2, 6, 2, 0], "label": "2_art_music_children_childhood", "borderColor": "#74297E", "fill": false}, {"data": [1, 2, 1, 1, 3, 5, 0, 4, 3, 0], "label": "3_languag_bilingu_bilingual educ_english", "borderColor": "#629991", "fill": false}, {"data": [0, 0, 0, 0, 1, 3, 4, 4, 4, 2], "label": "4_covid 19_covid_ztpi_19", "borderColor": "#8A8443", "fill": false}, {"data": [0, 2, 0, 1, 3, 2, 3, 4, 1, 0], "label": "5_medic_medicin_family medicin_hcps", "borderColor": "#2B9AD7", "fill": false}, {"data": [0, 0, 2, 1, 2, 4, 0, 4, 2, 0], "label": "6_cognit_task_tac_memori", "borderColor": "#C5A782", "fill": false}, {"data": [0, 1, 2, 1, 3, 0, 0, 4, 1, 0], "label": "7_leadership_job satisfact_nurs_job", "borderColor": "#0CF70A", "fill": false}, {"data": [0, 1, 2, 1, 1, 2, 2, 1, 2, 0], "label": "8_ld_efl_social_parent", "borderColor": "#68DB2A", "fill": false}
		)
	}
	
	if (selectedOption.includes("Sociology")) {
		filteredData.push(
		{"data": [1, 2, 0, 0, 5, 2, 2, 6, 3, 1], "label": "-1_music_polit_develop_educ", "borderColor": "#E6F532", "fill": false}, {"data": [3, 2, 2, 5, 4, 3, 2, 3, 3, 0], "label": "0_system_network_social_human", "borderColor": "#FE63E9", "fill": false}, {"data": [1, 1, 3, 0, 2, 3, 2, 5, 2, 1], "label": "1_languag_teacher_school_slovenian", "borderColor": "#8D1AD1", "fill": false}, {"data": [0, 0, 0, 1, 1, 0, 4, 2, 2, 3], "label": "2_heritag_brand_destin_tourist", "borderColor": "#B0841F", "fill": false}, {"data": [0, 0, 0, 0, 0, 2, 3, 1, 2, 0], "label": "3_learn_technolog_literaci_approach", "borderColor": "#975A64", "fill": false}, {"data": [0, 1, 1, 0, 0, 2, 0, 2, 0, 0], "label": "4_polic_prison_resid_communiti", "borderColor": "#13EF2B", "fill": false}, {"data": [0, 0, 0, 0, 2, 2, 0, 1, 0, 0], "label": "5_nurs_humour_informat_nursing informat", "borderColor": "#F26753", "fill": false}
		)
	}
	
	document.getElementById("p1").innerHTML = selectedOption; //selectedOption;


	myChart.destroy();
    myChart = new Chart($("#myChart"), {
      type: "line",
      data: {
        labels: years,
        datasets: filteredData.length > 0 ? filteredData : data,
      },
	    options: {
    // This chart will not respond to mousemove, etc
      //events: ['click', 'selection']
	}
    });
  });

  var myChart = new Chart($("#myChart"), {
    type: "line",
    data: {
      labels: years,
      datasets: data,
    },
  });
  
  
});
