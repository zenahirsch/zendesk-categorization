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
            { label: 'Profile appearance (on the page, eg pinning', value: 'asc_profile_appearance' },
            { label: 'Profile settings', value: 'asc_profile_settings' },
            { label: 'Sharing (email, social media, etc)', value: 'asc_sharing' },
            { label: 'Upload quota', value: 'asc_upload_quota' },
            { label: 'Video manager settings', value: 'asc_video_manager_settings' },
            { label: 'Video manager sorting/views', value: 'asc_video_manager_sorting_views' },
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
            { label: 'Downgrade (to Basic)', value: 'asc_downgrade__to_basic_' },
            { label: 'Downgrade (to paid)', value: 'asc_downgrade__to_paid_' },
            { label: 'Grace periods', value: 'asc_grace_periods' },
            { label: 'Lapse questions', value: 'asc_lapse_questions' },
            { label: 'Refund request (out of term)', value: 'asc_refund_request__out_of_term_' },
            { label: 'Refund request (in term)', value: 'asc_refund_request__in_term_' },
            { label: 'Renewal', value: 'asc_renewal' },
            { label: 'Payment issues', value: 'asc_payment_issues' },
            { label: 'Paypal refund', value: 'asc_paypal_refund' },
            { label: 'Promotions / vouchers', value: 'asc_promotions__vouchers' },
            { label: 'Tax / VAT', value: 'asc_tax__vat' },
            { label: 'Transaction lookup', value: 'asc_transaction_lookup' },
            { label: 'Cold storage', value: 'asc_cold_storage' },
            { label: 'Request receipt / invoice', value: 'asc_request_receipt__invoice' },
            { label: 'Referrals', value: 'asc_referrals' },
            { label: 'Membership types', value: 'asc_account_types' },
        ]
    },
    'video_settings': {
        label: 'Video Settings',
        categories: [
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
            { label: 'Marketing pages (blog, misc)', value: '_misc__' },
            { label: 'Search', value: 'asc_search' },
            { label: 'Site copy errors', value: 'asc_site_copy_errors' },
            { label: 'Staff picks', value: 'asc_staff_picks' },
            { label: 'Notifications (email/ on site)', value: 'asc_notifications__email__on_site_' },
            { label: 'Unrelated to product', value: 'asc_unrelated_to_product' },
            { label: 'Sharing (email, social media, etc)', value: 'asc_sharing' },
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
            { label: 'Live platform (general)', value: 'asc_live_platform__general_' },
            { label: 'Live quota limit', value: 'asc_live_quota_limit' },
            { label: 'Live refund', value: 'asc_live_refund' },
            { label: 'Live software / encoder', value: 'asc_live_software__encoder' },
            { label: 'Live stats', value: 'asc_live_stats' },
            { label: 'Live stream issue (creator)', value: 'asc_live_stream_issue__creator_' },
            { label: 'Live stream issue (viewer)', value: 'asc_live_stream_issue__viewer_' },
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
            { label: 'Backend / technical other', value: 'asc_backend__technical_other' },
            { label: 'General developer questions', value: 'asc_general_developer_questions' },
            { label: 'Developer Site', value: 'asc_developer_site' },
            { label: 'Player API how to', value: 'asc_player_api_how_to' },
            { label: 'Player API issue', value: 'asc_player_api_issue' },
            { label: 'API Errors (Authentication)', value: 'asc_api_errors__authentication_' },
            { label: 'API Errors (General)', value: 'asc_api_errors__general_' },
            { label: 'API Errors (Upload)', value: 'asc_api_errors__upload_' },
            { label: 'API video file access', value: 'asc_api_video_file_access' },
            { label: 'API General questions / issues', value: 'asc_api_general_questions__issues' },
            { label: 'API rate limit', value: 'asc_api_rate_limit' },
            { label: 'API official library (PHP, Python, NodeJS, Laravel)', value: '_python' },
            { label: 'oEmbed', value: 'asc_oembed' },
        ]
    },
    'player_playback': {
        label: 'Player / Playback',
        subcategories: [
            { label: 'Audio Sync', value: 'asc_audio_sync' },
            { label: 'Buffering/Choppy playback', value: '' },
            { label: 'Choppy audio playback', value: '' },
            { label: 'Color Display', value: '' },
            { label: 'Download Security', value: '' },
            { label: 'Embedded player issue', value: '' },
            { label: 'Player buttons', value: '' },
            { label: 'Player errors', value: '' },
            { label: 'Speed controls', value: '' },
            { label: 'Thumbnail quality', value: '' },
            { label: 'Video quality', value: '' },
            { label: 'HDR videos', value: '' },
            { label: 'CC/Subtitle playback', value: '' },
            { label: 'Higher bit rate request', value: '' },
            { label: 'Video Interaction Tools', value: '' },
            { label: 'Direct link playback (Third party players)', value: '' },
            { label: 'Flash Player Deprecation', value: '' },
            { label: 'Privacy settings', value: '' },
            { label: 'Cards', value: '' },
            { label: 'Email capture', value: '' },
            { label: 'End screens', value: '' },
        ]
    },
    'uploading_conversion': {
        label: 'Uploading / Conversion',
        subcategories: [
            { label: 'Cloud upload issues (Box, Google Drive, Dropbox)', value: '' },
            { label: 'Upload/Conversion Errors', value: '' },
            { label: 'FTP', value: '' },
            { label: 'Conversion delay', value: '' },
            { label: 'Slow uploads', value: '' },
            { label: 'Replace video', value: '' },
            { label: 'Source file issue', value: '' },
            { label: 'Vimeo Adobe panel', value: '' },
            { label: 'MacOS App', value: '' },
            { label: 'Uploads from third party software', value: '' },
            { label: 'Compression advice', value: '' },
            { label: 'HDR videos', value: '' },
            { label: 'Upload quota', value: '' },
        ]
    },
    'vod': {
        label: 'VOD',
        subcategories: [
            { label: 'Getting paid (VOD)', value: '' },
            { label: 'VOD notifications', value: '' },
            { label: 'VOD off site (custom domain and embeds)', value: '' },
            { label: 'VOD presales', value: '' },
            { label: 'VOD pricing', value: '' },
            { label: 'VOD promo codes', value: '' },
            { label: 'VOD purchasing', value: '' },
            { label: 'VOD Purg\'d', value: '' },
            { label: 'VOD refund', value: '' },
            { label: 'VOD paypal payment', value: '' },
            { label: 'VOD setup', value: '' },
            { label: 'VOD VAT & tax', value: '' },
            { label: 'VOD source file issue', value: '' },
            { label: 'Transaction fees', value: '' },
        ]
    },
    'stats': {
        label: 'Stats',
        subcategories: [
            { label: 'Stats discrepancies', value: '' },
            { label: 'Stats features', value: '' },
            { label: 'Stats functionality', value: '' },
            { label: 'Stats loading', value: '' },
            { label: 'Google Analytics', value: '' },
        ]
    },
    'other': {
        label: 'Other',
        subcategories: [
            { label: 'Accessibility (disabilities)', value: '' },
            { label: 'Dupe', value: '' },
            { label: 'Autoresponder', value: '' },
            { label: 'Spam', value: '' },
            { label: 'Twitter', value: '' },
            { label: 'Cameo', value: '' },
            { label: 'Partnerships', value: '' },
            { label: 'Advertising', value: '' },
            { label: 'Pending Categorization', value: '' },
            { label: 'Unrelated to Vimeo product', value: '' },
            { label: 'Press request', value: '' },
        ]
    },
    'trust_safety': {
        label: 'Trust & Safety',
        subcategories: [
            { label: 'Moderation', value: '' },
            { label: 'Policy', value: '' },
            { label: 'GDPR', value: '' },
            { label: 'Copyright / DMCA', value: '' },
            { label: 'Privacy / Complaints', value: '' },
            { label: 'ATO / Security violations', value: '' },
            { label: 'Abusive behavior', value: '' },
            { label: 'Trademark', value: '' },
            { label: 'Marked as spammer', value: '' },
            { label: 'Fraud', value: '' },
            { label: 'Law enforcement requests', value: '' },
            { label: 'Account Merge / Video Transfer', value: '' },
            { label: 'Commercial Content', value: '' },
            { label: 'Data removal request', value: '' },
            { label: 'Illegal content', value: '' },
        ]
    },
    'livestream_account': {
        label: 'Livestream Account',
        subcategories: [
            { label: 'Account access', value: '' },
            { label: 'Account creation', value: '' },
            { label: 'Account settings', value: '' },
            { label: 'Account types', value: '' },
            { label: 'Account migration', value: '' },
        ]
    },
    'livestream_billing_membership': {
        label: 'Livestream Billing + Membership',
        subcategories: [
            { label: 'Adding card issues', value: '' },
            { label: 'Refund request (out of term)', value: '' },
            { label: 'Refund request (in term)', value: '' },
            { label: 'Payment issues', value: '' },
            { label: 'Promotions / vouchers', value: '' },
            { label: 'Tax / VAT', value: '' },
            { label: 'Request receipt / invoice', value: '' },
            { label: 'Pricing information / presales', value: '' },
            { label: 'Purchasing hardware', value: '' },
        ]
    },
    'viewing_streams': {
        label: 'Viewing Streams',
        subcategories: [
            { label: 'Trouble viewing stream', value: '' },
            { label: 'Viewing streams after live event', value: '' },
            { label: 'Video streaming quality', value: '' },
            { label: 'Audio playback quality', value: '' },
            { label: 'Viewer asking about specific event', value: '' },
            { label: 'App/Chromecast issues', value: '' },
        ]
    },
    'studio': {
        label: 'Studio',
        subcategories: [
            { label: 'Studio PIN (transfer, extension, invalid <1 year)', value: '' },
            { label: 'Studio presales', value: '' },
            { label: 'Studio getting started/how-to’s', value: '' },
            { label: 'Studio video input troubleshooting', value: '' },
            { label: 'Studio audio questions', value: '' },
            { label: 'Studio remote camera questions', value: '' },
            { label: 'Studio GFX questions', value: '' },
            { label: 'Studio compatibility questions', value: '' },
            { label: 'Studio dongle issue (e.g. lost, not detected)', value: '' },
            { label: 'Studio connectivity/problem going live', value: '' },
            { label: 'Studio hardware/CPU issues', value: '' },
            { label: 'Studio download/installation issues', value: '' },
            { label: 'Studio crash report', value: '' },
            { label: 'Studio NDI issues', value: '' },
            { label: 'General Studio inquiry', value: '' },
            { label: 'Studio Media Bin', value: '' },
            { label: 'Studio not saving properly', value: '' },
            { label: 'Studio bug report/escalation', value: '' },
        ]
    },
    'third_party': {
        label: 'Third Party',
        subcategories: [
            { label: '3rd party hardware issue', value: '' },
            { label: '3rd party software issue', value: '' },
            { label: '3rd party questions', value: '' },
            { label: 'RTMP credentials/access', value: '' },
            { label: 'Tricaster plugin', value: '' },
        ]
    },
    'shipping': {
        label: 'Shipping',
        subcategories: [
            { label: 'Order incomplete / missing items', value: '' },
            { label: 'General delivery questions', value: '' },
            { label: 'Shipping questions / issues', value: '' },
            { label: 'RMA status', value: '' },
            { label: 'Cancel order', value: '' },
            { label: 'Change shipping information', value: '' },
            { label: 'Replacement parts', value: '' },
        ]
    },
    'broadcaster': {
        label: 'Broadcaster',
        subcategories: [
            { label: 'Broadcaster connectivity issues', value: '' },
            { label: 'Broadcaster video input issues', value: '' },
            { label: 'Broadcaster startup issues', value: '' },
            { label: 'Broadcaster audio issues', value: '' },
            { label: 'Broadcaster V1 Not Simulcasting', value: '' },
            { label: 'Broadcaster power issues', value: '' },
            { label: 'General Broadcaster inquiry', value: '' },
        ]
    },
    'mevo': {
        label: 'Mevo',
        subcategories: [
            { label: 'Mevo getting started/how-to’s', value: '' },
            { label: 'Mevo connection issues', value: '' },
            { label: 'Mevo streaming issues', value: '' },
            { label: 'Mevo audio questions/issues', value: '' },
            { label: 'Mevo hardware/firmware issues', value: '' },
            { label: 'Mevo accessories', value: '' },
            { label: 'General Mevo inquiry', value: '' },
            { label: 'Mevo bug report  / escalation', value: '' },
            { label: 'Issues with Mevo recordings', value: '' },
        ]
    },
    'livestream_producer': {
        label: 'Livestream Producer',
        subcategories: [
            { label: 'Producer “Lost Signal”/input troubleshooting', value: '' },
            { label: 'Producer download/installation issues', value: '' },
            { label: 'Producer screen capturing', value: '' },
            { label: 'Producer CPU issues', value: '' },
            { label: 'General Producer inquiry', value: '' },
        ]
    },
    'livestream_platform_features': {
        label: 'Livestream Platform Features',
        subcategories: [
            { label: 'Simulcast', value: '' },
            { label: 'Archiving', value: '' },
            { label: 'Event settings/details', value: '' },
            { label: 'Analytics', value: '' },
            { label: 'Embedding issues/questions', value: '' },
            { label: 'Uploading', value: '' },
            { label: 'Chat/Comments', value: '' },
            { label: '30 Day Free Trial', value: '' },
            { label: 'Geo Blocking', value: '' },
            { label: 'Firewall ports', value: '' },
            { label: 'General Livestream platform inquiry', value: '' },
        ]
    },
    'livestream_production_streaming': {
        label: 'Livestream Production / Streaming',
        subcategories: [
            { label: 'Streaming settings', value: '' },
            { label: 'Streaming setup', value: '' },
            { label: 'Stream to [X]', value: '' },
            { label: 'Production / Streaming audio issues', value: '' },
        ]
    },
    'rma': {
        label: 'RMA',
        subcategories: [
            { label: 'Broadcaster RMA escalation', value: '' },
            { label: 'Mevo RMA escalation', value: '' },
            { label: 'Studio RMA escalation', value: '' },
            { label: 'RMA shipment / status inquiry', value: '' },
        ]
    },
    'livestream_legal': {
        label: 'Livestream Legal',
        subcategories: [
            { label: 'Copyright / DMCA', value: '' },
        ]
    },
};