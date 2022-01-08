// icon generators
let icons = [
    // User :
    'gb_account_circle',
    'gb_account_box',
    'gb_assignment_ind',
    'gb_perm_contact_calendar',
    'gb_person_pin',
    'gb_wc',
    'gb_accessible',
    'gb_pregnant_woman',
    'gb_accessibility',
    'gb_directions_run',
    'gb_pool',
    'gb_rowing',
    'gb_airline_seat_flat',
    'gb_airline_seat_flat_angled',
    'gb_airline_seat_individual_suite',
    'gb_airline_seat_legroom_extra',
    'gb_airline_seat_legroom_normal',
    'gb_airline_seat_legroom_reduced',
    'gb_airline_seat_recline_extra',
    'gb_airline_seat_recline_normal',
    'gb_person',
    'gb_person_outline',
    'gb_people',
    'gb_people_outline',
    'gb_group_add',
    'gb_person_add',
    'gb_person_pin_circle',
    'gb_recent_actors',
    'gb_record_voice_over',

    // Time :
    'gb_access_time',
    'gb_alarm',
    'gb_alarm_add',
    'gb_alarm_off',
    'gb_alarm_on',
    'gb_av_timer',

    'gb_3d_rotation',
    'gb_ac_unit',
    'gb_account_balance',
    'gb_account_balance_wallet',
    'gb_adb',
    'gb_add',
    'gb_add_a_photo',
    'gb_add_alert',
    'gb_add_box',
    'gb_add_circle',
    'gb_add_circle_outline',
    'gb_add_location',
    'gb_add_shopping_cart',
    'gb_add_to_photos',
    'gb_add_to_queue',
    'gb_adjust',
    'gb_airplanemode_active',
    'gb_airplanemode_inactive',
    'gb_airplay',
    'gb_airport_shuttle',
    'gb_album',
    'gb_all_inclusive',
    'gb_all_out',
    'gb_android',
    'gb_announcement',
    'gb_aparat',
    'gb_apple',
    'gb_apps',
    'gb_archive',

    'gb_arrow_back',
    'gb_arrow_downward',
    'gb_arrow_drop_down',
    'gb_arrow_drop_down_circle',
    'gb_arrow_drop_up',
    'gb_arrow_forward',
    'gb_arrow_upward',
    'gb_art_track',
    'gb_aspect_ratio',
    'gb_assessment',
    'gb_assignment',
    'gb_assignment_late',
    'gb_assignment_return',
    'gb_assignment_returned',
    'gb_assignment_turned_in',
    'gb_assistant',
    'gb_assistant_photo',
    'gb_attach_file',
    'gb_attach_money',
    'gb_attachment',
    'gb_audiotrack',
    'gb_autorenew',
    'gb_backspace',
    'gb_backup',
    'gb_battery_alert',
    'gb_battery_charging_full',
    'gb_battery_full',
    'gb_battery_std',
    'gb_battery_unknown',
    'gb_beach_access',
    'gb_beenhere',
    'gb_bisphone',
    'gb_block',
    'gb_bluetooth',
    'gb_bluetooth_audio',
    'gb_bluetooth_connected',
    'gb_bluetooth_disabled',
    'gb_bluetooth_searching',
    'gb_blur_circular',
    'gb_blur_linear',
    'gb_blur_off',
    'gb_blur_on',
    'gb_book',
    'gb_bookmark',
    'gb_bookmark_border',
    'gb_border_all',
    'gb_border_bottom',
    'gb_border_clear',
    'gb_border_color',
    'gb_border_horizontal',
    'gb_border_inner',
    'gb_border_left',
    'gb_border_outer',
    'gb_border_right',
    'gb_border_style',
    'gb_border_top',
    'gb_border_vertical',
    'gb_branding_watermark',
    'gb_brightness_1',
    'gb_brightness_2',
    'gb_brightness_3',
    'gb_brightness_4',
    'gb_brightness_5',
    'gb_brightness_6',
    'gb_brightness_7',
    'gb_brightness_auto',
    'gb_brightness_high',
    'gb_brightness_low',
    'gb_brightness_medium',
    'gb_broken_image',
    'gb_brush',
    'gb_bubble_chart',
    'gb_bug_report',
    'gb_build',
    'gb_burst_mode',
    'gb_business',
    'gb_business_center',
    'gb_cafebazaar',
    'gb_cached',
    'gb_cake',
    'gb_call',
    'gb_call_end',
    'gb_call_made',
    'gb_call_merge',
    'gb_call_missed',
    'gb_call_missed_outgoing',
    'gb_call_received',
    'gb_call_split',
    'gb_call_to_action',
    'gb_camera',
    'gb_camera_alt',
    'gb_camera_enhance',
    'gb_camera_front',
    'gb_camera_rear',
    'gb_camera_roll',
    'gb_cancel',
    'gb_card_giftcard',
    'gb_card_membership',
    'gb_card_travel',
    'gb_casino',
    'gb_cast',
    'gb_cast_connected',
    'gb_center_focus_strong',
    'gb_center_focus_weak',
    'gb_change_history',
    'gb_chat',
    'gb_chat_bubble',
    'gb_chat_bubble_outline',
    'gb_check',
    'gb_check_box',
    'gb_check_box_outline_blank',
    'gb_check_circle',
    'gb_chevron_left',
    'gb_chevron_right',
    'gb_child_care',
    'gb_child_friendly',
    'gb_chrome_reader_mode',
    'gb_class',
    'gb_clear',
    'gb_clear_all',
    'gb_close',
    'gb_closed_caption',
    'gb_cloob',
    'gb_cloud',
    'gb_cloud_circle',
    'gb_cloud_done',
    'gb_cloud_download',
    'gb_cloud_off',
    'gb_cloud_queue',
    'gb_cloud_upload',
    'gb_code',
    'gb_collections',
    'gb_collections_bookmark',
    'gb_color_lens',
    'gb_colorize',
    'gb_comment',
    'gb_compare',
    'gb_compare_arrows',
    'gb_computer',
    'gb_confirmation_number',
    'gb_contact_mail',
    'gb_contact_phone',
    'gb_contacts',
    'gb_content_copy',
    'gb_content_cut',
    'gb_content_paste',
    'gb_control_point',
    'gb_control_point_duplicate',
    'gb_copyright',
    'gb_create',
    'gb_create_new_folder',
    'gb_creative_commons',
    'gb_credit_card',
    'gb_crop',
    'gb_crop_16_9',
    'gb_crop_3_2',
    'gb_crop_5_4',
    'gb_crop_7_5',
    'gb_crop_din',
    'gb_crop_free',
    'gb_crop_landscape',
    'gb_crop_original',
    'gb_crop_portrait',
    'gb_crop_rotate',
    'gb_crop_square',
    'gb_dashboard',
    'gb_data_usage',
    'gb_date_range',
    'gb_dehaze',
    'gb_delete',
    'gb_delete_forever',
    'gb_delete_sweep',
    'gb_description',
    'gb_desktop_mac',
    'gb_desktop_windows',
    'gb_details',
    'gb_developer_board',
    'gb_developer_mode',
    'gb_device_hub',
    'gb_devices',
    'gb_devices_other',
    'gb_dialer_sip',
    'gb_dialpad',
    'gb_directions',
    'gb_directions_bike',
    'gb_directions_boat',
    'gb_directions_bus',
    'gb_directions_car',
    'gb_directions_railway',
    'gb_directions_subway',
    'gb_directions_transit',
    'gb_directions_walk',
    'gb_disc_full',
    'gb_dns',
    'gb_do_not_disturb',
    'gb_do_not_disturb_alt',
    'gb_do_not_disturb_off',
    'gb_do_not_disturb_on',
    'gb_dock',
    'gb_domain',
    'gb_done',
    'gb_done_all',
    'gb_donut_large',
    'gb_donut_small',
    'gb_drafts',
    'gb_drag_handle',
    'gb_drive_eta',
    'gb_dvr',
    'gb_edit',
    'gb_edit_location',
    'gb_eject',
    'gb_email',
    'gb_enamad',
    'gb_enhanced_encryption',
    'gb_equalizer',
    'gb_error',
    'gb_error_outline',
    'gb_euro_symbol',
    'gb_ev_station',
    'gb_event',
    'gb_event_available',
    'gb_event_busy',
    'gb_event_note',
    'gb_event_seat',
    'gb_exit_to_app',
    'gb_expand_less',
    'gb_expand_more',
    'gb_explicit',
    'gb_explore',
    'gb_exposure',
    'gb_exposure_neg_1',
    'gb_exposure_neg_2',
    'gb_exposure_plus_1',
    'gb_exposure_plus_2',
    'gb_exposure_zero',
    'gb_extension',
    'gb_face',
    'gb_facebook',
    'gb_facenama',
    'gb_fast_forward',
    'gb_fast_rewind',
    'gb_favorite',
    'gb_favorite_border',
    'gb_featured_play_list',
    'gb_featured_video',
    'gb_feedback',
    'gb_fiber_dvr',
    'gb_fiber_manual_record',
    'gb_fiber_new',
    'gb_fiber_pin',
    'gb_fiber_smart_record',
    'gb_file_download',
    'gb_file_upload',
    'gb_filter',
    'gb_filter_1',
    'gb_filter_2',
    'gb_filter_3',
    'gb_filter_4',
    'gb_filter_5',
    'gb_filter_6',
    'gb_filter_7',
    'gb_filter_8',
    'gb_filter_9',
    'gb_filter_9_plus',
    'gb_filter_b_and_w',
    'gb_filter_center_focus',
    'gb_filter_drama',
    'gb_filter_frames',
    'gb_filter_hdr',
    'gb_filter_list',
    'gb_filter_none',
    'gb_filter_tilt_shift',
    'gb_filter_vintage',
    'gb_find_in_page',
    'gb_find_replace',
    'gb_fingerprint',
    'gb_first_page',
    'gb_fitness_center',
    'gb_flag',
    'gb_flare',
    'gb_flash_auto',
    'gb_flash_off',
    'gb_flash_on',
    'gb_flight',
    'gb_flight_land',
    'gb_flight_takeoff',
    'gb_flip',
    'gb_flip_to_back',
    'gb_flip_to_front',
    'gb_folder',
    'gb_folder_open',
    'gb_folder_shared',
    'gb_folder_special',
    'gb_font_download',
    'gb_format_align_center',
    'gb_format_align_justify',
    'gb_format_align_left',
    'gb_format_align_right',
    'gb_format_bold',
    'gb_format_clear',
    'gb_format_color_fill',
    'gb_format_color_reset',
    'gb_format_color_text',
    'gb_format_indent_decrease',
    'gb_format_indent_increase',
    'gb_format_italic',
    'gb_format_line_spacing',
    'gb_format_list_bulleted',
    'gb_format_list_numbered',
    'gb_format_paint',
    'gb_format_quote',
    'gb_format_shapes',
    'gb_format_size',
    'gb_format_strikethrough',
    'gb_format_textdirection_l_to_r',
    'gb_format_textdirection_r_to_l',
    'gb_format_underlined',
    'gb_forum',
    'gb_forward',
    'gb_forward_10',
    'gb_forward_30',
    'gb_forward_5',
    'gb_free_breakfast',
    'gb_fullscreen',
    'gb_fullscreen_exit',
    'gb_functions',
    'gb_g_translate',
    'gb_gamepad',
    'gb_games',
    'gb_gavel',
    'gb_gesture',
    'gb_get_app',
    'gb_gif',
    'gb_github',
    'gb_golf_course',
    'gb_google_play',
    'gb_google_plus',
    'gb_gps_fixed',
    'gb_gps_not_fixed',
    'gb_gps_off',
    'gb_grade',
    'gb_gradient',
    'gb_grain',
    'gb_graphic_eq',
    'gb_grid_off',
    'gb_grid_on',
    'gb_group_work',
    'gb_hd',
    'gb_hdr_off',
    'gb_hdr_on',
    'gb_hdr_strong',
    'gb_hdr_weak',
    'gb_headset',
    'gb_headset_mic',
    'gb_healing',
    'gb_hearing',
    'gb_help',
    'gb_help_outline',
    'gb_high_quality',
    'gb_highlight',
    'gb_highlight_off',
    'gb_history',
    'gb_home',
    'gb_hot_tub',
    'gb_hotel',
    'gb_hourglass_empty',
    'gb_hourglass_full',
    'gb_http',
    'gb_https',
    'gb_image',
    'gb_image_aspect_ratio',
    'gb_import_contacts',
    'gb_import_export',
    'gb_important_devices',
    'gb_inbox',
    'gb_indeterminate_check_box',
    'gb_info',
    'gb_info_outline',
    'gb_input',
    'gb_insert_chart',
    'gb_insert_comment',
    'gb_insert_drive_file',
    'gb_insert_emoticon',
    'gb_insert_invitation',
    'gb_insert_link',
    'gb_insert_photo',
    'gb_instagram',
    'gb_invert_colors',
    'gb_invert_colors_off',
    'gb_iranapps',
    'gb_iso',
    'gb_keyboard',
    'gb_keyboard_arrow_down',
    'gb_keyboard_arrow_left',
    'gb_keyboard_arrow_right',
    'gb_keyboard_arrow_up',
    'gb_keyboard_backspace',
    'gb_keyboard_capslock',
    'gb_keyboard_hide',
    'gb_keyboard_return',
    'gb_keyboard_tab',
    'gb_keyboard_voice',
    'gb_kitchen',
    'gb_label',
    'gb_label_outline',
    'gb_landscape',
    'gb_language',
    'gb_laptop',
    'gb_laptop_chromebook',
    'gb_laptop_mac',
    'gb_laptop_windows',
    'gb_last_page',
    'gb_launch',
    'gb_layers',
    'gb_layers_clear',
    'gb_leak_add',
    'gb_leak_remove',
    'gb_lens',
    'gb_lenzor',
    'gb_library_add',
    'gb_library_books',
    'gb_library_music',
    'gb_lightbulb_outline',
    'gb_line_style',
    'gb_line_weight',
    'gb_linear_scale',
    'gb_link',
    'gb_linked_camera',
    'gb_linkedin',
    'gb_list',
    'gb_live_help',
    'gb_live_tv',
    'gb_local_activity',
    'gb_local_airport',
    'gb_local_atm',
    'gb_local_bar',
    'gb_local_cafe',
    'gb_local_car_wash',
    'gb_local_convenience_store',
    'gb_local_dining',
    'gb_local_drink',
    'gb_local_florist',
    'gb_local_gas_station',
    'gb_local_grocery_store',
    'gb_local_hospital',
    'gb_local_hotel',
    'gb_local_laundry_service',
    'gb_local_library',
    'gb_local_mall',
    'gb_local_movies',
    'gb_local_offer',
    'gb_local_parking',
    'gb_local_pharmacy',
    'gb_local_phone',
    'gb_local_pizza',
    'gb_local_play',
    'gb_local_post_office',
    'gb_local_printshop',
    'gb_local_see',
    'gb_local_shipping',
    'gb_local_taxi',
    'gb_location_city',
    'gb_location_disabled',
    'gb_location_off',
    'gb_location_on',
    'gb_location_searching',
    'gb_lock',
    'gb_lock_open',
    'gb_lock_outline',
    'gb_looks',
    'gb_looks_3',
    'gb_looks_4',
    'gb_looks_5',
    'gb_looks_6',
    'gb_looks_one',
    'gb_looks_two',
    'gb_loop',
    'gb_loupe',
    'gb_low_priority',
    'gb_loyalty',
    'gb_mail',
    'gb_mail_outline',
    'gb_map',
    'gb_markunread',
    'gb_markunread_mailbox',
    'gb_mellat',
    'gb_memory',
    'gb_menu',
    'gb_merge_type',
    'gb_message',
    'gb_mic',
    'gb_mic_none',
    'gb_mic_off',
    'gb_mms',
    'gb_mode_comment',
    'gb_mode_edit',
    'gb_monetization_on',
    'gb_money_off',
    'gb_monochrome_photos',
    'gb_mood',
    'gb_mood_bad',
    'gb_more',
    'gb_more_horiz',
    'gb_more_vert',
    'gb_motorcycle',
    'gb_mouse',
    'gb_move_to_inbox',
    'gb_movie',
    'gb_movie_creation',
    'gb_movie_filter',
    'gb_multiline_chart',
    'gb_music_note',
    'gb_music_video',
    'gb_my_location',
    'gb_myket',
    'gb_nature',
    'gb_nature_people',
    'gb_navigate_before',
    'gb_navigate_next',
    'gb_navigation',
    'gb_near_me',
    'gb_network_cell',
    'gb_network_check',
    'gb_network_locked',
    'gb_network_wifi',
    'gb_new_releases',
    'gb_next_week',
    'gb_nfc',
    'gb_no_encryption',
    'gb_no_sim',
    'gb_not_interested',
    'gb_note',
    'gb_note_add',
    'gb_notifications',
    'gb_notifications_active',
    'gb_notifications_none',
    'gb_notifications_off',
    'gb_notifications_paused',
    'gb_offline_pin',
    'gb_ondemand_video',
    'gb_opacity',
    'gb_open_in_browser',
    'gb_open_in_new',
    'gb_open_with',
    'gb_pages',
    'gb_pageview',
    'gb_palette',
    'gb_pan_tool',
    'gb_panorama',
    'gb_panorama_fish_eye',
    'gb_panorama_horizontal',
    'gb_panorama_vertical',
    'gb_panorama_wide_angle',
    'gb_parsian',
    'gb_party_mode',
    'gb_pause',
    'gb_pause_circle_filled',
    'gb_pause_circle_outline',
    'gb_payment',
    'gb_perm_camera_mic',
    'gb_perm_data_setting',
    'gb_perm_device_information',
    'gb_perm_media',
    'gb_perm_phone_msg',
    'gb_perm_scan_wifi',
    'gb_personal_video',
    'gb_pets',
    'gb_phone',
    'gb_phone_android',
    'gb_phone_bluetooth_speaker',
    'gb_phone_forwarded',
    'gb_phone_in_talk',
    'gb_phone_iphone',
    'gb_phone_locked',
    'gb_phone_missed',
    'gb_phone_paused',
    'gb_phonelink',
    'gb_phonelink_erase',
    'gb_phonelink_lock',
    'gb_phonelink_off',
    'gb_phonelink_ring',
    'gb_phonelink_setup',
    'gb_photo',
    'gb_photo_album',
    'gb_photo_camera',
    'gb_photo_filter',
    'gb_photo_library',
    'gb_photo_size_select_actual',
    'gb_photo_size_select_large',
    'gb_photo_size_select_small',
    'gb_picture_as_pdf',
    'gb_picture_in_picture',
    'gb_picture_in_picture_alt',
    'gb_pie_chart',
    'gb_pie_chart_outlined',
    'gb_pin_drop',
    'gb_place',
    'gb_play_arrow',
    'gb_play_circle_filled',
    'gb_play_circle_outline',
    'gb_play_for_work',
    'gb_playlist_add',
    'gb_playlist_add_check',
    'gb_playlist_play',
    'gb_plus_one',
    'gb_poll',
    'gb_polymer',
    'gb_portable_wifi_off',
    'gb_portrait',
    'gb_power',
    'gb_power_input',
    'gb_power_settings_new',
    'gb_present_to_all',
    'gb_print',
    'gb_priority_high',
    'gb_public',
    'gb_publish',
    'gb_query_builder',
    'gb_question_answer',
    'gb_queue',
    'gb_queue_music',
    'gb_queue_play_next',
    'gb_radio',
    'gb_radio_button_checked',
    'gb_radio_button_unchecked',
    'gb_rasaneh',
    'gb_rate_review',
    'gb_receipt',
    'gb_redeem',
    'gb_redo',
    'gb_refresh',
    'gb_remove',
    'gb_remove_circle',
    'gb_remove_circle_outline',
    'gb_remove_from_queue',
    'gb_remove_red_eye',
    'gb_remove_shopping_cart',
    'gb_reorder',
    'gb_repeat',
    'gb_repeat_one',
    'gb_replay',
    'gb_replay_10',
    'gb_replay_30',
    'gb_replay_5',
    'gb_reply',
    'gb_reply_all',
    'gb_report',
    'gb_report_problem',
    'gb_restaurant',
    'gb_restaurant_menu',
    'gb_restore',
    'gb_restore_page',
    'gb_ring_volume',
    'gb_room',
    'gb_room_service',
    'gb_rotate_90_degrees_ccw',
    'gb_rotate_left',
    'gb_rotate_right',
    'gb_rounded_corner',
    'gb_router',
    'gb_rss_feed',
    'gb_rv_hookup',
    'gb_saman',
    'gb_satellite',
    'gb_save',
    'gb_scanner',
    'gb_schedule',
    'gb_school',
    'gb_screen_lock_landscape',
    'gb_screen_lock_portrait',
    'gb_screen_lock_rotation',
    'gb_screen_rotation',
    'gb_screen_share',
    'gb_sd_card',
    'gb_sd_storage',
    'gb_search',
    'gb_security',
    'gb_select_all',
    'gb_send',
    'gb_sentiment_dissatisfied',
    'gb_sentiment_neutral',
    'gb_sentiment_satisfied',
    'gb_sentiment_very_dissatisfied',
    'gb_sentiment_very_satisfied',
    'gb_settings',
    'gb_settings_applications',
    'gb_settings_backup_restore',
    'gb_settings_bluetooth',
    'gb_settings_brightness',
    'gb_settings_cell',
    'gb_settings_ethernet',
    'gb_settings_input_antenna',
    'gb_settings_input_component',
    'gb_settings_input_composite',
    'gb_settings_input_hdmi',
    'gb_settings_input_svideo',
    'gb_settings_overscan',
    'gb_settings_phone',
    'gb_settings_power',
    'gb_settings_remote',
    'gb_settings_system_daydream',
    'gb_settings_voice',
    'gb_share',
    'gb_shop',
    'gb_shop_two',
    'gb_shopping_basket',
    'gb_shopping_cart',
    'gb_short_text',
    'gb_show_chart',
    'gb_shuffle',
    'gb_signal_cellular_4_bar',
    'gb_signal_cellular_connected_no_internet_4_bar',
    'gb_signal_cellular_no_sim',
    'gb_signal_cellular_null',
    'gb_signal_cellular_off',
    'gb_signal_wifi_4_bar',
    'gb_signal_wifi_4_bar_lock',
    'gb_signal_wifi_off',
    'gb_sim_card',
    'gb_sim_card_alert',
    'gb_skip_next',
    'gb_skip_previous',
    'gb_skype',
    'gb_slideshare',
    'gb_slideshow',
    'gb_slow_motion_video',
    'gb_smartphone',
    'gb_smoke_free',
    'gb_smoking_rooms',
    'gb_sms',
    'gb_sms_failed',
    'gb_snooze',
    'gb_sort',
    'gb_sort_by_alpha',
    'gb_spa',
    'gb_space_bar',
    'gb_speaker',
    'gb_speaker_group',
    'gb_speaker_notes',
    'gb_speaker_notes_off',
    'gb_speaker_phone',
    'gb_spellcheck',
    'gb_star',
    'gb_star_border',
    'gb_star_half',
    'gb_stars',
    'gb_stay_current_landscape',
    'gb_stay_current_portrait',
    'gb_stay_primary_landscape',
    'gb_stay_primary_portrait',
    'gb_stop',
    'gb_stop_screen_share',
    'gb_storage',
    'gb_store',
    'gb_store_mall_directory',
    'gb_straighten',
    'gb_streetview',
    'gb_strikethrough_s',
    'gb_style',
    'gb_subdirectory_arrow_left',
    'gb_subdirectory_arrow_right',
    'gb_subject',
    'gb_subscriptions',
    'gb_subtitles',
    'gb_subway',
    'gb_surround_sound',
    'gb_swap_calls',
    'gb_swap_horiz',
    'gb_swap_vert',
    'gb_swap_vertical_circle',
    'gb_switch_camera',
    'gb_switch_video',
    'gb_sync',
    'gb_sync_disabled',
    'gb_sync_problem',
    'gb_system_update',
    'gb_system_update_alt',
    'gb_tab',
    'gb_tab_unselected',
    'gb_tablet',
    'gb_tablet_android',
    'gb_tablet_mac',
    'gb_tag_faces',
    'gb_tap_and_play',
    'gb_telegram',
    'gb_terrain',
    'gb_text_fields',
    'gb_text_format',
    'gb_textsms',
    'gb_texture',
    'gb_theaters',
    'gb_thumb_down',
    'gb_thumb_up',
    'gb_thumbs_up_down',
    'gb_time_to_leave',
    'gb_timelapse',
    'gb_timeline',
    'gb_timer',
    'gb_timer_10',
    'gb_timer_3',
    'gb_timer_off',
    'gb_title',
    'gb_toc',
    'gb_today',
    'gb_toll',
    'gb_tonality',
    'gb_touch_app',
    'gb_toys',
    'gb_track_changes',
    'gb_traffic',
    'gb_train',
    'gb_tram',
    'gb_transfer_within_a_station',
    'gb_transform',
    'gb_translate',
    'gb_trending_down',
    'gb_trending_flat',
    'gb_trending_up',
    'gb_tune',
    'gb_turned_in',
    'gb_turned_in_not',
    'gb_tv',
    'gb_twitter',
    'gb_unarchive',
    'gb_undo',
    'gb_unfold_less',
    'gb_unfold_more',
    'gb_update',
    'gb_usb',
    'gb_verified_user',
    'gb_vertical_align_bottom',
    'gb_vertical_align_center',
    'gb_vertical_align_top',
    'gb_vibration',
    'gb_video_call',
    'gb_video_label',
    'gb_video_library',
    'gb_videocam',
    'gb_videocam_off',
    'gb_videogame_asset',
    'gb_view_agenda',
    'gb_view_array',
    'gb_view_carousel',
    'gb_view_column',
    'gb_view_comfy',
    'gb_view_compact',
    'gb_view_day',
    'gb_view_headline',
    'gb_view_list',
    'gb_view_module',
    'gb_view_quilt',
    'gb_view_stream',
    'gb_view_week',
    'gb_vignette',
    'gb_visibility',
    'gb_visibility_off',
    'gb_voice_chat',
    'gb_voicemail',
    'gb_volume_down',
    'gb_volume_mute',
    'gb_volume_off',
    'gb_volume_up',
    'gb_vpn_key',
    'gb_vpn_lock',
    'gb_wallpaper',
    'gb_warning',
    'gb_watch',
    'gb_watch_later',
    'gb_wb_auto',
    'gb_wb_cloudy',
    'gb_wb_incandescent',
    'gb_wb_iridescent',
    'gb_wb_sunny',
    'gb_web',
    'gb_web_asset',
    'gb_weekend',
    'gb_whatsapp',
    'gb_whatshot',
    'gb_widgets',
    'gb_wifi',
    'gb_wifi_lock',
    'gb_wifi_tethering',
    'gb_windows',
    'gb_work',
    'gb_wrap_text',
    'gb_youtube_searched_for',
    'gb_zoom_in',
    'gb_zoom_out',
    'gb_zoom_out_map'
]
for (let ico of icons) {
    $('#icon-main').append(
        `<div title="${ico}" class="text-center cursor-pointer text-gray-600 rounded-lg relative">` +
        `   <i class="gb text-6xl ${ico}"></i>` +
        '</div>')
}

