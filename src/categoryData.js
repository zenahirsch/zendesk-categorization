export const categoryData = {
    'account': {
        label: 'Account',
        subcategories: [
            { label: 'Account access', value: 'asc_account_access' },
            { label: 'Account creation', value: 'asc_account_creation' },
            { label: 'Account settings', value: 'asc_account_settings' },
            { label: 'Membership types', value: 'asc_account_types' },
            { label: 'Email notifications', value: 'asc_email_notifications' },
            { label: 'Team Members', value: 'asc_multi_seat' },
            { label: 'Profile appearance', value: 'asc_profile_appearance' },
            { label: 'Profile settings', value: 'asc_profile_settings' },
            { label: 'Sharing (email / social media / etc)', value: 'asc_sharing' },
            { label: 'Upload quota and total storage', value: 'asc_upload_quota' },
            { label: 'Video manager settings', value: 'asc_video_manager_settings' },
            { label: 'Video manager sorting/views', value: 'asc_video_manager_sorting' },
            { label: 'Video page', value: 'asc_video_page' },
            { label: 'Feed/ LIHP', value: 'asc_feed_lihp' },
        ]
    },
    'billing': {
        label: 'Billing + Membership',
        subcategories: [
            { label: 'Adding card issues', value: 'asc_adding_card_issues' },
            { label: 'Chargebacks', value: 'asc_chargebacks' },
            { label: 'Custom plan enquiry', value: 'asc_custom_plan_enquiry' },
            { label: 'Downgrade (to Basic)', value: 'asc_downgrade_to_basic' },
            { label: 'Downgrade (to paid)', value: 'asc_downgrade_to_paid' },
            { label: 'Grace periods', value: 'asc_grace_periods' },
            { label: 'Lapse questions', value: 'asc_lapse_questions' },
            { label: 'Refund request (out of term)', value: 'asc_refund_request_out_of_term' },
            { label: 'Refund request (in term)', value: 'asc_refund_request_in_term' },
            { label: 'Renewal', value: 'asc_renewal' },
            { label: 'Payment issues', value: 'asc_payment_issues' },
            { label: 'Paypal refund', value: 'asc_paypal_refund' },
            { label: 'Promotions / vouchers', value: 'asc_promotions_vouchers' },
            { label: 'Tax / VAT', value: 'asc_tax_vat' },
            { label: 'Transaction lookup', value: 'asc_transaction_lookup' },
            { label: 'Cold storage', value: 'asc_cold_storage' },
            { label: 'Request receipt / invoice', value: 'asc_request_receipt' },
            { label: 'Referrals', value: 'asc_referrals' },
            { label: 'Membership types', value: 'asc_account_types' },
        ]
    },
    'video_settings': {
        label: 'Video Settings',
        subcategories: [
            { label: 'Caption issues', value: 'asc_caption_issues' },
            { label: 'Caption settings', value: 'asc_caption_settings' },
            { label: 'Deleting videos', value: 'asc_deleting_videos' },
            { label: 'Restoring videos', value: 'asc_restoring_videos' },
            { label: 'Download setting', value: 'asc_download_setting' },
            { label: 'Embed settings', value: 'asc_embed_settings' },
            { label: 'Privacy settings', value: 'asc_privacy_settings' },
            { label: 'Cards', value: 'asc_cards' },
            { label: 'Email capture', value: 'asc_email_capture' },
            { label: 'End screens', value: 'asc_end_screens' },
            { label: 'Review Pages', value: 'asc_review_pages' },
            { label: 'Publish to Social', value: 'asc_publish_to_social' },
        ]
    },
    'general_site': {
        label: 'General Site',
        subcategories: [
            { label: 'General site errors', value: 'asc_general_site_errors' },
            { label: 'Google Analytics', value: 'asc_google_analytics' },
            { label: 'Marketing pages (blog / misc)', value: 'asc_marketing_pages' },
            { label: 'Search', value: 'asc_search' },
            { label: 'Site copy errors', value: 'asc_site_copy_errors' },
            { label: 'Staff picks', value: 'asc_staff_picks' },
            { label: 'Notifications (email / on site)', value: 'asc_notifications' },
            { label: 'Unrelated to product', value: 'asc_unrelated_to_product' },
            { label: 'Sharing (email / social media / etc)', value: 'asc_sharing' },
            { label: 'Review Pages', value: 'asc_review_pages' },
            { label: 'Publish to Social', value: 'asc_publish_to_social' },
        ]
    },
    'collections': {
        label: 'Collections',
        subcategories: [
            { label: 'Albums', value: 'asc_albums' },
            { label: 'Channels', value: 'asc_channels' },
            { label: 'Groups', value: 'asc_groups' },
            { label: 'Portfolios', value: 'asc_portfolios' },
            { label: 'Embedded Playlists', value: 'asc_embedded_playlists' },
            { label: 'Projects', value: 'asc_projects' },
        ]
    },
    'live': {
        label: 'Live',
        subcategories: [
            { label: 'Live API', value: 'asc_live_api' },
            { label: 'Live archive', value: 'asc_live_archive' },
            { label: 'Live chat', value: 'asc_live_chat' },
            { label: 'Live platform (general)', value: 'asc_live_platform' },
            { label: 'Live quota limit', value: 'asc_live_quota_limit' },
            { label: 'Live refund', value: 'asc_live_refund' },
            { label: 'Live software / encoder', value: 'asc_live_software_encoder' },
            { label: 'Live stats', value: 'asc_live_stats' },
            { label: 'Live stream issue (creator)', value: 'asc_live_stream_issue_creator' },
            { label: 'Live stream issue (viewer)', value: 'asc_live_stream_issue_viewer' },
        ]
    },
    'mobile_apps': {
        label: 'Mobile + Apps',
        subcategories: [
            { label: 'Android mobile app', value: 'asc_android_mobile_app' },
            { label: 'Android TV app', value: 'asc_android_tv_app' },
            { label: 'Apple TV app', value: 'asc_apple_tv_app' },
            { label: 'iOS mobile app', value: 'asc_ios_mobile_app' },
            { label: 'Roku app', value: 'asc_roku_app' },
            { label: 'Mac OS app', value: 'asc_mac_os_app' },
            { label: 'Samsung TV app', value: 'asc_samsung_tv_app' },
        ]
    },
    'api_developer': { 
        label: 'API / Developer / Backend',
        subcategories: [
            { label: 'IP address bans', value: 'asc_ip_address_bans' },
            { label: 'API app upload access', value: 'asc_api_app_upload_access' },
            { label: 'Backend / technical other', value: 'asc_backend_technical_other' },
            { label: 'General developer questions', value: 'asc_general_developer_questions' },
            { label: 'Developer Site', value: 'asc_developer_site' },
            { label: 'Player API how to', value: 'asc_player_api_how_to' },
            { label: 'Player API issue', value: 'asc_player_api_issue' },
            { label: 'API Errors (Authentication)', value: 'asc_api_errors_authentication' },
            { label: 'API Errors (General)', value: 'asc_api_errors_general' },
            { label: 'API Errors (Upload)', value: 'asc_api_errors_upload' },
            { label: 'API video file access', value: 'asc_api_video_file_access' },
            { label: 'API General questions / issues', value: 'asc_api_general_questions' },
            { label: 'API rate limit', value: 'asc_api_rate_limit' },
            { label: 'API official library (PHP / Python / NodeJS / Laravel)', value: 'asc_api_official_library' },
            { label: 'oEmbed', value: 'asc_oembed' },
        ]
    },
    'player_playback': {
        label: 'Player / Playback',
        subcategories: [
            { label: 'Audio Sync', value: 'asc_audio_sync' },
            { label: 'Buffering/Choppy playback', value: 'asc_buffering_choppy_playback' },
            { label: 'Choppy audio playback', value: 'asc_choppy_audio_playback' },
            { label: 'Color Display', value: 'asc_color_display' },
            { label: 'Download Security', value: 'asc_download_security' },
            { label: 'Embedded player issue', value: 'asc_embedded_player_issue' },
            { label: 'Player buttons', value: 'asc_player_buttons' },
            { label: 'Player errors', value: 'asc_player_errors' },
            { label: 'Speed controls', value: 'asc_speed_controls' },
            { label: 'Thumbnail quality', value: 'asc_thumbnail_quality' },
            { label: 'Video quality', value: 'asc_video_quality' },
            { label: 'HDR videos', value: 'asc_hdr_videos' },
            { label: 'CC/Subtitle playback', value: 'asc_cc_subtitle_playback' },
            { label: 'Higher bit rate request', value: 'asc_higher_bit_rate_request' },
            { label: 'Video Interaction Tools', value: 'asc_video_interaction_tools' },
            { label: 'Direct link playback (Third party players)', value: 'asc_direct_link_playback' },
            { label: 'Flash Player Deprecation', value: 'asc_flash_player_deprecation' },
            { label: 'Privacy settings', value: 'asc_privacy_settings' },
            { label: 'Cards', value: 'asc_cards' },
            { label: 'Email capture', value: 'asc_email_capture' },
            { label: 'End screens', value: 'asc_end_screens' },
        ]
    },
    'uploading_conversion': {
        label: 'Uploading / Conversion',
        subcategories: [
            { label: 'Cloud upload issues (Box / Google Drive / etc)', value: 'asc_cloud_upload_issues' },
            { label: 'Upload/Conversion Errors', value: 'asc_upload_conversion_errors' },
            { label: 'FTP', value: 'asc_ftp' },
            { label: 'Conversion delay', value: 'asc_conversion_delay' },
            { label: 'Slow uploads', value: 'asc_slow_uploads' },
            { label: 'Replace video', value: 'asc_replace_video' },
            { label: 'Source file issue', value: 'asc_source_file_issue' },
            { label: 'Vimeo Adobe panel', value: 'asc_vimeo_adobe_panel' },
            { label: 'MacOS App', value: 'asc_macos_app' },
            { label: 'Uploads from third party software', value: 'asc_uploads_from_third_party_software' },
            { label: 'Compression advice', value: 'asc_compression_advice' },
            { label: 'HDR videos', value: 'asc_hdr_videos' },
            { label: 'Upload quota', value: 'asc_upload_quota' },
        ]
    },
    'vod_buyer': {
        label: 'VOD Buyer',
        subcategories: [
            { label: 'Vod Buyer - promo codes', value: 'asc_vod_buyer_promo_codes' },
            { label: 'VOD Buyer - purchasing', value: 'asc_vod_buyer_purchasing' },
            { label: 'VOD Buyer - Purg\'d', value: 'asc_vod_buyer_purg' },
            { label: 'VOD Buyer - refund', value: 'asc_vod_buyer_refund' },
            { label: 'VOD Buyer - VAT & tax', value: 'asc_vod_buyer_vat_tax' },
            { label: 'VOD Buyer - source file issue', value: 'asc_vod_buyer_source_file_issue' },
            { label: 'VOD Buyer - watching videos', value: 'asc_vod_buyer_watching_videos' },
        ]
    },
    'vod_seller': {
        label: 'VOD Seller',
        subcategories: [
            { label: 'VOD Seller - notifications', value: 'asc_vod_seller_notifications' },
            { label: 'VOD Seller - off site', value: 'asc_vod_seller_off_site' },
            { label: 'VOD Seller - presales', value: 'asc_vod_seller_presales' },
            { label: 'VOD Seller - pricing', value: 'asc_vod_seller_pricing' },
            { label: 'VOD Seller - promo codes', value: 'asc_vod_seller_promo_codes' },
            { label: 'VOD Seller - purchasing', value: 'asc_vod_seller_purchasing' },
            { label: 'VOD Seller - Purg\'d', value: 'asc_vod_seller_purg_d' },
            { label: 'VOD Seller - getting paid', value: 'asc_vod_seller_getting_paid' },
            { label: 'VOD Seller - setup', value: 'asc_vod_seller_setup' },
            { label: 'VOD Seller - VAT & tax', value: 'asc_vod_seller_vat_tax' },
            { label: 'VOD Seller - source file issue', value: 'asc_vod_seller_source_file_issue' },
            { label: 'VOD Seller -Transaction fees', value: 'asc_vod_seller_transaction_fees' },
        ]
    },
    'stats': {
        label: 'Stats',
        subcategories: [
            { label: 'Stats discrepancies', value: 'asc_stats_discrepancies' },
            { label: 'Stats features', value: 'asc_stats_features' },
            { label: 'Stats functionality', value: 'asc_stats_functionality' },
            { label: 'Stats loading', value: 'asc_stats_loading' },
            { label: 'Google Analytics', value: 'asc_google_analytics' },
            { label: 'VOD Stats', value: 'asc_vod_stats' }
        ]
    },
    'other': {
        label: 'Other',
        subcategories: [
            { label: 'Accessibility (disabilities)', value: 'asc_accessibility' },
            { label: 'Dupe', value: 'asc_dupe' },
            { label: 'Autoresponder', value: 'asc_autoresponder' },
            { label: 'Spam', value: 'asc_spam' },
            { label: 'Twitter', value: 'asc_twitter' },
            { label: 'Cameo', value: 'asc_cameo' },
            { label: 'Partnerships', value: 'asc_partnerships' },
            { label: 'Advertising', value: 'asc_advertising' },
            { label: 'Pending Categorization', value: 'asc_pending_categorization' },
            { label: 'Unrelated to Vimeo product', value: 'asc_unrelated_to_vimeo_product' },
            { label: 'Press request', value: 'asc_press_request' },
        ]
    },
    'trust_safety': {
        label: 'Trust & Safety',
        subcategories: [
            { label: 'Moderation', value: 'asc_moderation' },
            { label: 'Policy', value: 'asc_policy' },
            { label: 'GDPR', value: 'asc_gdpr' },
            { label: 'Copyright / DMCA', value: 'asc_copyright_dmca' },
            { label: 'Privacy / Complaints', value: 'asc_privacy_complaints' },
            { label: 'ATO / Security violations', value: 'asc_ato_security_violations' },
            { label: 'Abusive behavior', value: 'asc_abusive_behavior' },
            { label: 'Trademark', value: 'asc_trademark' },
            { label: 'Marked as spammer', value: 'asc_marked_as_spammer' },
            { label: 'Fraud', value: 'asc_fraud' },
            { label: 'Law enforcement requests', value: 'asc_law_enforcement_requests' },
            { label: 'Account Merge / Video Transfer', value: 'asc_account_merge' },
            { label: 'Commercial Content', value: 'asc_commercial_content' },
            { label: 'Data removal request', value: 'asc_data_removal_request' },
            { label: 'Illegal content', value: 'asc_illegal_content' },
        ]
    },
    'livestream_account': {
        label: 'Livestream Account',
        subcategories: [
            { label: 'Account access', value: 'asc_account_access' },
            { label: 'Account creation', value: 'asc_account_creation' },
            { label: 'Account settings', value: 'asc_account_settings' },
            { label: 'Account types', value: 'asc_livestream_account_types' },
            { label: 'Account migration', value: 'asc_account_migration' },
        ]
    },
    'livestream_billing_membership': {
        label: 'Livestream Billing + Membership',
        subcategories: [
            { label: 'Adding card issues', value: 'asc_adding_card_issues' },
            { label: 'Refund request (out of term)', value: 'asc_refund_request_out_of_term' },
            { label: 'Refund request (in term)', value: 'asc_refund_request_in_term' },
            { label: 'Payment issues', value: 'asc_payment_issues' },
            { label: 'Promotions / vouchers', value: 'asc_promotions_vouchers' },
            { label: 'Tax / VAT', value: 'asc_tax_vat' },
            { label: 'Request receipt / invoice', value: 'asc_request_receipt' },
            { label: 'Pricing information / presales', value: 'asc_pricing_information' },
            { label: 'Purchasing hardware', value: 'asc_purchasing_hardware' },
            { label: 'Donations', value: 'asc_donations' },
        ]
    },
    'viewing_streams': {
        label: 'Viewing Streams',
        subcategories: [
            { label: 'Trouble viewing stream', value: 'asc_trouble_viewing_stream' },
            { label: 'Viewing streams after live event', value: 'asc_viewing_streams_after_live_event' },
            { label: 'Video streaming quality', value: 'asc_video_streaming_quality' },
            { label: 'Audio playback quality', value: 'asc_audio_playback_quality' },
            { label: 'Viewer asking about specific event', value: 'asc_viewer_asking_about_specific_event' },
            { label: 'App/Chromecast issues', value: 'asc_app_chromecast_issues' },
        ]
    },
    'studio': {
        label: 'Studio',
        subcategories: [
            { label: 'Studio PIN', value: 'asc_studio_pin' },
            { label: 'Studio presales', value: 'asc_studio_presales' },
            { label: 'Studio getting started/how-to’s', value: 'asc_studio_getting_started' },
            { label: 'Studio video input troubleshooting', value: 'asc_studio_video_input_troubleshooting' },
            { label: 'Studio audio questions', value: 'asc_studio_audio_questions' },
            { label: 'Studio remote camera questions', value: 'asc_studio_remote_camera_questions' },
            { label: 'Studio GFX questions', value: 'asc_studio_gfx_questions' },
            { label: 'Studio compatibility questions', value: 'asc_studio_compatibility_questions' },
            { label: 'Studio dongle issue', value: 'asc_studio_dongle_issue' },
            { label: 'Studio connectivity/problem going live', value: 'asc_studio_connectivity' },
            { label: 'Studio hardware/CPU issues', value: 'asc_studio_hardware_cpu_issues' },
            { label: 'Studio download/installation issues', value: 'asc_studio_download_issues' },
            { label: 'Studio crash report', value: 'asc_studio_crash_report' },
            { label: 'Studio NDI issues', value: 'asc_studio_ndi_issues' },
            { label: 'General Studio inquiry', value: 'asc_general_studio_inquiry' },
            { label: 'Studio Media Bin', value: 'asc_studio_media_bin' },
            { label: 'Studio not saving properly', value: 'asc_studio_not_saving_properly' },
            { label: 'Studio bug report/escalation', value: 'asc_studio_bug_report' },
        ]
    },
    'third_party': {
        label: 'Third Party',
        subcategories: [
            { label: '3rd party hardware issue', value: 'asc_3rd_party_hardware_issue' },
            { label: '3rd party software issue', value: 'asc_3rd_party_software_issue' },
            { label: '3rd party questions', value: 'asc_3rd_party_questions' },
            { label: 'RTMP credentials/access', value: 'asc_rtmp_credentials' },
            { label: 'Tricaster plugin', value: 'asc_tricaster_plugin' },
        ]
    },
    'shipping': {
        label: 'Shipping',
        subcategories: [
            { label: 'Order incomplete / missing items', value: 'asc_order_incomplete' },
            { label: 'General delivery questions', value: 'asc_general_delivery_questions' },
            { label: 'Shipping questions / issues', value: 'asc_shipping_questions' },
            { label: 'RMA status', value: 'asc_rma_status' },
            { label: 'Cancel order', value: 'asc_cancel_order' },
            { label: 'Change shipping information', value: 'asc_change_shipping_information' },
            { label: 'Replacement parts', value: 'asc_replacement_parts' },
        ]
    },
    'broadcaster': {
        label: 'Broadcaster',
        subcategories: [
            { label: 'Broadcaster connectivity issues', value: 'asc_broadcaster_connectivity_issues' },
            { label: 'Broadcaster video input issues', value: 'asc_broadcaster_video_input_issues' },
            { label: 'Broadcaster startup issues', value: 'asc_broadcaster_startup_issues' },
            { label: 'Broadcaster audio issues', value: 'asc_broadcaster_audio_issues' },
            { label: 'Broadcaster V1 Not Simulcasting', value: 'asc_broadcaster_v1_not_simulcasting' },
            { label: 'Broadcaster power issues', value: 'asc_broadcaster_power_issues' },
            { label: 'General Broadcaster inquiry', value: 'asc_general_broadcaster_inquiry' },
        ]
    },
    'mevo': {
        label: 'Mevo',
        subcategories: [
            { label: 'Mevo getting started/how-to’s', value: 'asc_mevo_getting_started' },
            { label: 'Mevo connection issues', value: 'asc_mevo_connection_issues' },
            { label: 'Mevo streaming issues', value: 'asc_mevo_streaming_issues' },
            { label: 'Mevo audio questions/issues', value: 'asc_mevo_audio_questions' },
            { label: 'Mevo hardware/firmware issues', value: 'asc_mevo_hardware_firmware_issues' },
            { label: 'Mevo accessories', value: 'asc_mevo_accessories' },
            { label: 'General Mevo inquiry', value: 'asc_general_mevo_inquiry' },
            { label: 'Mevo bug report  / escalation', value: 'asc_mevo_bug_report' },
            { label: 'Issues with Mevo recordings', value: 'asc_issues_with_mevo_recordings' },
        ]
    },
    'livestream_producer': {
        label: 'Livestream Producer',
        subcategories: [
            { label: 'Producer “Lost Signal”/input troubleshooting', value: 'asc_producer_input' },
            { label: 'Producer download/installation issues', value: 'asc_producer_download_installation_issues' },
            { label: 'Producer screen capturing', value: 'asc_producer_screen_capturing' },
            { label: 'Producer CPU issues', value: 'asc_producer_cpu_issues' },
            { label: 'General Producer inquiry', value: 'asc_general_producer_inquiry' },
        ]
    },
    'livestream_platform_features': {
        label: 'Livestream Platform Features',
        subcategories: [
            { label: 'Simulcast', value: 'asc_simulcast' },
            { label: 'Archiving', value: 'asc_archiving' },
            { label: 'Event settings/details', value: 'asc_event_settings' },
            { label: 'Analytics', value: 'asc_analytics' },
            { label: 'Embedding issues/questions', value: 'asc_embedding_issues' },
            { label: 'Uploading', value: 'asc_uploading' },
            { label: 'Chat/Comments', value: 'asc_chat_comments' },
            { label: '30 Day Free Trial', value: 'asc_30_day_free_trial' },
            { label: 'Geo Blocking', value: 'asc_geo_blocking' },
            { label: 'Firewall ports', value: 'asc_firewall_ports' },
            { label: 'General Livestream platform inquiry', value: 'asc_general_livestream_platform_inquiry' },
        ]
    },
    'livestream_production_streaming': {
        label: 'Livestream Production / Streaming',
        subcategories: [
            { label: 'Streaming settings', value: 'asc_streaming_settings' },
            { label: 'Streaming setup', value: 'asc_streaming_setup' },
            { label: 'Stream to [X]', value: 'asc_stream_to_x' },
            { label: 'Production / Streaming audio issues', value: 'asc_production_streaming_audio_issues' },
        ]
    },
    'rma': {
        label: 'RMA',
        subcategories: [
            { label: 'Broadcaster RMA escalation', value: 'asc_broadcaster_rma_escalation' },
            { label: 'Mevo RMA escalation', value: 'asc_mevo_rma_escalation' },
            { label: 'Studio RMA escalation', value: 'asc_studio_rma_escalation' },
            { label: 'RMA shipment / status inquiry', value: 'asc_rma_shipment_status_inquiry' },
        ]
    },
    'livestream_legal': {
        label: 'Livestream Legal',
        subcategories: [
            { label: 'Copyright / DMCA', value: 'asc_copyright_dmca' },
        ]
    },
};