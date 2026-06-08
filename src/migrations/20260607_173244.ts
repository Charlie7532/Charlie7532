import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_hero_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_cta_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
  CREATE TYPE "public"."enum_pages_blocks_content_columns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_content_columns_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_cta_card_cta_primary_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_cta_card_cta_primary_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_cta_card_cta_secondary_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_cta_card_cta_secondary_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_cta_card_variant" AS ENUM('default', 'muted', 'card');
  CREATE TYPE "public"."enum_pages_blocks_cta_card_text_alignment" AS ENUM('start', 'center', 'end');
  CREATE TYPE "public"."enum_pages_blocks_cta_card_spacing_preset" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_cta_card_background_theme" AS ENUM('default', 'light', 'dark', 'primary');
  CREATE TYPE "public"."enum_pages_blocks_cta_card_content_alignment" AS ENUM('start', 'center', 'end');
  CREATE TYPE "public"."enum_pages_blocks_cta_section_cta_primary_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_cta_section_cta_primary_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_cta_section_cta_secondary_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_cta_section_cta_secondary_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_cta_section_text_alignment" AS ENUM('start', 'center', 'end');
  CREATE TYPE "public"."enum_pages_blocks_cta_section_spacing_preset" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_cta_section_background_theme" AS ENUM('default', 'light', 'dark', 'primary');
  CREATE TYPE "public"."enum_pages_blocks_cta_section_content_alignment" AS ENUM('start', 'center', 'end');
  CREATE TYPE "public"."enum_pages_blocks_media_block_width_type" AS ENUM('full', 'max');
  CREATE TYPE "public"."enum_pages_blocks_media_block_width_preset" AS ENUM('custom', '1/2', '1/3', '2/3', '1/4', '3/4');
  CREATE TYPE "public"."enum_pages_blocks_media_block_width_alignment" AS ENUM('left', 'center', 'right');
  CREATE TYPE "public"."enum_pages_blocks_media_block_aspect_ratio" AS ENUM('auto', '16/9', '4/3', '1/1', '3/2', '2/3', '21/9');
  CREATE TYPE "public"."enum_pages_blocks_media_block_shadow" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_archive_populate_by" AS ENUM('collection', 'selection');
  CREATE TYPE "public"."enum_pages_blocks_archive_relation_to" AS ENUM('posts', 'projects');
  CREATE TYPE "public"."enum_pages_blocks_signup_c_t_a_buttons_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_signup_c_t_a_buttons_style" AS ENUM('default', 'primary', 'secondary', 'outline', 'link');
  CREATE TYPE "public"."enum_pages_blocks_signup_c_t_a_buttons_icon" AS ENUM('none', 'google', 'email');
  CREATE TYPE "public"."enum_pages_blocks_two_column_text_image_links_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_two_column_text_image_links_appearance" AS ENUM('default', 'primary', 'secondary', 'outline', 'link');
  CREATE TYPE "public"."enum_pages_blocks_two_column_text_image_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_pages_blocks_profile_with_image_media_display_alignment" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_pages_blocks_pricing_card_icon" AS ENUM('AArrowDown', 'AArrowDownIcon', 'AArrowUp', 'AArrowUpIcon', 'ALargeSmall', 'ALargeSmallIcon', 'Accessibility', 'AccessibilityIcon', 'Activity', 'ActivityIcon', 'ActivitySquare', 'ActivitySquareIcon', 'AirVent', 'AirVentIcon', 'Airplay', 'AirplayIcon', 'AlarmCheck', 'AlarmCheckIcon', 'AlarmClock', 'AlarmClockCheck', 'AlarmClockCheckIcon', 'AlarmClockIcon', 'AlarmClockMinus', 'AlarmClockMinusIcon', 'AlarmClockOff', 'AlarmClockOffIcon', 'AlarmClockPlus', 'AlarmClockPlusIcon', 'AlarmMinus', 'AlarmMinusIcon', 'AlarmPlus', 'AlarmPlusIcon', 'AlarmSmoke', 'AlarmSmokeIcon', 'Album', 'AlbumIcon', 'AlertCircle', 'AlertCircleIcon', 'AlertOctagon', 'AlertOctagonIcon', 'AlertTriangle', 'AlertTriangleIcon', 'AlignCenter', 'AlignCenterHorizontal', 'AlignCenterHorizontalIcon', 'AlignCenterIcon', 'AlignCenterVertical', 'AlignCenterVerticalIcon', 'AlignEndHorizontal', 'AlignEndHorizontalIcon', 'AlignEndVertical', 'AlignEndVerticalIcon', 'AlignHorizontalDistributeCenter', 'AlignHorizontalDistributeCenterIcon', 'AlignHorizontalDistributeEnd', 'AlignHorizontalDistributeEndIcon', 'AlignHorizontalDistributeStart', 'AlignHorizontalDistributeStartIcon', 'AlignHorizontalJustifyCenter', 'AlignHorizontalJustifyCenterIcon', 'AlignHorizontalJustifyEnd', 'AlignHorizontalJustifyEndIcon', 'AlignHorizontalJustifyStart', 'AlignHorizontalJustifyStartIcon', 'AlignHorizontalSpaceAround', 'AlignHorizontalSpaceAroundIcon', 'AlignHorizontalSpaceBetween', 'AlignHorizontalSpaceBetweenIcon', 'AlignJustify', 'AlignJustifyIcon', 'AlignLeft', 'AlignLeftIcon', 'AlignRight', 'AlignRightIcon', 'AlignStartHorizontal', 'AlignStartHorizontalIcon', 'AlignStartVertical', 'AlignStartVerticalIcon', 'AlignVerticalDistributeCenter', 'AlignVerticalDistributeCenterIcon', 'AlignVerticalDistributeEnd', 'AlignVerticalDistributeEndIcon', 'AlignVerticalDistributeStart', 'AlignVerticalDistributeStartIcon', 'AlignVerticalJustifyCenter', 'AlignVerticalJustifyCenterIcon', 'AlignVerticalJustifyEnd', 'AlignVerticalJustifyEndIcon', 'AlignVerticalJustifyStart', 'AlignVerticalJustifyStartIcon', 'AlignVerticalSpaceAround', 'AlignVerticalSpaceAroundIcon', 'AlignVerticalSpaceBetween', 'AlignVerticalSpaceBetweenIcon', 'Ambulance', 'AmbulanceIcon', 'Ampersand', 'AmpersandIcon', 'Ampersands', 'AmpersandsIcon', 'Amphora', 'AmphoraIcon', 'Anchor', 'AnchorIcon', 'Angry', 'AngryIcon', 'Annoyed', 'AnnoyedIcon', 'Antenna', 'AntennaIcon', 'Anvil', 'AnvilIcon', 'Aperture', 'ApertureIcon', 'AppWindow', 'AppWindowIcon', 'AppWindowMac', 'AppWindowMacIcon', 'Apple', 'AppleIcon', 'Archive', 'ArchiveIcon', 'ArchiveRestore', 'ArchiveRestoreIcon', 'ArchiveX', 'ArchiveXIcon', 'AreaChart', 'AreaChartIcon', 'Armchair', 'ArmchairIcon', 'ArrowBigDown', 'ArrowBigDownDash', 'ArrowBigDownDashIcon', 'ArrowBigDownIcon', 'ArrowBigLeft', 'ArrowBigLeftDash', 'ArrowBigLeftDashIcon', 'ArrowBigLeftIcon', 'ArrowBigRight', 'ArrowBigRightDash', 'ArrowBigRightDashIcon', 'ArrowBigRightIcon', 'ArrowBigUp', 'ArrowBigUpDash', 'ArrowBigUpDashIcon', 'ArrowBigUpIcon', 'ArrowDown', 'ArrowDown01', 'ArrowDown01Icon', 'ArrowDown10', 'ArrowDown10Icon', 'ArrowDownAZ', 'ArrowDownAZIcon', 'ArrowDownAz', 'ArrowDownAzIcon', 'ArrowDownCircle', 'ArrowDownCircleIcon', 'ArrowDownFromLine', 'ArrowDownFromLineIcon', 'ArrowDownIcon', 'ArrowDownLeft', 'ArrowDownLeftFromCircle', 'ArrowDownLeftFromCircleIcon', 'ArrowDownLeftFromSquare', 'ArrowDownLeftFromSquareIcon', 'ArrowDownLeftIcon', 'ArrowDownLeftSquare', 'ArrowDownLeftSquareIcon', 'ArrowDownNarrowWide', 'ArrowDownNarrowWideIcon', 'ArrowDownRight', 'ArrowDownRightFromCircle', 'ArrowDownRightFromCircleIcon', 'ArrowDownRightFromSquare', 'ArrowDownRightFromSquareIcon', 'ArrowDownRightIcon', 'ArrowDownRightSquare', 'ArrowDownRightSquareIcon', 'ArrowDownSquare', 'ArrowDownSquareIcon', 'ArrowDownToDot', 'ArrowDownToDotIcon', 'ArrowDownToLine', 'ArrowDownToLineIcon', 'ArrowDownUp', 'ArrowDownUpIcon', 'ArrowDownWideNarrow', 'ArrowDownWideNarrowIcon', 'ArrowDownZA', 'ArrowDownZAIcon', 'ArrowDownZa', 'ArrowDownZaIcon', 'ArrowLeft', 'ArrowLeftCircle', 'ArrowLeftCircleIcon', 'ArrowLeftFromLine', 'ArrowLeftFromLineIcon', 'ArrowLeftIcon', 'ArrowLeftRight', 'ArrowLeftRightIcon', 'ArrowLeftSquare', 'ArrowLeftSquareIcon', 'ArrowLeftToLine', 'ArrowLeftToLineIcon', 'ArrowRight', 'ArrowRightCircle', 'ArrowRightCircleIcon', 'ArrowRightFromLine', 'ArrowRightFromLineIcon', 'ArrowRightIcon', 'ArrowRightLeft', 'ArrowRightLeftIcon', 'ArrowRightSquare', 'ArrowRightSquareIcon', 'ArrowRightToLine', 'ArrowRightToLineIcon', 'ArrowUp', 'ArrowUp01', 'ArrowUp01Icon', 'ArrowUp10', 'ArrowUp10Icon', 'ArrowUpAZ', 'ArrowUpAZIcon', 'ArrowUpAz', 'ArrowUpAzIcon', 'ArrowUpCircle', 'ArrowUpCircleIcon', 'ArrowUpDown', 'ArrowUpDownIcon', 'ArrowUpFromDot', 'ArrowUpFromDotIcon', 'ArrowUpFromLine', 'ArrowUpFromLineIcon', 'ArrowUpIcon', 'ArrowUpLeft', 'ArrowUpLeftFromCircle', 'ArrowUpLeftFromCircleIcon', 'ArrowUpLeftFromSquare', 'ArrowUpLeftFromSquareIcon', 'ArrowUpLeftIcon', 'ArrowUpLeftSquare', 'ArrowUpLeftSquareIcon', 'ArrowUpNarrowWide', 'ArrowUpNarrowWideIcon', 'ArrowUpRight', 'ArrowUpRightFromCircle', 'ArrowUpRightFromCircleIcon', 'ArrowUpRightFromSquare', 'ArrowUpRightFromSquareIcon', 'ArrowUpRightIcon', 'ArrowUpRightSquare', 'ArrowUpRightSquareIcon', 'ArrowUpSquare', 'ArrowUpSquareIcon', 'ArrowUpToLine', 'ArrowUpToLineIcon', 'ArrowUpWideNarrow', 'ArrowUpWideNarrowIcon', 'ArrowUpZA', 'ArrowUpZAIcon', 'ArrowUpZa', 'ArrowUpZaIcon', 'ArrowsUpFromLine', 'ArrowsUpFromLineIcon', 'Asterisk', 'AsteriskIcon', 'AsteriskSquare', 'AsteriskSquareIcon', 'AtSign', 'AtSignIcon', 'Atom', 'AtomIcon', 'AudioLines', 'AudioLinesIcon', 'AudioWaveform', 'AudioWaveformIcon', 'Award', 'AwardIcon', 'Axe', 'AxeIcon', 'Axis3D', 'Axis3DIcon', 'Axis3d', 'Axis3dIcon', 'Baby', 'BabyIcon', 'Backpack', 'BackpackIcon', 'Badge', 'BadgeAlert', 'BadgeAlertIcon', 'BadgeCent', 'BadgeCentIcon', 'BadgeCheck', 'BadgeCheckIcon', 'BadgeDollarSign', 'BadgeDollarSignIcon', 'BadgeEuro', 'BadgeEuroIcon', 'BadgeHelp', 'BadgeHelpIcon', 'BadgeIcon', 'BadgeIndianRupee', 'BadgeIndianRupeeIcon', 'BadgeInfo', 'BadgeInfoIcon', 'BadgeJapaneseYen', 'BadgeJapaneseYenIcon', 'BadgeMinus', 'BadgeMinusIcon', 'BadgePercent', 'BadgePercentIcon', 'BadgePlus', 'BadgePlusIcon', 'BadgePoundSterling', 'BadgePoundSterlingIcon', 'BadgeQuestionMark', 'BadgeQuestionMarkIcon', 'BadgeRussianRuble', 'BadgeRussianRubleIcon', 'BadgeSwissFranc', 'BadgeSwissFrancIcon', 'BadgeTurkishLira', 'BadgeTurkishLiraIcon', 'BadgeX', 'BadgeXIcon', 'BaggageClaim', 'BaggageClaimIcon', 'Balloon', 'BalloonIcon', 'Ban', 'BanIcon', 'Banana', 'BananaIcon', 'Bandage', 'BandageIcon', 'Banknote', 'BanknoteArrowDown', 'BanknoteArrowDownIcon', 'BanknoteArrowUp', 'BanknoteArrowUpIcon', 'BanknoteIcon', 'BanknoteX', 'BanknoteXIcon', 'BarChart', 'BarChart2', 'BarChart2Icon', 'BarChart3', 'BarChart3Icon', 'BarChart4', 'BarChart4Icon', 'BarChartBig', 'BarChartBigIcon', 'BarChartHorizontal', 'BarChartHorizontalBig', 'BarChartHorizontalBigIcon', 'BarChartHorizontalIcon', 'BarChartIcon', 'Barcode', 'BarcodeIcon', 'Barrel', 'BarrelIcon', 'Baseline', 'BaselineIcon', 'Bath', 'BathIcon', 'Battery', 'BatteryCharging', 'BatteryChargingIcon', 'BatteryFull', 'BatteryFullIcon', 'BatteryIcon', 'BatteryLow', 'BatteryLowIcon', 'BatteryMedium', 'BatteryMediumIcon', 'BatteryPlus', 'BatteryPlusIcon', 'BatteryWarning', 'BatteryWarningIcon', 'Beaker', 'BeakerIcon', 'Bean', 'BeanIcon', 'BeanOff', 'BeanOffIcon', 'Bed', 'BedDouble', 'BedDoubleIcon', 'BedIcon', 'BedSingle', 'BedSingleIcon', 'Beef', 'BeefIcon', 'Beer', 'BeerIcon', 'BeerOff', 'BeerOffIcon', 'Bell', 'BellDot', 'BellDotIcon', 'BellElectric', 'BellElectricIcon', 'BellIcon', 'BellMinus', 'BellMinusIcon', 'BellOff', 'BellOffIcon', 'BellPlus', 'BellPlusIcon', 'BellRing', 'BellRingIcon', 'BetweenHorizonalEnd', 'BetweenHorizonalEndIcon', 'BetweenHorizonalStart', 'BetweenHorizonalStartIcon', 'BetweenHorizontalEnd', 'BetweenHorizontalEndIcon', 'BetweenHorizontalStart', 'BetweenHorizontalStartIcon', 'BetweenVerticalEnd', 'BetweenVerticalEndIcon', 'BetweenVerticalStart', 'BetweenVerticalStartIcon', 'BicepsFlexed', 'BicepsFlexedIcon', 'Bike', 'BikeIcon', 'Binary', 'BinaryIcon', 'Binoculars', 'BinocularsIcon', 'Biohazard', 'BiohazardIcon', 'Bird', 'BirdIcon', 'Birdhouse', 'BirdhouseIcon', 'Bitcoin', 'BitcoinIcon', 'Blend', 'BlendIcon', 'Blinds', 'BlindsIcon', 'Blocks', 'BlocksIcon', 'Bluetooth', 'BluetoothConnected', 'BluetoothConnectedIcon', 'BluetoothIcon', 'BluetoothOff', 'BluetoothOffIcon', 'BluetoothSearching', 'BluetoothSearchingIcon', 'Bold', 'BoldIcon', 'Bolt', 'BoltIcon', 'Bomb', 'BombIcon', 'Bone', 'BoneIcon', 'Book', 'BookA', 'BookAIcon', 'BookAlert', 'BookAlertIcon', 'BookAudio', 'BookAudioIcon', 'BookCheck', 'BookCheckIcon', 'BookCopy', 'BookCopyIcon', 'BookDashed', 'BookDashedIcon', 'BookDown', 'BookDownIcon', 'BookHeadphones', 'BookHeadphonesIcon', 'BookHeart', 'BookHeartIcon', 'BookIcon', 'BookImage', 'BookImageIcon', 'BookKey', 'BookKeyIcon', 'BookLock', 'BookLockIcon', 'BookMarked', 'BookMarkedIcon', 'BookMinus', 'BookMinusIcon', 'BookOpen', 'BookOpenCheck', 'BookOpenCheckIcon', 'BookOpenIcon', 'BookOpenText', 'BookOpenTextIcon', 'BookPlus', 'BookPlusIcon', 'BookSearch', 'BookSearchIcon', 'BookTemplate', 'BookTemplateIcon', 'BookText', 'BookTextIcon', 'BookType', 'BookTypeIcon', 'BookUp', 'BookUp2', 'BookUp2Icon', 'BookUpIcon', 'BookUser', 'BookUserIcon', 'BookX', 'BookXIcon', 'Bookmark', 'BookmarkCheck', 'BookmarkCheckIcon', 'BookmarkIcon', 'BookmarkMinus', 'BookmarkMinusIcon', 'BookmarkPlus', 'BookmarkPlusIcon', 'BookmarkX', 'BookmarkXIcon', 'BoomBox', 'BoomBoxIcon', 'Bot', 'BotIcon', 'BotMessageSquare', 'BotMessageSquareIcon', 'BotOff', 'BotOffIcon', 'BottleWine', 'BottleWineIcon', 'BowArrow', 'BowArrowIcon', 'Box', 'BoxIcon', 'BoxSelect', 'BoxSelectIcon', 'Boxes', 'BoxesIcon', 'Braces', 'BracesIcon', 'Brackets', 'BracketsIcon', 'Brain', 'BrainCircuit', 'BrainCircuitIcon', 'BrainCog', 'BrainCogIcon', 'BrainIcon', 'BrickWall', 'BrickWallFire', 'BrickWallFireIcon', 'BrickWallIcon', 'BrickWallShield', 'BrickWallShieldIcon', 'Briefcase', 'BriefcaseBusiness', 'BriefcaseBusinessIcon', 'BriefcaseConveyorBelt', 'BriefcaseConveyorBeltIcon', 'BriefcaseIcon', 'BriefcaseMedical', 'BriefcaseMedicalIcon', 'BringToFront', 'BringToFrontIcon', 'Brush', 'BrushCleaning', 'BrushCleaningIcon', 'BrushIcon', 'Bubbles', 'BubblesIcon', 'Bug', 'BugIcon', 'BugOff', 'BugOffIcon', 'BugPlay', 'BugPlayIcon', 'Building', 'Building2', 'Building2Icon', 'BuildingIcon', 'Bus', 'BusFront', 'BusFrontIcon', 'BusIcon', 'Cable', 'CableCar', 'CableCarIcon', 'CableIcon', 'Cake', 'CakeIcon', 'CakeSlice', 'CakeSliceIcon', 'Calculator', 'CalculatorIcon', 'Calendar', 'Calendar1', 'Calendar1Icon', 'CalendarArrowDown', 'CalendarArrowDownIcon', 'CalendarArrowUp', 'CalendarArrowUpIcon', 'CalendarCheck', 'CalendarCheck2', 'CalendarCheck2Icon', 'CalendarCheckIcon', 'CalendarClock', 'CalendarClockIcon', 'CalendarCog', 'CalendarCogIcon', 'CalendarDays', 'CalendarDaysIcon', 'CalendarFold', 'CalendarFoldIcon', 'CalendarHeart', 'CalendarHeartIcon', 'CalendarIcon', 'CalendarMinus', 'CalendarMinus2', 'CalendarMinus2Icon', 'CalendarMinusIcon', 'CalendarOff', 'CalendarOffIcon', 'CalendarPlus', 'CalendarPlus2', 'CalendarPlus2Icon', 'CalendarPlusIcon', 'CalendarRange', 'CalendarRangeIcon', 'CalendarSearch', 'CalendarSearchIcon', 'CalendarSync', 'CalendarSyncIcon', 'CalendarX', 'CalendarX2', 'CalendarX2Icon', 'CalendarXIcon', 'Calendars', 'CalendarsIcon', 'Camera', 'CameraIcon', 'CameraOff', 'CameraOffIcon', 'CandlestickChart', 'CandlestickChartIcon', 'Candy', 'CandyCane', 'CandyCaneIcon', 'CandyIcon', 'CandyOff', 'CandyOffIcon', 'Cannabis', 'CannabisIcon', 'CannabisOff', 'CannabisOffIcon', 'Captions', 'CaptionsIcon', 'CaptionsOff', 'CaptionsOffIcon', 'Car', 'CarFront', 'CarFrontIcon', 'CarIcon', 'CarTaxiFront', 'CarTaxiFrontIcon', 'Caravan', 'CaravanIcon', 'CardSim', 'CardSimIcon', 'Carrot', 'CarrotIcon', 'CaseLower', 'CaseLowerIcon', 'CaseSensitive', 'CaseSensitiveIcon', 'CaseUpper', 'CaseUpperIcon', 'CassetteTape', 'CassetteTapeIcon', 'Cast', 'CastIcon', 'Castle', 'CastleIcon', 'Cat', 'CatIcon', 'Cctv', 'CctvIcon', 'ChartArea', 'ChartAreaIcon', 'ChartBar', 'ChartBarBig', 'ChartBarBigIcon', 'ChartBarDecreasing', 'ChartBarDecreasingIcon', 'ChartBarIcon', 'ChartBarIncreasing', 'ChartBarIncreasingIcon', 'ChartBarStacked', 'ChartBarStackedIcon', 'ChartCandlestick', 'ChartCandlestickIcon', 'ChartColumn', 'ChartColumnBig', 'ChartColumnBigIcon', 'ChartColumnDecreasing', 'ChartColumnDecreasingIcon', 'ChartColumnIcon', 'ChartColumnIncreasing', 'ChartColumnIncreasingIcon', 'ChartColumnStacked', 'ChartColumnStackedIcon', 'ChartGantt', 'ChartGanttIcon', 'ChartLine', 'ChartLineIcon', 'ChartNetwork', 'ChartNetworkIcon', 'ChartNoAxesColumn', 'ChartNoAxesColumnDecreasing', 'ChartNoAxesColumnDecreasingIcon', 'ChartNoAxesColumnIcon', 'ChartNoAxesColumnIncreasing', 'ChartNoAxesColumnIncreasingIcon', 'ChartNoAxesCombined', 'ChartNoAxesCombinedIcon', 'ChartNoAxesGantt', 'ChartNoAxesGanttIcon', 'ChartPie', 'ChartPieIcon', 'ChartScatter', 'ChartScatterIcon', 'ChartSpline', 'ChartSplineIcon', 'Check', 'CheckCheck', 'CheckCheckIcon', 'CheckCircle', 'CheckCircle2', 'CheckCircle2Icon', 'CheckCircleIcon', 'CheckIcon', 'CheckLine', 'CheckLineIcon', 'CheckSquare', 'CheckSquare2', 'CheckSquare2Icon', 'CheckSquareIcon', 'ChefHat', 'ChefHatIcon', 'Cherry', 'CherryIcon', 'ChessBishop', 'ChessBishopIcon', 'ChessKing', 'ChessKingIcon', 'ChessKnight', 'ChessKnightIcon', 'ChessPawn', 'ChessPawnIcon', 'ChessQueen', 'ChessQueenIcon', 'ChessRook', 'ChessRookIcon', 'ChevronDown', 'ChevronDownCircle', 'ChevronDownCircleIcon', 'ChevronDownIcon', 'ChevronDownSquare', 'ChevronDownSquareIcon', 'ChevronFirst', 'ChevronFirstIcon', 'ChevronLast', 'ChevronLastIcon', 'ChevronLeft', 'ChevronLeftCircle', 'ChevronLeftCircleIcon', 'ChevronLeftIcon', 'ChevronLeftSquare', 'ChevronLeftSquareIcon', 'ChevronRight', 'ChevronRightCircle', 'ChevronRightCircleIcon', 'ChevronRightIcon', 'ChevronRightSquare', 'ChevronRightSquareIcon', 'ChevronUp', 'ChevronUpCircle', 'ChevronUpCircleIcon', 'ChevronUpIcon', 'ChevronUpSquare', 'ChevronUpSquareIcon', 'ChevronsDown', 'ChevronsDownIcon', 'ChevronsDownUp', 'ChevronsDownUpIcon', 'ChevronsLeft', 'ChevronsLeftIcon', 'ChevronsLeftRight', 'ChevronsLeftRightEllipsis', 'ChevronsLeftRightEllipsisIcon', 'ChevronsLeftRightIcon', 'ChevronsRight', 'ChevronsRightIcon', 'ChevronsRightLeft', 'ChevronsRightLeftIcon', 'ChevronsUp', 'ChevronsUpDown', 'ChevronsUpDownIcon', 'ChevronsUpIcon', 'Chrome', 'ChromeIcon', 'Chromium', 'ChromiumIcon', 'Church', 'ChurchIcon', 'Cigarette', 'CigaretteIcon', 'CigaretteOff', 'CigaretteOffIcon', 'Circle', 'CircleAlert', 'CircleAlertIcon', 'CircleArrowDown', 'CircleArrowDownIcon', 'CircleArrowLeft', 'CircleArrowLeftIcon', 'CircleArrowOutDownLeft', 'CircleArrowOutDownLeftIcon', 'CircleArrowOutDownRight', 'CircleArrowOutDownRightIcon', 'CircleArrowOutUpLeft', 'CircleArrowOutUpLeftIcon', 'CircleArrowOutUpRight', 'CircleArrowOutUpRightIcon', 'CircleArrowRight', 'CircleArrowRightIcon', 'CircleArrowUp', 'CircleArrowUpIcon', 'CircleCheck', 'CircleCheckBig', 'CircleCheckBigIcon', 'CircleCheckIcon', 'CircleChevronDown', 'CircleChevronDownIcon', 'CircleChevronLeft', 'CircleChevronLeftIcon', 'CircleChevronRight', 'CircleChevronRightIcon', 'CircleChevronUp', 'CircleChevronUpIcon', 'CircleDashed', 'CircleDashedIcon', 'CircleDivide', 'CircleDivideIcon', 'CircleDollarSign', 'CircleDollarSignIcon', 'CircleDot', 'CircleDotDashed', 'CircleDotDashedIcon', 'CircleDotIcon', 'CircleEllipsis', 'CircleEllipsisIcon', 'CircleEqual', 'CircleEqualIcon', 'CircleFadingArrowUp', 'CircleFadingArrowUpIcon', 'CircleFadingPlus', 'CircleFadingPlusIcon', 'CircleGauge', 'CircleGaugeIcon', 'CircleHelp', 'CircleHelpIcon', 'CircleIcon', 'CircleMinus', 'CircleMinusIcon', 'CircleOff', 'CircleOffIcon', 'CircleParking', 'CircleParkingIcon', 'CircleParkingOff', 'CircleParkingOffIcon', 'CirclePause', 'CirclePauseIcon', 'CirclePercent', 'CirclePercentIcon', 'CirclePile', 'CirclePileIcon', 'CirclePlay', 'CirclePlayIcon', 'CirclePlus', 'CirclePlusIcon', 'CirclePoundSterling', 'CirclePoundSterlingIcon', 'CirclePower', 'CirclePowerIcon', 'CircleQuestionMark', 'CircleQuestionMarkIcon', 'CircleSlash', 'CircleSlash2', 'CircleSlash2Icon', 'CircleSlashIcon', 'CircleSlashed', 'CircleSlashedIcon', 'CircleSmall', 'CircleSmallIcon', 'CircleStar', 'CircleStarIcon', 'CircleStop', 'CircleStopIcon', 'CircleUser', 'CircleUserIcon', 'CircleUserRound', 'CircleUserRoundIcon', 'CircleX', 'CircleXIcon', 'CircuitBoard', 'CircuitBoardIcon', 'Citrus', 'CitrusIcon', 'Clapperboard', 'ClapperboardIcon', 'Clipboard', 'ClipboardCheck', 'ClipboardCheckIcon', 'ClipboardClock', 'ClipboardClockIcon', 'ClipboardCopy', 'ClipboardCopyIcon', 'ClipboardEdit', 'ClipboardEditIcon', 'ClipboardIcon', 'ClipboardList', 'ClipboardListIcon', 'ClipboardMinus', 'ClipboardMinusIcon', 'ClipboardPaste', 'ClipboardPasteIcon', 'ClipboardPen', 'ClipboardPenIcon', 'ClipboardPenLine', 'ClipboardPenLineIcon', 'ClipboardPlus', 'ClipboardPlusIcon', 'ClipboardSignature', 'ClipboardSignatureIcon', 'ClipboardType', 'ClipboardTypeIcon', 'ClipboardX', 'ClipboardXIcon', 'Clock', 'Clock1', 'Clock10', 'Clock10Icon', 'Clock11', 'Clock11Icon', 'Clock12', 'Clock12Icon', 'Clock1Icon', 'Clock2', 'Clock2Icon', 'Clock3', 'Clock3Icon', 'Clock4', 'Clock4Icon', 'Clock5', 'Clock5Icon', 'Clock6', 'Clock6Icon', 'Clock7', 'Clock7Icon', 'Clock8', 'Clock8Icon', 'Clock9', 'Clock9Icon', 'ClockAlert', 'ClockAlertIcon', 'ClockArrowDown', 'ClockArrowDownIcon', 'ClockArrowUp', 'ClockArrowUpIcon', 'ClockCheck', 'ClockCheckIcon', 'ClockFading', 'ClockFadingIcon', 'ClockIcon', 'ClockPlus', 'ClockPlusIcon', 'ClosedCaption', 'ClosedCaptionIcon', 'Cloud', 'CloudAlert', 'CloudAlertIcon', 'CloudBackup', 'CloudBackupIcon', 'CloudCheck', 'CloudCheckIcon', 'CloudCog', 'CloudCogIcon', 'CloudDownload', 'CloudDownloadIcon', 'CloudDrizzle', 'CloudDrizzleIcon', 'CloudFog', 'CloudFogIcon', 'CloudHail', 'CloudHailIcon', 'CloudIcon', 'CloudLightning', 'CloudLightningIcon', 'CloudMoon', 'CloudMoonIcon', 'CloudMoonRain', 'CloudMoonRainIcon', 'CloudOff', 'CloudOffIcon', 'CloudRain', 'CloudRainIcon', 'CloudRainWind', 'CloudRainWindIcon', 'CloudSnow', 'CloudSnowIcon', 'CloudSun', 'CloudSunIcon', 'CloudSunRain', 'CloudSunRainIcon', 'CloudSync', 'CloudSyncIcon', 'CloudUpload', 'CloudUploadIcon', 'Cloudy', 'CloudyIcon', 'Clover', 'CloverIcon', 'Club', 'ClubIcon', 'Code', 'Code2', 'Code2Icon', 'CodeIcon', 'CodeSquare', 'CodeSquareIcon', 'CodeXml', 'CodeXmlIcon', 'Codepen', 'CodepenIcon', 'Codesandbox', 'CodesandboxIcon', 'Coffee', 'CoffeeIcon', 'Cog', 'CogIcon', 'Coins', 'CoinsIcon', 'Columns', 'Columns2', 'Columns2Icon', 'Columns3', 'Columns3Cog', 'Columns3CogIcon', 'Columns3Icon', 'Columns4', 'Columns4Icon', 'ColumnsIcon', 'ColumnsSettings', 'ColumnsSettingsIcon', 'Combine', 'CombineIcon', 'Command', 'CommandIcon', 'Compass', 'CompassIcon', 'Component', 'ComponentIcon', 'Computer', 'ComputerIcon', 'ConciergeBell', 'ConciergeBellIcon', 'Cone', 'ConeIcon', 'Construction', 'ConstructionIcon', 'Contact', 'Contact2', 'Contact2Icon', 'ContactIcon', 'ContactRound', 'ContactRoundIcon', 'Container', 'ContainerIcon', 'Contrast', 'ContrastIcon', 'Cookie', 'CookieIcon', 'CookingPot', 'CookingPotIcon', 'Copy', 'CopyCheck', 'CopyCheckIcon', 'CopyIcon', 'CopyMinus', 'CopyMinusIcon', 'CopyPlus', 'CopyPlusIcon', 'CopySlash', 'CopySlashIcon', 'CopyX', 'CopyXIcon', 'Copyleft', 'CopyleftIcon', 'Copyright', 'CopyrightIcon', 'CornerDownLeft', 'CornerDownLeftIcon', 'CornerDownRight', 'CornerDownRightIcon', 'CornerLeftDown', 'CornerLeftDownIcon', 'CornerLeftUp', 'CornerLeftUpIcon', 'CornerRightDown', 'CornerRightDownIcon', 'CornerRightUp', 'CornerRightUpIcon', 'CornerUpLeft', 'CornerUpLeftIcon', 'CornerUpRight', 'CornerUpRightIcon', 'Cpu', 'CpuIcon', 'CreativeCommons', 'CreativeCommonsIcon', 'CreditCard', 'CreditCardIcon', 'Croissant', 'CroissantIcon', 'Crop', 'CropIcon', 'Cross', 'CrossIcon', 'Crosshair', 'CrosshairIcon', 'Crown', 'CrownIcon', 'Cuboid', 'CuboidIcon', 'CupSoda', 'CupSodaIcon', 'CurlyBraces', 'CurlyBracesIcon', 'Currency', 'CurrencyIcon', 'Cylinder', 'CylinderIcon', 'Dam', 'DamIcon', 'Database', 'DatabaseBackup', 'DatabaseBackupIcon', 'DatabaseIcon', 'DatabaseZap', 'DatabaseZapIcon', 'DecimalsArrowLeft', 'DecimalsArrowLeftIcon', 'DecimalsArrowRight', 'DecimalsArrowRightIcon', 'Delete', 'DeleteIcon', 'Dessert', 'DessertIcon', 'Diameter', 'DiameterIcon', 'Diamond', 'DiamondIcon', 'DiamondMinus', 'DiamondMinusIcon', 'DiamondPercent', 'DiamondPercentIcon', 'DiamondPlus', 'DiamondPlusIcon', 'Dice1', 'Dice1Icon', 'Dice2', 'Dice2Icon', 'Dice3', 'Dice3Icon', 'Dice4', 'Dice4Icon', 'Dice5', 'Dice5Icon', 'Dice6', 'Dice6Icon', 'Dices', 'DicesIcon', 'Diff', 'DiffIcon', 'Disc', 'Disc2', 'Disc2Icon', 'Disc3', 'Disc3Icon', 'DiscAlbum', 'DiscAlbumIcon', 'DiscIcon', 'Divide', 'DivideCircle', 'DivideCircleIcon', 'DivideIcon', 'DivideSquare', 'DivideSquareIcon', 'Dna', 'DnaIcon', 'DnaOff', 'DnaOffIcon', 'Dock', 'DockIcon', 'Dog', 'DogIcon', 'DollarSign', 'DollarSignIcon', 'Donut', 'DonutIcon', 'DoorClosed', 'DoorClosedIcon', 'DoorClosedLocked', 'DoorClosedLockedIcon', 'DoorOpen', 'DoorOpenIcon', 'Dot', 'DotIcon', 'DotSquare', 'DotSquareIcon', 'Download', 'DownloadCloud', 'DownloadCloudIcon', 'DownloadIcon', 'DraftingCompass', 'DraftingCompassIcon', 'Drama', 'DramaIcon', 'Dribbble', 'DribbbleIcon', 'Drill', 'DrillIcon', 'Drone', 'DroneIcon', 'Droplet', 'DropletIcon', 'DropletOff', 'DropletOffIcon', 'Droplets', 'DropletsIcon', 'Drum', 'DrumIcon', 'Drumstick', 'DrumstickIcon', 'Dumbbell', 'DumbbellIcon', 'Ear', 'EarIcon', 'EarOff', 'EarOffIcon', 'Earth', 'EarthIcon', 'EarthLock', 'EarthLockIcon', 'Eclipse', 'EclipseIcon', 'Edit', 'Edit2', 'Edit2Icon', 'Edit3', 'Edit3Icon', 'EditIcon', 'Egg', 'EggFried', 'EggFriedIcon', 'EggIcon', 'EggOff', 'EggOffIcon', 'Ellipsis', 'EllipsisIcon', 'EllipsisVertical', 'EllipsisVerticalIcon', 'Equal', 'EqualApproximately', 'EqualApproximatelyIcon', 'EqualIcon', 'EqualNot', 'EqualNotIcon', 'EqualSquare', 'EqualSquareIcon', 'Eraser', 'EraserIcon', 'EthernetPort', 'EthernetPortIcon', 'Euro', 'EuroIcon', 'EvCharger', 'EvChargerIcon', 'Expand', 'ExpandIcon', 'ExternalLink', 'ExternalLinkIcon', 'Eye', 'EyeClosed', 'EyeClosedIcon', 'EyeIcon', 'EyeOff', 'EyeOffIcon', 'Facebook', 'FacebookIcon', 'Factory', 'FactoryIcon', 'Fan', 'FanIcon', 'FastForward', 'FastForwardIcon', 'Feather', 'FeatherIcon', 'Fence', 'FenceIcon', 'FerrisWheel', 'FerrisWheelIcon', 'Figma', 'FigmaIcon', 'File', 'FileArchive', 'FileArchiveIcon', 'FileAudio', 'FileAudio2', 'FileAudio2Icon', 'FileAudioIcon', 'FileAxis3D', 'FileAxis3DIcon', 'FileAxis3d', 'FileAxis3dIcon', 'FileBadge', 'FileBadge2', 'FileBadge2Icon', 'FileBadgeIcon', 'FileBarChart', 'FileBarChart2', 'FileBarChart2Icon', 'FileBarChartIcon', 'FileBox', 'FileBoxIcon', 'FileBraces', 'FileBracesCorner', 'FileBracesCornerIcon', 'FileBracesIcon', 'FileChartColumn', 'FileChartColumnIcon', 'FileChartColumnIncreasing', 'FileChartColumnIncreasingIcon', 'FileChartLine', 'FileChartLineIcon', 'FileChartPie', 'FileChartPieIcon', 'FileCheck', 'FileCheck2', 'FileCheck2Icon', 'FileCheckCorner', 'FileCheckCornerIcon', 'FileCheckIcon', 'FileClock', 'FileClockIcon', 'FileCode', 'FileCode2', 'FileCode2Icon', 'FileCodeCorner', 'FileCodeCornerIcon', 'FileCodeIcon', 'FileCog', 'FileCog2', 'FileCog2Icon', 'FileCogIcon', 'FileDiff', 'FileDiffIcon', 'FileDigit', 'FileDigitIcon', 'FileDown', 'FileDownIcon', 'FileEdit', 'FileEditIcon', 'FileExclamationPoint', 'FileExclamationPointIcon', 'FileHeadphone', 'FileHeadphoneIcon', 'FileHeart', 'FileHeartIcon', 'FileIcon', 'FileImage', 'FileImageIcon', 'FileInput', 'FileInputIcon', 'FileJson', 'FileJson2', 'FileJson2Icon', 'FileJsonIcon', 'FileKey', 'FileKey2', 'FileKey2Icon', 'FileKeyIcon', 'FileLineChart', 'FileLineChartIcon', 'FileLock', 'FileLock2', 'FileLock2Icon', 'FileLockIcon', 'FileMinus', 'FileMinus2', 'FileMinus2Icon', 'FileMinusCorner', 'FileMinusCornerIcon', 'FileMinusIcon', 'FileMusic', 'FileMusicIcon', 'FileOutput', 'FileOutputIcon', 'FilePen', 'FilePenIcon', 'FilePenLine', 'FilePenLineIcon', 'FilePieChart', 'FilePieChartIcon', 'FilePlay', 'FilePlayIcon', 'FilePlus', 'FilePlus2', 'FilePlus2Icon', 'FilePlusCorner', 'FilePlusCornerIcon', 'FilePlusIcon', 'FileQuestion', 'FileQuestionIcon', 'FileQuestionMark', 'FileQuestionMarkIcon', 'FileScan', 'FileScanIcon', 'FileSearch', 'FileSearch2', 'FileSearch2Icon', 'FileSearchCorner', 'FileSearchCornerIcon', 'FileSearchIcon', 'FileSignal', 'FileSignalIcon', 'FileSignature', 'FileSignatureIcon', 'FileSliders', 'FileSlidersIcon', 'FileSpreadsheet', 'FileSpreadsheetIcon', 'FileStack', 'FileStackIcon', 'FileSymlink', 'FileSymlinkIcon', 'FileTerminal', 'FileTerminalIcon', 'FileText', 'FileTextIcon', 'FileType', 'FileType2', 'FileType2Icon', 'FileTypeCorner', 'FileTypeCornerIcon', 'FileTypeIcon', 'FileUp', 'FileUpIcon', 'FileUser', 'FileUserIcon', 'FileVideo', 'FileVideo2', 'FileVideo2Icon', 'FileVideoCamera', 'FileVideoCameraIcon', 'FileVideoIcon', 'FileVolume', 'FileVolume2', 'FileVolume2Icon', 'FileVolumeIcon', 'FileWarning', 'FileWarningIcon', 'FileX', 'FileX2', 'FileX2Icon', 'FileXCorner', 'FileXCornerIcon', 'FileXIcon', 'Files', 'FilesIcon', 'Film', 'FilmIcon', 'Filter', 'FilterIcon', 'FilterX', 'FilterXIcon', 'Fingerprint', 'FingerprintIcon', 'FingerprintPattern', 'FingerprintPatternIcon', 'FireExtinguisher', 'FireExtinguisherIcon', 'Fish', 'FishIcon', 'FishOff', 'FishOffIcon', 'FishSymbol', 'FishSymbolIcon', 'FishingHook', 'FishingHookIcon', 'Flag', 'FlagIcon', 'FlagOff', 'FlagOffIcon', 'FlagTriangleLeft', 'FlagTriangleLeftIcon', 'FlagTriangleRight', 'FlagTriangleRightIcon', 'Flame', 'FlameIcon', 'FlameKindling', 'FlameKindlingIcon', 'Flashlight', 'FlashlightIcon', 'FlashlightOff', 'FlashlightOffIcon', 'FlaskConical', 'FlaskConicalIcon', 'FlaskConicalOff', 'FlaskConicalOffIcon', 'FlaskRound', 'FlaskRoundIcon', 'FlipHorizontal', 'FlipHorizontal2', 'FlipHorizontal2Icon', 'FlipHorizontalIcon', 'FlipVertical', 'FlipVertical2', 'FlipVertical2Icon', 'FlipVerticalIcon', 'Flower', 'Flower2', 'Flower2Icon', 'FlowerIcon', 'Focus', 'FocusIcon', 'FoldHorizontal', 'FoldHorizontalIcon', 'FoldVertical', 'FoldVerticalIcon', 'Folder', 'FolderArchive', 'FolderArchiveIcon', 'FolderCheck', 'FolderCheckIcon', 'FolderClock', 'FolderClockIcon', 'FolderClosed', 'FolderClosedIcon', 'FolderCode', 'FolderCodeIcon', 'FolderCog', 'FolderCog2', 'FolderCog2Icon', 'FolderCogIcon', 'FolderDot', 'FolderDotIcon', 'FolderDown', 'FolderDownIcon', 'FolderEdit', 'FolderEditIcon', 'FolderGit', 'FolderGit2', 'FolderGit2Icon', 'FolderGitIcon', 'FolderHeart', 'FolderHeartIcon', 'FolderIcon', 'FolderInput', 'FolderInputIcon', 'FolderKanban', 'FolderKanbanIcon', 'FolderKey', 'FolderKeyIcon', 'FolderLock', 'FolderLockIcon', 'FolderMinus', 'FolderMinusIcon', 'FolderOpen', 'FolderOpenDot', 'FolderOpenDotIcon', 'FolderOpenIcon', 'FolderOutput', 'FolderOutputIcon', 'FolderPen', 'FolderPenIcon', 'FolderPlus', 'FolderPlusIcon', 'FolderRoot', 'FolderRootIcon', 'FolderSearch', 'FolderSearch2', 'FolderSearch2Icon', 'FolderSearchIcon', 'FolderSymlink', 'FolderSymlinkIcon', 'FolderSync', 'FolderSyncIcon', 'FolderTree', 'FolderTreeIcon', 'FolderUp', 'FolderUpIcon', 'FolderX', 'FolderXIcon', 'Folders', 'FoldersIcon', 'Footprints', 'FootprintsIcon', 'ForkKnife', 'ForkKnifeCrossed', 'ForkKnifeCrossedIcon', 'ForkKnifeIcon', 'Forklift', 'ForkliftIcon', 'Form', 'FormIcon', 'FormInput', 'FormInputIcon', 'Forward', 'ForwardIcon', 'Frame', 'FrameIcon', 'Framer', 'FramerIcon', 'Frown', 'FrownIcon', 'Fuel', 'FuelIcon', 'Fullscreen', 'FullscreenIcon', 'FunctionSquare', 'FunctionSquareIcon', 'Funnel', 'FunnelIcon', 'FunnelPlus', 'FunnelPlusIcon', 'FunnelX', 'FunnelXIcon', 'GalleryHorizontal', 'GalleryHorizontalEnd', 'GalleryHorizontalEndIcon', 'GalleryHorizontalIcon', 'GalleryThumbnails', 'GalleryThumbnailsIcon', 'GalleryVertical', 'GalleryVerticalEnd', 'GalleryVerticalEndIcon', 'GalleryVerticalIcon', 'Gamepad', 'Gamepad2', 'Gamepad2Icon', 'GamepadDirectional', 'GamepadDirectionalIcon', 'GamepadIcon', 'GanttChart', 'GanttChartIcon', 'GanttChartSquare', 'GanttChartSquareIcon', 'Gauge', 'GaugeCircle', 'GaugeCircleIcon', 'GaugeIcon', 'Gavel', 'GavelIcon', 'Gem', 'GemIcon', 'GeorgianLari', 'GeorgianLariIcon', 'Ghost', 'GhostIcon', 'Gift', 'GiftIcon', 'GitBranch', 'GitBranchIcon', 'GitBranchMinus', 'GitBranchMinusIcon', 'GitBranchPlus', 'GitBranchPlusIcon', 'GitCommit', 'GitCommitHorizontal', 'GitCommitHorizontalIcon', 'GitCommitIcon', 'GitCommitVertical', 'GitCommitVerticalIcon', 'GitCompare', 'GitCompareArrows', 'GitCompareArrowsIcon', 'GitCompareIcon', 'GitFork', 'GitForkIcon', 'GitGraph', 'GitGraphIcon', 'GitMerge', 'GitMergeIcon', 'GitPullRequest', 'GitPullRequestArrow', 'GitPullRequestArrowIcon', 'GitPullRequestClosed', 'GitPullRequestClosedIcon', 'GitPullRequestCreate', 'GitPullRequestCreateArrow', 'GitPullRequestCreateArrowIcon', 'GitPullRequestCreateIcon', 'GitPullRequestDraft', 'GitPullRequestDraftIcon', 'GitPullRequestIcon', 'Github', 'GithubIcon', 'Gitlab', 'GitlabIcon', 'GlassWater', 'GlassWaterIcon', 'Glasses', 'GlassesIcon', 'Globe', 'Globe2', 'Globe2Icon', 'GlobeIcon', 'GlobeLock', 'GlobeLockIcon', 'GlobeX', 'GlobeXIcon', 'Goal', 'GoalIcon', 'Gpu', 'GpuIcon', 'Grab', 'GrabIcon', 'GraduationCap', 'GraduationCapIcon', 'Grape', 'GrapeIcon', 'Grid', 'Grid2X2', 'Grid2X2Check', 'Grid2X2CheckIcon', 'Grid2X2Icon', 'Grid2X2Plus', 'Grid2X2PlusIcon', 'Grid2X2X', 'Grid2X2XIcon', 'Grid2x2', 'Grid2x2Check', 'Grid2x2CheckIcon', 'Grid2x2Icon', 'Grid2x2Plus', 'Grid2x2PlusIcon', 'Grid2x2X', 'Grid2x2XIcon', 'Grid3X3', 'Grid3X3Icon', 'Grid3x2', 'Grid3x2Icon', 'Grid3x3', 'Grid3x3Icon', 'GridIcon', 'Grip', 'GripHorizontal', 'GripHorizontalIcon', 'GripIcon', 'GripVertical', 'GripVerticalIcon', 'Group', 'GroupIcon', 'Guitar', 'GuitarIcon', 'Ham', 'HamIcon', 'Hamburger', 'HamburgerIcon', 'Hammer', 'HammerIcon', 'Hand', 'HandCoins', 'HandCoinsIcon', 'HandFist', 'HandFistIcon', 'HandGrab', 'HandGrabIcon', 'HandHeart', 'HandHeartIcon', 'HandHelping', 'HandHelpingIcon', 'HandIcon', 'HandMetal', 'HandMetalIcon', 'HandPlatter', 'HandPlatterIcon', 'Handbag', 'HandbagIcon', 'Handshake', 'HandshakeIcon', 'HardDrive', 'HardDriveDownload', 'HardDriveDownloadIcon', 'HardDriveIcon', 'HardDriveUpload', 'HardDriveUploadIcon', 'HardHat', 'HardHatIcon', 'Hash', 'HashIcon', 'HatGlasses', 'HatGlassesIcon', 'Haze', 'HazeIcon', 'Hd', 'HdIcon', 'HdmiPort', 'HdmiPortIcon', 'Heading', 'Heading1', 'Heading1Icon', 'Heading2', 'Heading2Icon', 'Heading3', 'Heading3Icon', 'Heading4', 'Heading4Icon', 'Heading5', 'Heading5Icon', 'Heading6', 'Heading6Icon', 'HeadingIcon', 'HeadphoneOff', 'HeadphoneOffIcon', 'Headphones', 'HeadphonesIcon', 'Headset', 'HeadsetIcon', 'Heart', 'HeartCrack', 'HeartCrackIcon', 'HeartHandshake', 'HeartHandshakeIcon', 'HeartIcon', 'HeartMinus', 'HeartMinusIcon', 'HeartOff', 'HeartOffIcon', 'HeartPlus', 'HeartPlusIcon', 'HeartPulse', 'HeartPulseIcon', 'Heater', 'HeaterIcon', 'Helicopter', 'HelicopterIcon', 'HelpCircle', 'HelpCircleIcon', 'HelpingHand', 'HelpingHandIcon', 'Hexagon', 'HexagonIcon', 'Highlighter', 'HighlighterIcon', 'History', 'HistoryIcon', 'Home', 'HomeIcon', 'Hop', 'HopIcon', 'HopOff', 'HopOffIcon', 'Hospital', 'HospitalIcon', 'Hotel', 'HotelIcon', 'Hourglass', 'HourglassIcon', 'House', 'HouseHeart', 'HouseHeartIcon', 'HouseIcon', 'HousePlug', 'HousePlugIcon', 'HousePlus', 'HousePlusIcon', 'HouseWifi', 'HouseWifiIcon', 'IceCream', 'IceCream2', 'IceCream2Icon', 'IceCreamBowl', 'IceCreamBowlIcon', 'IceCreamCone', 'IceCreamConeIcon', 'IceCreamIcon', 'Icon', 'IdCard', 'IdCardIcon', 'IdCardLanyard', 'IdCardLanyardIcon', 'Image', 'ImageDown', 'ImageDownIcon', 'ImageIcon', 'ImageMinus', 'ImageMinusIcon', 'ImageOff', 'ImageOffIcon', 'ImagePlay', 'ImagePlayIcon', 'ImagePlus', 'ImagePlusIcon', 'ImageUp', 'ImageUpIcon', 'ImageUpscale', 'ImageUpscaleIcon', 'Images', 'ImagesIcon', 'Import', 'ImportIcon', 'Inbox', 'InboxIcon', 'Indent', 'IndentDecrease', 'IndentDecreaseIcon', 'IndentIcon', 'IndentIncrease', 'IndentIncreaseIcon', 'IndianRupee', 'IndianRupeeIcon', 'Infinity', 'InfinityIcon', 'Info', 'InfoIcon', 'Inspect', 'InspectIcon', 'InspectionPanel', 'InspectionPanelIcon', 'Instagram', 'InstagramIcon', 'Italic', 'ItalicIcon', 'IterationCcw', 'IterationCcwIcon', 'IterationCw', 'IterationCwIcon', 'JapaneseYen', 'JapaneseYenIcon', 'Joystick', 'JoystickIcon', 'Kanban', 'KanbanIcon', 'KanbanSquare', 'KanbanSquareDashed', 'KanbanSquareDashedIcon', 'KanbanSquareIcon', 'Kayak', 'KayakIcon', 'Key', 'KeyIcon', 'KeyRound', 'KeyRoundIcon', 'KeySquare', 'KeySquareIcon', 'Keyboard', 'KeyboardIcon', 'KeyboardMusic', 'KeyboardMusicIcon', 'KeyboardOff', 'KeyboardOffIcon', 'Lamp', 'LampCeiling', 'LampCeilingIcon', 'LampDesk', 'LampDeskIcon', 'LampFloor', 'LampFloorIcon', 'LampIcon', 'LampWallDown', 'LampWallDownIcon', 'LampWallUp', 'LampWallUpIcon', 'LandPlot', 'LandPlotIcon', 'Landmark', 'LandmarkIcon', 'Languages', 'LanguagesIcon', 'Laptop', 'Laptop2', 'Laptop2Icon', 'LaptopIcon', 'LaptopMinimal', 'LaptopMinimalCheck', 'LaptopMinimalCheckIcon', 'LaptopMinimalIcon', 'Lasso', 'LassoIcon', 'LassoSelect', 'LassoSelectIcon', 'Laugh', 'LaughIcon', 'Layers', 'Layers2', 'Layers2Icon', 'Layers3', 'Layers3Icon', 'LayersIcon', 'LayersPlus', 'LayersPlusIcon', 'Layout', 'LayoutDashboard', 'LayoutDashboardIcon', 'LayoutGrid', 'LayoutGridIcon', 'LayoutIcon', 'LayoutList', 'LayoutListIcon', 'LayoutPanelLeft', 'LayoutPanelLeftIcon', 'LayoutPanelTop', 'LayoutPanelTopIcon', 'LayoutTemplate', 'LayoutTemplateIcon', 'Leaf', 'LeafIcon', 'LeafyGreen', 'LeafyGreenIcon', 'Lectern', 'LecternIcon', 'LetterText', 'LetterTextIcon', 'Library', 'LibraryBig', 'LibraryBigIcon', 'LibraryIcon', 'LibrarySquare', 'LibrarySquareIcon', 'LifeBuoy', 'LifeBuoyIcon', 'Ligature', 'LigatureIcon', 'Lightbulb', 'LightbulbIcon', 'LightbulbOff', 'LightbulbOffIcon', 'LineChart', 'LineChartIcon', 'LineSquiggle', 'LineSquiggleIcon', 'Link', 'Link2', 'Link2Icon', 'Link2Off', 'Link2OffIcon', 'LinkIcon', 'Linkedin', 'LinkedinIcon', 'List', 'ListCheck', 'ListCheckIcon', 'ListChecks', 'ListChecksIcon', 'ListChevronsDownUp', 'ListChevronsDownUpIcon', 'ListChevronsUpDown', 'ListChevronsUpDownIcon', 'ListCollapse', 'ListCollapseIcon', 'ListEnd', 'ListEndIcon', 'ListFilter', 'ListFilterIcon', 'ListFilterPlus', 'ListFilterPlusIcon', 'ListIcon', 'ListIndentDecrease', 'ListIndentDecreaseIcon', 'ListIndentIncrease', 'ListIndentIncreaseIcon', 'ListMinus', 'ListMinusIcon', 'ListMusic', 'ListMusicIcon', 'ListOrdered', 'ListOrderedIcon', 'ListPlus', 'ListPlusIcon', 'ListRestart', 'ListRestartIcon', 'ListStart', 'ListStartIcon', 'ListTodo', 'ListTodoIcon', 'ListTree', 'ListTreeIcon', 'ListVideo', 'ListVideoIcon', 'ListX', 'ListXIcon', 'Loader', 'Loader2', 'Loader2Icon', 'LoaderCircle', 'LoaderCircleIcon', 'LoaderIcon', 'LoaderPinwheel', 'LoaderPinwheelIcon', 'Locate', 'LocateFixed', 'LocateFixedIcon', 'LocateIcon', 'LocateOff', 'LocateOffIcon', 'LocationEdit', 'LocationEditIcon', 'Lock', 'LockIcon', 'LockKeyhole', 'LockKeyholeIcon', 'LockKeyholeOpen', 'LockKeyholeOpenIcon', 'LockOpen', 'LockOpenIcon', 'LogIn', 'LogInIcon', 'LogOut', 'LogOutIcon', 'Logs', 'LogsIcon', 'Lollipop', 'LollipopIcon', 'LucideAArrowDown', 'LucideAArrowUp', 'LucideALargeSmall', 'LucideAccessibility', 'LucideActivity', 'LucideActivitySquare', 'LucideAirVent', 'LucideAirplay', 'LucideAlarmCheck', 'LucideAlarmClock', 'LucideAlarmClockCheck', 'LucideAlarmClockMinus', 'LucideAlarmClockOff', 'LucideAlarmClockPlus', 'LucideAlarmMinus', 'LucideAlarmPlus', 'LucideAlarmSmoke', 'LucideAlbum', 'LucideAlertCircle', 'LucideAlertOctagon', 'LucideAlertTriangle', 'LucideAlignCenter', 'LucideAlignCenterHorizontal', 'LucideAlignCenterVertical', 'LucideAlignEndHorizontal', 'LucideAlignEndVertical', 'LucideAlignHorizontalDistributeCenter', 'LucideAlignHorizontalDistributeEnd', 'LucideAlignHorizontalDistributeStart', 'LucideAlignHorizontalJustifyCenter', 'LucideAlignHorizontalJustifyEnd', 'LucideAlignHorizontalJustifyStart', 'LucideAlignHorizontalSpaceAround', 'LucideAlignHorizontalSpaceBetween', 'LucideAlignJustify', 'LucideAlignLeft', 'LucideAlignRight', 'LucideAlignStartHorizontal', 'LucideAlignStartVertical', 'LucideAlignVerticalDistributeCenter', 'LucideAlignVerticalDistributeEnd', 'LucideAlignVerticalDistributeStart', 'LucideAlignVerticalJustifyCenter', 'LucideAlignVerticalJustifyEnd', 'LucideAlignVerticalJustifyStart', 'LucideAlignVerticalSpaceAround', 'LucideAlignVerticalSpaceBetween', 'LucideAmbulance', 'LucideAmpersand', 'LucideAmpersands', 'LucideAmphora', 'LucideAnchor', 'LucideAngry', 'LucideAnnoyed', 'LucideAntenna', 'LucideAnvil', 'LucideAperture', 'LucideAppWindow', 'LucideAppWindowMac', 'LucideApple', 'LucideArchive', 'LucideArchiveRestore', 'LucideArchiveX', 'LucideAreaChart', 'LucideArmchair', 'LucideArrowBigDown', 'LucideArrowBigDownDash', 'LucideArrowBigLeft', 'LucideArrowBigLeftDash', 'LucideArrowBigRight', 'LucideArrowBigRightDash', 'LucideArrowBigUp', 'LucideArrowBigUpDash', 'LucideArrowDown', 'LucideArrowDown01', 'LucideArrowDown10', 'LucideArrowDownAZ', 'LucideArrowDownAz', 'LucideArrowDownCircle', 'LucideArrowDownFromLine', 'LucideArrowDownLeft', 'LucideArrowDownLeftFromCircle', 'LucideArrowDownLeftFromSquare', 'LucideArrowDownLeftSquare', 'LucideArrowDownNarrowWide', 'LucideArrowDownRight', 'LucideArrowDownRightFromCircle', 'LucideArrowDownRightFromSquare', 'LucideArrowDownRightSquare', 'LucideArrowDownSquare', 'LucideArrowDownToDot', 'LucideArrowDownToLine', 'LucideArrowDownUp', 'LucideArrowDownWideNarrow', 'LucideArrowDownZA', 'LucideArrowDownZa', 'LucideArrowLeft', 'LucideArrowLeftCircle', 'LucideArrowLeftFromLine', 'LucideArrowLeftRight', 'LucideArrowLeftSquare', 'LucideArrowLeftToLine', 'LucideArrowRight', 'LucideArrowRightCircle', 'LucideArrowRightFromLine', 'LucideArrowRightLeft', 'LucideArrowRightSquare', 'LucideArrowRightToLine', 'LucideArrowUp', 'LucideArrowUp01', 'LucideArrowUp10', 'LucideArrowUpAZ', 'LucideArrowUpAz', 'LucideArrowUpCircle', 'LucideArrowUpDown', 'LucideArrowUpFromDot', 'LucideArrowUpFromLine', 'LucideArrowUpLeft', 'LucideArrowUpLeftFromCircle', 'LucideArrowUpLeftFromSquare', 'LucideArrowUpLeftSquare', 'LucideArrowUpNarrowWide', 'LucideArrowUpRight', 'LucideArrowUpRightFromCircle', 'LucideArrowUpRightFromSquare', 'LucideArrowUpRightSquare', 'LucideArrowUpSquare', 'LucideArrowUpToLine', 'LucideArrowUpWideNarrow', 'LucideArrowUpZA', 'LucideArrowUpZa', 'LucideArrowsUpFromLine', 'LucideAsterisk', 'LucideAsteriskSquare', 'LucideAtSign', 'LucideAtom', 'LucideAudioLines', 'LucideAudioWaveform', 'LucideAward', 'LucideAxe', 'LucideAxis3D', 'LucideAxis3d', 'LucideBaby', 'LucideBackpack', 'LucideBadge', 'LucideBadgeAlert', 'LucideBadgeCent', 'LucideBadgeCheck', 'LucideBadgeDollarSign', 'LucideBadgeEuro', 'LucideBadgeHelp', 'LucideBadgeIndianRupee', 'LucideBadgeInfo', 'LucideBadgeJapaneseYen', 'LucideBadgeMinus', 'LucideBadgePercent', 'LucideBadgePlus', 'LucideBadgePoundSterling', 'LucideBadgeQuestionMark', 'LucideBadgeRussianRuble', 'LucideBadgeSwissFranc', 'LucideBadgeTurkishLira', 'LucideBadgeX', 'LucideBaggageClaim', 'LucideBalloon', 'LucideBan', 'LucideBanana', 'LucideBandage', 'LucideBanknote', 'LucideBanknoteArrowDown', 'LucideBanknoteArrowUp', 'LucideBanknoteX', 'LucideBarChart', 'LucideBarChart2', 'LucideBarChart3', 'LucideBarChart4', 'LucideBarChartBig', 'LucideBarChartHorizontal', 'LucideBarChartHorizontalBig', 'LucideBarcode', 'LucideBarrel', 'LucideBaseline', 'LucideBath', 'LucideBattery', 'LucideBatteryCharging', 'LucideBatteryFull', 'LucideBatteryLow', 'LucideBatteryMedium', 'LucideBatteryPlus', 'LucideBatteryWarning', 'LucideBeaker', 'LucideBean', 'LucideBeanOff', 'LucideBed', 'LucideBedDouble', 'LucideBedSingle', 'LucideBeef', 'LucideBeer', 'LucideBeerOff', 'LucideBell', 'LucideBellDot', 'LucideBellElectric', 'LucideBellMinus', 'LucideBellOff', 'LucideBellPlus', 'LucideBellRing', 'LucideBetweenHorizonalEnd', 'LucideBetweenHorizonalStart', 'LucideBetweenHorizontalEnd', 'LucideBetweenHorizontalStart', 'LucideBetweenVerticalEnd', 'LucideBetweenVerticalStart', 'LucideBicepsFlexed', 'LucideBike', 'LucideBinary', 'LucideBinoculars', 'LucideBiohazard', 'LucideBird', 'LucideBirdhouse', 'LucideBitcoin', 'LucideBlend', 'LucideBlinds', 'LucideBlocks', 'LucideBluetooth', 'LucideBluetoothConnected', 'LucideBluetoothOff', 'LucideBluetoothSearching', 'LucideBold', 'LucideBolt', 'LucideBomb', 'LucideBone', 'LucideBook', 'LucideBookA', 'LucideBookAlert', 'LucideBookAudio', 'LucideBookCheck', 'LucideBookCopy', 'LucideBookDashed', 'LucideBookDown', 'LucideBookHeadphones', 'LucideBookHeart', 'LucideBookImage', 'LucideBookKey', 'LucideBookLock', 'LucideBookMarked', 'LucideBookMinus', 'LucideBookOpen', 'LucideBookOpenCheck', 'LucideBookOpenText', 'LucideBookPlus', 'LucideBookSearch', 'LucideBookTemplate', 'LucideBookText', 'LucideBookType', 'LucideBookUp', 'LucideBookUp2', 'LucideBookUser', 'LucideBookX', 'LucideBookmark', 'LucideBookmarkCheck', 'LucideBookmarkMinus', 'LucideBookmarkPlus', 'LucideBookmarkX', 'LucideBoomBox', 'LucideBot', 'LucideBotMessageSquare', 'LucideBotOff', 'LucideBottleWine', 'LucideBowArrow', 'LucideBox', 'LucideBoxSelect', 'LucideBoxes', 'LucideBraces', 'LucideBrackets', 'LucideBrain', 'LucideBrainCircuit', 'LucideBrainCog', 'LucideBrickWall', 'LucideBrickWallFire', 'LucideBrickWallShield', 'LucideBriefcase', 'LucideBriefcaseBusiness', 'LucideBriefcaseConveyorBelt', 'LucideBriefcaseMedical', 'LucideBringToFront', 'LucideBrush', 'LucideBrushCleaning', 'LucideBubbles', 'LucideBug', 'LucideBugOff', 'LucideBugPlay', 'LucideBuilding', 'LucideBuilding2', 'LucideBus', 'LucideBusFront', 'LucideCable', 'LucideCableCar', 'LucideCake', 'LucideCakeSlice', 'LucideCalculator', 'LucideCalendar', 'LucideCalendar1', 'LucideCalendarArrowDown', 'LucideCalendarArrowUp', 'LucideCalendarCheck', 'LucideCalendarCheck2', 'LucideCalendarClock', 'LucideCalendarCog', 'LucideCalendarDays', 'LucideCalendarFold', 'LucideCalendarHeart', 'LucideCalendarMinus', 'LucideCalendarMinus2', 'LucideCalendarOff', 'LucideCalendarPlus', 'LucideCalendarPlus2', 'LucideCalendarRange', 'LucideCalendarSearch', 'LucideCalendarSync', 'LucideCalendarX', 'LucideCalendarX2', 'LucideCalendars', 'LucideCamera', 'LucideCameraOff', 'LucideCandlestickChart', 'LucideCandy', 'LucideCandyCane', 'LucideCandyOff', 'LucideCannabis', 'LucideCannabisOff', 'LucideCaptions', 'LucideCaptionsOff', 'LucideCar', 'LucideCarFront', 'LucideCarTaxiFront', 'LucideCaravan', 'LucideCardSim', 'LucideCarrot', 'LucideCaseLower', 'LucideCaseSensitive', 'LucideCaseUpper', 'LucideCassetteTape', 'LucideCast', 'LucideCastle', 'LucideCat', 'LucideCctv', 'LucideChartArea', 'LucideChartBar', 'LucideChartBarBig', 'LucideChartBarDecreasing', 'LucideChartBarIncreasing', 'LucideChartBarStacked', 'LucideChartCandlestick', 'LucideChartColumn', 'LucideChartColumnBig', 'LucideChartColumnDecreasing', 'LucideChartColumnIncreasing', 'LucideChartColumnStacked', 'LucideChartGantt', 'LucideChartLine', 'LucideChartNetwork', 'LucideChartNoAxesColumn', 'LucideChartNoAxesColumnDecreasing', 'LucideChartNoAxesColumnIncreasing', 'LucideChartNoAxesCombined', 'LucideChartNoAxesGantt', 'LucideChartPie', 'LucideChartScatter', 'LucideChartSpline', 'LucideCheck', 'LucideCheckCheck', 'LucideCheckCircle', 'LucideCheckCircle2', 'LucideCheckLine', 'LucideCheckSquare', 'LucideCheckSquare2', 'LucideChefHat', 'LucideCherry', 'LucideChessBishop', 'LucideChessKing', 'LucideChessKnight', 'LucideChessPawn', 'LucideChessQueen', 'LucideChessRook', 'LucideChevronDown', 'LucideChevronDownCircle', 'LucideChevronDownSquare', 'LucideChevronFirst', 'LucideChevronLast', 'LucideChevronLeft', 'LucideChevronLeftCircle', 'LucideChevronLeftSquare', 'LucideChevronRight', 'LucideChevronRightCircle', 'LucideChevronRightSquare', 'LucideChevronUp', 'LucideChevronUpCircle', 'LucideChevronUpSquare', 'LucideChevronsDown', 'LucideChevronsDownUp', 'LucideChevronsLeft', 'LucideChevronsLeftRight', 'LucideChevronsLeftRightEllipsis', 'LucideChevronsRight', 'LucideChevronsRightLeft', 'LucideChevronsUp', 'LucideChevronsUpDown', 'LucideChrome', 'LucideChromium', 'LucideChurch', 'LucideCigarette', 'LucideCigaretteOff', 'LucideCircle', 'LucideCircleAlert', 'LucideCircleArrowDown', 'LucideCircleArrowLeft', 'LucideCircleArrowOutDownLeft', 'LucideCircleArrowOutDownRight', 'LucideCircleArrowOutUpLeft', 'LucideCircleArrowOutUpRight', 'LucideCircleArrowRight', 'LucideCircleArrowUp', 'LucideCircleCheck', 'LucideCircleCheckBig', 'LucideCircleChevronDown', 'LucideCircleChevronLeft', 'LucideCircleChevronRight', 'LucideCircleChevronUp', 'LucideCircleDashed', 'LucideCircleDivide', 'LucideCircleDollarSign', 'LucideCircleDot', 'LucideCircleDotDashed', 'LucideCircleEllipsis', 'LucideCircleEqual', 'LucideCircleFadingArrowUp', 'LucideCircleFadingPlus', 'LucideCircleGauge', 'LucideCircleHelp', 'LucideCircleMinus', 'LucideCircleOff', 'LucideCircleParking', 'LucideCircleParkingOff', 'LucideCirclePause', 'LucideCirclePercent', 'LucideCirclePile', 'LucideCirclePlay', 'LucideCirclePlus', 'LucideCirclePoundSterling', 'LucideCirclePower', 'LucideCircleQuestionMark', 'LucideCircleSlash', 'LucideCircleSlash2', 'LucideCircleSlashed', 'LucideCircleSmall', 'LucideCircleStar', 'LucideCircleStop', 'LucideCircleUser', 'LucideCircleUserRound', 'LucideCircleX', 'LucideCircuitBoard', 'LucideCitrus', 'LucideClapperboard', 'LucideClipboard', 'LucideClipboardCheck', 'LucideClipboardClock', 'LucideClipboardCopy', 'LucideClipboardEdit', 'LucideClipboardList', 'LucideClipboardMinus', 'LucideClipboardPaste', 'LucideClipboardPen', 'LucideClipboardPenLine', 'LucideClipboardPlus', 'LucideClipboardSignature', 'LucideClipboardType', 'LucideClipboardX', 'LucideClock', 'LucideClock1', 'LucideClock10', 'LucideClock11', 'LucideClock12', 'LucideClock2', 'LucideClock3', 'LucideClock4', 'LucideClock5', 'LucideClock6', 'LucideClock7', 'LucideClock8', 'LucideClock9', 'LucideClockAlert', 'LucideClockArrowDown', 'LucideClockArrowUp', 'LucideClockCheck', 'LucideClockFading', 'LucideClockPlus', 'LucideClosedCaption', 'LucideCloud', 'LucideCloudAlert', 'LucideCloudBackup', 'LucideCloudCheck', 'LucideCloudCog', 'LucideCloudDownload', 'LucideCloudDrizzle', 'LucideCloudFog', 'LucideCloudHail', 'LucideCloudLightning', 'LucideCloudMoon', 'LucideCloudMoonRain', 'LucideCloudOff', 'LucideCloudRain', 'LucideCloudRainWind', 'LucideCloudSnow', 'LucideCloudSun', 'LucideCloudSunRain', 'LucideCloudSync', 'LucideCloudUpload', 'LucideCloudy', 'LucideClover', 'LucideClub', 'LucideCode', 'LucideCode2', 'LucideCodeSquare', 'LucideCodeXml', 'LucideCodepen', 'LucideCodesandbox', 'LucideCoffee', 'LucideCog', 'LucideCoins', 'LucideColumns', 'LucideColumns2', 'LucideColumns3', 'LucideColumns3Cog', 'LucideColumns4', 'LucideColumnsSettings', 'LucideCombine', 'LucideCommand', 'LucideCompass', 'LucideComponent', 'LucideComputer', 'LucideConciergeBell', 'LucideCone', 'LucideConstruction', 'LucideContact', 'LucideContact2', 'LucideContactRound', 'LucideContainer', 'LucideContrast', 'LucideCookie', 'LucideCookingPot', 'LucideCopy', 'LucideCopyCheck', 'LucideCopyMinus', 'LucideCopyPlus', 'LucideCopySlash', 'LucideCopyX', 'LucideCopyleft', 'LucideCopyright', 'LucideCornerDownLeft', 'LucideCornerDownRight', 'LucideCornerLeftDown', 'LucideCornerLeftUp', 'LucideCornerRightDown', 'LucideCornerRightUp', 'LucideCornerUpLeft', 'LucideCornerUpRight', 'LucideCpu', 'LucideCreativeCommons', 'LucideCreditCard', 'LucideCroissant', 'LucideCrop', 'LucideCross', 'LucideCrosshair', 'LucideCrown', 'LucideCuboid', 'LucideCupSoda', 'LucideCurlyBraces', 'LucideCurrency', 'LucideCylinder', 'LucideDam', 'LucideDatabase', 'LucideDatabaseBackup', 'LucideDatabaseZap', 'LucideDecimalsArrowLeft', 'LucideDecimalsArrowRight', 'LucideDelete', 'LucideDessert', 'LucideDiameter', 'LucideDiamond', 'LucideDiamondMinus', 'LucideDiamondPercent', 'LucideDiamondPlus', 'LucideDice1', 'LucideDice2', 'LucideDice3', 'LucideDice4', 'LucideDice5', 'LucideDice6', 'LucideDices', 'LucideDiff', 'LucideDisc', 'LucideDisc2', 'LucideDisc3', 'LucideDiscAlbum', 'LucideDivide', 'LucideDivideCircle', 'LucideDivideSquare', 'LucideDna', 'LucideDnaOff', 'LucideDock', 'LucideDog', 'LucideDollarSign', 'LucideDonut', 'LucideDoorClosed', 'LucideDoorClosedLocked', 'LucideDoorOpen', 'LucideDot', 'LucideDotSquare', 'LucideDownload', 'LucideDownloadCloud', 'LucideDraftingCompass', 'LucideDrama', 'LucideDribbble', 'LucideDrill', 'LucideDrone', 'LucideDroplet', 'LucideDropletOff', 'LucideDroplets', 'LucideDrum', 'LucideDrumstick', 'LucideDumbbell', 'LucideEar', 'LucideEarOff', 'LucideEarth', 'LucideEarthLock', 'LucideEclipse', 'LucideEdit', 'LucideEdit2', 'LucideEdit3', 'LucideEgg', 'LucideEggFried', 'LucideEggOff', 'LucideEllipsis', 'LucideEllipsisVertical', 'LucideEqual', 'LucideEqualApproximately', 'LucideEqualNot', 'LucideEqualSquare', 'LucideEraser', 'LucideEthernetPort', 'LucideEuro', 'LucideEvCharger', 'LucideExpand', 'LucideExternalLink', 'LucideEye', 'LucideEyeClosed', 'LucideEyeOff', 'LucideFacebook', 'LucideFactory', 'LucideFan', 'LucideFastForward', 'LucideFeather', 'LucideFence', 'LucideFerrisWheel', 'LucideFigma', 'LucideFile', 'LucideFileArchive', 'LucideFileAudio', 'LucideFileAudio2', 'LucideFileAxis3D', 'LucideFileAxis3d', 'LucideFileBadge', 'LucideFileBadge2', 'LucideFileBarChart', 'LucideFileBarChart2', 'LucideFileBox', 'LucideFileBraces', 'LucideFileBracesCorner', 'LucideFileChartColumn', 'LucideFileChartColumnIncreasing', 'LucideFileChartLine', 'LucideFileChartPie', 'LucideFileCheck', 'LucideFileCheck2', 'LucideFileCheckCorner', 'LucideFileClock', 'LucideFileCode', 'LucideFileCode2', 'LucideFileCodeCorner', 'LucideFileCog', 'LucideFileCog2', 'LucideFileDiff', 'LucideFileDigit', 'LucideFileDown', 'LucideFileEdit', 'LucideFileExclamationPoint', 'LucideFileHeadphone', 'LucideFileHeart', 'LucideFileImage', 'LucideFileInput', 'LucideFileJson', 'LucideFileJson2', 'LucideFileKey', 'LucideFileKey2', 'LucideFileLineChart', 'LucideFileLock', 'LucideFileLock2', 'LucideFileMinus', 'LucideFileMinus2', 'LucideFileMinusCorner', 'LucideFileMusic', 'LucideFileOutput', 'LucideFilePen', 'LucideFilePenLine', 'LucideFilePieChart', 'LucideFilePlay', 'LucideFilePlus', 'LucideFilePlus2', 'LucideFilePlusCorner', 'LucideFileQuestion', 'LucideFileQuestionMark', 'LucideFileScan', 'LucideFileSearch', 'LucideFileSearch2', 'LucideFileSearchCorner', 'LucideFileSignal', 'LucideFileSignature', 'LucideFileSliders', 'LucideFileSpreadsheet', 'LucideFileStack', 'LucideFileSymlink', 'LucideFileTerminal', 'LucideFileText', 'LucideFileType', 'LucideFileType2', 'LucideFileTypeCorner', 'LucideFileUp', 'LucideFileUser', 'LucideFileVideo', 'LucideFileVideo2', 'LucideFileVideoCamera', 'LucideFileVolume', 'LucideFileVolume2', 'LucideFileWarning', 'LucideFileX', 'LucideFileX2', 'LucideFileXCorner', 'LucideFiles', 'LucideFilm', 'LucideFilter', 'LucideFilterX', 'LucideFingerprint', 'LucideFingerprintPattern', 'LucideFireExtinguisher', 'LucideFish', 'LucideFishOff', 'LucideFishSymbol', 'LucideFishingHook', 'LucideFlag', 'LucideFlagOff', 'LucideFlagTriangleLeft', 'LucideFlagTriangleRight', 'LucideFlame', 'LucideFlameKindling', 'LucideFlashlight', 'LucideFlashlightOff', 'LucideFlaskConical', 'LucideFlaskConicalOff', 'LucideFlaskRound', 'LucideFlipHorizontal', 'LucideFlipHorizontal2', 'LucideFlipVertical', 'LucideFlipVertical2', 'LucideFlower', 'LucideFlower2', 'LucideFocus', 'LucideFoldHorizontal', 'LucideFoldVertical', 'LucideFolder', 'LucideFolderArchive', 'LucideFolderCheck', 'LucideFolderClock', 'LucideFolderClosed', 'LucideFolderCode', 'LucideFolderCog', 'LucideFolderCog2', 'LucideFolderDot', 'LucideFolderDown', 'LucideFolderEdit', 'LucideFolderGit', 'LucideFolderGit2', 'LucideFolderHeart', 'LucideFolderInput', 'LucideFolderKanban', 'LucideFolderKey', 'LucideFolderLock', 'LucideFolderMinus', 'LucideFolderOpen', 'LucideFolderOpenDot', 'LucideFolderOutput', 'LucideFolderPen', 'LucideFolderPlus', 'LucideFolderRoot', 'LucideFolderSearch', 'LucideFolderSearch2', 'LucideFolderSymlink', 'LucideFolderSync', 'LucideFolderTree', 'LucideFolderUp', 'LucideFolderX', 'LucideFolders', 'LucideFootprints', 'LucideForkKnife', 'LucideForkKnifeCrossed', 'LucideForklift', 'LucideForm', 'LucideFormInput', 'LucideForward', 'LucideFrame', 'LucideFramer', 'LucideFrown', 'LucideFuel', 'LucideFullscreen', 'LucideFunctionSquare', 'LucideFunnel', 'LucideFunnelPlus', 'LucideFunnelX', 'LucideGalleryHorizontal', 'LucideGalleryHorizontalEnd', 'LucideGalleryThumbnails', 'LucideGalleryVertical', 'LucideGalleryVerticalEnd', 'LucideGamepad', 'LucideGamepad2', 'LucideGamepadDirectional', 'LucideGanttChart', 'LucideGanttChartSquare', 'LucideGauge', 'LucideGaugeCircle', 'LucideGavel', 'LucideGem', 'LucideGeorgianLari', 'LucideGhost', 'LucideGift', 'LucideGitBranch', 'LucideGitBranchMinus', 'LucideGitBranchPlus', 'LucideGitCommit', 'LucideGitCommitHorizontal', 'LucideGitCommitVertical', 'LucideGitCompare', 'LucideGitCompareArrows', 'LucideGitFork', 'LucideGitGraph', 'LucideGitMerge', 'LucideGitPullRequest', 'LucideGitPullRequestArrow', 'LucideGitPullRequestClosed', 'LucideGitPullRequestCreate', 'LucideGitPullRequestCreateArrow', 'LucideGitPullRequestDraft', 'LucideGithub', 'LucideGitlab', 'LucideGlassWater', 'LucideGlasses', 'LucideGlobe', 'LucideGlobe2', 'LucideGlobeLock', 'LucideGlobeX', 'LucideGoal', 'LucideGpu', 'LucideGrab', 'LucideGraduationCap', 'LucideGrape', 'LucideGrid', 'LucideGrid2X2', 'LucideGrid2X2Check', 'LucideGrid2X2Plus', 'LucideGrid2X2X', 'LucideGrid2x2', 'LucideGrid2x2Check', 'LucideGrid2x2Plus', 'LucideGrid2x2X', 'LucideGrid3X3', 'LucideGrid3x2', 'LucideGrid3x3', 'LucideGrip', 'LucideGripHorizontal', 'LucideGripVertical', 'LucideGroup', 'LucideGuitar', 'LucideHam', 'LucideHamburger', 'LucideHammer', 'LucideHand', 'LucideHandCoins', 'LucideHandFist', 'LucideHandGrab', 'LucideHandHeart', 'LucideHandHelping', 'LucideHandMetal', 'LucideHandPlatter', 'LucideHandbag', 'LucideHandshake', 'LucideHardDrive', 'LucideHardDriveDownload', 'LucideHardDriveUpload', 'LucideHardHat', 'LucideHash', 'LucideHatGlasses', 'LucideHaze', 'LucideHd', 'LucideHdmiPort', 'LucideHeading', 'LucideHeading1', 'LucideHeading2', 'LucideHeading3', 'LucideHeading4', 'LucideHeading5', 'LucideHeading6', 'LucideHeadphoneOff', 'LucideHeadphones', 'LucideHeadset', 'LucideHeart', 'LucideHeartCrack', 'LucideHeartHandshake', 'LucideHeartMinus', 'LucideHeartOff', 'LucideHeartPlus', 'LucideHeartPulse', 'LucideHeater', 'LucideHelicopter', 'LucideHelpCircle', 'LucideHelpingHand', 'LucideHexagon', 'LucideHighlighter', 'LucideHistory', 'LucideHome', 'LucideHop', 'LucideHopOff', 'LucideHospital', 'LucideHotel', 'LucideHourglass', 'LucideHouse', 'LucideHouseHeart', 'LucideHousePlug', 'LucideHousePlus', 'LucideHouseWifi', 'LucideIceCream', 'LucideIceCream2', 'LucideIceCreamBowl', 'LucideIceCreamCone', 'LucideIdCard', 'LucideIdCardLanyard', 'LucideImage', 'LucideImageDown', 'LucideImageMinus', 'LucideImageOff', 'LucideImagePlay', 'LucideImagePlus', 'LucideImageUp', 'LucideImageUpscale', 'LucideImages', 'LucideImport', 'LucideInbox', 'LucideIndent', 'LucideIndentDecrease', 'LucideIndentIncrease', 'LucideIndianRupee', 'LucideInfinity', 'LucideInfo', 'LucideInspect', 'LucideInspectionPanel', 'LucideInstagram', 'LucideItalic', 'LucideIterationCcw', 'LucideIterationCw', 'LucideJapaneseYen', 'LucideJoystick', 'LucideKanban', 'LucideKanbanSquare', 'LucideKanbanSquareDashed', 'LucideKayak', 'LucideKey', 'LucideKeyRound', 'LucideKeySquare', 'LucideKeyboard', 'LucideKeyboardMusic', 'LucideKeyboardOff', 'LucideLamp', 'LucideLampCeiling', 'LucideLampDesk', 'LucideLampFloor', 'LucideLampWallDown', 'LucideLampWallUp', 'LucideLandPlot', 'LucideLandmark', 'LucideLanguages', 'LucideLaptop', 'LucideLaptop2', 'LucideLaptopMinimal', 'LucideLaptopMinimalCheck', 'LucideLasso', 'LucideLassoSelect', 'LucideLaugh', 'LucideLayers', 'LucideLayers2', 'LucideLayers3', 'LucideLayersPlus', 'LucideLayout', 'LucideLayoutDashboard', 'LucideLayoutGrid', 'LucideLayoutList', 'LucideLayoutPanelLeft', 'LucideLayoutPanelTop', 'LucideLayoutTemplate', 'LucideLeaf', 'LucideLeafyGreen', 'LucideLectern', 'LucideLetterText', 'LucideLibrary', 'LucideLibraryBig', 'LucideLibrarySquare', 'LucideLifeBuoy', 'LucideLigature', 'LucideLightbulb', 'LucideLightbulbOff', 'LucideLineChart', 'LucideLineSquiggle', 'LucideLink', 'LucideLink2', 'LucideLink2Off', 'LucideLinkedin', 'LucideList', 'LucideListCheck', 'LucideListChecks', 'LucideListChevronsDownUp', 'LucideListChevronsUpDown', 'LucideListCollapse', 'LucideListEnd', 'LucideListFilter', 'LucideListFilterPlus', 'LucideListIndentDecrease', 'LucideListIndentIncrease', 'LucideListMinus', 'LucideListMusic', 'LucideListOrdered', 'LucideListPlus', 'LucideListRestart', 'LucideListStart', 'LucideListTodo', 'LucideListTree', 'LucideListVideo', 'LucideListX', 'LucideLoader', 'LucideLoader2', 'LucideLoaderCircle', 'LucideLoaderPinwheel', 'LucideLocate', 'LucideLocateFixed', 'LucideLocateOff', 'LucideLocationEdit', 'LucideLock', 'LucideLockKeyhole', 'LucideLockKeyholeOpen', 'LucideLockOpen', 'LucideLogIn', 'LucideLogOut', 'LucideLogs', 'LucideLollipop', 'LucideLuggage', 'LucideMSquare', 'LucideMagnet', 'LucideMail', 'LucideMailCheck', 'LucideMailMinus', 'LucideMailOpen', 'LucideMailPlus', 'LucideMailQuestion', 'LucideMailQuestionMark', 'LucideMailSearch', 'LucideMailWarning', 'LucideMailX', 'LucideMailbox', 'LucideMails', 'LucideMap', 'LucideMapMinus', 'LucideMapPin', 'LucideMapPinCheck', 'LucideMapPinCheckInside', 'LucideMapPinHouse', 'LucideMapPinMinus', 'LucideMapPinMinusInside', 'LucideMapPinOff', 'LucideMapPinPen', 'LucideMapPinPlus', 'LucideMapPinPlusInside', 'LucideMapPinX', 'LucideMapPinXInside', 'LucideMapPinned', 'LucideMapPlus', 'LucideMars', 'LucideMarsStroke', 'LucideMartini', 'LucideMaximize', 'LucideMaximize2', 'LucideMedal', 'LucideMegaphone', 'LucideMegaphoneOff', 'LucideMeh', 'LucideMemoryStick', 'LucideMenu', 'LucideMenuSquare', 'LucideMerge', 'LucideMessageCircle', 'LucideMessageCircleCode', 'LucideMessageCircleDashed', 'LucideMessageCircleHeart', 'LucideMessageCircleMore', 'LucideMessageCircleOff', 'LucideMessageCirclePlus', 'LucideMessageCircleQuestion', 'LucideMessageCircleQuestionMark', 'LucideMessageCircleReply', 'LucideMessageCircleWarning', 'LucideMessageCircleX', 'LucideMessageSquare', 'LucideMessageSquareCode', 'LucideMessageSquareDashed', 'LucideMessageSquareDiff', 'LucideMessageSquareDot', 'LucideMessageSquareHeart', 'LucideMessageSquareLock', 'LucideMessageSquareMore', 'LucideMessageSquareOff', 'LucideMessageSquarePlus', 'LucideMessageSquareQuote', 'LucideMessageSquareReply', 'LucideMessageSquareShare', 'LucideMessageSquareText', 'LucideMessageSquareWarning', 'LucideMessageSquareX', 'LucideMessagesSquare', 'LucideMic', 'LucideMic2', 'LucideMicOff', 'LucideMicVocal', 'LucideMicrochip', 'LucideMicroscope', 'LucideMicrowave', 'LucideMilestone', 'LucideMilk', 'LucideMilkOff', 'LucideMinimize', 'LucideMinimize2', 'LucideMinus', 'LucideMinusCircle', 'LucideMinusSquare', 'LucideMonitor', 'LucideMonitorCheck', 'LucideMonitorCloud', 'LucideMonitorCog', 'LucideMonitorDot', 'LucideMonitorDown', 'LucideMonitorOff', 'LucideMonitorPause', 'LucideMonitorPlay', 'LucideMonitorSmartphone', 'LucideMonitorSpeaker', 'LucideMonitorStop', 'LucideMonitorUp', 'LucideMonitorX', 'LucideMoon', 'LucideMoonStar', 'LucideMoreHorizontal', 'LucideMoreVertical', 'LucideMotorbike', 'LucideMountain', 'LucideMountainSnow', 'LucideMouse', 'LucideMouseOff', 'LucideMousePointer', 'LucideMousePointer2', 'LucideMousePointer2Off', 'LucideMousePointerBan', 'LucideMousePointerClick', 'LucideMousePointerSquareDashed', 'LucideMove', 'LucideMove3D', 'LucideMove3d', 'LucideMoveDiagonal', 'LucideMoveDiagonal2', 'LucideMoveDown', 'LucideMoveDownLeft', 'LucideMoveDownRight', 'LucideMoveHorizontal', 'LucideMoveLeft', 'LucideMoveRight', 'LucideMoveUp', 'LucideMoveUpLeft', 'LucideMoveUpRight', 'LucideMoveVertical', 'LucideMusic', 'LucideMusic2', 'LucideMusic3', 'LucideMusic4', 'LucideNavigation', 'LucideNavigation2', 'LucideNavigation2Off', 'LucideNavigationOff', 'LucideNetwork', 'LucideNewspaper', 'LucideNfc', 'LucideNonBinary', 'LucideNotebook', 'LucideNotebookPen', 'LucideNotebookTabs', 'LucideNotebookText', 'LucideNotepadText', 'LucideNotepadTextDashed', 'LucideNut', 'LucideNutOff', 'LucideOctagon', 'LucideOctagonAlert', 'LucideOctagonMinus', 'LucideOctagonPause', 'LucideOctagonX', 'LucideOmega', 'LucideOption', 'LucideOrbit', 'LucideOrigami', 'LucideOutdent', 'LucidePackage', 'LucidePackage2', 'LucidePackageCheck', 'LucidePackageMinus', 'LucidePackageOpen', 'LucidePackagePlus', 'LucidePackageSearch', 'LucidePackageX', 'LucidePaintBucket', 'LucidePaintRoller', 'LucidePaintbrush', 'LucidePaintbrush2', 'LucidePaintbrushVertical', 'LucidePalette', 'LucidePalmtree', 'LucidePanda', 'LucidePanelBottom', 'LucidePanelBottomClose', 'LucidePanelBottomDashed', 'LucidePanelBottomInactive', 'LucidePanelBottomOpen', 'LucidePanelLeft', 'LucidePanelLeftClose', 'LucidePanelLeftDashed', 'LucidePanelLeftInactive', 'LucidePanelLeftOpen', 'LucidePanelLeftRightDashed', 'LucidePanelRight', 'LucidePanelRightClose', 'LucidePanelRightDashed', 'LucidePanelRightInactive', 'LucidePanelRightOpen', 'LucidePanelTop', 'LucidePanelTopBottomDashed', 'LucidePanelTopClose', 'LucidePanelTopDashed', 'LucidePanelTopInactive', 'LucidePanelTopOpen', 'LucidePanelsLeftBottom', 'LucidePanelsLeftRight', 'LucidePanelsRightBottom', 'LucidePanelsTopBottom', 'LucidePanelsTopLeft', 'LucidePaperclip', 'LucideParentheses', 'LucideParkingCircle', 'LucideParkingCircleOff', 'LucideParkingMeter', 'LucideParkingSquare', 'LucideParkingSquareOff', 'LucidePartyPopper', 'LucidePause', 'LucidePauseCircle', 'LucidePauseOctagon', 'LucidePawPrint', 'LucidePcCase', 'LucidePen', 'LucidePenBox', 'LucidePenLine', 'LucidePenOff', 'LucidePenSquare', 'LucidePenTool', 'LucidePencil', 'LucidePencilLine', 'LucidePencilOff', 'LucidePencilRuler', 'LucidePentagon', 'LucidePercent', 'LucidePercentCircle', 'LucidePercentDiamond', 'LucidePercentSquare', 'LucidePersonStanding', 'LucidePhilippinePeso', 'LucidePhone', 'LucidePhoneCall', 'LucidePhoneForwarded', 'LucidePhoneIncoming', 'LucidePhoneMissed', 'LucidePhoneOff', 'LucidePhoneOutgoing', 'LucidePi', 'LucidePiSquare', 'LucidePiano', 'LucidePickaxe', 'LucidePictureInPicture', 'LucidePictureInPicture2', 'LucidePieChart', 'LucidePiggyBank', 'LucidePilcrow', 'LucidePilcrowLeft', 'LucidePilcrowRight', 'LucidePilcrowSquare', 'LucidePill', 'LucidePillBottle', 'LucidePin', 'LucidePinOff', 'LucidePipette', 'LucidePizza', 'LucidePlane', 'LucidePlaneLanding', 'LucidePlaneTakeoff', 'LucidePlay', 'LucidePlayCircle', 'LucidePlaySquare', 'LucidePlug', 'LucidePlug2', 'LucidePlugZap', 'LucidePlugZap2', 'LucidePlus', 'LucidePlusCircle', 'LucidePlusSquare', 'LucidePocket', 'LucidePocketKnife', 'LucidePodcast', 'LucidePointer', 'LucidePointerOff', 'LucidePopcorn', 'LucidePopsicle', 'LucidePoundSterling', 'LucidePower', 'LucidePowerCircle', 'LucidePowerOff', 'LucidePowerSquare', 'LucidePresentation', 'LucidePrinter', 'LucidePrinterCheck', 'LucidePrinterX', 'LucideProjector', 'LucideProportions', 'LucidePuzzle', 'LucidePyramid', 'LucideQrCode', 'LucideQuote', 'LucideRabbit', 'LucideRadar', 'LucideRadiation', 'LucideRadical', 'LucideRadio', 'LucideRadioReceiver', 'LucideRadioTower', 'LucideRadius', 'LucideRailSymbol', 'LucideRainbow', 'LucideRat', 'LucideRatio', 'LucideReceipt', 'LucideReceiptCent', 'LucideReceiptEuro', 'LucideReceiptIndianRupee', 'LucideReceiptJapaneseYen', 'LucideReceiptPoundSterling', 'LucideReceiptRussianRuble', 'LucideReceiptSwissFranc', 'LucideReceiptText', 'LucideReceiptTurkishLira', 'LucideRectangleCircle', 'LucideRectangleEllipsis', 'LucideRectangleGoggles', 'LucideRectangleHorizontal', 'LucideRectangleVertical', 'LucideRecycle', 'LucideRedo', 'LucideRedo2', 'LucideRedoDot', 'LucideRefreshCcw', 'LucideRefreshCcwDot', 'LucideRefreshCw', 'LucideRefreshCwOff', 'LucideRefrigerator', 'LucideRegex', 'LucideRemoveFormatting', 'LucideRepeat', 'LucideRepeat1', 'LucideRepeat2', 'LucideReplace', 'LucideReplaceAll', 'LucideReply', 'LucideReplyAll', 'LucideRewind', 'LucideRibbon', 'LucideRocket', 'LucideRockingChair', 'LucideRollerCoaster', 'LucideRose', 'LucideRotate3D', 'LucideRotate3d', 'LucideRotateCcw', 'LucideRotateCcwKey', 'LucideRotateCcwSquare', 'LucideRotateCw', 'LucideRotateCwSquare', 'LucideRoute', 'LucideRouteOff', 'LucideRouter', 'LucideRows', 'LucideRows2', 'LucideRows3', 'LucideRows4', 'LucideRss', 'LucideRuler', 'LucideRulerDimensionLine', 'LucideRussianRuble', 'LucideSailboat', 'LucideSalad', 'LucideSandwich', 'LucideSatellite', 'LucideSatelliteDish', 'LucideSaudiRiyal', 'LucideSave', 'LucideSaveAll', 'LucideSaveOff', 'LucideScale', 'LucideScale3D', 'LucideScale3d', 'LucideScaling', 'LucideScan', 'LucideScanBarcode', 'LucideScanEye', 'LucideScanFace', 'LucideScanHeart', 'LucideScanLine', 'LucideScanQrCode', 'LucideScanSearch', 'LucideScanText', 'LucideScatterChart', 'LucideSchool', 'LucideSchool2', 'LucideScissors', 'LucideScissorsLineDashed', 'LucideScissorsSquare', 'LucideScissorsSquareDashedBottom', 'LucideScooter', 'LucideScreenShare', 'LucideScreenShareOff', 'LucideScroll', 'LucideScrollText', 'LucideSearch', 'LucideSearchAlert', 'LucideSearchCheck', 'LucideSearchCode', 'LucideSearchSlash', 'LucideSearchX', 'LucideSection', 'LucideSend', 'LucideSendHorizonal', 'LucideSendHorizontal', 'LucideSendToBack', 'LucideSeparatorHorizontal', 'LucideSeparatorVertical', 'LucideServer', 'LucideServerCog', 'LucideServerCrash', 'LucideServerOff', 'LucideSettings', 'LucideSettings2', 'LucideShapes', 'LucideShare', 'LucideShare2', 'LucideSheet', 'LucideShell', 'LucideShield', 'LucideShieldAlert', 'LucideShieldBan', 'LucideShieldCheck', 'LucideShieldClose', 'LucideShieldEllipsis', 'LucideShieldHalf', 'LucideShieldMinus', 'LucideShieldOff', 'LucideShieldPlus', 'LucideShieldQuestion', 'LucideShieldQuestionMark', 'LucideShieldUser', 'LucideShieldX', 'LucideShip', 'LucideShipWheel', 'LucideShirt', 'LucideShoppingBag', 'LucideShoppingBasket', 'LucideShoppingCart', 'LucideShovel', 'LucideShowerHead', 'LucideShredder', 'LucideShrimp', 'LucideShrink', 'LucideShrub', 'LucideShuffle', 'LucideSidebar', 'LucideSidebarClose', 'LucideSidebarOpen', 'LucideSigma', 'LucideSigmaSquare', 'LucideSignal', 'LucideSignalHigh', 'LucideSignalLow', 'LucideSignalMedium', 'LucideSignalZero', 'LucideSignature', 'LucideSignpost', 'LucideSignpostBig', 'LucideSiren', 'LucideSkipBack', 'LucideSkipForward', 'LucideSkull', 'LucideSlack', 'LucideSlash', 'LucideSlashSquare', 'LucideSlice', 'LucideSliders', 'LucideSlidersHorizontal', 'LucideSlidersVertical', 'LucideSmartphone', 'LucideSmartphoneCharging', 'LucideSmartphoneNfc', 'LucideSmile', 'LucideSmilePlus', 'LucideSnail', 'LucideSnowflake', 'LucideSoapDispenserDroplet', 'LucideSofa', 'LucideSolarPanel', 'LucideSortAsc', 'LucideSortDesc', 'LucideSoup', 'LucideSpace', 'LucideSpade', 'LucideSparkle', 'LucideSparkles', 'LucideSpeaker', 'LucideSpeech', 'LucideSpellCheck', 'LucideSpellCheck2', 'LucideSpline', 'LucideSplinePointer', 'LucideSplit', 'LucideSplitSquareHorizontal', 'LucideSplitSquareVertical', 'LucideSpool', 'LucideSpotlight', 'LucideSprayCan', 'LucideSprout', 'LucideSquare', 'LucideSquareActivity', 'LucideSquareArrowDown', 'LucideSquareArrowDownLeft', 'LucideSquareArrowDownRight', 'LucideSquareArrowLeft', 'LucideSquareArrowOutDownLeft', 'LucideSquareArrowOutDownRight', 'LucideSquareArrowOutUpLeft', 'LucideSquareArrowOutUpRight', 'LucideSquareArrowRight', 'LucideSquareArrowUp', 'LucideSquareArrowUpLeft', 'LucideSquareArrowUpRight', 'LucideSquareAsterisk', 'LucideSquareBottomDashedScissors', 'LucideSquareChartGantt', 'LucideSquareCheck', 'LucideSquareCheckBig', 'LucideSquareChevronDown', 'LucideSquareChevronLeft', 'LucideSquareChevronRight', 'LucideSquareChevronUp', 'LucideSquareCode', 'LucideSquareDashed', 'LucideSquareDashedBottom', 'LucideSquareDashedBottomCode', 'LucideSquareDashedKanban', 'LucideSquareDashedMousePointer', 'LucideSquareDashedTopSolid', 'LucideSquareDivide', 'LucideSquareDot', 'LucideSquareEqual', 'LucideSquareFunction', 'LucideSquareGanttChart', 'LucideSquareKanban', 'LucideSquareLibrary', 'LucideSquareM', 'LucideSquareMenu', 'LucideSquareMinus', 'LucideSquareMousePointer', 'LucideSquareParking', 'LucideSquareParkingOff', 'LucideSquarePause', 'LucideSquarePen', 'LucideSquarePercent', 'LucideSquarePi', 'LucideSquarePilcrow', 'LucideSquarePlay', 'LucideSquarePlus', 'LucideSquarePower', 'LucideSquareRadical', 'LucideSquareRoundCorner', 'LucideSquareScissors', 'LucideSquareSigma', 'LucideSquareSlash', 'LucideSquareSplitHorizontal', 'LucideSquareSplitVertical', 'LucideSquareSquare', 'LucideSquareStack', 'LucideSquareStar', 'LucideSquareStop', 'LucideSquareTerminal', 'LucideSquareUser', 'LucideSquareUserRound', 'LucideSquareX', 'LucideSquaresExclude', 'LucideSquaresIntersect', 'LucideSquaresSubtract', 'LucideSquaresUnite', 'LucideSquircle', 'LucideSquircleDashed', 'LucideSquirrel', 'LucideStamp', 'LucideStar', 'LucideStarHalf', 'LucideStarOff', 'LucideStars', 'LucideStepBack', 'LucideStepForward', 'LucideStethoscope', 'LucideSticker', 'LucideStickyNote', 'LucideStone', 'LucideStopCircle', 'LucideStore', 'LucideStretchHorizontal', 'LucideStretchVertical', 'LucideStrikethrough', 'LucideSubscript', 'LucideSubtitles', 'LucideSun', 'LucideSunDim', 'LucideSunMedium', 'LucideSunMoon', 'LucideSunSnow', 'LucideSunrise', 'LucideSunset', 'LucideSuperscript', 'LucideSwatchBook', 'LucideSwissFranc', 'LucideSwitchCamera', 'LucideSword', 'LucideSwords', 'LucideSyringe', 'LucideTable', 'LucideTable2', 'LucideTableCellsMerge', 'LucideTableCellsSplit', 'LucideTableColumnsSplit', 'LucideTableConfig', 'LucideTableOfContents', 'LucideTableProperties', 'LucideTableRowsSplit', 'LucideTablet', 'LucideTabletSmartphone', 'LucideTablets', 'LucideTag', 'LucideTags', 'LucideTally1', 'LucideTally2', 'LucideTally3', 'LucideTally4', 'LucideTally5', 'LucideTangent', 'LucideTarget', 'LucideTelescope', 'LucideTent', 'LucideTentTree', 'LucideTerminal', 'LucideTerminalSquare', 'LucideTestTube', 'LucideTestTube2', 'LucideTestTubeDiagonal', 'LucideTestTubes', 'LucideText', 'LucideTextAlignCenter', 'LucideTextAlignEnd', 'LucideTextAlignJustify', 'LucideTextAlignStart', 'LucideTextCursor', 'LucideTextCursorInput', 'LucideTextInitial', 'LucideTextQuote', 'LucideTextSearch', 'LucideTextSelect', 'LucideTextSelection', 'LucideTextWrap', 'LucideTheater', 'LucideThermometer', 'LucideThermometerSnowflake', 'LucideThermometerSun', 'LucideThumbsDown', 'LucideThumbsUp', 'LucideTicket', 'LucideTicketCheck', 'LucideTicketMinus', 'LucideTicketPercent', 'LucideTicketPlus', 'LucideTicketSlash', 'LucideTicketX', 'LucideTickets', 'LucideTicketsPlane', 'LucideTimer', 'LucideTimerOff', 'LucideTimerReset', 'LucideToggleLeft', 'LucideToggleRight', 'LucideToilet', 'LucideToolCase', 'LucideToolbox', 'LucideTornado', 'LucideTorus', 'LucideTouchpad', 'LucideTouchpadOff', 'LucideTowerControl', 'LucideToyBrick', 'LucideTractor', 'LucideTrafficCone', 'LucideTrain', 'LucideTrainFront', 'LucideTrainFrontTunnel', 'LucideTrainTrack', 'LucideTramFront', 'LucideTransgender', 'LucideTrash', 'LucideTrash2', 'LucideTreeDeciduous', 'LucideTreePalm', 'LucideTreePine', 'LucideTrees', 'LucideTrello', 'LucideTrendingDown', 'LucideTrendingUp', 'LucideTrendingUpDown', 'LucideTriangle', 'LucideTriangleAlert', 'LucideTriangleDashed', 'LucideTriangleRight', 'LucideTrophy', 'LucideTruck', 'LucideTruckElectric', 'LucideTurkishLira', 'LucideTurntable', 'LucideTurtle', 'LucideTv', 'LucideTv2', 'LucideTvMinimal', 'LucideTvMinimalPlay', 'LucideTwitch', 'LucideTwitter', 'LucideType', 'LucideTypeOutline', 'LucideUmbrella', 'LucideUmbrellaOff', 'LucideUnderline', 'LucideUndo', 'LucideUndo2', 'LucideUndoDot', 'LucideUnfoldHorizontal', 'LucideUnfoldVertical', 'LucideUngroup', 'LucideUniversity', 'LucideUnlink', 'LucideUnlink2', 'LucideUnlock', 'LucideUnlockKeyhole', 'LucideUnplug', 'LucideUpload', 'LucideUploadCloud', 'LucideUsb', 'LucideUser', 'LucideUser2', 'LucideUserCheck', 'LucideUserCheck2', 'LucideUserCircle', 'LucideUserCircle2', 'LucideUserCog', 'LucideUserCog2', 'LucideUserLock', 'LucideUserMinus', 'LucideUserMinus2', 'LucideUserPen', 'LucideUserPlus', 'LucideUserPlus2', 'LucideUserRound', 'LucideUserRoundCheck', 'LucideUserRoundCog', 'LucideUserRoundMinus', 'LucideUserRoundPen', 'LucideUserRoundPlus', 'LucideUserRoundSearch', 'LucideUserRoundX', 'LucideUserSearch', 'LucideUserSquare', 'LucideUserSquare2', 'LucideUserStar', 'LucideUserX', 'LucideUserX2', 'LucideUsers', 'LucideUsers2', 'LucideUsersRound', 'LucideUtensils', 'LucideUtensilsCrossed', 'LucideUtilityPole', 'LucideVan', 'LucideVariable', 'LucideVault', 'LucideVectorSquare', 'LucideVegan', 'LucideVenetianMask', 'LucideVenus', 'LucideVenusAndMars', 'LucideVerified', 'LucideVibrate', 'LucideVibrateOff', 'LucideVideo', 'LucideVideoOff', 'LucideVideotape', 'LucideView', 'LucideVoicemail', 'LucideVolleyball', 'LucideVolume', 'LucideVolume1', 'LucideVolume2', 'LucideVolumeOff', 'LucideVolumeX', 'LucideVote', 'LucideWallet', 'LucideWallet2', 'LucideWalletCards', 'LucideWalletMinimal', 'LucideWallpaper', 'LucideWand', 'LucideWand2', 'LucideWandSparkles', 'LucideWarehouse', 'LucideWashingMachine', 'LucideWatch', 'LucideWaves', 'LucideWavesArrowDown', 'LucideWavesArrowUp', 'LucideWavesLadder', 'LucideWaypoints', 'LucideWebcam', 'LucideWebhook', 'LucideWebhookOff', 'LucideWeight', 'LucideWeightTilde', 'LucideWheat', 'LucideWheatOff', 'LucideWholeWord', 'LucideWifi', 'LucideWifiCog', 'LucideWifiHigh', 'LucideWifiLow', 'LucideWifiOff', 'LucideWifiPen', 'LucideWifiSync', 'LucideWifiZero', 'LucideWind', 'LucideWindArrowDown', 'LucideWine', 'LucideWineOff', 'LucideWorkflow', 'LucideWorm', 'LucideWrapText', 'LucideWrench', 'LucideX', 'LucideXCircle', 'LucideXOctagon', 'LucideXSquare', 'LucideYoutube', 'LucideZap', 'LucideZapOff', 'LucideZoomIn', 'LucideZoomOut', 'Luggage', 'LuggageIcon', 'MSquare', 'MSquareIcon', 'Magnet', 'MagnetIcon', 'Mail', 'MailCheck', 'MailCheckIcon', 'MailIcon', 'MailMinus', 'MailMinusIcon', 'MailOpen', 'MailOpenIcon', 'MailPlus', 'MailPlusIcon', 'MailQuestion', 'MailQuestionIcon', 'MailQuestionMark', 'MailQuestionMarkIcon', 'MailSearch', 'MailSearchIcon', 'MailWarning', 'MailWarningIcon', 'MailX', 'MailXIcon', 'Mailbox', 'MailboxIcon', 'Mails', 'MailsIcon', 'Map', 'MapIcon', 'MapMinus', 'MapMinusIcon', 'MapPin', 'MapPinCheck', 'MapPinCheckIcon', 'MapPinCheckInside', 'MapPinCheckInsideIcon', 'MapPinHouse', 'MapPinHouseIcon', 'MapPinIcon', 'MapPinMinus', 'MapPinMinusIcon', 'MapPinMinusInside', 'MapPinMinusInsideIcon', 'MapPinOff', 'MapPinOffIcon', 'MapPinPen', 'MapPinPenIcon', 'MapPinPlus', 'MapPinPlusIcon', 'MapPinPlusInside', 'MapPinPlusInsideIcon', 'MapPinX', 'MapPinXIcon', 'MapPinXInside', 'MapPinXInsideIcon', 'MapPinned', 'MapPinnedIcon', 'MapPlus', 'MapPlusIcon', 'Mars', 'MarsIcon', 'MarsStroke', 'MarsStrokeIcon', 'Martini', 'MartiniIcon', 'Maximize', 'Maximize2', 'Maximize2Icon', 'MaximizeIcon', 'Medal', 'MedalIcon', 'Megaphone', 'MegaphoneIcon', 'MegaphoneOff', 'MegaphoneOffIcon', 'Meh', 'MehIcon', 'MemoryStick', 'MemoryStickIcon', 'Menu', 'MenuIcon', 'MenuSquare', 'MenuSquareIcon', 'Merge', 'MergeIcon', 'MessageCircle', 'MessageCircleCode', 'MessageCircleCodeIcon', 'MessageCircleDashed', 'MessageCircleDashedIcon', 'MessageCircleHeart', 'MessageCircleHeartIcon', 'MessageCircleIcon', 'MessageCircleMore', 'MessageCircleMoreIcon', 'MessageCircleOff', 'MessageCircleOffIcon', 'MessageCirclePlus', 'MessageCirclePlusIcon', 'MessageCircleQuestion', 'MessageCircleQuestionIcon', 'MessageCircleQuestionMark', 'MessageCircleQuestionMarkIcon', 'MessageCircleReply', 'MessageCircleReplyIcon', 'MessageCircleWarning', 'MessageCircleWarningIcon', 'MessageCircleX', 'MessageCircleXIcon', 'MessageSquare', 'MessageSquareCode', 'MessageSquareCodeIcon', 'MessageSquareDashed', 'MessageSquareDashedIcon', 'MessageSquareDiff', 'MessageSquareDiffIcon', 'MessageSquareDot', 'MessageSquareDotIcon', 'MessageSquareHeart', 'MessageSquareHeartIcon', 'MessageSquareIcon', 'MessageSquareLock', 'MessageSquareLockIcon', 'MessageSquareMore', 'MessageSquareMoreIcon', 'MessageSquareOff', 'MessageSquareOffIcon', 'MessageSquarePlus', 'MessageSquarePlusIcon', 'MessageSquareQuote', 'MessageSquareQuoteIcon', 'MessageSquareReply', 'MessageSquareReplyIcon', 'MessageSquareShare', 'MessageSquareShareIcon', 'MessageSquareText', 'MessageSquareTextIcon', 'MessageSquareWarning', 'MessageSquareWarningIcon', 'MessageSquareX', 'MessageSquareXIcon', 'MessagesSquare', 'MessagesSquareIcon', 'Mic', 'Mic2', 'Mic2Icon', 'MicIcon', 'MicOff', 'MicOffIcon', 'MicVocal', 'MicVocalIcon', 'Microchip', 'MicrochipIcon', 'Microscope', 'MicroscopeIcon', 'Microwave', 'MicrowaveIcon', 'Milestone', 'MilestoneIcon', 'Milk', 'MilkIcon', 'MilkOff', 'MilkOffIcon', 'Minimize', 'Minimize2', 'Minimize2Icon', 'MinimizeIcon', 'Minus', 'MinusCircle', 'MinusCircleIcon', 'MinusIcon', 'MinusSquare', 'MinusSquareIcon', 'Monitor', 'MonitorCheck', 'MonitorCheckIcon', 'MonitorCloud', 'MonitorCloudIcon', 'MonitorCog', 'MonitorCogIcon', 'MonitorDot', 'MonitorDotIcon', 'MonitorDown', 'MonitorDownIcon', 'MonitorIcon', 'MonitorOff', 'MonitorOffIcon', 'MonitorPause', 'MonitorPauseIcon', 'MonitorPlay', 'MonitorPlayIcon', 'MonitorSmartphone', 'MonitorSmartphoneIcon', 'MonitorSpeaker', 'MonitorSpeakerIcon', 'MonitorStop', 'MonitorStopIcon', 'MonitorUp', 'MonitorUpIcon', 'MonitorX', 'MonitorXIcon', 'Moon', 'MoonIcon', 'MoonStar', 'MoonStarIcon', 'MoreHorizontal', 'MoreHorizontalIcon', 'MoreVertical', 'MoreVerticalIcon', 'Motorbike', 'MotorbikeIcon', 'Mountain', 'MountainIcon', 'MountainSnow', 'MountainSnowIcon', 'Mouse', 'MouseIcon', 'MouseOff', 'MouseOffIcon', 'MousePointer', 'MousePointer2', 'MousePointer2Icon', 'MousePointer2Off', 'MousePointer2OffIcon', 'MousePointerBan', 'MousePointerBanIcon', 'MousePointerClick', 'MousePointerClickIcon', 'MousePointerIcon', 'MousePointerSquareDashed', 'MousePointerSquareDashedIcon', 'Move', 'Move3D', 'Move3DIcon', 'Move3d', 'Move3dIcon', 'MoveDiagonal', 'MoveDiagonal2', 'MoveDiagonal2Icon', 'MoveDiagonalIcon', 'MoveDown', 'MoveDownIcon', 'MoveDownLeft', 'MoveDownLeftIcon', 'MoveDownRight', 'MoveDownRightIcon', 'MoveHorizontal', 'MoveHorizontalIcon', 'MoveIcon', 'MoveLeft', 'MoveLeftIcon', 'MoveRight', 'MoveRightIcon', 'MoveUp', 'MoveUpIcon', 'MoveUpLeft', 'MoveUpLeftIcon', 'MoveUpRight', 'MoveUpRightIcon', 'MoveVertical', 'MoveVerticalIcon', 'Music', 'Music2', 'Music2Icon', 'Music3', 'Music3Icon', 'Music4', 'Music4Icon', 'MusicIcon', 'Navigation', 'Navigation2', 'Navigation2Icon', 'Navigation2Off', 'Navigation2OffIcon', 'NavigationIcon', 'NavigationOff', 'NavigationOffIcon', 'Network', 'NetworkIcon', 'Newspaper', 'NewspaperIcon', 'Nfc', 'NfcIcon', 'NonBinary', 'NonBinaryIcon', 'Notebook', 'NotebookIcon', 'NotebookPen', 'NotebookPenIcon', 'NotebookTabs', 'NotebookTabsIcon', 'NotebookText', 'NotebookTextIcon', 'NotepadText', 'NotepadTextDashed', 'NotepadTextDashedIcon', 'NotepadTextIcon', 'Nut', 'NutIcon', 'NutOff', 'NutOffIcon', 'Octagon', 'OctagonAlert', 'OctagonAlertIcon', 'OctagonIcon', 'OctagonMinus', 'OctagonMinusIcon', 'OctagonPause', 'OctagonPauseIcon', 'OctagonX', 'OctagonXIcon', 'Omega', 'OmegaIcon', 'Option', 'OptionIcon', 'Orbit', 'OrbitIcon', 'Origami', 'OrigamiIcon', 'Outdent', 'OutdentIcon', 'Package', 'Package2', 'Package2Icon', 'PackageCheck', 'PackageCheckIcon', 'PackageIcon', 'PackageMinus', 'PackageMinusIcon', 'PackageOpen', 'PackageOpenIcon', 'PackagePlus', 'PackagePlusIcon', 'PackageSearch', 'PackageSearchIcon', 'PackageX', 'PackageXIcon', 'PaintBucket', 'PaintBucketIcon', 'PaintRoller', 'PaintRollerIcon', 'Paintbrush', 'Paintbrush2', 'Paintbrush2Icon', 'PaintbrushIcon', 'PaintbrushVertical', 'PaintbrushVerticalIcon', 'Palette', 'PaletteIcon', 'Palmtree', 'PalmtreeIcon', 'Panda', 'PandaIcon', 'PanelBottom', 'PanelBottomClose', 'PanelBottomCloseIcon', 'PanelBottomDashed', 'PanelBottomDashedIcon', 'PanelBottomIcon', 'PanelBottomInactive', 'PanelBottomInactiveIcon', 'PanelBottomOpen', 'PanelBottomOpenIcon', 'PanelLeft', 'PanelLeftClose', 'PanelLeftCloseIcon', 'PanelLeftDashed', 'PanelLeftDashedIcon', 'PanelLeftIcon', 'PanelLeftInactive', 'PanelLeftInactiveIcon', 'PanelLeftOpen', 'PanelLeftOpenIcon', 'PanelLeftRightDashed', 'PanelLeftRightDashedIcon', 'PanelRight', 'PanelRightClose', 'PanelRightCloseIcon', 'PanelRightDashed', 'PanelRightDashedIcon', 'PanelRightIcon', 'PanelRightInactive', 'PanelRightInactiveIcon', 'PanelRightOpen', 'PanelRightOpenIcon', 'PanelTop', 'PanelTopBottomDashed', 'PanelTopBottomDashedIcon', 'PanelTopClose', 'PanelTopCloseIcon', 'PanelTopDashed', 'PanelTopDashedIcon', 'PanelTopIcon', 'PanelTopInactive', 'PanelTopInactiveIcon', 'PanelTopOpen', 'PanelTopOpenIcon', 'PanelsLeftBottom', 'PanelsLeftBottomIcon', 'PanelsLeftRight', 'PanelsLeftRightIcon', 'PanelsRightBottom', 'PanelsRightBottomIcon', 'PanelsTopBottom', 'PanelsTopBottomIcon', 'PanelsTopLeft', 'PanelsTopLeftIcon', 'Paperclip', 'PaperclipIcon', 'Parentheses', 'ParenthesesIcon', 'ParkingCircle', 'ParkingCircleIcon', 'ParkingCircleOff', 'ParkingCircleOffIcon', 'ParkingMeter', 'ParkingMeterIcon', 'ParkingSquare', 'ParkingSquareIcon', 'ParkingSquareOff', 'ParkingSquareOffIcon', 'PartyPopper', 'PartyPopperIcon', 'Pause', 'PauseCircle', 'PauseCircleIcon', 'PauseIcon', 'PauseOctagon', 'PauseOctagonIcon', 'PawPrint', 'PawPrintIcon', 'PcCase', 'PcCaseIcon', 'Pen', 'PenBox', 'PenBoxIcon', 'PenIcon', 'PenLine', 'PenLineIcon', 'PenOff', 'PenOffIcon', 'PenSquare', 'PenSquareIcon', 'PenTool', 'PenToolIcon', 'Pencil', 'PencilIcon', 'PencilLine', 'PencilLineIcon', 'PencilOff', 'PencilOffIcon', 'PencilRuler', 'PencilRulerIcon', 'Pentagon', 'PentagonIcon', 'Percent', 'PercentCircle', 'PercentCircleIcon', 'PercentDiamond', 'PercentDiamondIcon', 'PercentIcon', 'PercentSquare', 'PercentSquareIcon', 'PersonStanding', 'PersonStandingIcon', 'PhilippinePeso', 'PhilippinePesoIcon', 'Phone', 'PhoneCall', 'PhoneCallIcon', 'PhoneForwarded', 'PhoneForwardedIcon', 'PhoneIcon', 'PhoneIncoming', 'PhoneIncomingIcon', 'PhoneMissed', 'PhoneMissedIcon', 'PhoneOff', 'PhoneOffIcon', 'PhoneOutgoing', 'PhoneOutgoingIcon', 'Pi', 'PiIcon', 'PiSquare', 'PiSquareIcon', 'Piano', 'PianoIcon', 'Pickaxe', 'PickaxeIcon', 'PictureInPicture', 'PictureInPicture2', 'PictureInPicture2Icon', 'PictureInPictureIcon', 'PieChart', 'PieChartIcon', 'PiggyBank', 'PiggyBankIcon', 'Pilcrow', 'PilcrowIcon', 'PilcrowLeft', 'PilcrowLeftIcon', 'PilcrowRight', 'PilcrowRightIcon', 'PilcrowSquare', 'PilcrowSquareIcon', 'Pill', 'PillBottle', 'PillBottleIcon', 'PillIcon', 'Pin', 'PinIcon', 'PinOff', 'PinOffIcon', 'Pipette', 'PipetteIcon', 'Pizza', 'PizzaIcon', 'Plane', 'PlaneIcon', 'PlaneLanding', 'PlaneLandingIcon', 'PlaneTakeoff', 'PlaneTakeoffIcon', 'Play', 'PlayCircle', 'PlayCircleIcon', 'PlayIcon', 'PlaySquare', 'PlaySquareIcon', 'Plug', 'Plug2', 'Plug2Icon', 'PlugIcon', 'PlugZap', 'PlugZap2', 'PlugZap2Icon', 'PlugZapIcon', 'Plus', 'PlusCircle', 'PlusCircleIcon', 'PlusIcon', 'PlusSquare', 'PlusSquareIcon', 'Pocket', 'PocketIcon', 'PocketKnife', 'PocketKnifeIcon', 'Podcast', 'PodcastIcon', 'Pointer', 'PointerIcon', 'PointerOff', 'PointerOffIcon', 'Popcorn', 'PopcornIcon', 'Popsicle', 'PopsicleIcon', 'PoundSterling', 'PoundSterlingIcon', 'Power', 'PowerCircle', 'PowerCircleIcon', 'PowerIcon', 'PowerOff', 'PowerOffIcon', 'PowerSquare', 'PowerSquareIcon', 'Presentation', 'PresentationIcon', 'Printer', 'PrinterCheck', 'PrinterCheckIcon', 'PrinterIcon', 'PrinterX', 'PrinterXIcon', 'Projector', 'ProjectorIcon', 'Proportions', 'ProportionsIcon', 'Puzzle', 'PuzzleIcon', 'Pyramid', 'PyramidIcon', 'QrCode', 'QrCodeIcon', 'Quote', 'QuoteIcon', 'Rabbit', 'RabbitIcon', 'Radar', 'RadarIcon', 'Radiation', 'RadiationIcon', 'Radical', 'RadicalIcon', 'Radio', 'RadioIcon', 'RadioReceiver', 'RadioReceiverIcon', 'RadioTower', 'RadioTowerIcon', 'Radius', 'RadiusIcon', 'RailSymbol', 'RailSymbolIcon', 'Rainbow', 'RainbowIcon', 'Rat', 'RatIcon', 'Ratio', 'RatioIcon', 'Receipt', 'ReceiptCent', 'ReceiptCentIcon', 'ReceiptEuro', 'ReceiptEuroIcon', 'ReceiptIcon', 'ReceiptIndianRupee', 'ReceiptIndianRupeeIcon', 'ReceiptJapaneseYen', 'ReceiptJapaneseYenIcon', 'ReceiptPoundSterling', 'ReceiptPoundSterlingIcon', 'ReceiptRussianRuble', 'ReceiptRussianRubleIcon', 'ReceiptSwissFranc', 'ReceiptSwissFrancIcon', 'ReceiptText', 'ReceiptTextIcon', 'ReceiptTurkishLira', 'ReceiptTurkishLiraIcon', 'RectangleCircle', 'RectangleCircleIcon', 'RectangleEllipsis', 'RectangleEllipsisIcon', 'RectangleGoggles', 'RectangleGogglesIcon', 'RectangleHorizontal', 'RectangleHorizontalIcon', 'RectangleVertical', 'RectangleVerticalIcon', 'Recycle', 'RecycleIcon', 'Redo', 'Redo2', 'Redo2Icon', 'RedoDot', 'RedoDotIcon', 'RedoIcon', 'RefreshCcw', 'RefreshCcwDot', 'RefreshCcwDotIcon', 'RefreshCcwIcon', 'RefreshCw', 'RefreshCwIcon', 'RefreshCwOff', 'RefreshCwOffIcon', 'Refrigerator', 'RefrigeratorIcon', 'Regex', 'RegexIcon', 'RemoveFormatting', 'RemoveFormattingIcon', 'Repeat', 'Repeat1', 'Repeat1Icon', 'Repeat2', 'Repeat2Icon', 'RepeatIcon', 'Replace', 'ReplaceAll', 'ReplaceAllIcon', 'ReplaceIcon', 'Reply', 'ReplyAll', 'ReplyAllIcon', 'ReplyIcon', 'Rewind', 'RewindIcon', 'Ribbon', 'RibbonIcon', 'Rocket', 'RocketIcon', 'RockingChair', 'RockingChairIcon', 'RollerCoaster', 'RollerCoasterIcon', 'Rose', 'RoseIcon', 'Rotate3D', 'Rotate3DIcon', 'Rotate3d', 'Rotate3dIcon', 'RotateCcw', 'RotateCcwIcon', 'RotateCcwKey', 'RotateCcwKeyIcon', 'RotateCcwSquare', 'RotateCcwSquareIcon', 'RotateCw', 'RotateCwIcon', 'RotateCwSquare', 'RotateCwSquareIcon', 'Route', 'RouteIcon', 'RouteOff', 'RouteOffIcon', 'Router', 'RouterIcon', 'Rows', 'Rows2', 'Rows2Icon', 'Rows3', 'Rows3Icon', 'Rows4', 'Rows4Icon', 'RowsIcon', 'Rss', 'RssIcon', 'Ruler', 'RulerDimensionLine', 'RulerDimensionLineIcon', 'RulerIcon', 'RussianRuble', 'RussianRubleIcon', 'Sailboat', 'SailboatIcon', 'Salad', 'SaladIcon', 'Sandwich', 'SandwichIcon', 'Satellite', 'SatelliteDish', 'SatelliteDishIcon', 'SatelliteIcon', 'SaudiRiyal', 'SaudiRiyalIcon', 'Save', 'SaveAll', 'SaveAllIcon', 'SaveIcon', 'SaveOff', 'SaveOffIcon', 'Scale', 'Scale3D', 'Scale3DIcon', 'Scale3d', 'Scale3dIcon', 'ScaleIcon', 'Scaling', 'ScalingIcon', 'Scan', 'ScanBarcode', 'ScanBarcodeIcon', 'ScanEye', 'ScanEyeIcon', 'ScanFace', 'ScanFaceIcon', 'ScanHeart', 'ScanHeartIcon', 'ScanIcon', 'ScanLine', 'ScanLineIcon', 'ScanQrCode', 'ScanQrCodeIcon', 'ScanSearch', 'ScanSearchIcon', 'ScanText', 'ScanTextIcon', 'ScatterChart', 'ScatterChartIcon', 'School', 'School2', 'School2Icon', 'SchoolIcon', 'Scissors', 'ScissorsIcon', 'ScissorsLineDashed', 'ScissorsLineDashedIcon', 'ScissorsSquare', 'ScissorsSquareDashedBottom', 'ScissorsSquareDashedBottomIcon', 'ScissorsSquareIcon', 'Scooter', 'ScooterIcon', 'ScreenShare', 'ScreenShareIcon', 'ScreenShareOff', 'ScreenShareOffIcon', 'Scroll', 'ScrollIcon', 'ScrollText', 'ScrollTextIcon', 'Search', 'SearchAlert', 'SearchAlertIcon', 'SearchCheck', 'SearchCheckIcon', 'SearchCode', 'SearchCodeIcon', 'SearchIcon', 'SearchSlash', 'SearchSlashIcon', 'SearchX', 'SearchXIcon', 'Section', 'SectionIcon', 'Send', 'SendHorizonal', 'SendHorizonalIcon', 'SendHorizontal', 'SendHorizontalIcon', 'SendIcon', 'SendToBack', 'SendToBackIcon', 'SeparatorHorizontal', 'SeparatorHorizontalIcon', 'SeparatorVertical', 'SeparatorVerticalIcon', 'Server', 'ServerCog', 'ServerCogIcon', 'ServerCrash', 'ServerCrashIcon', 'ServerIcon', 'ServerOff', 'ServerOffIcon', 'Settings', 'Settings2', 'Settings2Icon', 'SettingsIcon', 'Shapes', 'ShapesIcon', 'Share', 'Share2', 'Share2Icon', 'ShareIcon', 'Sheet', 'SheetIcon', 'Shell', 'ShellIcon', 'Shield', 'ShieldAlert', 'ShieldAlertIcon', 'ShieldBan', 'ShieldBanIcon', 'ShieldCheck', 'ShieldCheckIcon', 'ShieldClose', 'ShieldCloseIcon', 'ShieldEllipsis', 'ShieldEllipsisIcon', 'ShieldHalf', 'ShieldHalfIcon', 'ShieldIcon', 'ShieldMinus', 'ShieldMinusIcon', 'ShieldOff', 'ShieldOffIcon', 'ShieldPlus', 'ShieldPlusIcon', 'ShieldQuestion', 'ShieldQuestionIcon', 'ShieldQuestionMark', 'ShieldQuestionMarkIcon', 'ShieldUser', 'ShieldUserIcon', 'ShieldX', 'ShieldXIcon', 'Ship', 'ShipIcon', 'ShipWheel', 'ShipWheelIcon', 'Shirt', 'ShirtIcon', 'ShoppingBag', 'ShoppingBagIcon', 'ShoppingBasket', 'ShoppingBasketIcon', 'ShoppingCart', 'ShoppingCartIcon', 'Shovel', 'ShovelIcon', 'ShowerHead', 'ShowerHeadIcon', 'Shredder', 'ShredderIcon', 'Shrimp', 'ShrimpIcon', 'Shrink', 'ShrinkIcon', 'Shrub', 'ShrubIcon', 'Shuffle', 'ShuffleIcon', 'Sidebar', 'SidebarClose', 'SidebarCloseIcon', 'SidebarIcon', 'SidebarOpen', 'SidebarOpenIcon', 'Sigma', 'SigmaIcon', 'SigmaSquare', 'SigmaSquareIcon', 'Signal', 'SignalHigh', 'SignalHighIcon', 'SignalIcon', 'SignalLow', 'SignalLowIcon', 'SignalMedium', 'SignalMediumIcon', 'SignalZero', 'SignalZeroIcon', 'Signature', 'SignatureIcon', 'Signpost', 'SignpostBig', 'SignpostBigIcon', 'SignpostIcon', 'Siren', 'SirenIcon', 'SkipBack', 'SkipBackIcon', 'SkipForward', 'SkipForwardIcon', 'Skull', 'SkullIcon', 'Slack', 'SlackIcon', 'Slash', 'SlashIcon', 'SlashSquare', 'SlashSquareIcon', 'Slice', 'SliceIcon', 'Sliders', 'SlidersHorizontal', 'SlidersHorizontalIcon', 'SlidersIcon', 'SlidersVertical', 'SlidersVerticalIcon', 'Smartphone', 'SmartphoneCharging', 'SmartphoneChargingIcon', 'SmartphoneIcon', 'SmartphoneNfc', 'SmartphoneNfcIcon', 'Smile', 'SmileIcon', 'SmilePlus', 'SmilePlusIcon', 'Snail', 'SnailIcon', 'Snowflake', 'SnowflakeIcon', 'SoapDispenserDroplet', 'SoapDispenserDropletIcon', 'Sofa', 'SofaIcon', 'SolarPanel', 'SolarPanelIcon', 'SortAsc', 'SortAscIcon', 'SortDesc', 'SortDescIcon', 'Soup', 'SoupIcon', 'Space', 'SpaceIcon', 'Spade', 'SpadeIcon', 'Sparkle', 'SparkleIcon', 'Sparkles', 'SparklesIcon', 'Speaker', 'SpeakerIcon', 'Speech', 'SpeechIcon', 'SpellCheck', 'SpellCheck2', 'SpellCheck2Icon', 'SpellCheckIcon', 'Spline', 'SplineIcon', 'SplinePointer', 'SplinePointerIcon', 'Split', 'SplitIcon', 'SplitSquareHorizontal', 'SplitSquareHorizontalIcon', 'SplitSquareVertical', 'SplitSquareVerticalIcon', 'Spool', 'SpoolIcon', 'Spotlight', 'SpotlightIcon', 'SprayCan', 'SprayCanIcon', 'Sprout', 'SproutIcon', 'Square', 'SquareActivity', 'SquareActivityIcon', 'SquareArrowDown', 'SquareArrowDownIcon', 'SquareArrowDownLeft', 'SquareArrowDownLeftIcon', 'SquareArrowDownRight', 'SquareArrowDownRightIcon', 'SquareArrowLeft', 'SquareArrowLeftIcon', 'SquareArrowOutDownLeft', 'SquareArrowOutDownLeftIcon', 'SquareArrowOutDownRight', 'SquareArrowOutDownRightIcon', 'SquareArrowOutUpLeft', 'SquareArrowOutUpLeftIcon', 'SquareArrowOutUpRight', 'SquareArrowOutUpRightIcon', 'SquareArrowRight', 'SquareArrowRightIcon', 'SquareArrowUp', 'SquareArrowUpIcon', 'SquareArrowUpLeft', 'SquareArrowUpLeftIcon', 'SquareArrowUpRight', 'SquareArrowUpRightIcon', 'SquareAsterisk', 'SquareAsteriskIcon', 'SquareBottomDashedScissors', 'SquareBottomDashedScissorsIcon', 'SquareChartGantt', 'SquareChartGanttIcon', 'SquareCheck', 'SquareCheckBig', 'SquareCheckBigIcon', 'SquareCheckIcon', 'SquareChevronDown', 'SquareChevronDownIcon', 'SquareChevronLeft', 'SquareChevronLeftIcon', 'SquareChevronRight', 'SquareChevronRightIcon', 'SquareChevronUp', 'SquareChevronUpIcon', 'SquareCode', 'SquareCodeIcon', 'SquareDashed', 'SquareDashedBottom', 'SquareDashedBottomCode', 'SquareDashedBottomCodeIcon', 'SquareDashedBottomIcon', 'SquareDashedIcon', 'SquareDashedKanban', 'SquareDashedKanbanIcon', 'SquareDashedMousePointer', 'SquareDashedMousePointerIcon', 'SquareDashedTopSolid', 'SquareDashedTopSolidIcon', 'SquareDivide', 'SquareDivideIcon', 'SquareDot', 'SquareDotIcon', 'SquareEqual', 'SquareEqualIcon', 'SquareFunction', 'SquareFunctionIcon', 'SquareGanttChart', 'SquareGanttChartIcon', 'SquareIcon', 'SquareKanban', 'SquareKanbanIcon', 'SquareLibrary', 'SquareLibraryIcon', 'SquareM', 'SquareMIcon', 'SquareMenu', 'SquareMenuIcon', 'SquareMinus', 'SquareMinusIcon', 'SquareMousePointer', 'SquareMousePointerIcon', 'SquareParking', 'SquareParkingIcon', 'SquareParkingOff', 'SquareParkingOffIcon', 'SquarePause', 'SquarePauseIcon', 'SquarePen', 'SquarePenIcon', 'SquarePercent', 'SquarePercentIcon', 'SquarePi', 'SquarePiIcon', 'SquarePilcrow', 'SquarePilcrowIcon', 'SquarePlay', 'SquarePlayIcon', 'SquarePlus', 'SquarePlusIcon', 'SquarePower', 'SquarePowerIcon', 'SquareRadical', 'SquareRadicalIcon', 'SquareRoundCorner', 'SquareRoundCornerIcon', 'SquareScissors', 'SquareScissorsIcon', 'SquareSigma', 'SquareSigmaIcon', 'SquareSlash', 'SquareSlashIcon', 'SquareSplitHorizontal', 'SquareSplitHorizontalIcon', 'SquareSplitVertical', 'SquareSplitVerticalIcon', 'SquareSquare', 'SquareSquareIcon', 'SquareStack', 'SquareStackIcon', 'SquareStar', 'SquareStarIcon', 'SquareStop', 'SquareStopIcon', 'SquareTerminal', 'SquareTerminalIcon', 'SquareUser', 'SquareUserIcon', 'SquareUserRound', 'SquareUserRoundIcon', 'SquareX', 'SquareXIcon', 'SquaresExclude', 'SquaresExcludeIcon', 'SquaresIntersect', 'SquaresIntersectIcon', 'SquaresSubtract', 'SquaresSubtractIcon', 'SquaresUnite', 'SquaresUniteIcon', 'Squircle', 'SquircleDashed', 'SquircleDashedIcon', 'SquircleIcon', 'Squirrel', 'SquirrelIcon', 'Stamp', 'StampIcon', 'Star', 'StarHalf', 'StarHalfIcon', 'StarIcon', 'StarOff', 'StarOffIcon', 'Stars', 'StarsIcon', 'StepBack', 'StepBackIcon', 'StepForward', 'StepForwardIcon', 'Stethoscope', 'StethoscopeIcon', 'Sticker', 'StickerIcon', 'StickyNote', 'StickyNoteIcon', 'Stone', 'StoneIcon', 'StopCircle', 'StopCircleIcon', 'Store', 'StoreIcon', 'StretchHorizontal', 'StretchHorizontalIcon', 'StretchVertical', 'StretchVerticalIcon', 'Strikethrough', 'StrikethroughIcon', 'Subscript', 'SubscriptIcon', 'Subtitles', 'SubtitlesIcon', 'Sun', 'SunDim', 'SunDimIcon', 'SunIcon', 'SunMedium', 'SunMediumIcon', 'SunMoon', 'SunMoonIcon', 'SunSnow', 'SunSnowIcon', 'Sunrise', 'SunriseIcon', 'Sunset', 'SunsetIcon', 'Superscript', 'SuperscriptIcon', 'SwatchBook', 'SwatchBookIcon', 'SwissFranc', 'SwissFrancIcon', 'SwitchCamera', 'SwitchCameraIcon', 'Sword', 'SwordIcon', 'Swords', 'SwordsIcon', 'Syringe', 'SyringeIcon', 'Table', 'Table2', 'Table2Icon', 'TableCellsMerge', 'TableCellsMergeIcon', 'TableCellsSplit', 'TableCellsSplitIcon', 'TableColumnsSplit', 'TableColumnsSplitIcon', 'TableConfig', 'TableConfigIcon', 'TableIcon', 'TableOfContents', 'TableOfContentsIcon', 'TableProperties', 'TablePropertiesIcon', 'TableRowsSplit', 'TableRowsSplitIcon', 'Tablet', 'TabletIcon', 'TabletSmartphone', 'TabletSmartphoneIcon', 'Tablets', 'TabletsIcon', 'Tag', 'TagIcon', 'Tags', 'TagsIcon', 'Tally1', 'Tally1Icon', 'Tally2', 'Tally2Icon', 'Tally3', 'Tally3Icon', 'Tally4', 'Tally4Icon', 'Tally5', 'Tally5Icon', 'Tangent', 'TangentIcon', 'Target', 'TargetIcon', 'Telescope', 'TelescopeIcon', 'Tent', 'TentIcon', 'TentTree', 'TentTreeIcon', 'Terminal', 'TerminalIcon', 'TerminalSquare', 'TerminalSquareIcon', 'TestTube', 'TestTube2', 'TestTube2Icon', 'TestTubeDiagonal', 'TestTubeDiagonalIcon', 'TestTubeIcon', 'TestTubes', 'TestTubesIcon', 'Text', 'TextAlignCenter', 'TextAlignCenterIcon', 'TextAlignEnd', 'TextAlignEndIcon', 'TextAlignJustify', 'TextAlignJustifyIcon', 'TextAlignStart', 'TextAlignStartIcon', 'TextCursor', 'TextCursorIcon', 'TextCursorInput', 'TextCursorInputIcon', 'TextIcon', 'TextInitial', 'TextInitialIcon', 'TextQuote', 'TextQuoteIcon', 'TextSearch', 'TextSearchIcon', 'TextSelect', 'TextSelectIcon', 'TextSelection', 'TextSelectionIcon', 'TextWrap', 'TextWrapIcon', 'Theater', 'TheaterIcon', 'Thermometer', 'ThermometerIcon', 'ThermometerSnowflake', 'ThermometerSnowflakeIcon', 'ThermometerSun', 'ThermometerSunIcon', 'ThumbsDown', 'ThumbsDownIcon', 'ThumbsUp', 'ThumbsUpIcon', 'Ticket', 'TicketCheck', 'TicketCheckIcon', 'TicketIcon', 'TicketMinus', 'TicketMinusIcon', 'TicketPercent', 'TicketPercentIcon', 'TicketPlus', 'TicketPlusIcon', 'TicketSlash', 'TicketSlashIcon', 'TicketX', 'TicketXIcon', 'Tickets', 'TicketsIcon', 'TicketsPlane', 'TicketsPlaneIcon', 'Timer', 'TimerIcon', 'TimerOff', 'TimerOffIcon', 'TimerReset', 'TimerResetIcon', 'ToggleLeft', 'ToggleLeftIcon', 'ToggleRight', 'ToggleRightIcon', 'Toilet', 'ToiletIcon', 'ToolCase', 'ToolCaseIcon', 'Toolbox', 'ToolboxIcon', 'Tornado', 'TornadoIcon', 'Torus', 'TorusIcon', 'Touchpad', 'TouchpadIcon', 'TouchpadOff', 'TouchpadOffIcon', 'TowerControl', 'TowerControlIcon', 'ToyBrick', 'ToyBrickIcon', 'Tractor', 'TractorIcon', 'TrafficCone', 'TrafficConeIcon', 'Train', 'TrainFront', 'TrainFrontIcon', 'TrainFrontTunnel', 'TrainFrontTunnelIcon', 'TrainIcon', 'TrainTrack', 'TrainTrackIcon', 'TramFront', 'TramFrontIcon', 'Transgender', 'TransgenderIcon', 'Trash', 'Trash2', 'Trash2Icon', 'TrashIcon', 'TreeDeciduous', 'TreeDeciduousIcon', 'TreePalm', 'TreePalmIcon', 'TreePine', 'TreePineIcon', 'Trees', 'TreesIcon', 'Trello', 'TrelloIcon', 'TrendingDown', 'TrendingDownIcon', 'TrendingUp', 'TrendingUpDown', 'TrendingUpDownIcon', 'TrendingUpIcon', 'Triangle', 'TriangleAlert', 'TriangleAlertIcon', 'TriangleDashed', 'TriangleDashedIcon', 'TriangleIcon', 'TriangleRight', 'TriangleRightIcon', 'Trophy', 'TrophyIcon', 'Truck', 'TruckElectric', 'TruckElectricIcon', 'TruckIcon', 'TurkishLira', 'TurkishLiraIcon', 'Turntable', 'TurntableIcon', 'Turtle', 'TurtleIcon', 'Tv', 'Tv2', 'Tv2Icon', 'TvIcon', 'TvMinimal', 'TvMinimalIcon', 'TvMinimalPlay', 'TvMinimalPlayIcon', 'Twitch', 'TwitchIcon', 'Twitter', 'TwitterIcon', 'Type', 'TypeIcon', 'TypeOutline', 'TypeOutlineIcon', 'Umbrella', 'UmbrellaIcon', 'UmbrellaOff', 'UmbrellaOffIcon', 'Underline', 'UnderlineIcon', 'Undo', 'Undo2', 'Undo2Icon', 'UndoDot', 'UndoDotIcon', 'UndoIcon', 'UnfoldHorizontal', 'UnfoldHorizontalIcon', 'UnfoldVertical', 'UnfoldVerticalIcon', 'Ungroup', 'UngroupIcon', 'University', 'UniversityIcon', 'Unlink', 'Unlink2', 'Unlink2Icon', 'UnlinkIcon', 'Unlock', 'UnlockIcon', 'UnlockKeyhole', 'UnlockKeyholeIcon', 'Unplug', 'UnplugIcon', 'Upload', 'UploadCloud', 'UploadCloudIcon', 'UploadIcon', 'Usb', 'UsbIcon', 'User', 'User2', 'User2Icon', 'UserCheck', 'UserCheck2', 'UserCheck2Icon', 'UserCheckIcon', 'UserCircle', 'UserCircle2', 'UserCircle2Icon', 'UserCircleIcon', 'UserCog', 'UserCog2', 'UserCog2Icon', 'UserCogIcon', 'UserIcon', 'UserLock', 'UserLockIcon', 'UserMinus', 'UserMinus2', 'UserMinus2Icon', 'UserMinusIcon', 'UserPen', 'UserPenIcon', 'UserPlus', 'UserPlus2', 'UserPlus2Icon', 'UserPlusIcon', 'UserRound', 'UserRoundCheck', 'UserRoundCheckIcon', 'UserRoundCog', 'UserRoundCogIcon', 'UserRoundIcon', 'UserRoundMinus', 'UserRoundMinusIcon', 'UserRoundPen', 'UserRoundPenIcon', 'UserRoundPlus', 'UserRoundPlusIcon', 'UserRoundSearch', 'UserRoundSearchIcon', 'UserRoundX', 'UserRoundXIcon', 'UserSearch', 'UserSearchIcon', 'UserSquare', 'UserSquare2', 'UserSquare2Icon', 'UserSquareIcon', 'UserStar', 'UserStarIcon', 'UserX', 'UserX2', 'UserX2Icon', 'UserXIcon', 'Users', 'Users2', 'Users2Icon', 'UsersIcon', 'UsersRound', 'UsersRoundIcon', 'Utensils', 'UtensilsCrossed', 'UtensilsCrossedIcon', 'UtensilsIcon', 'UtilityPole', 'UtilityPoleIcon', 'Van', 'VanIcon', 'Variable', 'VariableIcon', 'Vault', 'VaultIcon', 'VectorSquare', 'VectorSquareIcon', 'Vegan', 'VeganIcon', 'VenetianMask', 'VenetianMaskIcon', 'Venus', 'VenusAndMars', 'VenusAndMarsIcon', 'VenusIcon', 'Verified', 'VerifiedIcon', 'Vibrate', 'VibrateIcon', 'VibrateOff', 'VibrateOffIcon', 'Video', 'VideoIcon', 'VideoOff', 'VideoOffIcon', 'Videotape', 'VideotapeIcon', 'View', 'ViewIcon', 'Voicemail', 'VoicemailIcon', 'Volleyball', 'VolleyballIcon', 'Volume', 'Volume1', 'Volume1Icon', 'Volume2', 'Volume2Icon', 'VolumeIcon', 'VolumeOff', 'VolumeOffIcon', 'VolumeX', 'VolumeXIcon', 'Vote', 'VoteIcon', 'Wallet', 'Wallet2', 'Wallet2Icon', 'WalletCards', 'WalletCardsIcon', 'WalletIcon', 'WalletMinimal', 'WalletMinimalIcon', 'Wallpaper', 'WallpaperIcon', 'Wand', 'Wand2', 'Wand2Icon', 'WandIcon', 'WandSparkles', 'WandSparklesIcon', 'Warehouse', 'WarehouseIcon', 'WashingMachine', 'WashingMachineIcon', 'Watch', 'WatchIcon', 'Waves', 'WavesArrowDown', 'WavesArrowDownIcon', 'WavesArrowUp', 'WavesArrowUpIcon', 'WavesIcon', 'WavesLadder', 'WavesLadderIcon', 'Waypoints', 'WaypointsIcon', 'Webcam', 'WebcamIcon', 'Webhook', 'WebhookIcon', 'WebhookOff', 'WebhookOffIcon', 'Weight', 'WeightIcon', 'WeightTilde', 'WeightTildeIcon', 'Wheat', 'WheatIcon', 'WheatOff', 'WheatOffIcon', 'WholeWord', 'WholeWordIcon', 'Wifi', 'WifiCog', 'WifiCogIcon', 'WifiHigh', 'WifiHighIcon', 'WifiIcon', 'WifiLow', 'WifiLowIcon', 'WifiOff', 'WifiOffIcon', 'WifiPen', 'WifiPenIcon', 'WifiSync', 'WifiSyncIcon', 'WifiZero', 'WifiZeroIcon', 'Wind', 'WindArrowDown', 'WindArrowDownIcon', 'WindIcon', 'Wine', 'WineIcon', 'WineOff', 'WineOffIcon', 'Workflow', 'WorkflowIcon', 'Worm', 'WormIcon', 'WrapText', 'WrapTextIcon', 'Wrench', 'WrenchIcon', 'X', 'XCircle', 'XCircleIcon', 'XIcon', 'XOctagon', 'XOctagonIcon', 'XSquare', 'XSquareIcon', 'Youtube', 'YoutubeIcon', 'Zap', 'ZapIcon', 'ZapOff', 'ZapOffIcon', 'ZoomIn', 'ZoomInIcon', 'ZoomOut', 'ZoomOutIcon', 'createLucideIcon', 'default', 'icons');
  CREATE TYPE "public"."enum_pages_blocks_section_hero_with_badge_badge_icon" AS ENUM('AArrowDown', 'AArrowDownIcon', 'AArrowUp', 'AArrowUpIcon', 'ALargeSmall', 'ALargeSmallIcon', 'Accessibility', 'AccessibilityIcon', 'Activity', 'ActivityIcon', 'ActivitySquare', 'ActivitySquareIcon', 'AirVent', 'AirVentIcon', 'Airplay', 'AirplayIcon', 'AlarmCheck', 'AlarmCheckIcon', 'AlarmClock', 'AlarmClockCheck', 'AlarmClockCheckIcon', 'AlarmClockIcon', 'AlarmClockMinus', 'AlarmClockMinusIcon', 'AlarmClockOff', 'AlarmClockOffIcon', 'AlarmClockPlus', 'AlarmClockPlusIcon', 'AlarmMinus', 'AlarmMinusIcon', 'AlarmPlus', 'AlarmPlusIcon', 'AlarmSmoke', 'AlarmSmokeIcon', 'Album', 'AlbumIcon', 'AlertCircle', 'AlertCircleIcon', 'AlertOctagon', 'AlertOctagonIcon', 'AlertTriangle', 'AlertTriangleIcon', 'AlignCenter', 'AlignCenterHorizontal', 'AlignCenterHorizontalIcon', 'AlignCenterIcon', 'AlignCenterVertical', 'AlignCenterVerticalIcon', 'AlignEndHorizontal', 'AlignEndHorizontalIcon', 'AlignEndVertical', 'AlignEndVerticalIcon', 'AlignHorizontalDistributeCenter', 'AlignHorizontalDistributeCenterIcon', 'AlignHorizontalDistributeEnd', 'AlignHorizontalDistributeEndIcon', 'AlignHorizontalDistributeStart', 'AlignHorizontalDistributeStartIcon', 'AlignHorizontalJustifyCenter', 'AlignHorizontalJustifyCenterIcon', 'AlignHorizontalJustifyEnd', 'AlignHorizontalJustifyEndIcon', 'AlignHorizontalJustifyStart', 'AlignHorizontalJustifyStartIcon', 'AlignHorizontalSpaceAround', 'AlignHorizontalSpaceAroundIcon', 'AlignHorizontalSpaceBetween', 'AlignHorizontalSpaceBetweenIcon', 'AlignJustify', 'AlignJustifyIcon', 'AlignLeft', 'AlignLeftIcon', 'AlignRight', 'AlignRightIcon', 'AlignStartHorizontal', 'AlignStartHorizontalIcon', 'AlignStartVertical', 'AlignStartVerticalIcon', 'AlignVerticalDistributeCenter', 'AlignVerticalDistributeCenterIcon', 'AlignVerticalDistributeEnd', 'AlignVerticalDistributeEndIcon', 'AlignVerticalDistributeStart', 'AlignVerticalDistributeStartIcon', 'AlignVerticalJustifyCenter', 'AlignVerticalJustifyCenterIcon', 'AlignVerticalJustifyEnd', 'AlignVerticalJustifyEndIcon', 'AlignVerticalJustifyStart', 'AlignVerticalJustifyStartIcon', 'AlignVerticalSpaceAround', 'AlignVerticalSpaceAroundIcon', 'AlignVerticalSpaceBetween', 'AlignVerticalSpaceBetweenIcon', 'Ambulance', 'AmbulanceIcon', 'Ampersand', 'AmpersandIcon', 'Ampersands', 'AmpersandsIcon', 'Amphora', 'AmphoraIcon', 'Anchor', 'AnchorIcon', 'Angry', 'AngryIcon', 'Annoyed', 'AnnoyedIcon', 'Antenna', 'AntennaIcon', 'Anvil', 'AnvilIcon', 'Aperture', 'ApertureIcon', 'AppWindow', 'AppWindowIcon', 'AppWindowMac', 'AppWindowMacIcon', 'Apple', 'AppleIcon', 'Archive', 'ArchiveIcon', 'ArchiveRestore', 'ArchiveRestoreIcon', 'ArchiveX', 'ArchiveXIcon', 'AreaChart', 'AreaChartIcon', 'Armchair', 'ArmchairIcon', 'ArrowBigDown', 'ArrowBigDownDash', 'ArrowBigDownDashIcon', 'ArrowBigDownIcon', 'ArrowBigLeft', 'ArrowBigLeftDash', 'ArrowBigLeftDashIcon', 'ArrowBigLeftIcon', 'ArrowBigRight', 'ArrowBigRightDash', 'ArrowBigRightDashIcon', 'ArrowBigRightIcon', 'ArrowBigUp', 'ArrowBigUpDash', 'ArrowBigUpDashIcon', 'ArrowBigUpIcon', 'ArrowDown', 'ArrowDown01', 'ArrowDown01Icon', 'ArrowDown10', 'ArrowDown10Icon', 'ArrowDownAZ', 'ArrowDownAZIcon', 'ArrowDownAz', 'ArrowDownAzIcon', 'ArrowDownCircle', 'ArrowDownCircleIcon', 'ArrowDownFromLine', 'ArrowDownFromLineIcon', 'ArrowDownIcon', 'ArrowDownLeft', 'ArrowDownLeftFromCircle', 'ArrowDownLeftFromCircleIcon', 'ArrowDownLeftFromSquare', 'ArrowDownLeftFromSquareIcon', 'ArrowDownLeftIcon', 'ArrowDownLeftSquare', 'ArrowDownLeftSquareIcon', 'ArrowDownNarrowWide', 'ArrowDownNarrowWideIcon', 'ArrowDownRight', 'ArrowDownRightFromCircle', 'ArrowDownRightFromCircleIcon', 'ArrowDownRightFromSquare', 'ArrowDownRightFromSquareIcon', 'ArrowDownRightIcon', 'ArrowDownRightSquare', 'ArrowDownRightSquareIcon', 'ArrowDownSquare', 'ArrowDownSquareIcon', 'ArrowDownToDot', 'ArrowDownToDotIcon', 'ArrowDownToLine', 'ArrowDownToLineIcon', 'ArrowDownUp', 'ArrowDownUpIcon', 'ArrowDownWideNarrow', 'ArrowDownWideNarrowIcon', 'ArrowDownZA', 'ArrowDownZAIcon', 'ArrowDownZa', 'ArrowDownZaIcon', 'ArrowLeft', 'ArrowLeftCircle', 'ArrowLeftCircleIcon', 'ArrowLeftFromLine', 'ArrowLeftFromLineIcon', 'ArrowLeftIcon', 'ArrowLeftRight', 'ArrowLeftRightIcon', 'ArrowLeftSquare', 'ArrowLeftSquareIcon', 'ArrowLeftToLine', 'ArrowLeftToLineIcon', 'ArrowRight', 'ArrowRightCircle', 'ArrowRightCircleIcon', 'ArrowRightFromLine', 'ArrowRightFromLineIcon', 'ArrowRightIcon', 'ArrowRightLeft', 'ArrowRightLeftIcon', 'ArrowRightSquare', 'ArrowRightSquareIcon', 'ArrowRightToLine', 'ArrowRightToLineIcon', 'ArrowUp', 'ArrowUp01', 'ArrowUp01Icon', 'ArrowUp10', 'ArrowUp10Icon', 'ArrowUpAZ', 'ArrowUpAZIcon', 'ArrowUpAz', 'ArrowUpAzIcon', 'ArrowUpCircle', 'ArrowUpCircleIcon', 'ArrowUpDown', 'ArrowUpDownIcon', 'ArrowUpFromDot', 'ArrowUpFromDotIcon', 'ArrowUpFromLine', 'ArrowUpFromLineIcon', 'ArrowUpIcon', 'ArrowUpLeft', 'ArrowUpLeftFromCircle', 'ArrowUpLeftFromCircleIcon', 'ArrowUpLeftFromSquare', 'ArrowUpLeftFromSquareIcon', 'ArrowUpLeftIcon', 'ArrowUpLeftSquare', 'ArrowUpLeftSquareIcon', 'ArrowUpNarrowWide', 'ArrowUpNarrowWideIcon', 'ArrowUpRight', 'ArrowUpRightFromCircle', 'ArrowUpRightFromCircleIcon', 'ArrowUpRightFromSquare', 'ArrowUpRightFromSquareIcon', 'ArrowUpRightIcon', 'ArrowUpRightSquare', 'ArrowUpRightSquareIcon', 'ArrowUpSquare', 'ArrowUpSquareIcon', 'ArrowUpToLine', 'ArrowUpToLineIcon', 'ArrowUpWideNarrow', 'ArrowUpWideNarrowIcon', 'ArrowUpZA', 'ArrowUpZAIcon', 'ArrowUpZa', 'ArrowUpZaIcon', 'ArrowsUpFromLine', 'ArrowsUpFromLineIcon', 'Asterisk', 'AsteriskIcon', 'AsteriskSquare', 'AsteriskSquareIcon', 'AtSign', 'AtSignIcon', 'Atom', 'AtomIcon', 'AudioLines', 'AudioLinesIcon', 'AudioWaveform', 'AudioWaveformIcon', 'Award', 'AwardIcon', 'Axe', 'AxeIcon', 'Axis3D', 'Axis3DIcon', 'Axis3d', 'Axis3dIcon', 'Baby', 'BabyIcon', 'Backpack', 'BackpackIcon', 'Badge', 'BadgeAlert', 'BadgeAlertIcon', 'BadgeCent', 'BadgeCentIcon', 'BadgeCheck', 'BadgeCheckIcon', 'BadgeDollarSign', 'BadgeDollarSignIcon', 'BadgeEuro', 'BadgeEuroIcon', 'BadgeHelp', 'BadgeHelpIcon', 'BadgeIcon', 'BadgeIndianRupee', 'BadgeIndianRupeeIcon', 'BadgeInfo', 'BadgeInfoIcon', 'BadgeJapaneseYen', 'BadgeJapaneseYenIcon', 'BadgeMinus', 'BadgeMinusIcon', 'BadgePercent', 'BadgePercentIcon', 'BadgePlus', 'BadgePlusIcon', 'BadgePoundSterling', 'BadgePoundSterlingIcon', 'BadgeQuestionMark', 'BadgeQuestionMarkIcon', 'BadgeRussianRuble', 'BadgeRussianRubleIcon', 'BadgeSwissFranc', 'BadgeSwissFrancIcon', 'BadgeTurkishLira', 'BadgeTurkishLiraIcon', 'BadgeX', 'BadgeXIcon', 'BaggageClaim', 'BaggageClaimIcon', 'Balloon', 'BalloonIcon', 'Ban', 'BanIcon', 'Banana', 'BananaIcon', 'Bandage', 'BandageIcon', 'Banknote', 'BanknoteArrowDown', 'BanknoteArrowDownIcon', 'BanknoteArrowUp', 'BanknoteArrowUpIcon', 'BanknoteIcon', 'BanknoteX', 'BanknoteXIcon', 'BarChart', 'BarChart2', 'BarChart2Icon', 'BarChart3', 'BarChart3Icon', 'BarChart4', 'BarChart4Icon', 'BarChartBig', 'BarChartBigIcon', 'BarChartHorizontal', 'BarChartHorizontalBig', 'BarChartHorizontalBigIcon', 'BarChartHorizontalIcon', 'BarChartIcon', 'Barcode', 'BarcodeIcon', 'Barrel', 'BarrelIcon', 'Baseline', 'BaselineIcon', 'Bath', 'BathIcon', 'Battery', 'BatteryCharging', 'BatteryChargingIcon', 'BatteryFull', 'BatteryFullIcon', 'BatteryIcon', 'BatteryLow', 'BatteryLowIcon', 'BatteryMedium', 'BatteryMediumIcon', 'BatteryPlus', 'BatteryPlusIcon', 'BatteryWarning', 'BatteryWarningIcon', 'Beaker', 'BeakerIcon', 'Bean', 'BeanIcon', 'BeanOff', 'BeanOffIcon', 'Bed', 'BedDouble', 'BedDoubleIcon', 'BedIcon', 'BedSingle', 'BedSingleIcon', 'Beef', 'BeefIcon', 'Beer', 'BeerIcon', 'BeerOff', 'BeerOffIcon', 'Bell', 'BellDot', 'BellDotIcon', 'BellElectric', 'BellElectricIcon', 'BellIcon', 'BellMinus', 'BellMinusIcon', 'BellOff', 'BellOffIcon', 'BellPlus', 'BellPlusIcon', 'BellRing', 'BellRingIcon', 'BetweenHorizonalEnd', 'BetweenHorizonalEndIcon', 'BetweenHorizonalStart', 'BetweenHorizonalStartIcon', 'BetweenHorizontalEnd', 'BetweenHorizontalEndIcon', 'BetweenHorizontalStart', 'BetweenHorizontalStartIcon', 'BetweenVerticalEnd', 'BetweenVerticalEndIcon', 'BetweenVerticalStart', 'BetweenVerticalStartIcon', 'BicepsFlexed', 'BicepsFlexedIcon', 'Bike', 'BikeIcon', 'Binary', 'BinaryIcon', 'Binoculars', 'BinocularsIcon', 'Biohazard', 'BiohazardIcon', 'Bird', 'BirdIcon', 'Birdhouse', 'BirdhouseIcon', 'Bitcoin', 'BitcoinIcon', 'Blend', 'BlendIcon', 'Blinds', 'BlindsIcon', 'Blocks', 'BlocksIcon', 'Bluetooth', 'BluetoothConnected', 'BluetoothConnectedIcon', 'BluetoothIcon', 'BluetoothOff', 'BluetoothOffIcon', 'BluetoothSearching', 'BluetoothSearchingIcon', 'Bold', 'BoldIcon', 'Bolt', 'BoltIcon', 'Bomb', 'BombIcon', 'Bone', 'BoneIcon', 'Book', 'BookA', 'BookAIcon', 'BookAlert', 'BookAlertIcon', 'BookAudio', 'BookAudioIcon', 'BookCheck', 'BookCheckIcon', 'BookCopy', 'BookCopyIcon', 'BookDashed', 'BookDashedIcon', 'BookDown', 'BookDownIcon', 'BookHeadphones', 'BookHeadphonesIcon', 'BookHeart', 'BookHeartIcon', 'BookIcon', 'BookImage', 'BookImageIcon', 'BookKey', 'BookKeyIcon', 'BookLock', 'BookLockIcon', 'BookMarked', 'BookMarkedIcon', 'BookMinus', 'BookMinusIcon', 'BookOpen', 'BookOpenCheck', 'BookOpenCheckIcon', 'BookOpenIcon', 'BookOpenText', 'BookOpenTextIcon', 'BookPlus', 'BookPlusIcon', 'BookSearch', 'BookSearchIcon', 'BookTemplate', 'BookTemplateIcon', 'BookText', 'BookTextIcon', 'BookType', 'BookTypeIcon', 'BookUp', 'BookUp2', 'BookUp2Icon', 'BookUpIcon', 'BookUser', 'BookUserIcon', 'BookX', 'BookXIcon', 'Bookmark', 'BookmarkCheck', 'BookmarkCheckIcon', 'BookmarkIcon', 'BookmarkMinus', 'BookmarkMinusIcon', 'BookmarkPlus', 'BookmarkPlusIcon', 'BookmarkX', 'BookmarkXIcon', 'BoomBox', 'BoomBoxIcon', 'Bot', 'BotIcon', 'BotMessageSquare', 'BotMessageSquareIcon', 'BotOff', 'BotOffIcon', 'BottleWine', 'BottleWineIcon', 'BowArrow', 'BowArrowIcon', 'Box', 'BoxIcon', 'BoxSelect', 'BoxSelectIcon', 'Boxes', 'BoxesIcon', 'Braces', 'BracesIcon', 'Brackets', 'BracketsIcon', 'Brain', 'BrainCircuit', 'BrainCircuitIcon', 'BrainCog', 'BrainCogIcon', 'BrainIcon', 'BrickWall', 'BrickWallFire', 'BrickWallFireIcon', 'BrickWallIcon', 'BrickWallShield', 'BrickWallShieldIcon', 'Briefcase', 'BriefcaseBusiness', 'BriefcaseBusinessIcon', 'BriefcaseConveyorBelt', 'BriefcaseConveyorBeltIcon', 'BriefcaseIcon', 'BriefcaseMedical', 'BriefcaseMedicalIcon', 'BringToFront', 'BringToFrontIcon', 'Brush', 'BrushCleaning', 'BrushCleaningIcon', 'BrushIcon', 'Bubbles', 'BubblesIcon', 'Bug', 'BugIcon', 'BugOff', 'BugOffIcon', 'BugPlay', 'BugPlayIcon', 'Building', 'Building2', 'Building2Icon', 'BuildingIcon', 'Bus', 'BusFront', 'BusFrontIcon', 'BusIcon', 'Cable', 'CableCar', 'CableCarIcon', 'CableIcon', 'Cake', 'CakeIcon', 'CakeSlice', 'CakeSliceIcon', 'Calculator', 'CalculatorIcon', 'Calendar', 'Calendar1', 'Calendar1Icon', 'CalendarArrowDown', 'CalendarArrowDownIcon', 'CalendarArrowUp', 'CalendarArrowUpIcon', 'CalendarCheck', 'CalendarCheck2', 'CalendarCheck2Icon', 'CalendarCheckIcon', 'CalendarClock', 'CalendarClockIcon', 'CalendarCog', 'CalendarCogIcon', 'CalendarDays', 'CalendarDaysIcon', 'CalendarFold', 'CalendarFoldIcon', 'CalendarHeart', 'CalendarHeartIcon', 'CalendarIcon', 'CalendarMinus', 'CalendarMinus2', 'CalendarMinus2Icon', 'CalendarMinusIcon', 'CalendarOff', 'CalendarOffIcon', 'CalendarPlus', 'CalendarPlus2', 'CalendarPlus2Icon', 'CalendarPlusIcon', 'CalendarRange', 'CalendarRangeIcon', 'CalendarSearch', 'CalendarSearchIcon', 'CalendarSync', 'CalendarSyncIcon', 'CalendarX', 'CalendarX2', 'CalendarX2Icon', 'CalendarXIcon', 'Calendars', 'CalendarsIcon', 'Camera', 'CameraIcon', 'CameraOff', 'CameraOffIcon', 'CandlestickChart', 'CandlestickChartIcon', 'Candy', 'CandyCane', 'CandyCaneIcon', 'CandyIcon', 'CandyOff', 'CandyOffIcon', 'Cannabis', 'CannabisIcon', 'CannabisOff', 'CannabisOffIcon', 'Captions', 'CaptionsIcon', 'CaptionsOff', 'CaptionsOffIcon', 'Car', 'CarFront', 'CarFrontIcon', 'CarIcon', 'CarTaxiFront', 'CarTaxiFrontIcon', 'Caravan', 'CaravanIcon', 'CardSim', 'CardSimIcon', 'Carrot', 'CarrotIcon', 'CaseLower', 'CaseLowerIcon', 'CaseSensitive', 'CaseSensitiveIcon', 'CaseUpper', 'CaseUpperIcon', 'CassetteTape', 'CassetteTapeIcon', 'Cast', 'CastIcon', 'Castle', 'CastleIcon', 'Cat', 'CatIcon', 'Cctv', 'CctvIcon', 'ChartArea', 'ChartAreaIcon', 'ChartBar', 'ChartBarBig', 'ChartBarBigIcon', 'ChartBarDecreasing', 'ChartBarDecreasingIcon', 'ChartBarIcon', 'ChartBarIncreasing', 'ChartBarIncreasingIcon', 'ChartBarStacked', 'ChartBarStackedIcon', 'ChartCandlestick', 'ChartCandlestickIcon', 'ChartColumn', 'ChartColumnBig', 'ChartColumnBigIcon', 'ChartColumnDecreasing', 'ChartColumnDecreasingIcon', 'ChartColumnIcon', 'ChartColumnIncreasing', 'ChartColumnIncreasingIcon', 'ChartColumnStacked', 'ChartColumnStackedIcon', 'ChartGantt', 'ChartGanttIcon', 'ChartLine', 'ChartLineIcon', 'ChartNetwork', 'ChartNetworkIcon', 'ChartNoAxesColumn', 'ChartNoAxesColumnDecreasing', 'ChartNoAxesColumnDecreasingIcon', 'ChartNoAxesColumnIcon', 'ChartNoAxesColumnIncreasing', 'ChartNoAxesColumnIncreasingIcon', 'ChartNoAxesCombined', 'ChartNoAxesCombinedIcon', 'ChartNoAxesGantt', 'ChartNoAxesGanttIcon', 'ChartPie', 'ChartPieIcon', 'ChartScatter', 'ChartScatterIcon', 'ChartSpline', 'ChartSplineIcon', 'Check', 'CheckCheck', 'CheckCheckIcon', 'CheckCircle', 'CheckCircle2', 'CheckCircle2Icon', 'CheckCircleIcon', 'CheckIcon', 'CheckLine', 'CheckLineIcon', 'CheckSquare', 'CheckSquare2', 'CheckSquare2Icon', 'CheckSquareIcon', 'ChefHat', 'ChefHatIcon', 'Cherry', 'CherryIcon', 'ChessBishop', 'ChessBishopIcon', 'ChessKing', 'ChessKingIcon', 'ChessKnight', 'ChessKnightIcon', 'ChessPawn', 'ChessPawnIcon', 'ChessQueen', 'ChessQueenIcon', 'ChessRook', 'ChessRookIcon', 'ChevronDown', 'ChevronDownCircle', 'ChevronDownCircleIcon', 'ChevronDownIcon', 'ChevronDownSquare', 'ChevronDownSquareIcon', 'ChevronFirst', 'ChevronFirstIcon', 'ChevronLast', 'ChevronLastIcon', 'ChevronLeft', 'ChevronLeftCircle', 'ChevronLeftCircleIcon', 'ChevronLeftIcon', 'ChevronLeftSquare', 'ChevronLeftSquareIcon', 'ChevronRight', 'ChevronRightCircle', 'ChevronRightCircleIcon', 'ChevronRightIcon', 'ChevronRightSquare', 'ChevronRightSquareIcon', 'ChevronUp', 'ChevronUpCircle', 'ChevronUpCircleIcon', 'ChevronUpIcon', 'ChevronUpSquare', 'ChevronUpSquareIcon', 'ChevronsDown', 'ChevronsDownIcon', 'ChevronsDownUp', 'ChevronsDownUpIcon', 'ChevronsLeft', 'ChevronsLeftIcon', 'ChevronsLeftRight', 'ChevronsLeftRightEllipsis', 'ChevronsLeftRightEllipsisIcon', 'ChevronsLeftRightIcon', 'ChevronsRight', 'ChevronsRightIcon', 'ChevronsRightLeft', 'ChevronsRightLeftIcon', 'ChevronsUp', 'ChevronsUpDown', 'ChevronsUpDownIcon', 'ChevronsUpIcon', 'Chrome', 'ChromeIcon', 'Chromium', 'ChromiumIcon', 'Church', 'ChurchIcon', 'Cigarette', 'CigaretteIcon', 'CigaretteOff', 'CigaretteOffIcon', 'Circle', 'CircleAlert', 'CircleAlertIcon', 'CircleArrowDown', 'CircleArrowDownIcon', 'CircleArrowLeft', 'CircleArrowLeftIcon', 'CircleArrowOutDownLeft', 'CircleArrowOutDownLeftIcon', 'CircleArrowOutDownRight', 'CircleArrowOutDownRightIcon', 'CircleArrowOutUpLeft', 'CircleArrowOutUpLeftIcon', 'CircleArrowOutUpRight', 'CircleArrowOutUpRightIcon', 'CircleArrowRight', 'CircleArrowRightIcon', 'CircleArrowUp', 'CircleArrowUpIcon', 'CircleCheck', 'CircleCheckBig', 'CircleCheckBigIcon', 'CircleCheckIcon', 'CircleChevronDown', 'CircleChevronDownIcon', 'CircleChevronLeft', 'CircleChevronLeftIcon', 'CircleChevronRight', 'CircleChevronRightIcon', 'CircleChevronUp', 'CircleChevronUpIcon', 'CircleDashed', 'CircleDashedIcon', 'CircleDivide', 'CircleDivideIcon', 'CircleDollarSign', 'CircleDollarSignIcon', 'CircleDot', 'CircleDotDashed', 'CircleDotDashedIcon', 'CircleDotIcon', 'CircleEllipsis', 'CircleEllipsisIcon', 'CircleEqual', 'CircleEqualIcon', 'CircleFadingArrowUp', 'CircleFadingArrowUpIcon', 'CircleFadingPlus', 'CircleFadingPlusIcon', 'CircleGauge', 'CircleGaugeIcon', 'CircleHelp', 'CircleHelpIcon', 'CircleIcon', 'CircleMinus', 'CircleMinusIcon', 'CircleOff', 'CircleOffIcon', 'CircleParking', 'CircleParkingIcon', 'CircleParkingOff', 'CircleParkingOffIcon', 'CirclePause', 'CirclePauseIcon', 'CirclePercent', 'CirclePercentIcon', 'CirclePile', 'CirclePileIcon', 'CirclePlay', 'CirclePlayIcon', 'CirclePlus', 'CirclePlusIcon', 'CirclePoundSterling', 'CirclePoundSterlingIcon', 'CirclePower', 'CirclePowerIcon', 'CircleQuestionMark', 'CircleQuestionMarkIcon', 'CircleSlash', 'CircleSlash2', 'CircleSlash2Icon', 'CircleSlashIcon', 'CircleSlashed', 'CircleSlashedIcon', 'CircleSmall', 'CircleSmallIcon', 'CircleStar', 'CircleStarIcon', 'CircleStop', 'CircleStopIcon', 'CircleUser', 'CircleUserIcon', 'CircleUserRound', 'CircleUserRoundIcon', 'CircleX', 'CircleXIcon', 'CircuitBoard', 'CircuitBoardIcon', 'Citrus', 'CitrusIcon', 'Clapperboard', 'ClapperboardIcon', 'Clipboard', 'ClipboardCheck', 'ClipboardCheckIcon', 'ClipboardClock', 'ClipboardClockIcon', 'ClipboardCopy', 'ClipboardCopyIcon', 'ClipboardEdit', 'ClipboardEditIcon', 'ClipboardIcon', 'ClipboardList', 'ClipboardListIcon', 'ClipboardMinus', 'ClipboardMinusIcon', 'ClipboardPaste', 'ClipboardPasteIcon', 'ClipboardPen', 'ClipboardPenIcon', 'ClipboardPenLine', 'ClipboardPenLineIcon', 'ClipboardPlus', 'ClipboardPlusIcon', 'ClipboardSignature', 'ClipboardSignatureIcon', 'ClipboardType', 'ClipboardTypeIcon', 'ClipboardX', 'ClipboardXIcon', 'Clock', 'Clock1', 'Clock10', 'Clock10Icon', 'Clock11', 'Clock11Icon', 'Clock12', 'Clock12Icon', 'Clock1Icon', 'Clock2', 'Clock2Icon', 'Clock3', 'Clock3Icon', 'Clock4', 'Clock4Icon', 'Clock5', 'Clock5Icon', 'Clock6', 'Clock6Icon', 'Clock7', 'Clock7Icon', 'Clock8', 'Clock8Icon', 'Clock9', 'Clock9Icon', 'ClockAlert', 'ClockAlertIcon', 'ClockArrowDown', 'ClockArrowDownIcon', 'ClockArrowUp', 'ClockArrowUpIcon', 'ClockCheck', 'ClockCheckIcon', 'ClockFading', 'ClockFadingIcon', 'ClockIcon', 'ClockPlus', 'ClockPlusIcon', 'ClosedCaption', 'ClosedCaptionIcon', 'Cloud', 'CloudAlert', 'CloudAlertIcon', 'CloudBackup', 'CloudBackupIcon', 'CloudCheck', 'CloudCheckIcon', 'CloudCog', 'CloudCogIcon', 'CloudDownload', 'CloudDownloadIcon', 'CloudDrizzle', 'CloudDrizzleIcon', 'CloudFog', 'CloudFogIcon', 'CloudHail', 'CloudHailIcon', 'CloudIcon', 'CloudLightning', 'CloudLightningIcon', 'CloudMoon', 'CloudMoonIcon', 'CloudMoonRain', 'CloudMoonRainIcon', 'CloudOff', 'CloudOffIcon', 'CloudRain', 'CloudRainIcon', 'CloudRainWind', 'CloudRainWindIcon', 'CloudSnow', 'CloudSnowIcon', 'CloudSun', 'CloudSunIcon', 'CloudSunRain', 'CloudSunRainIcon', 'CloudSync', 'CloudSyncIcon', 'CloudUpload', 'CloudUploadIcon', 'Cloudy', 'CloudyIcon', 'Clover', 'CloverIcon', 'Club', 'ClubIcon', 'Code', 'Code2', 'Code2Icon', 'CodeIcon', 'CodeSquare', 'CodeSquareIcon', 'CodeXml', 'CodeXmlIcon', 'Codepen', 'CodepenIcon', 'Codesandbox', 'CodesandboxIcon', 'Coffee', 'CoffeeIcon', 'Cog', 'CogIcon', 'Coins', 'CoinsIcon', 'Columns', 'Columns2', 'Columns2Icon', 'Columns3', 'Columns3Cog', 'Columns3CogIcon', 'Columns3Icon', 'Columns4', 'Columns4Icon', 'ColumnsIcon', 'ColumnsSettings', 'ColumnsSettingsIcon', 'Combine', 'CombineIcon', 'Command', 'CommandIcon', 'Compass', 'CompassIcon', 'Component', 'ComponentIcon', 'Computer', 'ComputerIcon', 'ConciergeBell', 'ConciergeBellIcon', 'Cone', 'ConeIcon', 'Construction', 'ConstructionIcon', 'Contact', 'Contact2', 'Contact2Icon', 'ContactIcon', 'ContactRound', 'ContactRoundIcon', 'Container', 'ContainerIcon', 'Contrast', 'ContrastIcon', 'Cookie', 'CookieIcon', 'CookingPot', 'CookingPotIcon', 'Copy', 'CopyCheck', 'CopyCheckIcon', 'CopyIcon', 'CopyMinus', 'CopyMinusIcon', 'CopyPlus', 'CopyPlusIcon', 'CopySlash', 'CopySlashIcon', 'CopyX', 'CopyXIcon', 'Copyleft', 'CopyleftIcon', 'Copyright', 'CopyrightIcon', 'CornerDownLeft', 'CornerDownLeftIcon', 'CornerDownRight', 'CornerDownRightIcon', 'CornerLeftDown', 'CornerLeftDownIcon', 'CornerLeftUp', 'CornerLeftUpIcon', 'CornerRightDown', 'CornerRightDownIcon', 'CornerRightUp', 'CornerRightUpIcon', 'CornerUpLeft', 'CornerUpLeftIcon', 'CornerUpRight', 'CornerUpRightIcon', 'Cpu', 'CpuIcon', 'CreativeCommons', 'CreativeCommonsIcon', 'CreditCard', 'CreditCardIcon', 'Croissant', 'CroissantIcon', 'Crop', 'CropIcon', 'Cross', 'CrossIcon', 'Crosshair', 'CrosshairIcon', 'Crown', 'CrownIcon', 'Cuboid', 'CuboidIcon', 'CupSoda', 'CupSodaIcon', 'CurlyBraces', 'CurlyBracesIcon', 'Currency', 'CurrencyIcon', 'Cylinder', 'CylinderIcon', 'Dam', 'DamIcon', 'Database', 'DatabaseBackup', 'DatabaseBackupIcon', 'DatabaseIcon', 'DatabaseZap', 'DatabaseZapIcon', 'DecimalsArrowLeft', 'DecimalsArrowLeftIcon', 'DecimalsArrowRight', 'DecimalsArrowRightIcon', 'Delete', 'DeleteIcon', 'Dessert', 'DessertIcon', 'Diameter', 'DiameterIcon', 'Diamond', 'DiamondIcon', 'DiamondMinus', 'DiamondMinusIcon', 'DiamondPercent', 'DiamondPercentIcon', 'DiamondPlus', 'DiamondPlusIcon', 'Dice1', 'Dice1Icon', 'Dice2', 'Dice2Icon', 'Dice3', 'Dice3Icon', 'Dice4', 'Dice4Icon', 'Dice5', 'Dice5Icon', 'Dice6', 'Dice6Icon', 'Dices', 'DicesIcon', 'Diff', 'DiffIcon', 'Disc', 'Disc2', 'Disc2Icon', 'Disc3', 'Disc3Icon', 'DiscAlbum', 'DiscAlbumIcon', 'DiscIcon', 'Divide', 'DivideCircle', 'DivideCircleIcon', 'DivideIcon', 'DivideSquare', 'DivideSquareIcon', 'Dna', 'DnaIcon', 'DnaOff', 'DnaOffIcon', 'Dock', 'DockIcon', 'Dog', 'DogIcon', 'DollarSign', 'DollarSignIcon', 'Donut', 'DonutIcon', 'DoorClosed', 'DoorClosedIcon', 'DoorClosedLocked', 'DoorClosedLockedIcon', 'DoorOpen', 'DoorOpenIcon', 'Dot', 'DotIcon', 'DotSquare', 'DotSquareIcon', 'Download', 'DownloadCloud', 'DownloadCloudIcon', 'DownloadIcon', 'DraftingCompass', 'DraftingCompassIcon', 'Drama', 'DramaIcon', 'Dribbble', 'DribbbleIcon', 'Drill', 'DrillIcon', 'Drone', 'DroneIcon', 'Droplet', 'DropletIcon', 'DropletOff', 'DropletOffIcon', 'Droplets', 'DropletsIcon', 'Drum', 'DrumIcon', 'Drumstick', 'DrumstickIcon', 'Dumbbell', 'DumbbellIcon', 'Ear', 'EarIcon', 'EarOff', 'EarOffIcon', 'Earth', 'EarthIcon', 'EarthLock', 'EarthLockIcon', 'Eclipse', 'EclipseIcon', 'Edit', 'Edit2', 'Edit2Icon', 'Edit3', 'Edit3Icon', 'EditIcon', 'Egg', 'EggFried', 'EggFriedIcon', 'EggIcon', 'EggOff', 'EggOffIcon', 'Ellipsis', 'EllipsisIcon', 'EllipsisVertical', 'EllipsisVerticalIcon', 'Equal', 'EqualApproximately', 'EqualApproximatelyIcon', 'EqualIcon', 'EqualNot', 'EqualNotIcon', 'EqualSquare', 'EqualSquareIcon', 'Eraser', 'EraserIcon', 'EthernetPort', 'EthernetPortIcon', 'Euro', 'EuroIcon', 'EvCharger', 'EvChargerIcon', 'Expand', 'ExpandIcon', 'ExternalLink', 'ExternalLinkIcon', 'Eye', 'EyeClosed', 'EyeClosedIcon', 'EyeIcon', 'EyeOff', 'EyeOffIcon', 'Facebook', 'FacebookIcon', 'Factory', 'FactoryIcon', 'Fan', 'FanIcon', 'FastForward', 'FastForwardIcon', 'Feather', 'FeatherIcon', 'Fence', 'FenceIcon', 'FerrisWheel', 'FerrisWheelIcon', 'Figma', 'FigmaIcon', 'File', 'FileArchive', 'FileArchiveIcon', 'FileAudio', 'FileAudio2', 'FileAudio2Icon', 'FileAudioIcon', 'FileAxis3D', 'FileAxis3DIcon', 'FileAxis3d', 'FileAxis3dIcon', 'FileBadge', 'FileBadge2', 'FileBadge2Icon', 'FileBadgeIcon', 'FileBarChart', 'FileBarChart2', 'FileBarChart2Icon', 'FileBarChartIcon', 'FileBox', 'FileBoxIcon', 'FileBraces', 'FileBracesCorner', 'FileBracesCornerIcon', 'FileBracesIcon', 'FileChartColumn', 'FileChartColumnIcon', 'FileChartColumnIncreasing', 'FileChartColumnIncreasingIcon', 'FileChartLine', 'FileChartLineIcon', 'FileChartPie', 'FileChartPieIcon', 'FileCheck', 'FileCheck2', 'FileCheck2Icon', 'FileCheckCorner', 'FileCheckCornerIcon', 'FileCheckIcon', 'FileClock', 'FileClockIcon', 'FileCode', 'FileCode2', 'FileCode2Icon', 'FileCodeCorner', 'FileCodeCornerIcon', 'FileCodeIcon', 'FileCog', 'FileCog2', 'FileCog2Icon', 'FileCogIcon', 'FileDiff', 'FileDiffIcon', 'FileDigit', 'FileDigitIcon', 'FileDown', 'FileDownIcon', 'FileEdit', 'FileEditIcon', 'FileExclamationPoint', 'FileExclamationPointIcon', 'FileHeadphone', 'FileHeadphoneIcon', 'FileHeart', 'FileHeartIcon', 'FileIcon', 'FileImage', 'FileImageIcon', 'FileInput', 'FileInputIcon', 'FileJson', 'FileJson2', 'FileJson2Icon', 'FileJsonIcon', 'FileKey', 'FileKey2', 'FileKey2Icon', 'FileKeyIcon', 'FileLineChart', 'FileLineChartIcon', 'FileLock', 'FileLock2', 'FileLock2Icon', 'FileLockIcon', 'FileMinus', 'FileMinus2', 'FileMinus2Icon', 'FileMinusCorner', 'FileMinusCornerIcon', 'FileMinusIcon', 'FileMusic', 'FileMusicIcon', 'FileOutput', 'FileOutputIcon', 'FilePen', 'FilePenIcon', 'FilePenLine', 'FilePenLineIcon', 'FilePieChart', 'FilePieChartIcon', 'FilePlay', 'FilePlayIcon', 'FilePlus', 'FilePlus2', 'FilePlus2Icon', 'FilePlusCorner', 'FilePlusCornerIcon', 'FilePlusIcon', 'FileQuestion', 'FileQuestionIcon', 'FileQuestionMark', 'FileQuestionMarkIcon', 'FileScan', 'FileScanIcon', 'FileSearch', 'FileSearch2', 'FileSearch2Icon', 'FileSearchCorner', 'FileSearchCornerIcon', 'FileSearchIcon', 'FileSignal', 'FileSignalIcon', 'FileSignature', 'FileSignatureIcon', 'FileSliders', 'FileSlidersIcon', 'FileSpreadsheet', 'FileSpreadsheetIcon', 'FileStack', 'FileStackIcon', 'FileSymlink', 'FileSymlinkIcon', 'FileTerminal', 'FileTerminalIcon', 'FileText', 'FileTextIcon', 'FileType', 'FileType2', 'FileType2Icon', 'FileTypeCorner', 'FileTypeCornerIcon', 'FileTypeIcon', 'FileUp', 'FileUpIcon', 'FileUser', 'FileUserIcon', 'FileVideo', 'FileVideo2', 'FileVideo2Icon', 'FileVideoCamera', 'FileVideoCameraIcon', 'FileVideoIcon', 'FileVolume', 'FileVolume2', 'FileVolume2Icon', 'FileVolumeIcon', 'FileWarning', 'FileWarningIcon', 'FileX', 'FileX2', 'FileX2Icon', 'FileXCorner', 'FileXCornerIcon', 'FileXIcon', 'Files', 'FilesIcon', 'Film', 'FilmIcon', 'Filter', 'FilterIcon', 'FilterX', 'FilterXIcon', 'Fingerprint', 'FingerprintIcon', 'FingerprintPattern', 'FingerprintPatternIcon', 'FireExtinguisher', 'FireExtinguisherIcon', 'Fish', 'FishIcon', 'FishOff', 'FishOffIcon', 'FishSymbol', 'FishSymbolIcon', 'FishingHook', 'FishingHookIcon', 'Flag', 'FlagIcon', 'FlagOff', 'FlagOffIcon', 'FlagTriangleLeft', 'FlagTriangleLeftIcon', 'FlagTriangleRight', 'FlagTriangleRightIcon', 'Flame', 'FlameIcon', 'FlameKindling', 'FlameKindlingIcon', 'Flashlight', 'FlashlightIcon', 'FlashlightOff', 'FlashlightOffIcon', 'FlaskConical', 'FlaskConicalIcon', 'FlaskConicalOff', 'FlaskConicalOffIcon', 'FlaskRound', 'FlaskRoundIcon', 'FlipHorizontal', 'FlipHorizontal2', 'FlipHorizontal2Icon', 'FlipHorizontalIcon', 'FlipVertical', 'FlipVertical2', 'FlipVertical2Icon', 'FlipVerticalIcon', 'Flower', 'Flower2', 'Flower2Icon', 'FlowerIcon', 'Focus', 'FocusIcon', 'FoldHorizontal', 'FoldHorizontalIcon', 'FoldVertical', 'FoldVerticalIcon', 'Folder', 'FolderArchive', 'FolderArchiveIcon', 'FolderCheck', 'FolderCheckIcon', 'FolderClock', 'FolderClockIcon', 'FolderClosed', 'FolderClosedIcon', 'FolderCode', 'FolderCodeIcon', 'FolderCog', 'FolderCog2', 'FolderCog2Icon', 'FolderCogIcon', 'FolderDot', 'FolderDotIcon', 'FolderDown', 'FolderDownIcon', 'FolderEdit', 'FolderEditIcon', 'FolderGit', 'FolderGit2', 'FolderGit2Icon', 'FolderGitIcon', 'FolderHeart', 'FolderHeartIcon', 'FolderIcon', 'FolderInput', 'FolderInputIcon', 'FolderKanban', 'FolderKanbanIcon', 'FolderKey', 'FolderKeyIcon', 'FolderLock', 'FolderLockIcon', 'FolderMinus', 'FolderMinusIcon', 'FolderOpen', 'FolderOpenDot', 'FolderOpenDotIcon', 'FolderOpenIcon', 'FolderOutput', 'FolderOutputIcon', 'FolderPen', 'FolderPenIcon', 'FolderPlus', 'FolderPlusIcon', 'FolderRoot', 'FolderRootIcon', 'FolderSearch', 'FolderSearch2', 'FolderSearch2Icon', 'FolderSearchIcon', 'FolderSymlink', 'FolderSymlinkIcon', 'FolderSync', 'FolderSyncIcon', 'FolderTree', 'FolderTreeIcon', 'FolderUp', 'FolderUpIcon', 'FolderX', 'FolderXIcon', 'Folders', 'FoldersIcon', 'Footprints', 'FootprintsIcon', 'ForkKnife', 'ForkKnifeCrossed', 'ForkKnifeCrossedIcon', 'ForkKnifeIcon', 'Forklift', 'ForkliftIcon', 'Form', 'FormIcon', 'FormInput', 'FormInputIcon', 'Forward', 'ForwardIcon', 'Frame', 'FrameIcon', 'Framer', 'FramerIcon', 'Frown', 'FrownIcon', 'Fuel', 'FuelIcon', 'Fullscreen', 'FullscreenIcon', 'FunctionSquare', 'FunctionSquareIcon', 'Funnel', 'FunnelIcon', 'FunnelPlus', 'FunnelPlusIcon', 'FunnelX', 'FunnelXIcon', 'GalleryHorizontal', 'GalleryHorizontalEnd', 'GalleryHorizontalEndIcon', 'GalleryHorizontalIcon', 'GalleryThumbnails', 'GalleryThumbnailsIcon', 'GalleryVertical', 'GalleryVerticalEnd', 'GalleryVerticalEndIcon', 'GalleryVerticalIcon', 'Gamepad', 'Gamepad2', 'Gamepad2Icon', 'GamepadDirectional', 'GamepadDirectionalIcon', 'GamepadIcon', 'GanttChart', 'GanttChartIcon', 'GanttChartSquare', 'GanttChartSquareIcon', 'Gauge', 'GaugeCircle', 'GaugeCircleIcon', 'GaugeIcon', 'Gavel', 'GavelIcon', 'Gem', 'GemIcon', 'GeorgianLari', 'GeorgianLariIcon', 'Ghost', 'GhostIcon', 'Gift', 'GiftIcon', 'GitBranch', 'GitBranchIcon', 'GitBranchMinus', 'GitBranchMinusIcon', 'GitBranchPlus', 'GitBranchPlusIcon', 'GitCommit', 'GitCommitHorizontal', 'GitCommitHorizontalIcon', 'GitCommitIcon', 'GitCommitVertical', 'GitCommitVerticalIcon', 'GitCompare', 'GitCompareArrows', 'GitCompareArrowsIcon', 'GitCompareIcon', 'GitFork', 'GitForkIcon', 'GitGraph', 'GitGraphIcon', 'GitMerge', 'GitMergeIcon', 'GitPullRequest', 'GitPullRequestArrow', 'GitPullRequestArrowIcon', 'GitPullRequestClosed', 'GitPullRequestClosedIcon', 'GitPullRequestCreate', 'GitPullRequestCreateArrow', 'GitPullRequestCreateArrowIcon', 'GitPullRequestCreateIcon', 'GitPullRequestDraft', 'GitPullRequestDraftIcon', 'GitPullRequestIcon', 'Github', 'GithubIcon', 'Gitlab', 'GitlabIcon', 'GlassWater', 'GlassWaterIcon', 'Glasses', 'GlassesIcon', 'Globe', 'Globe2', 'Globe2Icon', 'GlobeIcon', 'GlobeLock', 'GlobeLockIcon', 'GlobeX', 'GlobeXIcon', 'Goal', 'GoalIcon', 'Gpu', 'GpuIcon', 'Grab', 'GrabIcon', 'GraduationCap', 'GraduationCapIcon', 'Grape', 'GrapeIcon', 'Grid', 'Grid2X2', 'Grid2X2Check', 'Grid2X2CheckIcon', 'Grid2X2Icon', 'Grid2X2Plus', 'Grid2X2PlusIcon', 'Grid2X2X', 'Grid2X2XIcon', 'Grid2x2', 'Grid2x2Check', 'Grid2x2CheckIcon', 'Grid2x2Icon', 'Grid2x2Plus', 'Grid2x2PlusIcon', 'Grid2x2X', 'Grid2x2XIcon', 'Grid3X3', 'Grid3X3Icon', 'Grid3x2', 'Grid3x2Icon', 'Grid3x3', 'Grid3x3Icon', 'GridIcon', 'Grip', 'GripHorizontal', 'GripHorizontalIcon', 'GripIcon', 'GripVertical', 'GripVerticalIcon', 'Group', 'GroupIcon', 'Guitar', 'GuitarIcon', 'Ham', 'HamIcon', 'Hamburger', 'HamburgerIcon', 'Hammer', 'HammerIcon', 'Hand', 'HandCoins', 'HandCoinsIcon', 'HandFist', 'HandFistIcon', 'HandGrab', 'HandGrabIcon', 'HandHeart', 'HandHeartIcon', 'HandHelping', 'HandHelpingIcon', 'HandIcon', 'HandMetal', 'HandMetalIcon', 'HandPlatter', 'HandPlatterIcon', 'Handbag', 'HandbagIcon', 'Handshake', 'HandshakeIcon', 'HardDrive', 'HardDriveDownload', 'HardDriveDownloadIcon', 'HardDriveIcon', 'HardDriveUpload', 'HardDriveUploadIcon', 'HardHat', 'HardHatIcon', 'Hash', 'HashIcon', 'HatGlasses', 'HatGlassesIcon', 'Haze', 'HazeIcon', 'Hd', 'HdIcon', 'HdmiPort', 'HdmiPortIcon', 'Heading', 'Heading1', 'Heading1Icon', 'Heading2', 'Heading2Icon', 'Heading3', 'Heading3Icon', 'Heading4', 'Heading4Icon', 'Heading5', 'Heading5Icon', 'Heading6', 'Heading6Icon', 'HeadingIcon', 'HeadphoneOff', 'HeadphoneOffIcon', 'Headphones', 'HeadphonesIcon', 'Headset', 'HeadsetIcon', 'Heart', 'HeartCrack', 'HeartCrackIcon', 'HeartHandshake', 'HeartHandshakeIcon', 'HeartIcon', 'HeartMinus', 'HeartMinusIcon', 'HeartOff', 'HeartOffIcon', 'HeartPlus', 'HeartPlusIcon', 'HeartPulse', 'HeartPulseIcon', 'Heater', 'HeaterIcon', 'Helicopter', 'HelicopterIcon', 'HelpCircle', 'HelpCircleIcon', 'HelpingHand', 'HelpingHandIcon', 'Hexagon', 'HexagonIcon', 'Highlighter', 'HighlighterIcon', 'History', 'HistoryIcon', 'Home', 'HomeIcon', 'Hop', 'HopIcon', 'HopOff', 'HopOffIcon', 'Hospital', 'HospitalIcon', 'Hotel', 'HotelIcon', 'Hourglass', 'HourglassIcon', 'House', 'HouseHeart', 'HouseHeartIcon', 'HouseIcon', 'HousePlug', 'HousePlugIcon', 'HousePlus', 'HousePlusIcon', 'HouseWifi', 'HouseWifiIcon', 'IceCream', 'IceCream2', 'IceCream2Icon', 'IceCreamBowl', 'IceCreamBowlIcon', 'IceCreamCone', 'IceCreamConeIcon', 'IceCreamIcon', 'Icon', 'IdCard', 'IdCardIcon', 'IdCardLanyard', 'IdCardLanyardIcon', 'Image', 'ImageDown', 'ImageDownIcon', 'ImageIcon', 'ImageMinus', 'ImageMinusIcon', 'ImageOff', 'ImageOffIcon', 'ImagePlay', 'ImagePlayIcon', 'ImagePlus', 'ImagePlusIcon', 'ImageUp', 'ImageUpIcon', 'ImageUpscale', 'ImageUpscaleIcon', 'Images', 'ImagesIcon', 'Import', 'ImportIcon', 'Inbox', 'InboxIcon', 'Indent', 'IndentDecrease', 'IndentDecreaseIcon', 'IndentIcon', 'IndentIncrease', 'IndentIncreaseIcon', 'IndianRupee', 'IndianRupeeIcon', 'Infinity', 'InfinityIcon', 'Info', 'InfoIcon', 'Inspect', 'InspectIcon', 'InspectionPanel', 'InspectionPanelIcon', 'Instagram', 'InstagramIcon', 'Italic', 'ItalicIcon', 'IterationCcw', 'IterationCcwIcon', 'IterationCw', 'IterationCwIcon', 'JapaneseYen', 'JapaneseYenIcon', 'Joystick', 'JoystickIcon', 'Kanban', 'KanbanIcon', 'KanbanSquare', 'KanbanSquareDashed', 'KanbanSquareDashedIcon', 'KanbanSquareIcon', 'Kayak', 'KayakIcon', 'Key', 'KeyIcon', 'KeyRound', 'KeyRoundIcon', 'KeySquare', 'KeySquareIcon', 'Keyboard', 'KeyboardIcon', 'KeyboardMusic', 'KeyboardMusicIcon', 'KeyboardOff', 'KeyboardOffIcon', 'Lamp', 'LampCeiling', 'LampCeilingIcon', 'LampDesk', 'LampDeskIcon', 'LampFloor', 'LampFloorIcon', 'LampIcon', 'LampWallDown', 'LampWallDownIcon', 'LampWallUp', 'LampWallUpIcon', 'LandPlot', 'LandPlotIcon', 'Landmark', 'LandmarkIcon', 'Languages', 'LanguagesIcon', 'Laptop', 'Laptop2', 'Laptop2Icon', 'LaptopIcon', 'LaptopMinimal', 'LaptopMinimalCheck', 'LaptopMinimalCheckIcon', 'LaptopMinimalIcon', 'Lasso', 'LassoIcon', 'LassoSelect', 'LassoSelectIcon', 'Laugh', 'LaughIcon', 'Layers', 'Layers2', 'Layers2Icon', 'Layers3', 'Layers3Icon', 'LayersIcon', 'LayersPlus', 'LayersPlusIcon', 'Layout', 'LayoutDashboard', 'LayoutDashboardIcon', 'LayoutGrid', 'LayoutGridIcon', 'LayoutIcon', 'LayoutList', 'LayoutListIcon', 'LayoutPanelLeft', 'LayoutPanelLeftIcon', 'LayoutPanelTop', 'LayoutPanelTopIcon', 'LayoutTemplate', 'LayoutTemplateIcon', 'Leaf', 'LeafIcon', 'LeafyGreen', 'LeafyGreenIcon', 'Lectern', 'LecternIcon', 'LetterText', 'LetterTextIcon', 'Library', 'LibraryBig', 'LibraryBigIcon', 'LibraryIcon', 'LibrarySquare', 'LibrarySquareIcon', 'LifeBuoy', 'LifeBuoyIcon', 'Ligature', 'LigatureIcon', 'Lightbulb', 'LightbulbIcon', 'LightbulbOff', 'LightbulbOffIcon', 'LineChart', 'LineChartIcon', 'LineSquiggle', 'LineSquiggleIcon', 'Link', 'Link2', 'Link2Icon', 'Link2Off', 'Link2OffIcon', 'LinkIcon', 'Linkedin', 'LinkedinIcon', 'List', 'ListCheck', 'ListCheckIcon', 'ListChecks', 'ListChecksIcon', 'ListChevronsDownUp', 'ListChevronsDownUpIcon', 'ListChevronsUpDown', 'ListChevronsUpDownIcon', 'ListCollapse', 'ListCollapseIcon', 'ListEnd', 'ListEndIcon', 'ListFilter', 'ListFilterIcon', 'ListFilterPlus', 'ListFilterPlusIcon', 'ListIcon', 'ListIndentDecrease', 'ListIndentDecreaseIcon', 'ListIndentIncrease', 'ListIndentIncreaseIcon', 'ListMinus', 'ListMinusIcon', 'ListMusic', 'ListMusicIcon', 'ListOrdered', 'ListOrderedIcon', 'ListPlus', 'ListPlusIcon', 'ListRestart', 'ListRestartIcon', 'ListStart', 'ListStartIcon', 'ListTodo', 'ListTodoIcon', 'ListTree', 'ListTreeIcon', 'ListVideo', 'ListVideoIcon', 'ListX', 'ListXIcon', 'Loader', 'Loader2', 'Loader2Icon', 'LoaderCircle', 'LoaderCircleIcon', 'LoaderIcon', 'LoaderPinwheel', 'LoaderPinwheelIcon', 'Locate', 'LocateFixed', 'LocateFixedIcon', 'LocateIcon', 'LocateOff', 'LocateOffIcon', 'LocationEdit', 'LocationEditIcon', 'Lock', 'LockIcon', 'LockKeyhole', 'LockKeyholeIcon', 'LockKeyholeOpen', 'LockKeyholeOpenIcon', 'LockOpen', 'LockOpenIcon', 'LogIn', 'LogInIcon', 'LogOut', 'LogOutIcon', 'Logs', 'LogsIcon', 'Lollipop', 'LollipopIcon', 'LucideAArrowDown', 'LucideAArrowUp', 'LucideALargeSmall', 'LucideAccessibility', 'LucideActivity', 'LucideActivitySquare', 'LucideAirVent', 'LucideAirplay', 'LucideAlarmCheck', 'LucideAlarmClock', 'LucideAlarmClockCheck', 'LucideAlarmClockMinus', 'LucideAlarmClockOff', 'LucideAlarmClockPlus', 'LucideAlarmMinus', 'LucideAlarmPlus', 'LucideAlarmSmoke', 'LucideAlbum', 'LucideAlertCircle', 'LucideAlertOctagon', 'LucideAlertTriangle', 'LucideAlignCenter', 'LucideAlignCenterHorizontal', 'LucideAlignCenterVertical', 'LucideAlignEndHorizontal', 'LucideAlignEndVertical', 'LucideAlignHorizontalDistributeCenter', 'LucideAlignHorizontalDistributeEnd', 'LucideAlignHorizontalDistributeStart', 'LucideAlignHorizontalJustifyCenter', 'LucideAlignHorizontalJustifyEnd', 'LucideAlignHorizontalJustifyStart', 'LucideAlignHorizontalSpaceAround', 'LucideAlignHorizontalSpaceBetween', 'LucideAlignJustify', 'LucideAlignLeft', 'LucideAlignRight', 'LucideAlignStartHorizontal', 'LucideAlignStartVertical', 'LucideAlignVerticalDistributeCenter', 'LucideAlignVerticalDistributeEnd', 'LucideAlignVerticalDistributeStart', 'LucideAlignVerticalJustifyCenter', 'LucideAlignVerticalJustifyEnd', 'LucideAlignVerticalJustifyStart', 'LucideAlignVerticalSpaceAround', 'LucideAlignVerticalSpaceBetween', 'LucideAmbulance', 'LucideAmpersand', 'LucideAmpersands', 'LucideAmphora', 'LucideAnchor', 'LucideAngry', 'LucideAnnoyed', 'LucideAntenna', 'LucideAnvil', 'LucideAperture', 'LucideAppWindow', 'LucideAppWindowMac', 'LucideApple', 'LucideArchive', 'LucideArchiveRestore', 'LucideArchiveX', 'LucideAreaChart', 'LucideArmchair', 'LucideArrowBigDown', 'LucideArrowBigDownDash', 'LucideArrowBigLeft', 'LucideArrowBigLeftDash', 'LucideArrowBigRight', 'LucideArrowBigRightDash', 'LucideArrowBigUp', 'LucideArrowBigUpDash', 'LucideArrowDown', 'LucideArrowDown01', 'LucideArrowDown10', 'LucideArrowDownAZ', 'LucideArrowDownAz', 'LucideArrowDownCircle', 'LucideArrowDownFromLine', 'LucideArrowDownLeft', 'LucideArrowDownLeftFromCircle', 'LucideArrowDownLeftFromSquare', 'LucideArrowDownLeftSquare', 'LucideArrowDownNarrowWide', 'LucideArrowDownRight', 'LucideArrowDownRightFromCircle', 'LucideArrowDownRightFromSquare', 'LucideArrowDownRightSquare', 'LucideArrowDownSquare', 'LucideArrowDownToDot', 'LucideArrowDownToLine', 'LucideArrowDownUp', 'LucideArrowDownWideNarrow', 'LucideArrowDownZA', 'LucideArrowDownZa', 'LucideArrowLeft', 'LucideArrowLeftCircle', 'LucideArrowLeftFromLine', 'LucideArrowLeftRight', 'LucideArrowLeftSquare', 'LucideArrowLeftToLine', 'LucideArrowRight', 'LucideArrowRightCircle', 'LucideArrowRightFromLine', 'LucideArrowRightLeft', 'LucideArrowRightSquare', 'LucideArrowRightToLine', 'LucideArrowUp', 'LucideArrowUp01', 'LucideArrowUp10', 'LucideArrowUpAZ', 'LucideArrowUpAz', 'LucideArrowUpCircle', 'LucideArrowUpDown', 'LucideArrowUpFromDot', 'LucideArrowUpFromLine', 'LucideArrowUpLeft', 'LucideArrowUpLeftFromCircle', 'LucideArrowUpLeftFromSquare', 'LucideArrowUpLeftSquare', 'LucideArrowUpNarrowWide', 'LucideArrowUpRight', 'LucideArrowUpRightFromCircle', 'LucideArrowUpRightFromSquare', 'LucideArrowUpRightSquare', 'LucideArrowUpSquare', 'LucideArrowUpToLine', 'LucideArrowUpWideNarrow', 'LucideArrowUpZA', 'LucideArrowUpZa', 'LucideArrowsUpFromLine', 'LucideAsterisk', 'LucideAsteriskSquare', 'LucideAtSign', 'LucideAtom', 'LucideAudioLines', 'LucideAudioWaveform', 'LucideAward', 'LucideAxe', 'LucideAxis3D', 'LucideAxis3d', 'LucideBaby', 'LucideBackpack', 'LucideBadge', 'LucideBadgeAlert', 'LucideBadgeCent', 'LucideBadgeCheck', 'LucideBadgeDollarSign', 'LucideBadgeEuro', 'LucideBadgeHelp', 'LucideBadgeIndianRupee', 'LucideBadgeInfo', 'LucideBadgeJapaneseYen', 'LucideBadgeMinus', 'LucideBadgePercent', 'LucideBadgePlus', 'LucideBadgePoundSterling', 'LucideBadgeQuestionMark', 'LucideBadgeRussianRuble', 'LucideBadgeSwissFranc', 'LucideBadgeTurkishLira', 'LucideBadgeX', 'LucideBaggageClaim', 'LucideBalloon', 'LucideBan', 'LucideBanana', 'LucideBandage', 'LucideBanknote', 'LucideBanknoteArrowDown', 'LucideBanknoteArrowUp', 'LucideBanknoteX', 'LucideBarChart', 'LucideBarChart2', 'LucideBarChart3', 'LucideBarChart4', 'LucideBarChartBig', 'LucideBarChartHorizontal', 'LucideBarChartHorizontalBig', 'LucideBarcode', 'LucideBarrel', 'LucideBaseline', 'LucideBath', 'LucideBattery', 'LucideBatteryCharging', 'LucideBatteryFull', 'LucideBatteryLow', 'LucideBatteryMedium', 'LucideBatteryPlus', 'LucideBatteryWarning', 'LucideBeaker', 'LucideBean', 'LucideBeanOff', 'LucideBed', 'LucideBedDouble', 'LucideBedSingle', 'LucideBeef', 'LucideBeer', 'LucideBeerOff', 'LucideBell', 'LucideBellDot', 'LucideBellElectric', 'LucideBellMinus', 'LucideBellOff', 'LucideBellPlus', 'LucideBellRing', 'LucideBetweenHorizonalEnd', 'LucideBetweenHorizonalStart', 'LucideBetweenHorizontalEnd', 'LucideBetweenHorizontalStart', 'LucideBetweenVerticalEnd', 'LucideBetweenVerticalStart', 'LucideBicepsFlexed', 'LucideBike', 'LucideBinary', 'LucideBinoculars', 'LucideBiohazard', 'LucideBird', 'LucideBirdhouse', 'LucideBitcoin', 'LucideBlend', 'LucideBlinds', 'LucideBlocks', 'LucideBluetooth', 'LucideBluetoothConnected', 'LucideBluetoothOff', 'LucideBluetoothSearching', 'LucideBold', 'LucideBolt', 'LucideBomb', 'LucideBone', 'LucideBook', 'LucideBookA', 'LucideBookAlert', 'LucideBookAudio', 'LucideBookCheck', 'LucideBookCopy', 'LucideBookDashed', 'LucideBookDown', 'LucideBookHeadphones', 'LucideBookHeart', 'LucideBookImage', 'LucideBookKey', 'LucideBookLock', 'LucideBookMarked', 'LucideBookMinus', 'LucideBookOpen', 'LucideBookOpenCheck', 'LucideBookOpenText', 'LucideBookPlus', 'LucideBookSearch', 'LucideBookTemplate', 'LucideBookText', 'LucideBookType', 'LucideBookUp', 'LucideBookUp2', 'LucideBookUser', 'LucideBookX', 'LucideBookmark', 'LucideBookmarkCheck', 'LucideBookmarkMinus', 'LucideBookmarkPlus', 'LucideBookmarkX', 'LucideBoomBox', 'LucideBot', 'LucideBotMessageSquare', 'LucideBotOff', 'LucideBottleWine', 'LucideBowArrow', 'LucideBox', 'LucideBoxSelect', 'LucideBoxes', 'LucideBraces', 'LucideBrackets', 'LucideBrain', 'LucideBrainCircuit', 'LucideBrainCog', 'LucideBrickWall', 'LucideBrickWallFire', 'LucideBrickWallShield', 'LucideBriefcase', 'LucideBriefcaseBusiness', 'LucideBriefcaseConveyorBelt', 'LucideBriefcaseMedical', 'LucideBringToFront', 'LucideBrush', 'LucideBrushCleaning', 'LucideBubbles', 'LucideBug', 'LucideBugOff', 'LucideBugPlay', 'LucideBuilding', 'LucideBuilding2', 'LucideBus', 'LucideBusFront', 'LucideCable', 'LucideCableCar', 'LucideCake', 'LucideCakeSlice', 'LucideCalculator', 'LucideCalendar', 'LucideCalendar1', 'LucideCalendarArrowDown', 'LucideCalendarArrowUp', 'LucideCalendarCheck', 'LucideCalendarCheck2', 'LucideCalendarClock', 'LucideCalendarCog', 'LucideCalendarDays', 'LucideCalendarFold', 'LucideCalendarHeart', 'LucideCalendarMinus', 'LucideCalendarMinus2', 'LucideCalendarOff', 'LucideCalendarPlus', 'LucideCalendarPlus2', 'LucideCalendarRange', 'LucideCalendarSearch', 'LucideCalendarSync', 'LucideCalendarX', 'LucideCalendarX2', 'LucideCalendars', 'LucideCamera', 'LucideCameraOff', 'LucideCandlestickChart', 'LucideCandy', 'LucideCandyCane', 'LucideCandyOff', 'LucideCannabis', 'LucideCannabisOff', 'LucideCaptions', 'LucideCaptionsOff', 'LucideCar', 'LucideCarFront', 'LucideCarTaxiFront', 'LucideCaravan', 'LucideCardSim', 'LucideCarrot', 'LucideCaseLower', 'LucideCaseSensitive', 'LucideCaseUpper', 'LucideCassetteTape', 'LucideCast', 'LucideCastle', 'LucideCat', 'LucideCctv', 'LucideChartArea', 'LucideChartBar', 'LucideChartBarBig', 'LucideChartBarDecreasing', 'LucideChartBarIncreasing', 'LucideChartBarStacked', 'LucideChartCandlestick', 'LucideChartColumn', 'LucideChartColumnBig', 'LucideChartColumnDecreasing', 'LucideChartColumnIncreasing', 'LucideChartColumnStacked', 'LucideChartGantt', 'LucideChartLine', 'LucideChartNetwork', 'LucideChartNoAxesColumn', 'LucideChartNoAxesColumnDecreasing', 'LucideChartNoAxesColumnIncreasing', 'LucideChartNoAxesCombined', 'LucideChartNoAxesGantt', 'LucideChartPie', 'LucideChartScatter', 'LucideChartSpline', 'LucideCheck', 'LucideCheckCheck', 'LucideCheckCircle', 'LucideCheckCircle2', 'LucideCheckLine', 'LucideCheckSquare', 'LucideCheckSquare2', 'LucideChefHat', 'LucideCherry', 'LucideChessBishop', 'LucideChessKing', 'LucideChessKnight', 'LucideChessPawn', 'LucideChessQueen', 'LucideChessRook', 'LucideChevronDown', 'LucideChevronDownCircle', 'LucideChevronDownSquare', 'LucideChevronFirst', 'LucideChevronLast', 'LucideChevronLeft', 'LucideChevronLeftCircle', 'LucideChevronLeftSquare', 'LucideChevronRight', 'LucideChevronRightCircle', 'LucideChevronRightSquare', 'LucideChevronUp', 'LucideChevronUpCircle', 'LucideChevronUpSquare', 'LucideChevronsDown', 'LucideChevronsDownUp', 'LucideChevronsLeft', 'LucideChevronsLeftRight', 'LucideChevronsLeftRightEllipsis', 'LucideChevronsRight', 'LucideChevronsRightLeft', 'LucideChevronsUp', 'LucideChevronsUpDown', 'LucideChrome', 'LucideChromium', 'LucideChurch', 'LucideCigarette', 'LucideCigaretteOff', 'LucideCircle', 'LucideCircleAlert', 'LucideCircleArrowDown', 'LucideCircleArrowLeft', 'LucideCircleArrowOutDownLeft', 'LucideCircleArrowOutDownRight', 'LucideCircleArrowOutUpLeft', 'LucideCircleArrowOutUpRight', 'LucideCircleArrowRight', 'LucideCircleArrowUp', 'LucideCircleCheck', 'LucideCircleCheckBig', 'LucideCircleChevronDown', 'LucideCircleChevronLeft', 'LucideCircleChevronRight', 'LucideCircleChevronUp', 'LucideCircleDashed', 'LucideCircleDivide', 'LucideCircleDollarSign', 'LucideCircleDot', 'LucideCircleDotDashed', 'LucideCircleEllipsis', 'LucideCircleEqual', 'LucideCircleFadingArrowUp', 'LucideCircleFadingPlus', 'LucideCircleGauge', 'LucideCircleHelp', 'LucideCircleMinus', 'LucideCircleOff', 'LucideCircleParking', 'LucideCircleParkingOff', 'LucideCirclePause', 'LucideCirclePercent', 'LucideCirclePile', 'LucideCirclePlay', 'LucideCirclePlus', 'LucideCirclePoundSterling', 'LucideCirclePower', 'LucideCircleQuestionMark', 'LucideCircleSlash', 'LucideCircleSlash2', 'LucideCircleSlashed', 'LucideCircleSmall', 'LucideCircleStar', 'LucideCircleStop', 'LucideCircleUser', 'LucideCircleUserRound', 'LucideCircleX', 'LucideCircuitBoard', 'LucideCitrus', 'LucideClapperboard', 'LucideClipboard', 'LucideClipboardCheck', 'LucideClipboardClock', 'LucideClipboardCopy', 'LucideClipboardEdit', 'LucideClipboardList', 'LucideClipboardMinus', 'LucideClipboardPaste', 'LucideClipboardPen', 'LucideClipboardPenLine', 'LucideClipboardPlus', 'LucideClipboardSignature', 'LucideClipboardType', 'LucideClipboardX', 'LucideClock', 'LucideClock1', 'LucideClock10', 'LucideClock11', 'LucideClock12', 'LucideClock2', 'LucideClock3', 'LucideClock4', 'LucideClock5', 'LucideClock6', 'LucideClock7', 'LucideClock8', 'LucideClock9', 'LucideClockAlert', 'LucideClockArrowDown', 'LucideClockArrowUp', 'LucideClockCheck', 'LucideClockFading', 'LucideClockPlus', 'LucideClosedCaption', 'LucideCloud', 'LucideCloudAlert', 'LucideCloudBackup', 'LucideCloudCheck', 'LucideCloudCog', 'LucideCloudDownload', 'LucideCloudDrizzle', 'LucideCloudFog', 'LucideCloudHail', 'LucideCloudLightning', 'LucideCloudMoon', 'LucideCloudMoonRain', 'LucideCloudOff', 'LucideCloudRain', 'LucideCloudRainWind', 'LucideCloudSnow', 'LucideCloudSun', 'LucideCloudSunRain', 'LucideCloudSync', 'LucideCloudUpload', 'LucideCloudy', 'LucideClover', 'LucideClub', 'LucideCode', 'LucideCode2', 'LucideCodeSquare', 'LucideCodeXml', 'LucideCodepen', 'LucideCodesandbox', 'LucideCoffee', 'LucideCog', 'LucideCoins', 'LucideColumns', 'LucideColumns2', 'LucideColumns3', 'LucideColumns3Cog', 'LucideColumns4', 'LucideColumnsSettings', 'LucideCombine', 'LucideCommand', 'LucideCompass', 'LucideComponent', 'LucideComputer', 'LucideConciergeBell', 'LucideCone', 'LucideConstruction', 'LucideContact', 'LucideContact2', 'LucideContactRound', 'LucideContainer', 'LucideContrast', 'LucideCookie', 'LucideCookingPot', 'LucideCopy', 'LucideCopyCheck', 'LucideCopyMinus', 'LucideCopyPlus', 'LucideCopySlash', 'LucideCopyX', 'LucideCopyleft', 'LucideCopyright', 'LucideCornerDownLeft', 'LucideCornerDownRight', 'LucideCornerLeftDown', 'LucideCornerLeftUp', 'LucideCornerRightDown', 'LucideCornerRightUp', 'LucideCornerUpLeft', 'LucideCornerUpRight', 'LucideCpu', 'LucideCreativeCommons', 'LucideCreditCard', 'LucideCroissant', 'LucideCrop', 'LucideCross', 'LucideCrosshair', 'LucideCrown', 'LucideCuboid', 'LucideCupSoda', 'LucideCurlyBraces', 'LucideCurrency', 'LucideCylinder', 'LucideDam', 'LucideDatabase', 'LucideDatabaseBackup', 'LucideDatabaseZap', 'LucideDecimalsArrowLeft', 'LucideDecimalsArrowRight', 'LucideDelete', 'LucideDessert', 'LucideDiameter', 'LucideDiamond', 'LucideDiamondMinus', 'LucideDiamondPercent', 'LucideDiamondPlus', 'LucideDice1', 'LucideDice2', 'LucideDice3', 'LucideDice4', 'LucideDice5', 'LucideDice6', 'LucideDices', 'LucideDiff', 'LucideDisc', 'LucideDisc2', 'LucideDisc3', 'LucideDiscAlbum', 'LucideDivide', 'LucideDivideCircle', 'LucideDivideSquare', 'LucideDna', 'LucideDnaOff', 'LucideDock', 'LucideDog', 'LucideDollarSign', 'LucideDonut', 'LucideDoorClosed', 'LucideDoorClosedLocked', 'LucideDoorOpen', 'LucideDot', 'LucideDotSquare', 'LucideDownload', 'LucideDownloadCloud', 'LucideDraftingCompass', 'LucideDrama', 'LucideDribbble', 'LucideDrill', 'LucideDrone', 'LucideDroplet', 'LucideDropletOff', 'LucideDroplets', 'LucideDrum', 'LucideDrumstick', 'LucideDumbbell', 'LucideEar', 'LucideEarOff', 'LucideEarth', 'LucideEarthLock', 'LucideEclipse', 'LucideEdit', 'LucideEdit2', 'LucideEdit3', 'LucideEgg', 'LucideEggFried', 'LucideEggOff', 'LucideEllipsis', 'LucideEllipsisVertical', 'LucideEqual', 'LucideEqualApproximately', 'LucideEqualNot', 'LucideEqualSquare', 'LucideEraser', 'LucideEthernetPort', 'LucideEuro', 'LucideEvCharger', 'LucideExpand', 'LucideExternalLink', 'LucideEye', 'LucideEyeClosed', 'LucideEyeOff', 'LucideFacebook', 'LucideFactory', 'LucideFan', 'LucideFastForward', 'LucideFeather', 'LucideFence', 'LucideFerrisWheel', 'LucideFigma', 'LucideFile', 'LucideFileArchive', 'LucideFileAudio', 'LucideFileAudio2', 'LucideFileAxis3D', 'LucideFileAxis3d', 'LucideFileBadge', 'LucideFileBadge2', 'LucideFileBarChart', 'LucideFileBarChart2', 'LucideFileBox', 'LucideFileBraces', 'LucideFileBracesCorner', 'LucideFileChartColumn', 'LucideFileChartColumnIncreasing', 'LucideFileChartLine', 'LucideFileChartPie', 'LucideFileCheck', 'LucideFileCheck2', 'LucideFileCheckCorner', 'LucideFileClock', 'LucideFileCode', 'LucideFileCode2', 'LucideFileCodeCorner', 'LucideFileCog', 'LucideFileCog2', 'LucideFileDiff', 'LucideFileDigit', 'LucideFileDown', 'LucideFileEdit', 'LucideFileExclamationPoint', 'LucideFileHeadphone', 'LucideFileHeart', 'LucideFileImage', 'LucideFileInput', 'LucideFileJson', 'LucideFileJson2', 'LucideFileKey', 'LucideFileKey2', 'LucideFileLineChart', 'LucideFileLock', 'LucideFileLock2', 'LucideFileMinus', 'LucideFileMinus2', 'LucideFileMinusCorner', 'LucideFileMusic', 'LucideFileOutput', 'LucideFilePen', 'LucideFilePenLine', 'LucideFilePieChart', 'LucideFilePlay', 'LucideFilePlus', 'LucideFilePlus2', 'LucideFilePlusCorner', 'LucideFileQuestion', 'LucideFileQuestionMark', 'LucideFileScan', 'LucideFileSearch', 'LucideFileSearch2', 'LucideFileSearchCorner', 'LucideFileSignal', 'LucideFileSignature', 'LucideFileSliders', 'LucideFileSpreadsheet', 'LucideFileStack', 'LucideFileSymlink', 'LucideFileTerminal', 'LucideFileText', 'LucideFileType', 'LucideFileType2', 'LucideFileTypeCorner', 'LucideFileUp', 'LucideFileUser', 'LucideFileVideo', 'LucideFileVideo2', 'LucideFileVideoCamera', 'LucideFileVolume', 'LucideFileVolume2', 'LucideFileWarning', 'LucideFileX', 'LucideFileX2', 'LucideFileXCorner', 'LucideFiles', 'LucideFilm', 'LucideFilter', 'LucideFilterX', 'LucideFingerprint', 'LucideFingerprintPattern', 'LucideFireExtinguisher', 'LucideFish', 'LucideFishOff', 'LucideFishSymbol', 'LucideFishingHook', 'LucideFlag', 'LucideFlagOff', 'LucideFlagTriangleLeft', 'LucideFlagTriangleRight', 'LucideFlame', 'LucideFlameKindling', 'LucideFlashlight', 'LucideFlashlightOff', 'LucideFlaskConical', 'LucideFlaskConicalOff', 'LucideFlaskRound', 'LucideFlipHorizontal', 'LucideFlipHorizontal2', 'LucideFlipVertical', 'LucideFlipVertical2', 'LucideFlower', 'LucideFlower2', 'LucideFocus', 'LucideFoldHorizontal', 'LucideFoldVertical', 'LucideFolder', 'LucideFolderArchive', 'LucideFolderCheck', 'LucideFolderClock', 'LucideFolderClosed', 'LucideFolderCode', 'LucideFolderCog', 'LucideFolderCog2', 'LucideFolderDot', 'LucideFolderDown', 'LucideFolderEdit', 'LucideFolderGit', 'LucideFolderGit2', 'LucideFolderHeart', 'LucideFolderInput', 'LucideFolderKanban', 'LucideFolderKey', 'LucideFolderLock', 'LucideFolderMinus', 'LucideFolderOpen', 'LucideFolderOpenDot', 'LucideFolderOutput', 'LucideFolderPen', 'LucideFolderPlus', 'LucideFolderRoot', 'LucideFolderSearch', 'LucideFolderSearch2', 'LucideFolderSymlink', 'LucideFolderSync', 'LucideFolderTree', 'LucideFolderUp', 'LucideFolderX', 'LucideFolders', 'LucideFootprints', 'LucideForkKnife', 'LucideForkKnifeCrossed', 'LucideForklift', 'LucideForm', 'LucideFormInput', 'LucideForward', 'LucideFrame', 'LucideFramer', 'LucideFrown', 'LucideFuel', 'LucideFullscreen', 'LucideFunctionSquare', 'LucideFunnel', 'LucideFunnelPlus', 'LucideFunnelX', 'LucideGalleryHorizontal', 'LucideGalleryHorizontalEnd', 'LucideGalleryThumbnails', 'LucideGalleryVertical', 'LucideGalleryVerticalEnd', 'LucideGamepad', 'LucideGamepad2', 'LucideGamepadDirectional', 'LucideGanttChart', 'LucideGanttChartSquare', 'LucideGauge', 'LucideGaugeCircle', 'LucideGavel', 'LucideGem', 'LucideGeorgianLari', 'LucideGhost', 'LucideGift', 'LucideGitBranch', 'LucideGitBranchMinus', 'LucideGitBranchPlus', 'LucideGitCommit', 'LucideGitCommitHorizontal', 'LucideGitCommitVertical', 'LucideGitCompare', 'LucideGitCompareArrows', 'LucideGitFork', 'LucideGitGraph', 'LucideGitMerge', 'LucideGitPullRequest', 'LucideGitPullRequestArrow', 'LucideGitPullRequestClosed', 'LucideGitPullRequestCreate', 'LucideGitPullRequestCreateArrow', 'LucideGitPullRequestDraft', 'LucideGithub', 'LucideGitlab', 'LucideGlassWater', 'LucideGlasses', 'LucideGlobe', 'LucideGlobe2', 'LucideGlobeLock', 'LucideGlobeX', 'LucideGoal', 'LucideGpu', 'LucideGrab', 'LucideGraduationCap', 'LucideGrape', 'LucideGrid', 'LucideGrid2X2', 'LucideGrid2X2Check', 'LucideGrid2X2Plus', 'LucideGrid2X2X', 'LucideGrid2x2', 'LucideGrid2x2Check', 'LucideGrid2x2Plus', 'LucideGrid2x2X', 'LucideGrid3X3', 'LucideGrid3x2', 'LucideGrid3x3', 'LucideGrip', 'LucideGripHorizontal', 'LucideGripVertical', 'LucideGroup', 'LucideGuitar', 'LucideHam', 'LucideHamburger', 'LucideHammer', 'LucideHand', 'LucideHandCoins', 'LucideHandFist', 'LucideHandGrab', 'LucideHandHeart', 'LucideHandHelping', 'LucideHandMetal', 'LucideHandPlatter', 'LucideHandbag', 'LucideHandshake', 'LucideHardDrive', 'LucideHardDriveDownload', 'LucideHardDriveUpload', 'LucideHardHat', 'LucideHash', 'LucideHatGlasses', 'LucideHaze', 'LucideHd', 'LucideHdmiPort', 'LucideHeading', 'LucideHeading1', 'LucideHeading2', 'LucideHeading3', 'LucideHeading4', 'LucideHeading5', 'LucideHeading6', 'LucideHeadphoneOff', 'LucideHeadphones', 'LucideHeadset', 'LucideHeart', 'LucideHeartCrack', 'LucideHeartHandshake', 'LucideHeartMinus', 'LucideHeartOff', 'LucideHeartPlus', 'LucideHeartPulse', 'LucideHeater', 'LucideHelicopter', 'LucideHelpCircle', 'LucideHelpingHand', 'LucideHexagon', 'LucideHighlighter', 'LucideHistory', 'LucideHome', 'LucideHop', 'LucideHopOff', 'LucideHospital', 'LucideHotel', 'LucideHourglass', 'LucideHouse', 'LucideHouseHeart', 'LucideHousePlug', 'LucideHousePlus', 'LucideHouseWifi', 'LucideIceCream', 'LucideIceCream2', 'LucideIceCreamBowl', 'LucideIceCreamCone', 'LucideIdCard', 'LucideIdCardLanyard', 'LucideImage', 'LucideImageDown', 'LucideImageMinus', 'LucideImageOff', 'LucideImagePlay', 'LucideImagePlus', 'LucideImageUp', 'LucideImageUpscale', 'LucideImages', 'LucideImport', 'LucideInbox', 'LucideIndent', 'LucideIndentDecrease', 'LucideIndentIncrease', 'LucideIndianRupee', 'LucideInfinity', 'LucideInfo', 'LucideInspect', 'LucideInspectionPanel', 'LucideInstagram', 'LucideItalic', 'LucideIterationCcw', 'LucideIterationCw', 'LucideJapaneseYen', 'LucideJoystick', 'LucideKanban', 'LucideKanbanSquare', 'LucideKanbanSquareDashed', 'LucideKayak', 'LucideKey', 'LucideKeyRound', 'LucideKeySquare', 'LucideKeyboard', 'LucideKeyboardMusic', 'LucideKeyboardOff', 'LucideLamp', 'LucideLampCeiling', 'LucideLampDesk', 'LucideLampFloor', 'LucideLampWallDown', 'LucideLampWallUp', 'LucideLandPlot', 'LucideLandmark', 'LucideLanguages', 'LucideLaptop', 'LucideLaptop2', 'LucideLaptopMinimal', 'LucideLaptopMinimalCheck', 'LucideLasso', 'LucideLassoSelect', 'LucideLaugh', 'LucideLayers', 'LucideLayers2', 'LucideLayers3', 'LucideLayersPlus', 'LucideLayout', 'LucideLayoutDashboard', 'LucideLayoutGrid', 'LucideLayoutList', 'LucideLayoutPanelLeft', 'LucideLayoutPanelTop', 'LucideLayoutTemplate', 'LucideLeaf', 'LucideLeafyGreen', 'LucideLectern', 'LucideLetterText', 'LucideLibrary', 'LucideLibraryBig', 'LucideLibrarySquare', 'LucideLifeBuoy', 'LucideLigature', 'LucideLightbulb', 'LucideLightbulbOff', 'LucideLineChart', 'LucideLineSquiggle', 'LucideLink', 'LucideLink2', 'LucideLink2Off', 'LucideLinkedin', 'LucideList', 'LucideListCheck', 'LucideListChecks', 'LucideListChevronsDownUp', 'LucideListChevronsUpDown', 'LucideListCollapse', 'LucideListEnd', 'LucideListFilter', 'LucideListFilterPlus', 'LucideListIndentDecrease', 'LucideListIndentIncrease', 'LucideListMinus', 'LucideListMusic', 'LucideListOrdered', 'LucideListPlus', 'LucideListRestart', 'LucideListStart', 'LucideListTodo', 'LucideListTree', 'LucideListVideo', 'LucideListX', 'LucideLoader', 'LucideLoader2', 'LucideLoaderCircle', 'LucideLoaderPinwheel', 'LucideLocate', 'LucideLocateFixed', 'LucideLocateOff', 'LucideLocationEdit', 'LucideLock', 'LucideLockKeyhole', 'LucideLockKeyholeOpen', 'LucideLockOpen', 'LucideLogIn', 'LucideLogOut', 'LucideLogs', 'LucideLollipop', 'LucideLuggage', 'LucideMSquare', 'LucideMagnet', 'LucideMail', 'LucideMailCheck', 'LucideMailMinus', 'LucideMailOpen', 'LucideMailPlus', 'LucideMailQuestion', 'LucideMailQuestionMark', 'LucideMailSearch', 'LucideMailWarning', 'LucideMailX', 'LucideMailbox', 'LucideMails', 'LucideMap', 'LucideMapMinus', 'LucideMapPin', 'LucideMapPinCheck', 'LucideMapPinCheckInside', 'LucideMapPinHouse', 'LucideMapPinMinus', 'LucideMapPinMinusInside', 'LucideMapPinOff', 'LucideMapPinPen', 'LucideMapPinPlus', 'LucideMapPinPlusInside', 'LucideMapPinX', 'LucideMapPinXInside', 'LucideMapPinned', 'LucideMapPlus', 'LucideMars', 'LucideMarsStroke', 'LucideMartini', 'LucideMaximize', 'LucideMaximize2', 'LucideMedal', 'LucideMegaphone', 'LucideMegaphoneOff', 'LucideMeh', 'LucideMemoryStick', 'LucideMenu', 'LucideMenuSquare', 'LucideMerge', 'LucideMessageCircle', 'LucideMessageCircleCode', 'LucideMessageCircleDashed', 'LucideMessageCircleHeart', 'LucideMessageCircleMore', 'LucideMessageCircleOff', 'LucideMessageCirclePlus', 'LucideMessageCircleQuestion', 'LucideMessageCircleQuestionMark', 'LucideMessageCircleReply', 'LucideMessageCircleWarning', 'LucideMessageCircleX', 'LucideMessageSquare', 'LucideMessageSquareCode', 'LucideMessageSquareDashed', 'LucideMessageSquareDiff', 'LucideMessageSquareDot', 'LucideMessageSquareHeart', 'LucideMessageSquareLock', 'LucideMessageSquareMore', 'LucideMessageSquareOff', 'LucideMessageSquarePlus', 'LucideMessageSquareQuote', 'LucideMessageSquareReply', 'LucideMessageSquareShare', 'LucideMessageSquareText', 'LucideMessageSquareWarning', 'LucideMessageSquareX', 'LucideMessagesSquare', 'LucideMic', 'LucideMic2', 'LucideMicOff', 'LucideMicVocal', 'LucideMicrochip', 'LucideMicroscope', 'LucideMicrowave', 'LucideMilestone', 'LucideMilk', 'LucideMilkOff', 'LucideMinimize', 'LucideMinimize2', 'LucideMinus', 'LucideMinusCircle', 'LucideMinusSquare', 'LucideMonitor', 'LucideMonitorCheck', 'LucideMonitorCloud', 'LucideMonitorCog', 'LucideMonitorDot', 'LucideMonitorDown', 'LucideMonitorOff', 'LucideMonitorPause', 'LucideMonitorPlay', 'LucideMonitorSmartphone', 'LucideMonitorSpeaker', 'LucideMonitorStop', 'LucideMonitorUp', 'LucideMonitorX', 'LucideMoon', 'LucideMoonStar', 'LucideMoreHorizontal', 'LucideMoreVertical', 'LucideMotorbike', 'LucideMountain', 'LucideMountainSnow', 'LucideMouse', 'LucideMouseOff', 'LucideMousePointer', 'LucideMousePointer2', 'LucideMousePointer2Off', 'LucideMousePointerBan', 'LucideMousePointerClick', 'LucideMousePointerSquareDashed', 'LucideMove', 'LucideMove3D', 'LucideMove3d', 'LucideMoveDiagonal', 'LucideMoveDiagonal2', 'LucideMoveDown', 'LucideMoveDownLeft', 'LucideMoveDownRight', 'LucideMoveHorizontal', 'LucideMoveLeft', 'LucideMoveRight', 'LucideMoveUp', 'LucideMoveUpLeft', 'LucideMoveUpRight', 'LucideMoveVertical', 'LucideMusic', 'LucideMusic2', 'LucideMusic3', 'LucideMusic4', 'LucideNavigation', 'LucideNavigation2', 'LucideNavigation2Off', 'LucideNavigationOff', 'LucideNetwork', 'LucideNewspaper', 'LucideNfc', 'LucideNonBinary', 'LucideNotebook', 'LucideNotebookPen', 'LucideNotebookTabs', 'LucideNotebookText', 'LucideNotepadText', 'LucideNotepadTextDashed', 'LucideNut', 'LucideNutOff', 'LucideOctagon', 'LucideOctagonAlert', 'LucideOctagonMinus', 'LucideOctagonPause', 'LucideOctagonX', 'LucideOmega', 'LucideOption', 'LucideOrbit', 'LucideOrigami', 'LucideOutdent', 'LucidePackage', 'LucidePackage2', 'LucidePackageCheck', 'LucidePackageMinus', 'LucidePackageOpen', 'LucidePackagePlus', 'LucidePackageSearch', 'LucidePackageX', 'LucidePaintBucket', 'LucidePaintRoller', 'LucidePaintbrush', 'LucidePaintbrush2', 'LucidePaintbrushVertical', 'LucidePalette', 'LucidePalmtree', 'LucidePanda', 'LucidePanelBottom', 'LucidePanelBottomClose', 'LucidePanelBottomDashed', 'LucidePanelBottomInactive', 'LucidePanelBottomOpen', 'LucidePanelLeft', 'LucidePanelLeftClose', 'LucidePanelLeftDashed', 'LucidePanelLeftInactive', 'LucidePanelLeftOpen', 'LucidePanelLeftRightDashed', 'LucidePanelRight', 'LucidePanelRightClose', 'LucidePanelRightDashed', 'LucidePanelRightInactive', 'LucidePanelRightOpen', 'LucidePanelTop', 'LucidePanelTopBottomDashed', 'LucidePanelTopClose', 'LucidePanelTopDashed', 'LucidePanelTopInactive', 'LucidePanelTopOpen', 'LucidePanelsLeftBottom', 'LucidePanelsLeftRight', 'LucidePanelsRightBottom', 'LucidePanelsTopBottom', 'LucidePanelsTopLeft', 'LucidePaperclip', 'LucideParentheses', 'LucideParkingCircle', 'LucideParkingCircleOff', 'LucideParkingMeter', 'LucideParkingSquare', 'LucideParkingSquareOff', 'LucidePartyPopper', 'LucidePause', 'LucidePauseCircle', 'LucidePauseOctagon', 'LucidePawPrint', 'LucidePcCase', 'LucidePen', 'LucidePenBox', 'LucidePenLine', 'LucidePenOff', 'LucidePenSquare', 'LucidePenTool', 'LucidePencil', 'LucidePencilLine', 'LucidePencilOff', 'LucidePencilRuler', 'LucidePentagon', 'LucidePercent', 'LucidePercentCircle', 'LucidePercentDiamond', 'LucidePercentSquare', 'LucidePersonStanding', 'LucidePhilippinePeso', 'LucidePhone', 'LucidePhoneCall', 'LucidePhoneForwarded', 'LucidePhoneIncoming', 'LucidePhoneMissed', 'LucidePhoneOff', 'LucidePhoneOutgoing', 'LucidePi', 'LucidePiSquare', 'LucidePiano', 'LucidePickaxe', 'LucidePictureInPicture', 'LucidePictureInPicture2', 'LucidePieChart', 'LucidePiggyBank', 'LucidePilcrow', 'LucidePilcrowLeft', 'LucidePilcrowRight', 'LucidePilcrowSquare', 'LucidePill', 'LucidePillBottle', 'LucidePin', 'LucidePinOff', 'LucidePipette', 'LucidePizza', 'LucidePlane', 'LucidePlaneLanding', 'LucidePlaneTakeoff', 'LucidePlay', 'LucidePlayCircle', 'LucidePlaySquare', 'LucidePlug', 'LucidePlug2', 'LucidePlugZap', 'LucidePlugZap2', 'LucidePlus', 'LucidePlusCircle', 'LucidePlusSquare', 'LucidePocket', 'LucidePocketKnife', 'LucidePodcast', 'LucidePointer', 'LucidePointerOff', 'LucidePopcorn', 'LucidePopsicle', 'LucidePoundSterling', 'LucidePower', 'LucidePowerCircle', 'LucidePowerOff', 'LucidePowerSquare', 'LucidePresentation', 'LucidePrinter', 'LucidePrinterCheck', 'LucidePrinterX', 'LucideProjector', 'LucideProportions', 'LucidePuzzle', 'LucidePyramid', 'LucideQrCode', 'LucideQuote', 'LucideRabbit', 'LucideRadar', 'LucideRadiation', 'LucideRadical', 'LucideRadio', 'LucideRadioReceiver', 'LucideRadioTower', 'LucideRadius', 'LucideRailSymbol', 'LucideRainbow', 'LucideRat', 'LucideRatio', 'LucideReceipt', 'LucideReceiptCent', 'LucideReceiptEuro', 'LucideReceiptIndianRupee', 'LucideReceiptJapaneseYen', 'LucideReceiptPoundSterling', 'LucideReceiptRussianRuble', 'LucideReceiptSwissFranc', 'LucideReceiptText', 'LucideReceiptTurkishLira', 'LucideRectangleCircle', 'LucideRectangleEllipsis', 'LucideRectangleGoggles', 'LucideRectangleHorizontal', 'LucideRectangleVertical', 'LucideRecycle', 'LucideRedo', 'LucideRedo2', 'LucideRedoDot', 'LucideRefreshCcw', 'LucideRefreshCcwDot', 'LucideRefreshCw', 'LucideRefreshCwOff', 'LucideRefrigerator', 'LucideRegex', 'LucideRemoveFormatting', 'LucideRepeat', 'LucideRepeat1', 'LucideRepeat2', 'LucideReplace', 'LucideReplaceAll', 'LucideReply', 'LucideReplyAll', 'LucideRewind', 'LucideRibbon', 'LucideRocket', 'LucideRockingChair', 'LucideRollerCoaster', 'LucideRose', 'LucideRotate3D', 'LucideRotate3d', 'LucideRotateCcw', 'LucideRotateCcwKey', 'LucideRotateCcwSquare', 'LucideRotateCw', 'LucideRotateCwSquare', 'LucideRoute', 'LucideRouteOff', 'LucideRouter', 'LucideRows', 'LucideRows2', 'LucideRows3', 'LucideRows4', 'LucideRss', 'LucideRuler', 'LucideRulerDimensionLine', 'LucideRussianRuble', 'LucideSailboat', 'LucideSalad', 'LucideSandwich', 'LucideSatellite', 'LucideSatelliteDish', 'LucideSaudiRiyal', 'LucideSave', 'LucideSaveAll', 'LucideSaveOff', 'LucideScale', 'LucideScale3D', 'LucideScale3d', 'LucideScaling', 'LucideScan', 'LucideScanBarcode', 'LucideScanEye', 'LucideScanFace', 'LucideScanHeart', 'LucideScanLine', 'LucideScanQrCode', 'LucideScanSearch', 'LucideScanText', 'LucideScatterChart', 'LucideSchool', 'LucideSchool2', 'LucideScissors', 'LucideScissorsLineDashed', 'LucideScissorsSquare', 'LucideScissorsSquareDashedBottom', 'LucideScooter', 'LucideScreenShare', 'LucideScreenShareOff', 'LucideScroll', 'LucideScrollText', 'LucideSearch', 'LucideSearchAlert', 'LucideSearchCheck', 'LucideSearchCode', 'LucideSearchSlash', 'LucideSearchX', 'LucideSection', 'LucideSend', 'LucideSendHorizonal', 'LucideSendHorizontal', 'LucideSendToBack', 'LucideSeparatorHorizontal', 'LucideSeparatorVertical', 'LucideServer', 'LucideServerCog', 'LucideServerCrash', 'LucideServerOff', 'LucideSettings', 'LucideSettings2', 'LucideShapes', 'LucideShare', 'LucideShare2', 'LucideSheet', 'LucideShell', 'LucideShield', 'LucideShieldAlert', 'LucideShieldBan', 'LucideShieldCheck', 'LucideShieldClose', 'LucideShieldEllipsis', 'LucideShieldHalf', 'LucideShieldMinus', 'LucideShieldOff', 'LucideShieldPlus', 'LucideShieldQuestion', 'LucideShieldQuestionMark', 'LucideShieldUser', 'LucideShieldX', 'LucideShip', 'LucideShipWheel', 'LucideShirt', 'LucideShoppingBag', 'LucideShoppingBasket', 'LucideShoppingCart', 'LucideShovel', 'LucideShowerHead', 'LucideShredder', 'LucideShrimp', 'LucideShrink', 'LucideShrub', 'LucideShuffle', 'LucideSidebar', 'LucideSidebarClose', 'LucideSidebarOpen', 'LucideSigma', 'LucideSigmaSquare', 'LucideSignal', 'LucideSignalHigh', 'LucideSignalLow', 'LucideSignalMedium', 'LucideSignalZero', 'LucideSignature', 'LucideSignpost', 'LucideSignpostBig', 'LucideSiren', 'LucideSkipBack', 'LucideSkipForward', 'LucideSkull', 'LucideSlack', 'LucideSlash', 'LucideSlashSquare', 'LucideSlice', 'LucideSliders', 'LucideSlidersHorizontal', 'LucideSlidersVertical', 'LucideSmartphone', 'LucideSmartphoneCharging', 'LucideSmartphoneNfc', 'LucideSmile', 'LucideSmilePlus', 'LucideSnail', 'LucideSnowflake', 'LucideSoapDispenserDroplet', 'LucideSofa', 'LucideSolarPanel', 'LucideSortAsc', 'LucideSortDesc', 'LucideSoup', 'LucideSpace', 'LucideSpade', 'LucideSparkle', 'LucideSparkles', 'LucideSpeaker', 'LucideSpeech', 'LucideSpellCheck', 'LucideSpellCheck2', 'LucideSpline', 'LucideSplinePointer', 'LucideSplit', 'LucideSplitSquareHorizontal', 'LucideSplitSquareVertical', 'LucideSpool', 'LucideSpotlight', 'LucideSprayCan', 'LucideSprout', 'LucideSquare', 'LucideSquareActivity', 'LucideSquareArrowDown', 'LucideSquareArrowDownLeft', 'LucideSquareArrowDownRight', 'LucideSquareArrowLeft', 'LucideSquareArrowOutDownLeft', 'LucideSquareArrowOutDownRight', 'LucideSquareArrowOutUpLeft', 'LucideSquareArrowOutUpRight', 'LucideSquareArrowRight', 'LucideSquareArrowUp', 'LucideSquareArrowUpLeft', 'LucideSquareArrowUpRight', 'LucideSquareAsterisk', 'LucideSquareBottomDashedScissors', 'LucideSquareChartGantt', 'LucideSquareCheck', 'LucideSquareCheckBig', 'LucideSquareChevronDown', 'LucideSquareChevronLeft', 'LucideSquareChevronRight', 'LucideSquareChevronUp', 'LucideSquareCode', 'LucideSquareDashed', 'LucideSquareDashedBottom', 'LucideSquareDashedBottomCode', 'LucideSquareDashedKanban', 'LucideSquareDashedMousePointer', 'LucideSquareDashedTopSolid', 'LucideSquareDivide', 'LucideSquareDot', 'LucideSquareEqual', 'LucideSquareFunction', 'LucideSquareGanttChart', 'LucideSquareKanban', 'LucideSquareLibrary', 'LucideSquareM', 'LucideSquareMenu', 'LucideSquareMinus', 'LucideSquareMousePointer', 'LucideSquareParking', 'LucideSquareParkingOff', 'LucideSquarePause', 'LucideSquarePen', 'LucideSquarePercent', 'LucideSquarePi', 'LucideSquarePilcrow', 'LucideSquarePlay', 'LucideSquarePlus', 'LucideSquarePower', 'LucideSquareRadical', 'LucideSquareRoundCorner', 'LucideSquareScissors', 'LucideSquareSigma', 'LucideSquareSlash', 'LucideSquareSplitHorizontal', 'LucideSquareSplitVertical', 'LucideSquareSquare', 'LucideSquareStack', 'LucideSquareStar', 'LucideSquareStop', 'LucideSquareTerminal', 'LucideSquareUser', 'LucideSquareUserRound', 'LucideSquareX', 'LucideSquaresExclude', 'LucideSquaresIntersect', 'LucideSquaresSubtract', 'LucideSquaresUnite', 'LucideSquircle', 'LucideSquircleDashed', 'LucideSquirrel', 'LucideStamp', 'LucideStar', 'LucideStarHalf', 'LucideStarOff', 'LucideStars', 'LucideStepBack', 'LucideStepForward', 'LucideStethoscope', 'LucideSticker', 'LucideStickyNote', 'LucideStone', 'LucideStopCircle', 'LucideStore', 'LucideStretchHorizontal', 'LucideStretchVertical', 'LucideStrikethrough', 'LucideSubscript', 'LucideSubtitles', 'LucideSun', 'LucideSunDim', 'LucideSunMedium', 'LucideSunMoon', 'LucideSunSnow', 'LucideSunrise', 'LucideSunset', 'LucideSuperscript', 'LucideSwatchBook', 'LucideSwissFranc', 'LucideSwitchCamera', 'LucideSword', 'LucideSwords', 'LucideSyringe', 'LucideTable', 'LucideTable2', 'LucideTableCellsMerge', 'LucideTableCellsSplit', 'LucideTableColumnsSplit', 'LucideTableConfig', 'LucideTableOfContents', 'LucideTableProperties', 'LucideTableRowsSplit', 'LucideTablet', 'LucideTabletSmartphone', 'LucideTablets', 'LucideTag', 'LucideTags', 'LucideTally1', 'LucideTally2', 'LucideTally3', 'LucideTally4', 'LucideTally5', 'LucideTangent', 'LucideTarget', 'LucideTelescope', 'LucideTent', 'LucideTentTree', 'LucideTerminal', 'LucideTerminalSquare', 'LucideTestTube', 'LucideTestTube2', 'LucideTestTubeDiagonal', 'LucideTestTubes', 'LucideText', 'LucideTextAlignCenter', 'LucideTextAlignEnd', 'LucideTextAlignJustify', 'LucideTextAlignStart', 'LucideTextCursor', 'LucideTextCursorInput', 'LucideTextInitial', 'LucideTextQuote', 'LucideTextSearch', 'LucideTextSelect', 'LucideTextSelection', 'LucideTextWrap', 'LucideTheater', 'LucideThermometer', 'LucideThermometerSnowflake', 'LucideThermometerSun', 'LucideThumbsDown', 'LucideThumbsUp', 'LucideTicket', 'LucideTicketCheck', 'LucideTicketMinus', 'LucideTicketPercent', 'LucideTicketPlus', 'LucideTicketSlash', 'LucideTicketX', 'LucideTickets', 'LucideTicketsPlane', 'LucideTimer', 'LucideTimerOff', 'LucideTimerReset', 'LucideToggleLeft', 'LucideToggleRight', 'LucideToilet', 'LucideToolCase', 'LucideToolbox', 'LucideTornado', 'LucideTorus', 'LucideTouchpad', 'LucideTouchpadOff', 'LucideTowerControl', 'LucideToyBrick', 'LucideTractor', 'LucideTrafficCone', 'LucideTrain', 'LucideTrainFront', 'LucideTrainFrontTunnel', 'LucideTrainTrack', 'LucideTramFront', 'LucideTransgender', 'LucideTrash', 'LucideTrash2', 'LucideTreeDeciduous', 'LucideTreePalm', 'LucideTreePine', 'LucideTrees', 'LucideTrello', 'LucideTrendingDown', 'LucideTrendingUp', 'LucideTrendingUpDown', 'LucideTriangle', 'LucideTriangleAlert', 'LucideTriangleDashed', 'LucideTriangleRight', 'LucideTrophy', 'LucideTruck', 'LucideTruckElectric', 'LucideTurkishLira', 'LucideTurntable', 'LucideTurtle', 'LucideTv', 'LucideTv2', 'LucideTvMinimal', 'LucideTvMinimalPlay', 'LucideTwitch', 'LucideTwitter', 'LucideType', 'LucideTypeOutline', 'LucideUmbrella', 'LucideUmbrellaOff', 'LucideUnderline', 'LucideUndo', 'LucideUndo2', 'LucideUndoDot', 'LucideUnfoldHorizontal', 'LucideUnfoldVertical', 'LucideUngroup', 'LucideUniversity', 'LucideUnlink', 'LucideUnlink2', 'LucideUnlock', 'LucideUnlockKeyhole', 'LucideUnplug', 'LucideUpload', 'LucideUploadCloud', 'LucideUsb', 'LucideUser', 'LucideUser2', 'LucideUserCheck', 'LucideUserCheck2', 'LucideUserCircle', 'LucideUserCircle2', 'LucideUserCog', 'LucideUserCog2', 'LucideUserLock', 'LucideUserMinus', 'LucideUserMinus2', 'LucideUserPen', 'LucideUserPlus', 'LucideUserPlus2', 'LucideUserRound', 'LucideUserRoundCheck', 'LucideUserRoundCog', 'LucideUserRoundMinus', 'LucideUserRoundPen', 'LucideUserRoundPlus', 'LucideUserRoundSearch', 'LucideUserRoundX', 'LucideUserSearch', 'LucideUserSquare', 'LucideUserSquare2', 'LucideUserStar', 'LucideUserX', 'LucideUserX2', 'LucideUsers', 'LucideUsers2', 'LucideUsersRound', 'LucideUtensils', 'LucideUtensilsCrossed', 'LucideUtilityPole', 'LucideVan', 'LucideVariable', 'LucideVault', 'LucideVectorSquare', 'LucideVegan', 'LucideVenetianMask', 'LucideVenus', 'LucideVenusAndMars', 'LucideVerified', 'LucideVibrate', 'LucideVibrateOff', 'LucideVideo', 'LucideVideoOff', 'LucideVideotape', 'LucideView', 'LucideVoicemail', 'LucideVolleyball', 'LucideVolume', 'LucideVolume1', 'LucideVolume2', 'LucideVolumeOff', 'LucideVolumeX', 'LucideVote', 'LucideWallet', 'LucideWallet2', 'LucideWalletCards', 'LucideWalletMinimal', 'LucideWallpaper', 'LucideWand', 'LucideWand2', 'LucideWandSparkles', 'LucideWarehouse', 'LucideWashingMachine', 'LucideWatch', 'LucideWaves', 'LucideWavesArrowDown', 'LucideWavesArrowUp', 'LucideWavesLadder', 'LucideWaypoints', 'LucideWebcam', 'LucideWebhook', 'LucideWebhookOff', 'LucideWeight', 'LucideWeightTilde', 'LucideWheat', 'LucideWheatOff', 'LucideWholeWord', 'LucideWifi', 'LucideWifiCog', 'LucideWifiHigh', 'LucideWifiLow', 'LucideWifiOff', 'LucideWifiPen', 'LucideWifiSync', 'LucideWifiZero', 'LucideWind', 'LucideWindArrowDown', 'LucideWine', 'LucideWineOff', 'LucideWorkflow', 'LucideWorm', 'LucideWrapText', 'LucideWrench', 'LucideX', 'LucideXCircle', 'LucideXOctagon', 'LucideXSquare', 'LucideYoutube', 'LucideZap', 'LucideZapOff', 'LucideZoomIn', 'LucideZoomOut', 'Luggage', 'LuggageIcon', 'MSquare', 'MSquareIcon', 'Magnet', 'MagnetIcon', 'Mail', 'MailCheck', 'MailCheckIcon', 'MailIcon', 'MailMinus', 'MailMinusIcon', 'MailOpen', 'MailOpenIcon', 'MailPlus', 'MailPlusIcon', 'MailQuestion', 'MailQuestionIcon', 'MailQuestionMark', 'MailQuestionMarkIcon', 'MailSearch', 'MailSearchIcon', 'MailWarning', 'MailWarningIcon', 'MailX', 'MailXIcon', 'Mailbox', 'MailboxIcon', 'Mails', 'MailsIcon', 'Map', 'MapIcon', 'MapMinus', 'MapMinusIcon', 'MapPin', 'MapPinCheck', 'MapPinCheckIcon', 'MapPinCheckInside', 'MapPinCheckInsideIcon', 'MapPinHouse', 'MapPinHouseIcon', 'MapPinIcon', 'MapPinMinus', 'MapPinMinusIcon', 'MapPinMinusInside', 'MapPinMinusInsideIcon', 'MapPinOff', 'MapPinOffIcon', 'MapPinPen', 'MapPinPenIcon', 'MapPinPlus', 'MapPinPlusIcon', 'MapPinPlusInside', 'MapPinPlusInsideIcon', 'MapPinX', 'MapPinXIcon', 'MapPinXInside', 'MapPinXInsideIcon', 'MapPinned', 'MapPinnedIcon', 'MapPlus', 'MapPlusIcon', 'Mars', 'MarsIcon', 'MarsStroke', 'MarsStrokeIcon', 'Martini', 'MartiniIcon', 'Maximize', 'Maximize2', 'Maximize2Icon', 'MaximizeIcon', 'Medal', 'MedalIcon', 'Megaphone', 'MegaphoneIcon', 'MegaphoneOff', 'MegaphoneOffIcon', 'Meh', 'MehIcon', 'MemoryStick', 'MemoryStickIcon', 'Menu', 'MenuIcon', 'MenuSquare', 'MenuSquareIcon', 'Merge', 'MergeIcon', 'MessageCircle', 'MessageCircleCode', 'MessageCircleCodeIcon', 'MessageCircleDashed', 'MessageCircleDashedIcon', 'MessageCircleHeart', 'MessageCircleHeartIcon', 'MessageCircleIcon', 'MessageCircleMore', 'MessageCircleMoreIcon', 'MessageCircleOff', 'MessageCircleOffIcon', 'MessageCirclePlus', 'MessageCirclePlusIcon', 'MessageCircleQuestion', 'MessageCircleQuestionIcon', 'MessageCircleQuestionMark', 'MessageCircleQuestionMarkIcon', 'MessageCircleReply', 'MessageCircleReplyIcon', 'MessageCircleWarning', 'MessageCircleWarningIcon', 'MessageCircleX', 'MessageCircleXIcon', 'MessageSquare', 'MessageSquareCode', 'MessageSquareCodeIcon', 'MessageSquareDashed', 'MessageSquareDashedIcon', 'MessageSquareDiff', 'MessageSquareDiffIcon', 'MessageSquareDot', 'MessageSquareDotIcon', 'MessageSquareHeart', 'MessageSquareHeartIcon', 'MessageSquareIcon', 'MessageSquareLock', 'MessageSquareLockIcon', 'MessageSquareMore', 'MessageSquareMoreIcon', 'MessageSquareOff', 'MessageSquareOffIcon', 'MessageSquarePlus', 'MessageSquarePlusIcon', 'MessageSquareQuote', 'MessageSquareQuoteIcon', 'MessageSquareReply', 'MessageSquareReplyIcon', 'MessageSquareShare', 'MessageSquareShareIcon', 'MessageSquareText', 'MessageSquareTextIcon', 'MessageSquareWarning', 'MessageSquareWarningIcon', 'MessageSquareX', 'MessageSquareXIcon', 'MessagesSquare', 'MessagesSquareIcon', 'Mic', 'Mic2', 'Mic2Icon', 'MicIcon', 'MicOff', 'MicOffIcon', 'MicVocal', 'MicVocalIcon', 'Microchip', 'MicrochipIcon', 'Microscope', 'MicroscopeIcon', 'Microwave', 'MicrowaveIcon', 'Milestone', 'MilestoneIcon', 'Milk', 'MilkIcon', 'MilkOff', 'MilkOffIcon', 'Minimize', 'Minimize2', 'Minimize2Icon', 'MinimizeIcon', 'Minus', 'MinusCircle', 'MinusCircleIcon', 'MinusIcon', 'MinusSquare', 'MinusSquareIcon', 'Monitor', 'MonitorCheck', 'MonitorCheckIcon', 'MonitorCloud', 'MonitorCloudIcon', 'MonitorCog', 'MonitorCogIcon', 'MonitorDot', 'MonitorDotIcon', 'MonitorDown', 'MonitorDownIcon', 'MonitorIcon', 'MonitorOff', 'MonitorOffIcon', 'MonitorPause', 'MonitorPauseIcon', 'MonitorPlay', 'MonitorPlayIcon', 'MonitorSmartphone', 'MonitorSmartphoneIcon', 'MonitorSpeaker', 'MonitorSpeakerIcon', 'MonitorStop', 'MonitorStopIcon', 'MonitorUp', 'MonitorUpIcon', 'MonitorX', 'MonitorXIcon', 'Moon', 'MoonIcon', 'MoonStar', 'MoonStarIcon', 'MoreHorizontal', 'MoreHorizontalIcon', 'MoreVertical', 'MoreVerticalIcon', 'Motorbike', 'MotorbikeIcon', 'Mountain', 'MountainIcon', 'MountainSnow', 'MountainSnowIcon', 'Mouse', 'MouseIcon', 'MouseOff', 'MouseOffIcon', 'MousePointer', 'MousePointer2', 'MousePointer2Icon', 'MousePointer2Off', 'MousePointer2OffIcon', 'MousePointerBan', 'MousePointerBanIcon', 'MousePointerClick', 'MousePointerClickIcon', 'MousePointerIcon', 'MousePointerSquareDashed', 'MousePointerSquareDashedIcon', 'Move', 'Move3D', 'Move3DIcon', 'Move3d', 'Move3dIcon', 'MoveDiagonal', 'MoveDiagonal2', 'MoveDiagonal2Icon', 'MoveDiagonalIcon', 'MoveDown', 'MoveDownIcon', 'MoveDownLeft', 'MoveDownLeftIcon', 'MoveDownRight', 'MoveDownRightIcon', 'MoveHorizontal', 'MoveHorizontalIcon', 'MoveIcon', 'MoveLeft', 'MoveLeftIcon', 'MoveRight', 'MoveRightIcon', 'MoveUp', 'MoveUpIcon', 'MoveUpLeft', 'MoveUpLeftIcon', 'MoveUpRight', 'MoveUpRightIcon', 'MoveVertical', 'MoveVerticalIcon', 'Music', 'Music2', 'Music2Icon', 'Music3', 'Music3Icon', 'Music4', 'Music4Icon', 'MusicIcon', 'Navigation', 'Navigation2', 'Navigation2Icon', 'Navigation2Off', 'Navigation2OffIcon', 'NavigationIcon', 'NavigationOff', 'NavigationOffIcon', 'Network', 'NetworkIcon', 'Newspaper', 'NewspaperIcon', 'Nfc', 'NfcIcon', 'NonBinary', 'NonBinaryIcon', 'Notebook', 'NotebookIcon', 'NotebookPen', 'NotebookPenIcon', 'NotebookTabs', 'NotebookTabsIcon', 'NotebookText', 'NotebookTextIcon', 'NotepadText', 'NotepadTextDashed', 'NotepadTextDashedIcon', 'NotepadTextIcon', 'Nut', 'NutIcon', 'NutOff', 'NutOffIcon', 'Octagon', 'OctagonAlert', 'OctagonAlertIcon', 'OctagonIcon', 'OctagonMinus', 'OctagonMinusIcon', 'OctagonPause', 'OctagonPauseIcon', 'OctagonX', 'OctagonXIcon', 'Omega', 'OmegaIcon', 'Option', 'OptionIcon', 'Orbit', 'OrbitIcon', 'Origami', 'OrigamiIcon', 'Outdent', 'OutdentIcon', 'Package', 'Package2', 'Package2Icon', 'PackageCheck', 'PackageCheckIcon', 'PackageIcon', 'PackageMinus', 'PackageMinusIcon', 'PackageOpen', 'PackageOpenIcon', 'PackagePlus', 'PackagePlusIcon', 'PackageSearch', 'PackageSearchIcon', 'PackageX', 'PackageXIcon', 'PaintBucket', 'PaintBucketIcon', 'PaintRoller', 'PaintRollerIcon', 'Paintbrush', 'Paintbrush2', 'Paintbrush2Icon', 'PaintbrushIcon', 'PaintbrushVertical', 'PaintbrushVerticalIcon', 'Palette', 'PaletteIcon', 'Palmtree', 'PalmtreeIcon', 'Panda', 'PandaIcon', 'PanelBottom', 'PanelBottomClose', 'PanelBottomCloseIcon', 'PanelBottomDashed', 'PanelBottomDashedIcon', 'PanelBottomIcon', 'PanelBottomInactive', 'PanelBottomInactiveIcon', 'PanelBottomOpen', 'PanelBottomOpenIcon', 'PanelLeft', 'PanelLeftClose', 'PanelLeftCloseIcon', 'PanelLeftDashed', 'PanelLeftDashedIcon', 'PanelLeftIcon', 'PanelLeftInactive', 'PanelLeftInactiveIcon', 'PanelLeftOpen', 'PanelLeftOpenIcon', 'PanelLeftRightDashed', 'PanelLeftRightDashedIcon', 'PanelRight', 'PanelRightClose', 'PanelRightCloseIcon', 'PanelRightDashed', 'PanelRightDashedIcon', 'PanelRightIcon', 'PanelRightInactive', 'PanelRightInactiveIcon', 'PanelRightOpen', 'PanelRightOpenIcon', 'PanelTop', 'PanelTopBottomDashed', 'PanelTopBottomDashedIcon', 'PanelTopClose', 'PanelTopCloseIcon', 'PanelTopDashed', 'PanelTopDashedIcon', 'PanelTopIcon', 'PanelTopInactive', 'PanelTopInactiveIcon', 'PanelTopOpen', 'PanelTopOpenIcon', 'PanelsLeftBottom', 'PanelsLeftBottomIcon', 'PanelsLeftRight', 'PanelsLeftRightIcon', 'PanelsRightBottom', 'PanelsRightBottomIcon', 'PanelsTopBottom', 'PanelsTopBottomIcon', 'PanelsTopLeft', 'PanelsTopLeftIcon', 'Paperclip', 'PaperclipIcon', 'Parentheses', 'ParenthesesIcon', 'ParkingCircle', 'ParkingCircleIcon', 'ParkingCircleOff', 'ParkingCircleOffIcon', 'ParkingMeter', 'ParkingMeterIcon', 'ParkingSquare', 'ParkingSquareIcon', 'ParkingSquareOff', 'ParkingSquareOffIcon', 'PartyPopper', 'PartyPopperIcon', 'Pause', 'PauseCircle', 'PauseCircleIcon', 'PauseIcon', 'PauseOctagon', 'PauseOctagonIcon', 'PawPrint', 'PawPrintIcon', 'PcCase', 'PcCaseIcon', 'Pen', 'PenBox', 'PenBoxIcon', 'PenIcon', 'PenLine', 'PenLineIcon', 'PenOff', 'PenOffIcon', 'PenSquare', 'PenSquareIcon', 'PenTool', 'PenToolIcon', 'Pencil', 'PencilIcon', 'PencilLine', 'PencilLineIcon', 'PencilOff', 'PencilOffIcon', 'PencilRuler', 'PencilRulerIcon', 'Pentagon', 'PentagonIcon', 'Percent', 'PercentCircle', 'PercentCircleIcon', 'PercentDiamond', 'PercentDiamondIcon', 'PercentIcon', 'PercentSquare', 'PercentSquareIcon', 'PersonStanding', 'PersonStandingIcon', 'PhilippinePeso', 'PhilippinePesoIcon', 'Phone', 'PhoneCall', 'PhoneCallIcon', 'PhoneForwarded', 'PhoneForwardedIcon', 'PhoneIcon', 'PhoneIncoming', 'PhoneIncomingIcon', 'PhoneMissed', 'PhoneMissedIcon', 'PhoneOff', 'PhoneOffIcon', 'PhoneOutgoing', 'PhoneOutgoingIcon', 'Pi', 'PiIcon', 'PiSquare', 'PiSquareIcon', 'Piano', 'PianoIcon', 'Pickaxe', 'PickaxeIcon', 'PictureInPicture', 'PictureInPicture2', 'PictureInPicture2Icon', 'PictureInPictureIcon', 'PieChart', 'PieChartIcon', 'PiggyBank', 'PiggyBankIcon', 'Pilcrow', 'PilcrowIcon', 'PilcrowLeft', 'PilcrowLeftIcon', 'PilcrowRight', 'PilcrowRightIcon', 'PilcrowSquare', 'PilcrowSquareIcon', 'Pill', 'PillBottle', 'PillBottleIcon', 'PillIcon', 'Pin', 'PinIcon', 'PinOff', 'PinOffIcon', 'Pipette', 'PipetteIcon', 'Pizza', 'PizzaIcon', 'Plane', 'PlaneIcon', 'PlaneLanding', 'PlaneLandingIcon', 'PlaneTakeoff', 'PlaneTakeoffIcon', 'Play', 'PlayCircle', 'PlayCircleIcon', 'PlayIcon', 'PlaySquare', 'PlaySquareIcon', 'Plug', 'Plug2', 'Plug2Icon', 'PlugIcon', 'PlugZap', 'PlugZap2', 'PlugZap2Icon', 'PlugZapIcon', 'Plus', 'PlusCircle', 'PlusCircleIcon', 'PlusIcon', 'PlusSquare', 'PlusSquareIcon', 'Pocket', 'PocketIcon', 'PocketKnife', 'PocketKnifeIcon', 'Podcast', 'PodcastIcon', 'Pointer', 'PointerIcon', 'PointerOff', 'PointerOffIcon', 'Popcorn', 'PopcornIcon', 'Popsicle', 'PopsicleIcon', 'PoundSterling', 'PoundSterlingIcon', 'Power', 'PowerCircle', 'PowerCircleIcon', 'PowerIcon', 'PowerOff', 'PowerOffIcon', 'PowerSquare', 'PowerSquareIcon', 'Presentation', 'PresentationIcon', 'Printer', 'PrinterCheck', 'PrinterCheckIcon', 'PrinterIcon', 'PrinterX', 'PrinterXIcon', 'Projector', 'ProjectorIcon', 'Proportions', 'ProportionsIcon', 'Puzzle', 'PuzzleIcon', 'Pyramid', 'PyramidIcon', 'QrCode', 'QrCodeIcon', 'Quote', 'QuoteIcon', 'Rabbit', 'RabbitIcon', 'Radar', 'RadarIcon', 'Radiation', 'RadiationIcon', 'Radical', 'RadicalIcon', 'Radio', 'RadioIcon', 'RadioReceiver', 'RadioReceiverIcon', 'RadioTower', 'RadioTowerIcon', 'Radius', 'RadiusIcon', 'RailSymbol', 'RailSymbolIcon', 'Rainbow', 'RainbowIcon', 'Rat', 'RatIcon', 'Ratio', 'RatioIcon', 'Receipt', 'ReceiptCent', 'ReceiptCentIcon', 'ReceiptEuro', 'ReceiptEuroIcon', 'ReceiptIcon', 'ReceiptIndianRupee', 'ReceiptIndianRupeeIcon', 'ReceiptJapaneseYen', 'ReceiptJapaneseYenIcon', 'ReceiptPoundSterling', 'ReceiptPoundSterlingIcon', 'ReceiptRussianRuble', 'ReceiptRussianRubleIcon', 'ReceiptSwissFranc', 'ReceiptSwissFrancIcon', 'ReceiptText', 'ReceiptTextIcon', 'ReceiptTurkishLira', 'ReceiptTurkishLiraIcon', 'RectangleCircle', 'RectangleCircleIcon', 'RectangleEllipsis', 'RectangleEllipsisIcon', 'RectangleGoggles', 'RectangleGogglesIcon', 'RectangleHorizontal', 'RectangleHorizontalIcon', 'RectangleVertical', 'RectangleVerticalIcon', 'Recycle', 'RecycleIcon', 'Redo', 'Redo2', 'Redo2Icon', 'RedoDot', 'RedoDotIcon', 'RedoIcon', 'RefreshCcw', 'RefreshCcwDot', 'RefreshCcwDotIcon', 'RefreshCcwIcon', 'RefreshCw', 'RefreshCwIcon', 'RefreshCwOff', 'RefreshCwOffIcon', 'Refrigerator', 'RefrigeratorIcon', 'Regex', 'RegexIcon', 'RemoveFormatting', 'RemoveFormattingIcon', 'Repeat', 'Repeat1', 'Repeat1Icon', 'Repeat2', 'Repeat2Icon', 'RepeatIcon', 'Replace', 'ReplaceAll', 'ReplaceAllIcon', 'ReplaceIcon', 'Reply', 'ReplyAll', 'ReplyAllIcon', 'ReplyIcon', 'Rewind', 'RewindIcon', 'Ribbon', 'RibbonIcon', 'Rocket', 'RocketIcon', 'RockingChair', 'RockingChairIcon', 'RollerCoaster', 'RollerCoasterIcon', 'Rose', 'RoseIcon', 'Rotate3D', 'Rotate3DIcon', 'Rotate3d', 'Rotate3dIcon', 'RotateCcw', 'RotateCcwIcon', 'RotateCcwKey', 'RotateCcwKeyIcon', 'RotateCcwSquare', 'RotateCcwSquareIcon', 'RotateCw', 'RotateCwIcon', 'RotateCwSquare', 'RotateCwSquareIcon', 'Route', 'RouteIcon', 'RouteOff', 'RouteOffIcon', 'Router', 'RouterIcon', 'Rows', 'Rows2', 'Rows2Icon', 'Rows3', 'Rows3Icon', 'Rows4', 'Rows4Icon', 'RowsIcon', 'Rss', 'RssIcon', 'Ruler', 'RulerDimensionLine', 'RulerDimensionLineIcon', 'RulerIcon', 'RussianRuble', 'RussianRubleIcon', 'Sailboat', 'SailboatIcon', 'Salad', 'SaladIcon', 'Sandwich', 'SandwichIcon', 'Satellite', 'SatelliteDish', 'SatelliteDishIcon', 'SatelliteIcon', 'SaudiRiyal', 'SaudiRiyalIcon', 'Save', 'SaveAll', 'SaveAllIcon', 'SaveIcon', 'SaveOff', 'SaveOffIcon', 'Scale', 'Scale3D', 'Scale3DIcon', 'Scale3d', 'Scale3dIcon', 'ScaleIcon', 'Scaling', 'ScalingIcon', 'Scan', 'ScanBarcode', 'ScanBarcodeIcon', 'ScanEye', 'ScanEyeIcon', 'ScanFace', 'ScanFaceIcon', 'ScanHeart', 'ScanHeartIcon', 'ScanIcon', 'ScanLine', 'ScanLineIcon', 'ScanQrCode', 'ScanQrCodeIcon', 'ScanSearch', 'ScanSearchIcon', 'ScanText', 'ScanTextIcon', 'ScatterChart', 'ScatterChartIcon', 'School', 'School2', 'School2Icon', 'SchoolIcon', 'Scissors', 'ScissorsIcon', 'ScissorsLineDashed', 'ScissorsLineDashedIcon', 'ScissorsSquare', 'ScissorsSquareDashedBottom', 'ScissorsSquareDashedBottomIcon', 'ScissorsSquareIcon', 'Scooter', 'ScooterIcon', 'ScreenShare', 'ScreenShareIcon', 'ScreenShareOff', 'ScreenShareOffIcon', 'Scroll', 'ScrollIcon', 'ScrollText', 'ScrollTextIcon', 'Search', 'SearchAlert', 'SearchAlertIcon', 'SearchCheck', 'SearchCheckIcon', 'SearchCode', 'SearchCodeIcon', 'SearchIcon', 'SearchSlash', 'SearchSlashIcon', 'SearchX', 'SearchXIcon', 'Section', 'SectionIcon', 'Send', 'SendHorizonal', 'SendHorizonalIcon', 'SendHorizontal', 'SendHorizontalIcon', 'SendIcon', 'SendToBack', 'SendToBackIcon', 'SeparatorHorizontal', 'SeparatorHorizontalIcon', 'SeparatorVertical', 'SeparatorVerticalIcon', 'Server', 'ServerCog', 'ServerCogIcon', 'ServerCrash', 'ServerCrashIcon', 'ServerIcon', 'ServerOff', 'ServerOffIcon', 'Settings', 'Settings2', 'Settings2Icon', 'SettingsIcon', 'Shapes', 'ShapesIcon', 'Share', 'Share2', 'Share2Icon', 'ShareIcon', 'Sheet', 'SheetIcon', 'Shell', 'ShellIcon', 'Shield', 'ShieldAlert', 'ShieldAlertIcon', 'ShieldBan', 'ShieldBanIcon', 'ShieldCheck', 'ShieldCheckIcon', 'ShieldClose', 'ShieldCloseIcon', 'ShieldEllipsis', 'ShieldEllipsisIcon', 'ShieldHalf', 'ShieldHalfIcon', 'ShieldIcon', 'ShieldMinus', 'ShieldMinusIcon', 'ShieldOff', 'ShieldOffIcon', 'ShieldPlus', 'ShieldPlusIcon', 'ShieldQuestion', 'ShieldQuestionIcon', 'ShieldQuestionMark', 'ShieldQuestionMarkIcon', 'ShieldUser', 'ShieldUserIcon', 'ShieldX', 'ShieldXIcon', 'Ship', 'ShipIcon', 'ShipWheel', 'ShipWheelIcon', 'Shirt', 'ShirtIcon', 'ShoppingBag', 'ShoppingBagIcon', 'ShoppingBasket', 'ShoppingBasketIcon', 'ShoppingCart', 'ShoppingCartIcon', 'Shovel', 'ShovelIcon', 'ShowerHead', 'ShowerHeadIcon', 'Shredder', 'ShredderIcon', 'Shrimp', 'ShrimpIcon', 'Shrink', 'ShrinkIcon', 'Shrub', 'ShrubIcon', 'Shuffle', 'ShuffleIcon', 'Sidebar', 'SidebarClose', 'SidebarCloseIcon', 'SidebarIcon', 'SidebarOpen', 'SidebarOpenIcon', 'Sigma', 'SigmaIcon', 'SigmaSquare', 'SigmaSquareIcon', 'Signal', 'SignalHigh', 'SignalHighIcon', 'SignalIcon', 'SignalLow', 'SignalLowIcon', 'SignalMedium', 'SignalMediumIcon', 'SignalZero', 'SignalZeroIcon', 'Signature', 'SignatureIcon', 'Signpost', 'SignpostBig', 'SignpostBigIcon', 'SignpostIcon', 'Siren', 'SirenIcon', 'SkipBack', 'SkipBackIcon', 'SkipForward', 'SkipForwardIcon', 'Skull', 'SkullIcon', 'Slack', 'SlackIcon', 'Slash', 'SlashIcon', 'SlashSquare', 'SlashSquareIcon', 'Slice', 'SliceIcon', 'Sliders', 'SlidersHorizontal', 'SlidersHorizontalIcon', 'SlidersIcon', 'SlidersVertical', 'SlidersVerticalIcon', 'Smartphone', 'SmartphoneCharging', 'SmartphoneChargingIcon', 'SmartphoneIcon', 'SmartphoneNfc', 'SmartphoneNfcIcon', 'Smile', 'SmileIcon', 'SmilePlus', 'SmilePlusIcon', 'Snail', 'SnailIcon', 'Snowflake', 'SnowflakeIcon', 'SoapDispenserDroplet', 'SoapDispenserDropletIcon', 'Sofa', 'SofaIcon', 'SolarPanel', 'SolarPanelIcon', 'SortAsc', 'SortAscIcon', 'SortDesc', 'SortDescIcon', 'Soup', 'SoupIcon', 'Space', 'SpaceIcon', 'Spade', 'SpadeIcon', 'Sparkle', 'SparkleIcon', 'Sparkles', 'SparklesIcon', 'Speaker', 'SpeakerIcon', 'Speech', 'SpeechIcon', 'SpellCheck', 'SpellCheck2', 'SpellCheck2Icon', 'SpellCheckIcon', 'Spline', 'SplineIcon', 'SplinePointer', 'SplinePointerIcon', 'Split', 'SplitIcon', 'SplitSquareHorizontal', 'SplitSquareHorizontalIcon', 'SplitSquareVertical', 'SplitSquareVerticalIcon', 'Spool', 'SpoolIcon', 'Spotlight', 'SpotlightIcon', 'SprayCan', 'SprayCanIcon', 'Sprout', 'SproutIcon', 'Square', 'SquareActivity', 'SquareActivityIcon', 'SquareArrowDown', 'SquareArrowDownIcon', 'SquareArrowDownLeft', 'SquareArrowDownLeftIcon', 'SquareArrowDownRight', 'SquareArrowDownRightIcon', 'SquareArrowLeft', 'SquareArrowLeftIcon', 'SquareArrowOutDownLeft', 'SquareArrowOutDownLeftIcon', 'SquareArrowOutDownRight', 'SquareArrowOutDownRightIcon', 'SquareArrowOutUpLeft', 'SquareArrowOutUpLeftIcon', 'SquareArrowOutUpRight', 'SquareArrowOutUpRightIcon', 'SquareArrowRight', 'SquareArrowRightIcon', 'SquareArrowUp', 'SquareArrowUpIcon', 'SquareArrowUpLeft', 'SquareArrowUpLeftIcon', 'SquareArrowUpRight', 'SquareArrowUpRightIcon', 'SquareAsterisk', 'SquareAsteriskIcon', 'SquareBottomDashedScissors', 'SquareBottomDashedScissorsIcon', 'SquareChartGantt', 'SquareChartGanttIcon', 'SquareCheck', 'SquareCheckBig', 'SquareCheckBigIcon', 'SquareCheckIcon', 'SquareChevronDown', 'SquareChevronDownIcon', 'SquareChevronLeft', 'SquareChevronLeftIcon', 'SquareChevronRight', 'SquareChevronRightIcon', 'SquareChevronUp', 'SquareChevronUpIcon', 'SquareCode', 'SquareCodeIcon', 'SquareDashed', 'SquareDashedBottom', 'SquareDashedBottomCode', 'SquareDashedBottomCodeIcon', 'SquareDashedBottomIcon', 'SquareDashedIcon', 'SquareDashedKanban', 'SquareDashedKanbanIcon', 'SquareDashedMousePointer', 'SquareDashedMousePointerIcon', 'SquareDashedTopSolid', 'SquareDashedTopSolidIcon', 'SquareDivide', 'SquareDivideIcon', 'SquareDot', 'SquareDotIcon', 'SquareEqual', 'SquareEqualIcon', 'SquareFunction', 'SquareFunctionIcon', 'SquareGanttChart', 'SquareGanttChartIcon', 'SquareIcon', 'SquareKanban', 'SquareKanbanIcon', 'SquareLibrary', 'SquareLibraryIcon', 'SquareM', 'SquareMIcon', 'SquareMenu', 'SquareMenuIcon', 'SquareMinus', 'SquareMinusIcon', 'SquareMousePointer', 'SquareMousePointerIcon', 'SquareParking', 'SquareParkingIcon', 'SquareParkingOff', 'SquareParkingOffIcon', 'SquarePause', 'SquarePauseIcon', 'SquarePen', 'SquarePenIcon', 'SquarePercent', 'SquarePercentIcon', 'SquarePi', 'SquarePiIcon', 'SquarePilcrow', 'SquarePilcrowIcon', 'SquarePlay', 'SquarePlayIcon', 'SquarePlus', 'SquarePlusIcon', 'SquarePower', 'SquarePowerIcon', 'SquareRadical', 'SquareRadicalIcon', 'SquareRoundCorner', 'SquareRoundCornerIcon', 'SquareScissors', 'SquareScissorsIcon', 'SquareSigma', 'SquareSigmaIcon', 'SquareSlash', 'SquareSlashIcon', 'SquareSplitHorizontal', 'SquareSplitHorizontalIcon', 'SquareSplitVertical', 'SquareSplitVerticalIcon', 'SquareSquare', 'SquareSquareIcon', 'SquareStack', 'SquareStackIcon', 'SquareStar', 'SquareStarIcon', 'SquareStop', 'SquareStopIcon', 'SquareTerminal', 'SquareTerminalIcon', 'SquareUser', 'SquareUserIcon', 'SquareUserRound', 'SquareUserRoundIcon', 'SquareX', 'SquareXIcon', 'SquaresExclude', 'SquaresExcludeIcon', 'SquaresIntersect', 'SquaresIntersectIcon', 'SquaresSubtract', 'SquaresSubtractIcon', 'SquaresUnite', 'SquaresUniteIcon', 'Squircle', 'SquircleDashed', 'SquircleDashedIcon', 'SquircleIcon', 'Squirrel', 'SquirrelIcon', 'Stamp', 'StampIcon', 'Star', 'StarHalf', 'StarHalfIcon', 'StarIcon', 'StarOff', 'StarOffIcon', 'Stars', 'StarsIcon', 'StepBack', 'StepBackIcon', 'StepForward', 'StepForwardIcon', 'Stethoscope', 'StethoscopeIcon', 'Sticker', 'StickerIcon', 'StickyNote', 'StickyNoteIcon', 'Stone', 'StoneIcon', 'StopCircle', 'StopCircleIcon', 'Store', 'StoreIcon', 'StretchHorizontal', 'StretchHorizontalIcon', 'StretchVertical', 'StretchVerticalIcon', 'Strikethrough', 'StrikethroughIcon', 'Subscript', 'SubscriptIcon', 'Subtitles', 'SubtitlesIcon', 'Sun', 'SunDim', 'SunDimIcon', 'SunIcon', 'SunMedium', 'SunMediumIcon', 'SunMoon', 'SunMoonIcon', 'SunSnow', 'SunSnowIcon', 'Sunrise', 'SunriseIcon', 'Sunset', 'SunsetIcon', 'Superscript', 'SuperscriptIcon', 'SwatchBook', 'SwatchBookIcon', 'SwissFranc', 'SwissFrancIcon', 'SwitchCamera', 'SwitchCameraIcon', 'Sword', 'SwordIcon', 'Swords', 'SwordsIcon', 'Syringe', 'SyringeIcon', 'Table', 'Table2', 'Table2Icon', 'TableCellsMerge', 'TableCellsMergeIcon', 'TableCellsSplit', 'TableCellsSplitIcon', 'TableColumnsSplit', 'TableColumnsSplitIcon', 'TableConfig', 'TableConfigIcon', 'TableIcon', 'TableOfContents', 'TableOfContentsIcon', 'TableProperties', 'TablePropertiesIcon', 'TableRowsSplit', 'TableRowsSplitIcon', 'Tablet', 'TabletIcon', 'TabletSmartphone', 'TabletSmartphoneIcon', 'Tablets', 'TabletsIcon', 'Tag', 'TagIcon', 'Tags', 'TagsIcon', 'Tally1', 'Tally1Icon', 'Tally2', 'Tally2Icon', 'Tally3', 'Tally3Icon', 'Tally4', 'Tally4Icon', 'Tally5', 'Tally5Icon', 'Tangent', 'TangentIcon', 'Target', 'TargetIcon', 'Telescope', 'TelescopeIcon', 'Tent', 'TentIcon', 'TentTree', 'TentTreeIcon', 'Terminal', 'TerminalIcon', 'TerminalSquare', 'TerminalSquareIcon', 'TestTube', 'TestTube2', 'TestTube2Icon', 'TestTubeDiagonal', 'TestTubeDiagonalIcon', 'TestTubeIcon', 'TestTubes', 'TestTubesIcon', 'Text', 'TextAlignCenter', 'TextAlignCenterIcon', 'TextAlignEnd', 'TextAlignEndIcon', 'TextAlignJustify', 'TextAlignJustifyIcon', 'TextAlignStart', 'TextAlignStartIcon', 'TextCursor', 'TextCursorIcon', 'TextCursorInput', 'TextCursorInputIcon', 'TextIcon', 'TextInitial', 'TextInitialIcon', 'TextQuote', 'TextQuoteIcon', 'TextSearch', 'TextSearchIcon', 'TextSelect', 'TextSelectIcon', 'TextSelection', 'TextSelectionIcon', 'TextWrap', 'TextWrapIcon', 'Theater', 'TheaterIcon', 'Thermometer', 'ThermometerIcon', 'ThermometerSnowflake', 'ThermometerSnowflakeIcon', 'ThermometerSun', 'ThermometerSunIcon', 'ThumbsDown', 'ThumbsDownIcon', 'ThumbsUp', 'ThumbsUpIcon', 'Ticket', 'TicketCheck', 'TicketCheckIcon', 'TicketIcon', 'TicketMinus', 'TicketMinusIcon', 'TicketPercent', 'TicketPercentIcon', 'TicketPlus', 'TicketPlusIcon', 'TicketSlash', 'TicketSlashIcon', 'TicketX', 'TicketXIcon', 'Tickets', 'TicketsIcon', 'TicketsPlane', 'TicketsPlaneIcon', 'Timer', 'TimerIcon', 'TimerOff', 'TimerOffIcon', 'TimerReset', 'TimerResetIcon', 'ToggleLeft', 'ToggleLeftIcon', 'ToggleRight', 'ToggleRightIcon', 'Toilet', 'ToiletIcon', 'ToolCase', 'ToolCaseIcon', 'Toolbox', 'ToolboxIcon', 'Tornado', 'TornadoIcon', 'Torus', 'TorusIcon', 'Touchpad', 'TouchpadIcon', 'TouchpadOff', 'TouchpadOffIcon', 'TowerControl', 'TowerControlIcon', 'ToyBrick', 'ToyBrickIcon', 'Tractor', 'TractorIcon', 'TrafficCone', 'TrafficConeIcon', 'Train', 'TrainFront', 'TrainFrontIcon', 'TrainFrontTunnel', 'TrainFrontTunnelIcon', 'TrainIcon', 'TrainTrack', 'TrainTrackIcon', 'TramFront', 'TramFrontIcon', 'Transgender', 'TransgenderIcon', 'Trash', 'Trash2', 'Trash2Icon', 'TrashIcon', 'TreeDeciduous', 'TreeDeciduousIcon', 'TreePalm', 'TreePalmIcon', 'TreePine', 'TreePineIcon', 'Trees', 'TreesIcon', 'Trello', 'TrelloIcon', 'TrendingDown', 'TrendingDownIcon', 'TrendingUp', 'TrendingUpDown', 'TrendingUpDownIcon', 'TrendingUpIcon', 'Triangle', 'TriangleAlert', 'TriangleAlertIcon', 'TriangleDashed', 'TriangleDashedIcon', 'TriangleIcon', 'TriangleRight', 'TriangleRightIcon', 'Trophy', 'TrophyIcon', 'Truck', 'TruckElectric', 'TruckElectricIcon', 'TruckIcon', 'TurkishLira', 'TurkishLiraIcon', 'Turntable', 'TurntableIcon', 'Turtle', 'TurtleIcon', 'Tv', 'Tv2', 'Tv2Icon', 'TvIcon', 'TvMinimal', 'TvMinimalIcon', 'TvMinimalPlay', 'TvMinimalPlayIcon', 'Twitch', 'TwitchIcon', 'Twitter', 'TwitterIcon', 'Type', 'TypeIcon', 'TypeOutline', 'TypeOutlineIcon', 'Umbrella', 'UmbrellaIcon', 'UmbrellaOff', 'UmbrellaOffIcon', 'Underline', 'UnderlineIcon', 'Undo', 'Undo2', 'Undo2Icon', 'UndoDot', 'UndoDotIcon', 'UndoIcon', 'UnfoldHorizontal', 'UnfoldHorizontalIcon', 'UnfoldVertical', 'UnfoldVerticalIcon', 'Ungroup', 'UngroupIcon', 'University', 'UniversityIcon', 'Unlink', 'Unlink2', 'Unlink2Icon', 'UnlinkIcon', 'Unlock', 'UnlockIcon', 'UnlockKeyhole', 'UnlockKeyholeIcon', 'Unplug', 'UnplugIcon', 'Upload', 'UploadCloud', 'UploadCloudIcon', 'UploadIcon', 'Usb', 'UsbIcon', 'User', 'User2', 'User2Icon', 'UserCheck', 'UserCheck2', 'UserCheck2Icon', 'UserCheckIcon', 'UserCircle', 'UserCircle2', 'UserCircle2Icon', 'UserCircleIcon', 'UserCog', 'UserCog2', 'UserCog2Icon', 'UserCogIcon', 'UserIcon', 'UserLock', 'UserLockIcon', 'UserMinus', 'UserMinus2', 'UserMinus2Icon', 'UserMinusIcon', 'UserPen', 'UserPenIcon', 'UserPlus', 'UserPlus2', 'UserPlus2Icon', 'UserPlusIcon', 'UserRound', 'UserRoundCheck', 'UserRoundCheckIcon', 'UserRoundCog', 'UserRoundCogIcon', 'UserRoundIcon', 'UserRoundMinus', 'UserRoundMinusIcon', 'UserRoundPen', 'UserRoundPenIcon', 'UserRoundPlus', 'UserRoundPlusIcon', 'UserRoundSearch', 'UserRoundSearchIcon', 'UserRoundX', 'UserRoundXIcon', 'UserSearch', 'UserSearchIcon', 'UserSquare', 'UserSquare2', 'UserSquare2Icon', 'UserSquareIcon', 'UserStar', 'UserStarIcon', 'UserX', 'UserX2', 'UserX2Icon', 'UserXIcon', 'Users', 'Users2', 'Users2Icon', 'UsersIcon', 'UsersRound', 'UsersRoundIcon', 'Utensils', 'UtensilsCrossed', 'UtensilsCrossedIcon', 'UtensilsIcon', 'UtilityPole', 'UtilityPoleIcon', 'Van', 'VanIcon', 'Variable', 'VariableIcon', 'Vault', 'VaultIcon', 'VectorSquare', 'VectorSquareIcon', 'Vegan', 'VeganIcon', 'VenetianMask', 'VenetianMaskIcon', 'Venus', 'VenusAndMars', 'VenusAndMarsIcon', 'VenusIcon', 'Verified', 'VerifiedIcon', 'Vibrate', 'VibrateIcon', 'VibrateOff', 'VibrateOffIcon', 'Video', 'VideoIcon', 'VideoOff', 'VideoOffIcon', 'Videotape', 'VideotapeIcon', 'View', 'ViewIcon', 'Voicemail', 'VoicemailIcon', 'Volleyball', 'VolleyballIcon', 'Volume', 'Volume1', 'Volume1Icon', 'Volume2', 'Volume2Icon', 'VolumeIcon', 'VolumeOff', 'VolumeOffIcon', 'VolumeX', 'VolumeXIcon', 'Vote', 'VoteIcon', 'Wallet', 'Wallet2', 'Wallet2Icon', 'WalletCards', 'WalletCardsIcon', 'WalletIcon', 'WalletMinimal', 'WalletMinimalIcon', 'Wallpaper', 'WallpaperIcon', 'Wand', 'Wand2', 'Wand2Icon', 'WandIcon', 'WandSparkles', 'WandSparklesIcon', 'Warehouse', 'WarehouseIcon', 'WashingMachine', 'WashingMachineIcon', 'Watch', 'WatchIcon', 'Waves', 'WavesArrowDown', 'WavesArrowDownIcon', 'WavesArrowUp', 'WavesArrowUpIcon', 'WavesIcon', 'WavesLadder', 'WavesLadderIcon', 'Waypoints', 'WaypointsIcon', 'Webcam', 'WebcamIcon', 'Webhook', 'WebhookIcon', 'WebhookOff', 'WebhookOffIcon', 'Weight', 'WeightIcon', 'WeightTilde', 'WeightTildeIcon', 'Wheat', 'WheatIcon', 'WheatOff', 'WheatOffIcon', 'WholeWord', 'WholeWordIcon', 'Wifi', 'WifiCog', 'WifiCogIcon', 'WifiHigh', 'WifiHighIcon', 'WifiIcon', 'WifiLow', 'WifiLowIcon', 'WifiOff', 'WifiOffIcon', 'WifiPen', 'WifiPenIcon', 'WifiSync', 'WifiSyncIcon', 'WifiZero', 'WifiZeroIcon', 'Wind', 'WindArrowDown', 'WindArrowDownIcon', 'WindIcon', 'Wine', 'WineIcon', 'WineOff', 'WineOffIcon', 'Workflow', 'WorkflowIcon', 'Worm', 'WormIcon', 'WrapText', 'WrapTextIcon', 'Wrench', 'WrenchIcon', 'X', 'XCircle', 'XCircleIcon', 'XIcon', 'XOctagon', 'XOctagonIcon', 'XSquare', 'XSquareIcon', 'Youtube', 'YoutubeIcon', 'Zap', 'ZapIcon', 'ZapOff', 'ZapOffIcon', 'ZoomIn', 'ZoomInIcon', 'ZoomOut', 'ZoomOutIcon', 'createLucideIcon', 'default', 'icons');
  CREATE TYPE "public"."enum_pages_blocks_embed_code_width_mode" AS ENUM('content', 'full', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_feature_highlights_spacing_preset" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_feature_highlights_background_theme" AS ENUM('default', 'light', 'dark', 'primary');
  CREATE TYPE "public"."enum_pages_blocks_feature_highlights_content_alignment" AS ENUM('start', 'center', 'end');
  CREATE TYPE "public"."enum_pages_blocks_text_section_cta_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_text_section_cta_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_text_section_text_alignment" AS ENUM('start', 'center', 'end');
  CREATE TYPE "public"."enum_pages_blocks_text_section_spacing_preset" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_text_section_background_theme" AS ENUM('default', 'light', 'dark', 'primary');
  CREATE TYPE "public"."enum_pages_blocks_text_section_content_alignment" AS ENUM('start', 'center', 'end');
  CREATE TYPE "public"."enum_pages_blocks_image_content_cta_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_image_content_cta_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_image_content_text_placement" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_pages_blocks_image_content_spacing_preset" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_image_content_background_theme" AS ENUM('default', 'light', 'dark', 'primary');
  CREATE TYPE "public"."enum_pages_blocks_image_content_content_alignment" AS ENUM('start', 'center', 'end');
  CREATE TYPE "public"."enum_pages_blocks_faq_text_alignment" AS ENUM('start', 'center', 'end');
  CREATE TYPE "public"."enum_pages_blocks_faq_spacing_preset" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_faq_background_theme" AS ENUM('default', 'light', 'dark', 'primary');
  CREATE TYPE "public"."enum_pages_blocks_faq_content_alignment" AS ENUM('start', 'center', 'end');
  CREATE TYPE "public"."enum_pages_blocks_faq_grid_spacing_preset" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_faq_grid_background_theme" AS ENUM('default', 'light', 'dark', 'primary');
  CREATE TYPE "public"."enum_pages_blocks_faq_grid_content_alignment" AS ENUM('start', 'center', 'end');
  CREATE TYPE "public"."enum_pages_blocks_testimonial1_spacing_preset" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_testimonial1_background_theme" AS ENUM('default', 'light', 'dark', 'primary');
  CREATE TYPE "public"."enum_pages_blocks_testimonial1_content_alignment" AS ENUM('start', 'center', 'end');
  CREATE TYPE "public"."enum_pages_blocks_testimonial3_cta_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_testimonial3_cta_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_testimonial3_spacing_preset" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_testimonial3_background_theme" AS ENUM('default', 'light', 'dark', 'primary');
  CREATE TYPE "public"."enum_pages_blocks_testimonial3_content_alignment" AS ENUM('start', 'center', 'end');
  CREATE TYPE "public"."enum_pages_blocks_testimonial4_testimonials_rating" AS ENUM('5', '4.5', '4', '3.5', '3');
  CREATE TYPE "public"."enum_pages_blocks_testimonial4_cta_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_testimonial4_cta_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_testimonial4_spacing_preset" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_testimonial4_background_theme" AS ENUM('default', 'light', 'dark', 'primary');
  CREATE TYPE "public"."enum_pages_blocks_testimonial4_content_alignment" AS ENUM('start', 'center', 'end');
  CREATE TYPE "public"."enum_pages_blocks_testimonial_grid_spacing_preset" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_testimonial_grid_background_theme" AS ENUM('default', 'light', 'dark', 'primary');
  CREATE TYPE "public"."enum_pages_blocks_testimonial_grid_content_alignment" AS ENUM('start', 'center', 'end');
  CREATE TYPE "public"."enum_pages_blocks_pricing1_plans_cta_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_pricing1_plans_cta_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_pricing1_spacing_preset" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_pricing1_background_theme" AS ENUM('default', 'light', 'dark', 'primary');
  CREATE TYPE "public"."enum_pages_blocks_pricing1_content_alignment" AS ENUM('start', 'center', 'end');
  CREATE TYPE "public"."enum_pages_blocks_logo_carousel_populate_by" AS ENUM('collection', 'selection');
  CREATE TYPE "public"."enum_pages_blocks_logo_carousel_collection_type" AS ENUM('clients', 'institutes', 'technologies');
  CREATE TYPE "public"."enum_pages_blocks_logo_carousel_logo_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum_pages_hero_type" AS ENUM('none', 'highImpact', 'mediumImpact', 'lowImpact');
  CREATE TYPE "public"."enum_pages_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__pages_v_version_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_version_hero_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
  CREATE TYPE "public"."enum__pages_v_blocks_content_columns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_content_columns_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_card_cta_primary_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_card_cta_primary_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_card_cta_secondary_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_card_cta_secondary_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_card_variant" AS ENUM('default', 'muted', 'card');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_card_text_alignment" AS ENUM('start', 'center', 'end');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_card_spacing_preset" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_card_background_theme" AS ENUM('default', 'light', 'dark', 'primary');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_card_content_alignment" AS ENUM('start', 'center', 'end');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_section_cta_primary_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_section_cta_primary_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_section_cta_secondary_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_section_cta_secondary_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_section_text_alignment" AS ENUM('start', 'center', 'end');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_section_spacing_preset" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_section_background_theme" AS ENUM('default', 'light', 'dark', 'primary');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_section_content_alignment" AS ENUM('start', 'center', 'end');
  CREATE TYPE "public"."enum__pages_v_blocks_media_block_width_type" AS ENUM('full', 'max');
  CREATE TYPE "public"."enum__pages_v_blocks_media_block_width_preset" AS ENUM('custom', '1/2', '1/3', '2/3', '1/4', '3/4');
  CREATE TYPE "public"."enum__pages_v_blocks_media_block_width_alignment" AS ENUM('left', 'center', 'right');
  CREATE TYPE "public"."enum__pages_v_blocks_media_block_aspect_ratio" AS ENUM('auto', '16/9', '4/3', '1/1', '3/2', '2/3', '21/9');
  CREATE TYPE "public"."enum__pages_v_blocks_media_block_shadow" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_archive_populate_by" AS ENUM('collection', 'selection');
  CREATE TYPE "public"."enum__pages_v_blocks_archive_relation_to" AS ENUM('posts', 'projects');
  CREATE TYPE "public"."enum__pages_v_blocks_signup_c_t_a_buttons_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_signup_c_t_a_buttons_style" AS ENUM('default', 'primary', 'secondary', 'outline', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_signup_c_t_a_buttons_icon" AS ENUM('none', 'google', 'email');
  CREATE TYPE "public"."enum__pages_v_blocks_two_column_text_image_links_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_two_column_text_image_links_appearance" AS ENUM('default', 'primary', 'secondary', 'outline', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_two_column_text_image_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum__pages_v_blocks_profile_with_image_media_display_alignment" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum__pages_v_blocks_pricing_card_icon" AS ENUM('AArrowDown', 'AArrowDownIcon', 'AArrowUp', 'AArrowUpIcon', 'ALargeSmall', 'ALargeSmallIcon', 'Accessibility', 'AccessibilityIcon', 'Activity', 'ActivityIcon', 'ActivitySquare', 'ActivitySquareIcon', 'AirVent', 'AirVentIcon', 'Airplay', 'AirplayIcon', 'AlarmCheck', 'AlarmCheckIcon', 'AlarmClock', 'AlarmClockCheck', 'AlarmClockCheckIcon', 'AlarmClockIcon', 'AlarmClockMinus', 'AlarmClockMinusIcon', 'AlarmClockOff', 'AlarmClockOffIcon', 'AlarmClockPlus', 'AlarmClockPlusIcon', 'AlarmMinus', 'AlarmMinusIcon', 'AlarmPlus', 'AlarmPlusIcon', 'AlarmSmoke', 'AlarmSmokeIcon', 'Album', 'AlbumIcon', 'AlertCircle', 'AlertCircleIcon', 'AlertOctagon', 'AlertOctagonIcon', 'AlertTriangle', 'AlertTriangleIcon', 'AlignCenter', 'AlignCenterHorizontal', 'AlignCenterHorizontalIcon', 'AlignCenterIcon', 'AlignCenterVertical', 'AlignCenterVerticalIcon', 'AlignEndHorizontal', 'AlignEndHorizontalIcon', 'AlignEndVertical', 'AlignEndVerticalIcon', 'AlignHorizontalDistributeCenter', 'AlignHorizontalDistributeCenterIcon', 'AlignHorizontalDistributeEnd', 'AlignHorizontalDistributeEndIcon', 'AlignHorizontalDistributeStart', 'AlignHorizontalDistributeStartIcon', 'AlignHorizontalJustifyCenter', 'AlignHorizontalJustifyCenterIcon', 'AlignHorizontalJustifyEnd', 'AlignHorizontalJustifyEndIcon', 'AlignHorizontalJustifyStart', 'AlignHorizontalJustifyStartIcon', 'AlignHorizontalSpaceAround', 'AlignHorizontalSpaceAroundIcon', 'AlignHorizontalSpaceBetween', 'AlignHorizontalSpaceBetweenIcon', 'AlignJustify', 'AlignJustifyIcon', 'AlignLeft', 'AlignLeftIcon', 'AlignRight', 'AlignRightIcon', 'AlignStartHorizontal', 'AlignStartHorizontalIcon', 'AlignStartVertical', 'AlignStartVerticalIcon', 'AlignVerticalDistributeCenter', 'AlignVerticalDistributeCenterIcon', 'AlignVerticalDistributeEnd', 'AlignVerticalDistributeEndIcon', 'AlignVerticalDistributeStart', 'AlignVerticalDistributeStartIcon', 'AlignVerticalJustifyCenter', 'AlignVerticalJustifyCenterIcon', 'AlignVerticalJustifyEnd', 'AlignVerticalJustifyEndIcon', 'AlignVerticalJustifyStart', 'AlignVerticalJustifyStartIcon', 'AlignVerticalSpaceAround', 'AlignVerticalSpaceAroundIcon', 'AlignVerticalSpaceBetween', 'AlignVerticalSpaceBetweenIcon', 'Ambulance', 'AmbulanceIcon', 'Ampersand', 'AmpersandIcon', 'Ampersands', 'AmpersandsIcon', 'Amphora', 'AmphoraIcon', 'Anchor', 'AnchorIcon', 'Angry', 'AngryIcon', 'Annoyed', 'AnnoyedIcon', 'Antenna', 'AntennaIcon', 'Anvil', 'AnvilIcon', 'Aperture', 'ApertureIcon', 'AppWindow', 'AppWindowIcon', 'AppWindowMac', 'AppWindowMacIcon', 'Apple', 'AppleIcon', 'Archive', 'ArchiveIcon', 'ArchiveRestore', 'ArchiveRestoreIcon', 'ArchiveX', 'ArchiveXIcon', 'AreaChart', 'AreaChartIcon', 'Armchair', 'ArmchairIcon', 'ArrowBigDown', 'ArrowBigDownDash', 'ArrowBigDownDashIcon', 'ArrowBigDownIcon', 'ArrowBigLeft', 'ArrowBigLeftDash', 'ArrowBigLeftDashIcon', 'ArrowBigLeftIcon', 'ArrowBigRight', 'ArrowBigRightDash', 'ArrowBigRightDashIcon', 'ArrowBigRightIcon', 'ArrowBigUp', 'ArrowBigUpDash', 'ArrowBigUpDashIcon', 'ArrowBigUpIcon', 'ArrowDown', 'ArrowDown01', 'ArrowDown01Icon', 'ArrowDown10', 'ArrowDown10Icon', 'ArrowDownAZ', 'ArrowDownAZIcon', 'ArrowDownAz', 'ArrowDownAzIcon', 'ArrowDownCircle', 'ArrowDownCircleIcon', 'ArrowDownFromLine', 'ArrowDownFromLineIcon', 'ArrowDownIcon', 'ArrowDownLeft', 'ArrowDownLeftFromCircle', 'ArrowDownLeftFromCircleIcon', 'ArrowDownLeftFromSquare', 'ArrowDownLeftFromSquareIcon', 'ArrowDownLeftIcon', 'ArrowDownLeftSquare', 'ArrowDownLeftSquareIcon', 'ArrowDownNarrowWide', 'ArrowDownNarrowWideIcon', 'ArrowDownRight', 'ArrowDownRightFromCircle', 'ArrowDownRightFromCircleIcon', 'ArrowDownRightFromSquare', 'ArrowDownRightFromSquareIcon', 'ArrowDownRightIcon', 'ArrowDownRightSquare', 'ArrowDownRightSquareIcon', 'ArrowDownSquare', 'ArrowDownSquareIcon', 'ArrowDownToDot', 'ArrowDownToDotIcon', 'ArrowDownToLine', 'ArrowDownToLineIcon', 'ArrowDownUp', 'ArrowDownUpIcon', 'ArrowDownWideNarrow', 'ArrowDownWideNarrowIcon', 'ArrowDownZA', 'ArrowDownZAIcon', 'ArrowDownZa', 'ArrowDownZaIcon', 'ArrowLeft', 'ArrowLeftCircle', 'ArrowLeftCircleIcon', 'ArrowLeftFromLine', 'ArrowLeftFromLineIcon', 'ArrowLeftIcon', 'ArrowLeftRight', 'ArrowLeftRightIcon', 'ArrowLeftSquare', 'ArrowLeftSquareIcon', 'ArrowLeftToLine', 'ArrowLeftToLineIcon', 'ArrowRight', 'ArrowRightCircle', 'ArrowRightCircleIcon', 'ArrowRightFromLine', 'ArrowRightFromLineIcon', 'ArrowRightIcon', 'ArrowRightLeft', 'ArrowRightLeftIcon', 'ArrowRightSquare', 'ArrowRightSquareIcon', 'ArrowRightToLine', 'ArrowRightToLineIcon', 'ArrowUp', 'ArrowUp01', 'ArrowUp01Icon', 'ArrowUp10', 'ArrowUp10Icon', 'ArrowUpAZ', 'ArrowUpAZIcon', 'ArrowUpAz', 'ArrowUpAzIcon', 'ArrowUpCircle', 'ArrowUpCircleIcon', 'ArrowUpDown', 'ArrowUpDownIcon', 'ArrowUpFromDot', 'ArrowUpFromDotIcon', 'ArrowUpFromLine', 'ArrowUpFromLineIcon', 'ArrowUpIcon', 'ArrowUpLeft', 'ArrowUpLeftFromCircle', 'ArrowUpLeftFromCircleIcon', 'ArrowUpLeftFromSquare', 'ArrowUpLeftFromSquareIcon', 'ArrowUpLeftIcon', 'ArrowUpLeftSquare', 'ArrowUpLeftSquareIcon', 'ArrowUpNarrowWide', 'ArrowUpNarrowWideIcon', 'ArrowUpRight', 'ArrowUpRightFromCircle', 'ArrowUpRightFromCircleIcon', 'ArrowUpRightFromSquare', 'ArrowUpRightFromSquareIcon', 'ArrowUpRightIcon', 'ArrowUpRightSquare', 'ArrowUpRightSquareIcon', 'ArrowUpSquare', 'ArrowUpSquareIcon', 'ArrowUpToLine', 'ArrowUpToLineIcon', 'ArrowUpWideNarrow', 'ArrowUpWideNarrowIcon', 'ArrowUpZA', 'ArrowUpZAIcon', 'ArrowUpZa', 'ArrowUpZaIcon', 'ArrowsUpFromLine', 'ArrowsUpFromLineIcon', 'Asterisk', 'AsteriskIcon', 'AsteriskSquare', 'AsteriskSquareIcon', 'AtSign', 'AtSignIcon', 'Atom', 'AtomIcon', 'AudioLines', 'AudioLinesIcon', 'AudioWaveform', 'AudioWaveformIcon', 'Award', 'AwardIcon', 'Axe', 'AxeIcon', 'Axis3D', 'Axis3DIcon', 'Axis3d', 'Axis3dIcon', 'Baby', 'BabyIcon', 'Backpack', 'BackpackIcon', 'Badge', 'BadgeAlert', 'BadgeAlertIcon', 'BadgeCent', 'BadgeCentIcon', 'BadgeCheck', 'BadgeCheckIcon', 'BadgeDollarSign', 'BadgeDollarSignIcon', 'BadgeEuro', 'BadgeEuroIcon', 'BadgeHelp', 'BadgeHelpIcon', 'BadgeIcon', 'BadgeIndianRupee', 'BadgeIndianRupeeIcon', 'BadgeInfo', 'BadgeInfoIcon', 'BadgeJapaneseYen', 'BadgeJapaneseYenIcon', 'BadgeMinus', 'BadgeMinusIcon', 'BadgePercent', 'BadgePercentIcon', 'BadgePlus', 'BadgePlusIcon', 'BadgePoundSterling', 'BadgePoundSterlingIcon', 'BadgeQuestionMark', 'BadgeQuestionMarkIcon', 'BadgeRussianRuble', 'BadgeRussianRubleIcon', 'BadgeSwissFranc', 'BadgeSwissFrancIcon', 'BadgeTurkishLira', 'BadgeTurkishLiraIcon', 'BadgeX', 'BadgeXIcon', 'BaggageClaim', 'BaggageClaimIcon', 'Balloon', 'BalloonIcon', 'Ban', 'BanIcon', 'Banana', 'BananaIcon', 'Bandage', 'BandageIcon', 'Banknote', 'BanknoteArrowDown', 'BanknoteArrowDownIcon', 'BanknoteArrowUp', 'BanknoteArrowUpIcon', 'BanknoteIcon', 'BanknoteX', 'BanknoteXIcon', 'BarChart', 'BarChart2', 'BarChart2Icon', 'BarChart3', 'BarChart3Icon', 'BarChart4', 'BarChart4Icon', 'BarChartBig', 'BarChartBigIcon', 'BarChartHorizontal', 'BarChartHorizontalBig', 'BarChartHorizontalBigIcon', 'BarChartHorizontalIcon', 'BarChartIcon', 'Barcode', 'BarcodeIcon', 'Barrel', 'BarrelIcon', 'Baseline', 'BaselineIcon', 'Bath', 'BathIcon', 'Battery', 'BatteryCharging', 'BatteryChargingIcon', 'BatteryFull', 'BatteryFullIcon', 'BatteryIcon', 'BatteryLow', 'BatteryLowIcon', 'BatteryMedium', 'BatteryMediumIcon', 'BatteryPlus', 'BatteryPlusIcon', 'BatteryWarning', 'BatteryWarningIcon', 'Beaker', 'BeakerIcon', 'Bean', 'BeanIcon', 'BeanOff', 'BeanOffIcon', 'Bed', 'BedDouble', 'BedDoubleIcon', 'BedIcon', 'BedSingle', 'BedSingleIcon', 'Beef', 'BeefIcon', 'Beer', 'BeerIcon', 'BeerOff', 'BeerOffIcon', 'Bell', 'BellDot', 'BellDotIcon', 'BellElectric', 'BellElectricIcon', 'BellIcon', 'BellMinus', 'BellMinusIcon', 'BellOff', 'BellOffIcon', 'BellPlus', 'BellPlusIcon', 'BellRing', 'BellRingIcon', 'BetweenHorizonalEnd', 'BetweenHorizonalEndIcon', 'BetweenHorizonalStart', 'BetweenHorizonalStartIcon', 'BetweenHorizontalEnd', 'BetweenHorizontalEndIcon', 'BetweenHorizontalStart', 'BetweenHorizontalStartIcon', 'BetweenVerticalEnd', 'BetweenVerticalEndIcon', 'BetweenVerticalStart', 'BetweenVerticalStartIcon', 'BicepsFlexed', 'BicepsFlexedIcon', 'Bike', 'BikeIcon', 'Binary', 'BinaryIcon', 'Binoculars', 'BinocularsIcon', 'Biohazard', 'BiohazardIcon', 'Bird', 'BirdIcon', 'Birdhouse', 'BirdhouseIcon', 'Bitcoin', 'BitcoinIcon', 'Blend', 'BlendIcon', 'Blinds', 'BlindsIcon', 'Blocks', 'BlocksIcon', 'Bluetooth', 'BluetoothConnected', 'BluetoothConnectedIcon', 'BluetoothIcon', 'BluetoothOff', 'BluetoothOffIcon', 'BluetoothSearching', 'BluetoothSearchingIcon', 'Bold', 'BoldIcon', 'Bolt', 'BoltIcon', 'Bomb', 'BombIcon', 'Bone', 'BoneIcon', 'Book', 'BookA', 'BookAIcon', 'BookAlert', 'BookAlertIcon', 'BookAudio', 'BookAudioIcon', 'BookCheck', 'BookCheckIcon', 'BookCopy', 'BookCopyIcon', 'BookDashed', 'BookDashedIcon', 'BookDown', 'BookDownIcon', 'BookHeadphones', 'BookHeadphonesIcon', 'BookHeart', 'BookHeartIcon', 'BookIcon', 'BookImage', 'BookImageIcon', 'BookKey', 'BookKeyIcon', 'BookLock', 'BookLockIcon', 'BookMarked', 'BookMarkedIcon', 'BookMinus', 'BookMinusIcon', 'BookOpen', 'BookOpenCheck', 'BookOpenCheckIcon', 'BookOpenIcon', 'BookOpenText', 'BookOpenTextIcon', 'BookPlus', 'BookPlusIcon', 'BookSearch', 'BookSearchIcon', 'BookTemplate', 'BookTemplateIcon', 'BookText', 'BookTextIcon', 'BookType', 'BookTypeIcon', 'BookUp', 'BookUp2', 'BookUp2Icon', 'BookUpIcon', 'BookUser', 'BookUserIcon', 'BookX', 'BookXIcon', 'Bookmark', 'BookmarkCheck', 'BookmarkCheckIcon', 'BookmarkIcon', 'BookmarkMinus', 'BookmarkMinusIcon', 'BookmarkPlus', 'BookmarkPlusIcon', 'BookmarkX', 'BookmarkXIcon', 'BoomBox', 'BoomBoxIcon', 'Bot', 'BotIcon', 'BotMessageSquare', 'BotMessageSquareIcon', 'BotOff', 'BotOffIcon', 'BottleWine', 'BottleWineIcon', 'BowArrow', 'BowArrowIcon', 'Box', 'BoxIcon', 'BoxSelect', 'BoxSelectIcon', 'Boxes', 'BoxesIcon', 'Braces', 'BracesIcon', 'Brackets', 'BracketsIcon', 'Brain', 'BrainCircuit', 'BrainCircuitIcon', 'BrainCog', 'BrainCogIcon', 'BrainIcon', 'BrickWall', 'BrickWallFire', 'BrickWallFireIcon', 'BrickWallIcon', 'BrickWallShield', 'BrickWallShieldIcon', 'Briefcase', 'BriefcaseBusiness', 'BriefcaseBusinessIcon', 'BriefcaseConveyorBelt', 'BriefcaseConveyorBeltIcon', 'BriefcaseIcon', 'BriefcaseMedical', 'BriefcaseMedicalIcon', 'BringToFront', 'BringToFrontIcon', 'Brush', 'BrushCleaning', 'BrushCleaningIcon', 'BrushIcon', 'Bubbles', 'BubblesIcon', 'Bug', 'BugIcon', 'BugOff', 'BugOffIcon', 'BugPlay', 'BugPlayIcon', 'Building', 'Building2', 'Building2Icon', 'BuildingIcon', 'Bus', 'BusFront', 'BusFrontIcon', 'BusIcon', 'Cable', 'CableCar', 'CableCarIcon', 'CableIcon', 'Cake', 'CakeIcon', 'CakeSlice', 'CakeSliceIcon', 'Calculator', 'CalculatorIcon', 'Calendar', 'Calendar1', 'Calendar1Icon', 'CalendarArrowDown', 'CalendarArrowDownIcon', 'CalendarArrowUp', 'CalendarArrowUpIcon', 'CalendarCheck', 'CalendarCheck2', 'CalendarCheck2Icon', 'CalendarCheckIcon', 'CalendarClock', 'CalendarClockIcon', 'CalendarCog', 'CalendarCogIcon', 'CalendarDays', 'CalendarDaysIcon', 'CalendarFold', 'CalendarFoldIcon', 'CalendarHeart', 'CalendarHeartIcon', 'CalendarIcon', 'CalendarMinus', 'CalendarMinus2', 'CalendarMinus2Icon', 'CalendarMinusIcon', 'CalendarOff', 'CalendarOffIcon', 'CalendarPlus', 'CalendarPlus2', 'CalendarPlus2Icon', 'CalendarPlusIcon', 'CalendarRange', 'CalendarRangeIcon', 'CalendarSearch', 'CalendarSearchIcon', 'CalendarSync', 'CalendarSyncIcon', 'CalendarX', 'CalendarX2', 'CalendarX2Icon', 'CalendarXIcon', 'Calendars', 'CalendarsIcon', 'Camera', 'CameraIcon', 'CameraOff', 'CameraOffIcon', 'CandlestickChart', 'CandlestickChartIcon', 'Candy', 'CandyCane', 'CandyCaneIcon', 'CandyIcon', 'CandyOff', 'CandyOffIcon', 'Cannabis', 'CannabisIcon', 'CannabisOff', 'CannabisOffIcon', 'Captions', 'CaptionsIcon', 'CaptionsOff', 'CaptionsOffIcon', 'Car', 'CarFront', 'CarFrontIcon', 'CarIcon', 'CarTaxiFront', 'CarTaxiFrontIcon', 'Caravan', 'CaravanIcon', 'CardSim', 'CardSimIcon', 'Carrot', 'CarrotIcon', 'CaseLower', 'CaseLowerIcon', 'CaseSensitive', 'CaseSensitiveIcon', 'CaseUpper', 'CaseUpperIcon', 'CassetteTape', 'CassetteTapeIcon', 'Cast', 'CastIcon', 'Castle', 'CastleIcon', 'Cat', 'CatIcon', 'Cctv', 'CctvIcon', 'ChartArea', 'ChartAreaIcon', 'ChartBar', 'ChartBarBig', 'ChartBarBigIcon', 'ChartBarDecreasing', 'ChartBarDecreasingIcon', 'ChartBarIcon', 'ChartBarIncreasing', 'ChartBarIncreasingIcon', 'ChartBarStacked', 'ChartBarStackedIcon', 'ChartCandlestick', 'ChartCandlestickIcon', 'ChartColumn', 'ChartColumnBig', 'ChartColumnBigIcon', 'ChartColumnDecreasing', 'ChartColumnDecreasingIcon', 'ChartColumnIcon', 'ChartColumnIncreasing', 'ChartColumnIncreasingIcon', 'ChartColumnStacked', 'ChartColumnStackedIcon', 'ChartGantt', 'ChartGanttIcon', 'ChartLine', 'ChartLineIcon', 'ChartNetwork', 'ChartNetworkIcon', 'ChartNoAxesColumn', 'ChartNoAxesColumnDecreasing', 'ChartNoAxesColumnDecreasingIcon', 'ChartNoAxesColumnIcon', 'ChartNoAxesColumnIncreasing', 'ChartNoAxesColumnIncreasingIcon', 'ChartNoAxesCombined', 'ChartNoAxesCombinedIcon', 'ChartNoAxesGantt', 'ChartNoAxesGanttIcon', 'ChartPie', 'ChartPieIcon', 'ChartScatter', 'ChartScatterIcon', 'ChartSpline', 'ChartSplineIcon', 'Check', 'CheckCheck', 'CheckCheckIcon', 'CheckCircle', 'CheckCircle2', 'CheckCircle2Icon', 'CheckCircleIcon', 'CheckIcon', 'CheckLine', 'CheckLineIcon', 'CheckSquare', 'CheckSquare2', 'CheckSquare2Icon', 'CheckSquareIcon', 'ChefHat', 'ChefHatIcon', 'Cherry', 'CherryIcon', 'ChessBishop', 'ChessBishopIcon', 'ChessKing', 'ChessKingIcon', 'ChessKnight', 'ChessKnightIcon', 'ChessPawn', 'ChessPawnIcon', 'ChessQueen', 'ChessQueenIcon', 'ChessRook', 'ChessRookIcon', 'ChevronDown', 'ChevronDownCircle', 'ChevronDownCircleIcon', 'ChevronDownIcon', 'ChevronDownSquare', 'ChevronDownSquareIcon', 'ChevronFirst', 'ChevronFirstIcon', 'ChevronLast', 'ChevronLastIcon', 'ChevronLeft', 'ChevronLeftCircle', 'ChevronLeftCircleIcon', 'ChevronLeftIcon', 'ChevronLeftSquare', 'ChevronLeftSquareIcon', 'ChevronRight', 'ChevronRightCircle', 'ChevronRightCircleIcon', 'ChevronRightIcon', 'ChevronRightSquare', 'ChevronRightSquareIcon', 'ChevronUp', 'ChevronUpCircle', 'ChevronUpCircleIcon', 'ChevronUpIcon', 'ChevronUpSquare', 'ChevronUpSquareIcon', 'ChevronsDown', 'ChevronsDownIcon', 'ChevronsDownUp', 'ChevronsDownUpIcon', 'ChevronsLeft', 'ChevronsLeftIcon', 'ChevronsLeftRight', 'ChevronsLeftRightEllipsis', 'ChevronsLeftRightEllipsisIcon', 'ChevronsLeftRightIcon', 'ChevronsRight', 'ChevronsRightIcon', 'ChevronsRightLeft', 'ChevronsRightLeftIcon', 'ChevronsUp', 'ChevronsUpDown', 'ChevronsUpDownIcon', 'ChevronsUpIcon', 'Chrome', 'ChromeIcon', 'Chromium', 'ChromiumIcon', 'Church', 'ChurchIcon', 'Cigarette', 'CigaretteIcon', 'CigaretteOff', 'CigaretteOffIcon', 'Circle', 'CircleAlert', 'CircleAlertIcon', 'CircleArrowDown', 'CircleArrowDownIcon', 'CircleArrowLeft', 'CircleArrowLeftIcon', 'CircleArrowOutDownLeft', 'CircleArrowOutDownLeftIcon', 'CircleArrowOutDownRight', 'CircleArrowOutDownRightIcon', 'CircleArrowOutUpLeft', 'CircleArrowOutUpLeftIcon', 'CircleArrowOutUpRight', 'CircleArrowOutUpRightIcon', 'CircleArrowRight', 'CircleArrowRightIcon', 'CircleArrowUp', 'CircleArrowUpIcon', 'CircleCheck', 'CircleCheckBig', 'CircleCheckBigIcon', 'CircleCheckIcon', 'CircleChevronDown', 'CircleChevronDownIcon', 'CircleChevronLeft', 'CircleChevronLeftIcon', 'CircleChevronRight', 'CircleChevronRightIcon', 'CircleChevronUp', 'CircleChevronUpIcon', 'CircleDashed', 'CircleDashedIcon', 'CircleDivide', 'CircleDivideIcon', 'CircleDollarSign', 'CircleDollarSignIcon', 'CircleDot', 'CircleDotDashed', 'CircleDotDashedIcon', 'CircleDotIcon', 'CircleEllipsis', 'CircleEllipsisIcon', 'CircleEqual', 'CircleEqualIcon', 'CircleFadingArrowUp', 'CircleFadingArrowUpIcon', 'CircleFadingPlus', 'CircleFadingPlusIcon', 'CircleGauge', 'CircleGaugeIcon', 'CircleHelp', 'CircleHelpIcon', 'CircleIcon', 'CircleMinus', 'CircleMinusIcon', 'CircleOff', 'CircleOffIcon', 'CircleParking', 'CircleParkingIcon', 'CircleParkingOff', 'CircleParkingOffIcon', 'CirclePause', 'CirclePauseIcon', 'CirclePercent', 'CirclePercentIcon', 'CirclePile', 'CirclePileIcon', 'CirclePlay', 'CirclePlayIcon', 'CirclePlus', 'CirclePlusIcon', 'CirclePoundSterling', 'CirclePoundSterlingIcon', 'CirclePower', 'CirclePowerIcon', 'CircleQuestionMark', 'CircleQuestionMarkIcon', 'CircleSlash', 'CircleSlash2', 'CircleSlash2Icon', 'CircleSlashIcon', 'CircleSlashed', 'CircleSlashedIcon', 'CircleSmall', 'CircleSmallIcon', 'CircleStar', 'CircleStarIcon', 'CircleStop', 'CircleStopIcon', 'CircleUser', 'CircleUserIcon', 'CircleUserRound', 'CircleUserRoundIcon', 'CircleX', 'CircleXIcon', 'CircuitBoard', 'CircuitBoardIcon', 'Citrus', 'CitrusIcon', 'Clapperboard', 'ClapperboardIcon', 'Clipboard', 'ClipboardCheck', 'ClipboardCheckIcon', 'ClipboardClock', 'ClipboardClockIcon', 'ClipboardCopy', 'ClipboardCopyIcon', 'ClipboardEdit', 'ClipboardEditIcon', 'ClipboardIcon', 'ClipboardList', 'ClipboardListIcon', 'ClipboardMinus', 'ClipboardMinusIcon', 'ClipboardPaste', 'ClipboardPasteIcon', 'ClipboardPen', 'ClipboardPenIcon', 'ClipboardPenLine', 'ClipboardPenLineIcon', 'ClipboardPlus', 'ClipboardPlusIcon', 'ClipboardSignature', 'ClipboardSignatureIcon', 'ClipboardType', 'ClipboardTypeIcon', 'ClipboardX', 'ClipboardXIcon', 'Clock', 'Clock1', 'Clock10', 'Clock10Icon', 'Clock11', 'Clock11Icon', 'Clock12', 'Clock12Icon', 'Clock1Icon', 'Clock2', 'Clock2Icon', 'Clock3', 'Clock3Icon', 'Clock4', 'Clock4Icon', 'Clock5', 'Clock5Icon', 'Clock6', 'Clock6Icon', 'Clock7', 'Clock7Icon', 'Clock8', 'Clock8Icon', 'Clock9', 'Clock9Icon', 'ClockAlert', 'ClockAlertIcon', 'ClockArrowDown', 'ClockArrowDownIcon', 'ClockArrowUp', 'ClockArrowUpIcon', 'ClockCheck', 'ClockCheckIcon', 'ClockFading', 'ClockFadingIcon', 'ClockIcon', 'ClockPlus', 'ClockPlusIcon', 'ClosedCaption', 'ClosedCaptionIcon', 'Cloud', 'CloudAlert', 'CloudAlertIcon', 'CloudBackup', 'CloudBackupIcon', 'CloudCheck', 'CloudCheckIcon', 'CloudCog', 'CloudCogIcon', 'CloudDownload', 'CloudDownloadIcon', 'CloudDrizzle', 'CloudDrizzleIcon', 'CloudFog', 'CloudFogIcon', 'CloudHail', 'CloudHailIcon', 'CloudIcon', 'CloudLightning', 'CloudLightningIcon', 'CloudMoon', 'CloudMoonIcon', 'CloudMoonRain', 'CloudMoonRainIcon', 'CloudOff', 'CloudOffIcon', 'CloudRain', 'CloudRainIcon', 'CloudRainWind', 'CloudRainWindIcon', 'CloudSnow', 'CloudSnowIcon', 'CloudSun', 'CloudSunIcon', 'CloudSunRain', 'CloudSunRainIcon', 'CloudSync', 'CloudSyncIcon', 'CloudUpload', 'CloudUploadIcon', 'Cloudy', 'CloudyIcon', 'Clover', 'CloverIcon', 'Club', 'ClubIcon', 'Code', 'Code2', 'Code2Icon', 'CodeIcon', 'CodeSquare', 'CodeSquareIcon', 'CodeXml', 'CodeXmlIcon', 'Codepen', 'CodepenIcon', 'Codesandbox', 'CodesandboxIcon', 'Coffee', 'CoffeeIcon', 'Cog', 'CogIcon', 'Coins', 'CoinsIcon', 'Columns', 'Columns2', 'Columns2Icon', 'Columns3', 'Columns3Cog', 'Columns3CogIcon', 'Columns3Icon', 'Columns4', 'Columns4Icon', 'ColumnsIcon', 'ColumnsSettings', 'ColumnsSettingsIcon', 'Combine', 'CombineIcon', 'Command', 'CommandIcon', 'Compass', 'CompassIcon', 'Component', 'ComponentIcon', 'Computer', 'ComputerIcon', 'ConciergeBell', 'ConciergeBellIcon', 'Cone', 'ConeIcon', 'Construction', 'ConstructionIcon', 'Contact', 'Contact2', 'Contact2Icon', 'ContactIcon', 'ContactRound', 'ContactRoundIcon', 'Container', 'ContainerIcon', 'Contrast', 'ContrastIcon', 'Cookie', 'CookieIcon', 'CookingPot', 'CookingPotIcon', 'Copy', 'CopyCheck', 'CopyCheckIcon', 'CopyIcon', 'CopyMinus', 'CopyMinusIcon', 'CopyPlus', 'CopyPlusIcon', 'CopySlash', 'CopySlashIcon', 'CopyX', 'CopyXIcon', 'Copyleft', 'CopyleftIcon', 'Copyright', 'CopyrightIcon', 'CornerDownLeft', 'CornerDownLeftIcon', 'CornerDownRight', 'CornerDownRightIcon', 'CornerLeftDown', 'CornerLeftDownIcon', 'CornerLeftUp', 'CornerLeftUpIcon', 'CornerRightDown', 'CornerRightDownIcon', 'CornerRightUp', 'CornerRightUpIcon', 'CornerUpLeft', 'CornerUpLeftIcon', 'CornerUpRight', 'CornerUpRightIcon', 'Cpu', 'CpuIcon', 'CreativeCommons', 'CreativeCommonsIcon', 'CreditCard', 'CreditCardIcon', 'Croissant', 'CroissantIcon', 'Crop', 'CropIcon', 'Cross', 'CrossIcon', 'Crosshair', 'CrosshairIcon', 'Crown', 'CrownIcon', 'Cuboid', 'CuboidIcon', 'CupSoda', 'CupSodaIcon', 'CurlyBraces', 'CurlyBracesIcon', 'Currency', 'CurrencyIcon', 'Cylinder', 'CylinderIcon', 'Dam', 'DamIcon', 'Database', 'DatabaseBackup', 'DatabaseBackupIcon', 'DatabaseIcon', 'DatabaseZap', 'DatabaseZapIcon', 'DecimalsArrowLeft', 'DecimalsArrowLeftIcon', 'DecimalsArrowRight', 'DecimalsArrowRightIcon', 'Delete', 'DeleteIcon', 'Dessert', 'DessertIcon', 'Diameter', 'DiameterIcon', 'Diamond', 'DiamondIcon', 'DiamondMinus', 'DiamondMinusIcon', 'DiamondPercent', 'DiamondPercentIcon', 'DiamondPlus', 'DiamondPlusIcon', 'Dice1', 'Dice1Icon', 'Dice2', 'Dice2Icon', 'Dice3', 'Dice3Icon', 'Dice4', 'Dice4Icon', 'Dice5', 'Dice5Icon', 'Dice6', 'Dice6Icon', 'Dices', 'DicesIcon', 'Diff', 'DiffIcon', 'Disc', 'Disc2', 'Disc2Icon', 'Disc3', 'Disc3Icon', 'DiscAlbum', 'DiscAlbumIcon', 'DiscIcon', 'Divide', 'DivideCircle', 'DivideCircleIcon', 'DivideIcon', 'DivideSquare', 'DivideSquareIcon', 'Dna', 'DnaIcon', 'DnaOff', 'DnaOffIcon', 'Dock', 'DockIcon', 'Dog', 'DogIcon', 'DollarSign', 'DollarSignIcon', 'Donut', 'DonutIcon', 'DoorClosed', 'DoorClosedIcon', 'DoorClosedLocked', 'DoorClosedLockedIcon', 'DoorOpen', 'DoorOpenIcon', 'Dot', 'DotIcon', 'DotSquare', 'DotSquareIcon', 'Download', 'DownloadCloud', 'DownloadCloudIcon', 'DownloadIcon', 'DraftingCompass', 'DraftingCompassIcon', 'Drama', 'DramaIcon', 'Dribbble', 'DribbbleIcon', 'Drill', 'DrillIcon', 'Drone', 'DroneIcon', 'Droplet', 'DropletIcon', 'DropletOff', 'DropletOffIcon', 'Droplets', 'DropletsIcon', 'Drum', 'DrumIcon', 'Drumstick', 'DrumstickIcon', 'Dumbbell', 'DumbbellIcon', 'Ear', 'EarIcon', 'EarOff', 'EarOffIcon', 'Earth', 'EarthIcon', 'EarthLock', 'EarthLockIcon', 'Eclipse', 'EclipseIcon', 'Edit', 'Edit2', 'Edit2Icon', 'Edit3', 'Edit3Icon', 'EditIcon', 'Egg', 'EggFried', 'EggFriedIcon', 'EggIcon', 'EggOff', 'EggOffIcon', 'Ellipsis', 'EllipsisIcon', 'EllipsisVertical', 'EllipsisVerticalIcon', 'Equal', 'EqualApproximately', 'EqualApproximatelyIcon', 'EqualIcon', 'EqualNot', 'EqualNotIcon', 'EqualSquare', 'EqualSquareIcon', 'Eraser', 'EraserIcon', 'EthernetPort', 'EthernetPortIcon', 'Euro', 'EuroIcon', 'EvCharger', 'EvChargerIcon', 'Expand', 'ExpandIcon', 'ExternalLink', 'ExternalLinkIcon', 'Eye', 'EyeClosed', 'EyeClosedIcon', 'EyeIcon', 'EyeOff', 'EyeOffIcon', 'Facebook', 'FacebookIcon', 'Factory', 'FactoryIcon', 'Fan', 'FanIcon', 'FastForward', 'FastForwardIcon', 'Feather', 'FeatherIcon', 'Fence', 'FenceIcon', 'FerrisWheel', 'FerrisWheelIcon', 'Figma', 'FigmaIcon', 'File', 'FileArchive', 'FileArchiveIcon', 'FileAudio', 'FileAudio2', 'FileAudio2Icon', 'FileAudioIcon', 'FileAxis3D', 'FileAxis3DIcon', 'FileAxis3d', 'FileAxis3dIcon', 'FileBadge', 'FileBadge2', 'FileBadge2Icon', 'FileBadgeIcon', 'FileBarChart', 'FileBarChart2', 'FileBarChart2Icon', 'FileBarChartIcon', 'FileBox', 'FileBoxIcon', 'FileBraces', 'FileBracesCorner', 'FileBracesCornerIcon', 'FileBracesIcon', 'FileChartColumn', 'FileChartColumnIcon', 'FileChartColumnIncreasing', 'FileChartColumnIncreasingIcon', 'FileChartLine', 'FileChartLineIcon', 'FileChartPie', 'FileChartPieIcon', 'FileCheck', 'FileCheck2', 'FileCheck2Icon', 'FileCheckCorner', 'FileCheckCornerIcon', 'FileCheckIcon', 'FileClock', 'FileClockIcon', 'FileCode', 'FileCode2', 'FileCode2Icon', 'FileCodeCorner', 'FileCodeCornerIcon', 'FileCodeIcon', 'FileCog', 'FileCog2', 'FileCog2Icon', 'FileCogIcon', 'FileDiff', 'FileDiffIcon', 'FileDigit', 'FileDigitIcon', 'FileDown', 'FileDownIcon', 'FileEdit', 'FileEditIcon', 'FileExclamationPoint', 'FileExclamationPointIcon', 'FileHeadphone', 'FileHeadphoneIcon', 'FileHeart', 'FileHeartIcon', 'FileIcon', 'FileImage', 'FileImageIcon', 'FileInput', 'FileInputIcon', 'FileJson', 'FileJson2', 'FileJson2Icon', 'FileJsonIcon', 'FileKey', 'FileKey2', 'FileKey2Icon', 'FileKeyIcon', 'FileLineChart', 'FileLineChartIcon', 'FileLock', 'FileLock2', 'FileLock2Icon', 'FileLockIcon', 'FileMinus', 'FileMinus2', 'FileMinus2Icon', 'FileMinusCorner', 'FileMinusCornerIcon', 'FileMinusIcon', 'FileMusic', 'FileMusicIcon', 'FileOutput', 'FileOutputIcon', 'FilePen', 'FilePenIcon', 'FilePenLine', 'FilePenLineIcon', 'FilePieChart', 'FilePieChartIcon', 'FilePlay', 'FilePlayIcon', 'FilePlus', 'FilePlus2', 'FilePlus2Icon', 'FilePlusCorner', 'FilePlusCornerIcon', 'FilePlusIcon', 'FileQuestion', 'FileQuestionIcon', 'FileQuestionMark', 'FileQuestionMarkIcon', 'FileScan', 'FileScanIcon', 'FileSearch', 'FileSearch2', 'FileSearch2Icon', 'FileSearchCorner', 'FileSearchCornerIcon', 'FileSearchIcon', 'FileSignal', 'FileSignalIcon', 'FileSignature', 'FileSignatureIcon', 'FileSliders', 'FileSlidersIcon', 'FileSpreadsheet', 'FileSpreadsheetIcon', 'FileStack', 'FileStackIcon', 'FileSymlink', 'FileSymlinkIcon', 'FileTerminal', 'FileTerminalIcon', 'FileText', 'FileTextIcon', 'FileType', 'FileType2', 'FileType2Icon', 'FileTypeCorner', 'FileTypeCornerIcon', 'FileTypeIcon', 'FileUp', 'FileUpIcon', 'FileUser', 'FileUserIcon', 'FileVideo', 'FileVideo2', 'FileVideo2Icon', 'FileVideoCamera', 'FileVideoCameraIcon', 'FileVideoIcon', 'FileVolume', 'FileVolume2', 'FileVolume2Icon', 'FileVolumeIcon', 'FileWarning', 'FileWarningIcon', 'FileX', 'FileX2', 'FileX2Icon', 'FileXCorner', 'FileXCornerIcon', 'FileXIcon', 'Files', 'FilesIcon', 'Film', 'FilmIcon', 'Filter', 'FilterIcon', 'FilterX', 'FilterXIcon', 'Fingerprint', 'FingerprintIcon', 'FingerprintPattern', 'FingerprintPatternIcon', 'FireExtinguisher', 'FireExtinguisherIcon', 'Fish', 'FishIcon', 'FishOff', 'FishOffIcon', 'FishSymbol', 'FishSymbolIcon', 'FishingHook', 'FishingHookIcon', 'Flag', 'FlagIcon', 'FlagOff', 'FlagOffIcon', 'FlagTriangleLeft', 'FlagTriangleLeftIcon', 'FlagTriangleRight', 'FlagTriangleRightIcon', 'Flame', 'FlameIcon', 'FlameKindling', 'FlameKindlingIcon', 'Flashlight', 'FlashlightIcon', 'FlashlightOff', 'FlashlightOffIcon', 'FlaskConical', 'FlaskConicalIcon', 'FlaskConicalOff', 'FlaskConicalOffIcon', 'FlaskRound', 'FlaskRoundIcon', 'FlipHorizontal', 'FlipHorizontal2', 'FlipHorizontal2Icon', 'FlipHorizontalIcon', 'FlipVertical', 'FlipVertical2', 'FlipVertical2Icon', 'FlipVerticalIcon', 'Flower', 'Flower2', 'Flower2Icon', 'FlowerIcon', 'Focus', 'FocusIcon', 'FoldHorizontal', 'FoldHorizontalIcon', 'FoldVertical', 'FoldVerticalIcon', 'Folder', 'FolderArchive', 'FolderArchiveIcon', 'FolderCheck', 'FolderCheckIcon', 'FolderClock', 'FolderClockIcon', 'FolderClosed', 'FolderClosedIcon', 'FolderCode', 'FolderCodeIcon', 'FolderCog', 'FolderCog2', 'FolderCog2Icon', 'FolderCogIcon', 'FolderDot', 'FolderDotIcon', 'FolderDown', 'FolderDownIcon', 'FolderEdit', 'FolderEditIcon', 'FolderGit', 'FolderGit2', 'FolderGit2Icon', 'FolderGitIcon', 'FolderHeart', 'FolderHeartIcon', 'FolderIcon', 'FolderInput', 'FolderInputIcon', 'FolderKanban', 'FolderKanbanIcon', 'FolderKey', 'FolderKeyIcon', 'FolderLock', 'FolderLockIcon', 'FolderMinus', 'FolderMinusIcon', 'FolderOpen', 'FolderOpenDot', 'FolderOpenDotIcon', 'FolderOpenIcon', 'FolderOutput', 'FolderOutputIcon', 'FolderPen', 'FolderPenIcon', 'FolderPlus', 'FolderPlusIcon', 'FolderRoot', 'FolderRootIcon', 'FolderSearch', 'FolderSearch2', 'FolderSearch2Icon', 'FolderSearchIcon', 'FolderSymlink', 'FolderSymlinkIcon', 'FolderSync', 'FolderSyncIcon', 'FolderTree', 'FolderTreeIcon', 'FolderUp', 'FolderUpIcon', 'FolderX', 'FolderXIcon', 'Folders', 'FoldersIcon', 'Footprints', 'FootprintsIcon', 'ForkKnife', 'ForkKnifeCrossed', 'ForkKnifeCrossedIcon', 'ForkKnifeIcon', 'Forklift', 'ForkliftIcon', 'Form', 'FormIcon', 'FormInput', 'FormInputIcon', 'Forward', 'ForwardIcon', 'Frame', 'FrameIcon', 'Framer', 'FramerIcon', 'Frown', 'FrownIcon', 'Fuel', 'FuelIcon', 'Fullscreen', 'FullscreenIcon', 'FunctionSquare', 'FunctionSquareIcon', 'Funnel', 'FunnelIcon', 'FunnelPlus', 'FunnelPlusIcon', 'FunnelX', 'FunnelXIcon', 'GalleryHorizontal', 'GalleryHorizontalEnd', 'GalleryHorizontalEndIcon', 'GalleryHorizontalIcon', 'GalleryThumbnails', 'GalleryThumbnailsIcon', 'GalleryVertical', 'GalleryVerticalEnd', 'GalleryVerticalEndIcon', 'GalleryVerticalIcon', 'Gamepad', 'Gamepad2', 'Gamepad2Icon', 'GamepadDirectional', 'GamepadDirectionalIcon', 'GamepadIcon', 'GanttChart', 'GanttChartIcon', 'GanttChartSquare', 'GanttChartSquareIcon', 'Gauge', 'GaugeCircle', 'GaugeCircleIcon', 'GaugeIcon', 'Gavel', 'GavelIcon', 'Gem', 'GemIcon', 'GeorgianLari', 'GeorgianLariIcon', 'Ghost', 'GhostIcon', 'Gift', 'GiftIcon', 'GitBranch', 'GitBranchIcon', 'GitBranchMinus', 'GitBranchMinusIcon', 'GitBranchPlus', 'GitBranchPlusIcon', 'GitCommit', 'GitCommitHorizontal', 'GitCommitHorizontalIcon', 'GitCommitIcon', 'GitCommitVertical', 'GitCommitVerticalIcon', 'GitCompare', 'GitCompareArrows', 'GitCompareArrowsIcon', 'GitCompareIcon', 'GitFork', 'GitForkIcon', 'GitGraph', 'GitGraphIcon', 'GitMerge', 'GitMergeIcon', 'GitPullRequest', 'GitPullRequestArrow', 'GitPullRequestArrowIcon', 'GitPullRequestClosed', 'GitPullRequestClosedIcon', 'GitPullRequestCreate', 'GitPullRequestCreateArrow', 'GitPullRequestCreateArrowIcon', 'GitPullRequestCreateIcon', 'GitPullRequestDraft', 'GitPullRequestDraftIcon', 'GitPullRequestIcon', 'Github', 'GithubIcon', 'Gitlab', 'GitlabIcon', 'GlassWater', 'GlassWaterIcon', 'Glasses', 'GlassesIcon', 'Globe', 'Globe2', 'Globe2Icon', 'GlobeIcon', 'GlobeLock', 'GlobeLockIcon', 'GlobeX', 'GlobeXIcon', 'Goal', 'GoalIcon', 'Gpu', 'GpuIcon', 'Grab', 'GrabIcon', 'GraduationCap', 'GraduationCapIcon', 'Grape', 'GrapeIcon', 'Grid', 'Grid2X2', 'Grid2X2Check', 'Grid2X2CheckIcon', 'Grid2X2Icon', 'Grid2X2Plus', 'Grid2X2PlusIcon', 'Grid2X2X', 'Grid2X2XIcon', 'Grid2x2', 'Grid2x2Check', 'Grid2x2CheckIcon', 'Grid2x2Icon', 'Grid2x2Plus', 'Grid2x2PlusIcon', 'Grid2x2X', 'Grid2x2XIcon', 'Grid3X3', 'Grid3X3Icon', 'Grid3x2', 'Grid3x2Icon', 'Grid3x3', 'Grid3x3Icon', 'GridIcon', 'Grip', 'GripHorizontal', 'GripHorizontalIcon', 'GripIcon', 'GripVertical', 'GripVerticalIcon', 'Group', 'GroupIcon', 'Guitar', 'GuitarIcon', 'Ham', 'HamIcon', 'Hamburger', 'HamburgerIcon', 'Hammer', 'HammerIcon', 'Hand', 'HandCoins', 'HandCoinsIcon', 'HandFist', 'HandFistIcon', 'HandGrab', 'HandGrabIcon', 'HandHeart', 'HandHeartIcon', 'HandHelping', 'HandHelpingIcon', 'HandIcon', 'HandMetal', 'HandMetalIcon', 'HandPlatter', 'HandPlatterIcon', 'Handbag', 'HandbagIcon', 'Handshake', 'HandshakeIcon', 'HardDrive', 'HardDriveDownload', 'HardDriveDownloadIcon', 'HardDriveIcon', 'HardDriveUpload', 'HardDriveUploadIcon', 'HardHat', 'HardHatIcon', 'Hash', 'HashIcon', 'HatGlasses', 'HatGlassesIcon', 'Haze', 'HazeIcon', 'Hd', 'HdIcon', 'HdmiPort', 'HdmiPortIcon', 'Heading', 'Heading1', 'Heading1Icon', 'Heading2', 'Heading2Icon', 'Heading3', 'Heading3Icon', 'Heading4', 'Heading4Icon', 'Heading5', 'Heading5Icon', 'Heading6', 'Heading6Icon', 'HeadingIcon', 'HeadphoneOff', 'HeadphoneOffIcon', 'Headphones', 'HeadphonesIcon', 'Headset', 'HeadsetIcon', 'Heart', 'HeartCrack', 'HeartCrackIcon', 'HeartHandshake', 'HeartHandshakeIcon', 'HeartIcon', 'HeartMinus', 'HeartMinusIcon', 'HeartOff', 'HeartOffIcon', 'HeartPlus', 'HeartPlusIcon', 'HeartPulse', 'HeartPulseIcon', 'Heater', 'HeaterIcon', 'Helicopter', 'HelicopterIcon', 'HelpCircle', 'HelpCircleIcon', 'HelpingHand', 'HelpingHandIcon', 'Hexagon', 'HexagonIcon', 'Highlighter', 'HighlighterIcon', 'History', 'HistoryIcon', 'Home', 'HomeIcon', 'Hop', 'HopIcon', 'HopOff', 'HopOffIcon', 'Hospital', 'HospitalIcon', 'Hotel', 'HotelIcon', 'Hourglass', 'HourglassIcon', 'House', 'HouseHeart', 'HouseHeartIcon', 'HouseIcon', 'HousePlug', 'HousePlugIcon', 'HousePlus', 'HousePlusIcon', 'HouseWifi', 'HouseWifiIcon', 'IceCream', 'IceCream2', 'IceCream2Icon', 'IceCreamBowl', 'IceCreamBowlIcon', 'IceCreamCone', 'IceCreamConeIcon', 'IceCreamIcon', 'Icon', 'IdCard', 'IdCardIcon', 'IdCardLanyard', 'IdCardLanyardIcon', 'Image', 'ImageDown', 'ImageDownIcon', 'ImageIcon', 'ImageMinus', 'ImageMinusIcon', 'ImageOff', 'ImageOffIcon', 'ImagePlay', 'ImagePlayIcon', 'ImagePlus', 'ImagePlusIcon', 'ImageUp', 'ImageUpIcon', 'ImageUpscale', 'ImageUpscaleIcon', 'Images', 'ImagesIcon', 'Import', 'ImportIcon', 'Inbox', 'InboxIcon', 'Indent', 'IndentDecrease', 'IndentDecreaseIcon', 'IndentIcon', 'IndentIncrease', 'IndentIncreaseIcon', 'IndianRupee', 'IndianRupeeIcon', 'Infinity', 'InfinityIcon', 'Info', 'InfoIcon', 'Inspect', 'InspectIcon', 'InspectionPanel', 'InspectionPanelIcon', 'Instagram', 'InstagramIcon', 'Italic', 'ItalicIcon', 'IterationCcw', 'IterationCcwIcon', 'IterationCw', 'IterationCwIcon', 'JapaneseYen', 'JapaneseYenIcon', 'Joystick', 'JoystickIcon', 'Kanban', 'KanbanIcon', 'KanbanSquare', 'KanbanSquareDashed', 'KanbanSquareDashedIcon', 'KanbanSquareIcon', 'Kayak', 'KayakIcon', 'Key', 'KeyIcon', 'KeyRound', 'KeyRoundIcon', 'KeySquare', 'KeySquareIcon', 'Keyboard', 'KeyboardIcon', 'KeyboardMusic', 'KeyboardMusicIcon', 'KeyboardOff', 'KeyboardOffIcon', 'Lamp', 'LampCeiling', 'LampCeilingIcon', 'LampDesk', 'LampDeskIcon', 'LampFloor', 'LampFloorIcon', 'LampIcon', 'LampWallDown', 'LampWallDownIcon', 'LampWallUp', 'LampWallUpIcon', 'LandPlot', 'LandPlotIcon', 'Landmark', 'LandmarkIcon', 'Languages', 'LanguagesIcon', 'Laptop', 'Laptop2', 'Laptop2Icon', 'LaptopIcon', 'LaptopMinimal', 'LaptopMinimalCheck', 'LaptopMinimalCheckIcon', 'LaptopMinimalIcon', 'Lasso', 'LassoIcon', 'LassoSelect', 'LassoSelectIcon', 'Laugh', 'LaughIcon', 'Layers', 'Layers2', 'Layers2Icon', 'Layers3', 'Layers3Icon', 'LayersIcon', 'LayersPlus', 'LayersPlusIcon', 'Layout', 'LayoutDashboard', 'LayoutDashboardIcon', 'LayoutGrid', 'LayoutGridIcon', 'LayoutIcon', 'LayoutList', 'LayoutListIcon', 'LayoutPanelLeft', 'LayoutPanelLeftIcon', 'LayoutPanelTop', 'LayoutPanelTopIcon', 'LayoutTemplate', 'LayoutTemplateIcon', 'Leaf', 'LeafIcon', 'LeafyGreen', 'LeafyGreenIcon', 'Lectern', 'LecternIcon', 'LetterText', 'LetterTextIcon', 'Library', 'LibraryBig', 'LibraryBigIcon', 'LibraryIcon', 'LibrarySquare', 'LibrarySquareIcon', 'LifeBuoy', 'LifeBuoyIcon', 'Ligature', 'LigatureIcon', 'Lightbulb', 'LightbulbIcon', 'LightbulbOff', 'LightbulbOffIcon', 'LineChart', 'LineChartIcon', 'LineSquiggle', 'LineSquiggleIcon', 'Link', 'Link2', 'Link2Icon', 'Link2Off', 'Link2OffIcon', 'LinkIcon', 'Linkedin', 'LinkedinIcon', 'List', 'ListCheck', 'ListCheckIcon', 'ListChecks', 'ListChecksIcon', 'ListChevronsDownUp', 'ListChevronsDownUpIcon', 'ListChevronsUpDown', 'ListChevronsUpDownIcon', 'ListCollapse', 'ListCollapseIcon', 'ListEnd', 'ListEndIcon', 'ListFilter', 'ListFilterIcon', 'ListFilterPlus', 'ListFilterPlusIcon', 'ListIcon', 'ListIndentDecrease', 'ListIndentDecreaseIcon', 'ListIndentIncrease', 'ListIndentIncreaseIcon', 'ListMinus', 'ListMinusIcon', 'ListMusic', 'ListMusicIcon', 'ListOrdered', 'ListOrderedIcon', 'ListPlus', 'ListPlusIcon', 'ListRestart', 'ListRestartIcon', 'ListStart', 'ListStartIcon', 'ListTodo', 'ListTodoIcon', 'ListTree', 'ListTreeIcon', 'ListVideo', 'ListVideoIcon', 'ListX', 'ListXIcon', 'Loader', 'Loader2', 'Loader2Icon', 'LoaderCircle', 'LoaderCircleIcon', 'LoaderIcon', 'LoaderPinwheel', 'LoaderPinwheelIcon', 'Locate', 'LocateFixed', 'LocateFixedIcon', 'LocateIcon', 'LocateOff', 'LocateOffIcon', 'LocationEdit', 'LocationEditIcon', 'Lock', 'LockIcon', 'LockKeyhole', 'LockKeyholeIcon', 'LockKeyholeOpen', 'LockKeyholeOpenIcon', 'LockOpen', 'LockOpenIcon', 'LogIn', 'LogInIcon', 'LogOut', 'LogOutIcon', 'Logs', 'LogsIcon', 'Lollipop', 'LollipopIcon', 'LucideAArrowDown', 'LucideAArrowUp', 'LucideALargeSmall', 'LucideAccessibility', 'LucideActivity', 'LucideActivitySquare', 'LucideAirVent', 'LucideAirplay', 'LucideAlarmCheck', 'LucideAlarmClock', 'LucideAlarmClockCheck', 'LucideAlarmClockMinus', 'LucideAlarmClockOff', 'LucideAlarmClockPlus', 'LucideAlarmMinus', 'LucideAlarmPlus', 'LucideAlarmSmoke', 'LucideAlbum', 'LucideAlertCircle', 'LucideAlertOctagon', 'LucideAlertTriangle', 'LucideAlignCenter', 'LucideAlignCenterHorizontal', 'LucideAlignCenterVertical', 'LucideAlignEndHorizontal', 'LucideAlignEndVertical', 'LucideAlignHorizontalDistributeCenter', 'LucideAlignHorizontalDistributeEnd', 'LucideAlignHorizontalDistributeStart', 'LucideAlignHorizontalJustifyCenter', 'LucideAlignHorizontalJustifyEnd', 'LucideAlignHorizontalJustifyStart', 'LucideAlignHorizontalSpaceAround', 'LucideAlignHorizontalSpaceBetween', 'LucideAlignJustify', 'LucideAlignLeft', 'LucideAlignRight', 'LucideAlignStartHorizontal', 'LucideAlignStartVertical', 'LucideAlignVerticalDistributeCenter', 'LucideAlignVerticalDistributeEnd', 'LucideAlignVerticalDistributeStart', 'LucideAlignVerticalJustifyCenter', 'LucideAlignVerticalJustifyEnd', 'LucideAlignVerticalJustifyStart', 'LucideAlignVerticalSpaceAround', 'LucideAlignVerticalSpaceBetween', 'LucideAmbulance', 'LucideAmpersand', 'LucideAmpersands', 'LucideAmphora', 'LucideAnchor', 'LucideAngry', 'LucideAnnoyed', 'LucideAntenna', 'LucideAnvil', 'LucideAperture', 'LucideAppWindow', 'LucideAppWindowMac', 'LucideApple', 'LucideArchive', 'LucideArchiveRestore', 'LucideArchiveX', 'LucideAreaChart', 'LucideArmchair', 'LucideArrowBigDown', 'LucideArrowBigDownDash', 'LucideArrowBigLeft', 'LucideArrowBigLeftDash', 'LucideArrowBigRight', 'LucideArrowBigRightDash', 'LucideArrowBigUp', 'LucideArrowBigUpDash', 'LucideArrowDown', 'LucideArrowDown01', 'LucideArrowDown10', 'LucideArrowDownAZ', 'LucideArrowDownAz', 'LucideArrowDownCircle', 'LucideArrowDownFromLine', 'LucideArrowDownLeft', 'LucideArrowDownLeftFromCircle', 'LucideArrowDownLeftFromSquare', 'LucideArrowDownLeftSquare', 'LucideArrowDownNarrowWide', 'LucideArrowDownRight', 'LucideArrowDownRightFromCircle', 'LucideArrowDownRightFromSquare', 'LucideArrowDownRightSquare', 'LucideArrowDownSquare', 'LucideArrowDownToDot', 'LucideArrowDownToLine', 'LucideArrowDownUp', 'LucideArrowDownWideNarrow', 'LucideArrowDownZA', 'LucideArrowDownZa', 'LucideArrowLeft', 'LucideArrowLeftCircle', 'LucideArrowLeftFromLine', 'LucideArrowLeftRight', 'LucideArrowLeftSquare', 'LucideArrowLeftToLine', 'LucideArrowRight', 'LucideArrowRightCircle', 'LucideArrowRightFromLine', 'LucideArrowRightLeft', 'LucideArrowRightSquare', 'LucideArrowRightToLine', 'LucideArrowUp', 'LucideArrowUp01', 'LucideArrowUp10', 'LucideArrowUpAZ', 'LucideArrowUpAz', 'LucideArrowUpCircle', 'LucideArrowUpDown', 'LucideArrowUpFromDot', 'LucideArrowUpFromLine', 'LucideArrowUpLeft', 'LucideArrowUpLeftFromCircle', 'LucideArrowUpLeftFromSquare', 'LucideArrowUpLeftSquare', 'LucideArrowUpNarrowWide', 'LucideArrowUpRight', 'LucideArrowUpRightFromCircle', 'LucideArrowUpRightFromSquare', 'LucideArrowUpRightSquare', 'LucideArrowUpSquare', 'LucideArrowUpToLine', 'LucideArrowUpWideNarrow', 'LucideArrowUpZA', 'LucideArrowUpZa', 'LucideArrowsUpFromLine', 'LucideAsterisk', 'LucideAsteriskSquare', 'LucideAtSign', 'LucideAtom', 'LucideAudioLines', 'LucideAudioWaveform', 'LucideAward', 'LucideAxe', 'LucideAxis3D', 'LucideAxis3d', 'LucideBaby', 'LucideBackpack', 'LucideBadge', 'LucideBadgeAlert', 'LucideBadgeCent', 'LucideBadgeCheck', 'LucideBadgeDollarSign', 'LucideBadgeEuro', 'LucideBadgeHelp', 'LucideBadgeIndianRupee', 'LucideBadgeInfo', 'LucideBadgeJapaneseYen', 'LucideBadgeMinus', 'LucideBadgePercent', 'LucideBadgePlus', 'LucideBadgePoundSterling', 'LucideBadgeQuestionMark', 'LucideBadgeRussianRuble', 'LucideBadgeSwissFranc', 'LucideBadgeTurkishLira', 'LucideBadgeX', 'LucideBaggageClaim', 'LucideBalloon', 'LucideBan', 'LucideBanana', 'LucideBandage', 'LucideBanknote', 'LucideBanknoteArrowDown', 'LucideBanknoteArrowUp', 'LucideBanknoteX', 'LucideBarChart', 'LucideBarChart2', 'LucideBarChart3', 'LucideBarChart4', 'LucideBarChartBig', 'LucideBarChartHorizontal', 'LucideBarChartHorizontalBig', 'LucideBarcode', 'LucideBarrel', 'LucideBaseline', 'LucideBath', 'LucideBattery', 'LucideBatteryCharging', 'LucideBatteryFull', 'LucideBatteryLow', 'LucideBatteryMedium', 'LucideBatteryPlus', 'LucideBatteryWarning', 'LucideBeaker', 'LucideBean', 'LucideBeanOff', 'LucideBed', 'LucideBedDouble', 'LucideBedSingle', 'LucideBeef', 'LucideBeer', 'LucideBeerOff', 'LucideBell', 'LucideBellDot', 'LucideBellElectric', 'LucideBellMinus', 'LucideBellOff', 'LucideBellPlus', 'LucideBellRing', 'LucideBetweenHorizonalEnd', 'LucideBetweenHorizonalStart', 'LucideBetweenHorizontalEnd', 'LucideBetweenHorizontalStart', 'LucideBetweenVerticalEnd', 'LucideBetweenVerticalStart', 'LucideBicepsFlexed', 'LucideBike', 'LucideBinary', 'LucideBinoculars', 'LucideBiohazard', 'LucideBird', 'LucideBirdhouse', 'LucideBitcoin', 'LucideBlend', 'LucideBlinds', 'LucideBlocks', 'LucideBluetooth', 'LucideBluetoothConnected', 'LucideBluetoothOff', 'LucideBluetoothSearching', 'LucideBold', 'LucideBolt', 'LucideBomb', 'LucideBone', 'LucideBook', 'LucideBookA', 'LucideBookAlert', 'LucideBookAudio', 'LucideBookCheck', 'LucideBookCopy', 'LucideBookDashed', 'LucideBookDown', 'LucideBookHeadphones', 'LucideBookHeart', 'LucideBookImage', 'LucideBookKey', 'LucideBookLock', 'LucideBookMarked', 'LucideBookMinus', 'LucideBookOpen', 'LucideBookOpenCheck', 'LucideBookOpenText', 'LucideBookPlus', 'LucideBookSearch', 'LucideBookTemplate', 'LucideBookText', 'LucideBookType', 'LucideBookUp', 'LucideBookUp2', 'LucideBookUser', 'LucideBookX', 'LucideBookmark', 'LucideBookmarkCheck', 'LucideBookmarkMinus', 'LucideBookmarkPlus', 'LucideBookmarkX', 'LucideBoomBox', 'LucideBot', 'LucideBotMessageSquare', 'LucideBotOff', 'LucideBottleWine', 'LucideBowArrow', 'LucideBox', 'LucideBoxSelect', 'LucideBoxes', 'LucideBraces', 'LucideBrackets', 'LucideBrain', 'LucideBrainCircuit', 'LucideBrainCog', 'LucideBrickWall', 'LucideBrickWallFire', 'LucideBrickWallShield', 'LucideBriefcase', 'LucideBriefcaseBusiness', 'LucideBriefcaseConveyorBelt', 'LucideBriefcaseMedical', 'LucideBringToFront', 'LucideBrush', 'LucideBrushCleaning', 'LucideBubbles', 'LucideBug', 'LucideBugOff', 'LucideBugPlay', 'LucideBuilding', 'LucideBuilding2', 'LucideBus', 'LucideBusFront', 'LucideCable', 'LucideCableCar', 'LucideCake', 'LucideCakeSlice', 'LucideCalculator', 'LucideCalendar', 'LucideCalendar1', 'LucideCalendarArrowDown', 'LucideCalendarArrowUp', 'LucideCalendarCheck', 'LucideCalendarCheck2', 'LucideCalendarClock', 'LucideCalendarCog', 'LucideCalendarDays', 'LucideCalendarFold', 'LucideCalendarHeart', 'LucideCalendarMinus', 'LucideCalendarMinus2', 'LucideCalendarOff', 'LucideCalendarPlus', 'LucideCalendarPlus2', 'LucideCalendarRange', 'LucideCalendarSearch', 'LucideCalendarSync', 'LucideCalendarX', 'LucideCalendarX2', 'LucideCalendars', 'LucideCamera', 'LucideCameraOff', 'LucideCandlestickChart', 'LucideCandy', 'LucideCandyCane', 'LucideCandyOff', 'LucideCannabis', 'LucideCannabisOff', 'LucideCaptions', 'LucideCaptionsOff', 'LucideCar', 'LucideCarFront', 'LucideCarTaxiFront', 'LucideCaravan', 'LucideCardSim', 'LucideCarrot', 'LucideCaseLower', 'LucideCaseSensitive', 'LucideCaseUpper', 'LucideCassetteTape', 'LucideCast', 'LucideCastle', 'LucideCat', 'LucideCctv', 'LucideChartArea', 'LucideChartBar', 'LucideChartBarBig', 'LucideChartBarDecreasing', 'LucideChartBarIncreasing', 'LucideChartBarStacked', 'LucideChartCandlestick', 'LucideChartColumn', 'LucideChartColumnBig', 'LucideChartColumnDecreasing', 'LucideChartColumnIncreasing', 'LucideChartColumnStacked', 'LucideChartGantt', 'LucideChartLine', 'LucideChartNetwork', 'LucideChartNoAxesColumn', 'LucideChartNoAxesColumnDecreasing', 'LucideChartNoAxesColumnIncreasing', 'LucideChartNoAxesCombined', 'LucideChartNoAxesGantt', 'LucideChartPie', 'LucideChartScatter', 'LucideChartSpline', 'LucideCheck', 'LucideCheckCheck', 'LucideCheckCircle', 'LucideCheckCircle2', 'LucideCheckLine', 'LucideCheckSquare', 'LucideCheckSquare2', 'LucideChefHat', 'LucideCherry', 'LucideChessBishop', 'LucideChessKing', 'LucideChessKnight', 'LucideChessPawn', 'LucideChessQueen', 'LucideChessRook', 'LucideChevronDown', 'LucideChevronDownCircle', 'LucideChevronDownSquare', 'LucideChevronFirst', 'LucideChevronLast', 'LucideChevronLeft', 'LucideChevronLeftCircle', 'LucideChevronLeftSquare', 'LucideChevronRight', 'LucideChevronRightCircle', 'LucideChevronRightSquare', 'LucideChevronUp', 'LucideChevronUpCircle', 'LucideChevronUpSquare', 'LucideChevronsDown', 'LucideChevronsDownUp', 'LucideChevronsLeft', 'LucideChevronsLeftRight', 'LucideChevronsLeftRightEllipsis', 'LucideChevronsRight', 'LucideChevronsRightLeft', 'LucideChevronsUp', 'LucideChevronsUpDown', 'LucideChrome', 'LucideChromium', 'LucideChurch', 'LucideCigarette', 'LucideCigaretteOff', 'LucideCircle', 'LucideCircleAlert', 'LucideCircleArrowDown', 'LucideCircleArrowLeft', 'LucideCircleArrowOutDownLeft', 'LucideCircleArrowOutDownRight', 'LucideCircleArrowOutUpLeft', 'LucideCircleArrowOutUpRight', 'LucideCircleArrowRight', 'LucideCircleArrowUp', 'LucideCircleCheck', 'LucideCircleCheckBig', 'LucideCircleChevronDown', 'LucideCircleChevronLeft', 'LucideCircleChevronRight', 'LucideCircleChevronUp', 'LucideCircleDashed', 'LucideCircleDivide', 'LucideCircleDollarSign', 'LucideCircleDot', 'LucideCircleDotDashed', 'LucideCircleEllipsis', 'LucideCircleEqual', 'LucideCircleFadingArrowUp', 'LucideCircleFadingPlus', 'LucideCircleGauge', 'LucideCircleHelp', 'LucideCircleMinus', 'LucideCircleOff', 'LucideCircleParking', 'LucideCircleParkingOff', 'LucideCirclePause', 'LucideCirclePercent', 'LucideCirclePile', 'LucideCirclePlay', 'LucideCirclePlus', 'LucideCirclePoundSterling', 'LucideCirclePower', 'LucideCircleQuestionMark', 'LucideCircleSlash', 'LucideCircleSlash2', 'LucideCircleSlashed', 'LucideCircleSmall', 'LucideCircleStar', 'LucideCircleStop', 'LucideCircleUser', 'LucideCircleUserRound', 'LucideCircleX', 'LucideCircuitBoard', 'LucideCitrus', 'LucideClapperboard', 'LucideClipboard', 'LucideClipboardCheck', 'LucideClipboardClock', 'LucideClipboardCopy', 'LucideClipboardEdit', 'LucideClipboardList', 'LucideClipboardMinus', 'LucideClipboardPaste', 'LucideClipboardPen', 'LucideClipboardPenLine', 'LucideClipboardPlus', 'LucideClipboardSignature', 'LucideClipboardType', 'LucideClipboardX', 'LucideClock', 'LucideClock1', 'LucideClock10', 'LucideClock11', 'LucideClock12', 'LucideClock2', 'LucideClock3', 'LucideClock4', 'LucideClock5', 'LucideClock6', 'LucideClock7', 'LucideClock8', 'LucideClock9', 'LucideClockAlert', 'LucideClockArrowDown', 'LucideClockArrowUp', 'LucideClockCheck', 'LucideClockFading', 'LucideClockPlus', 'LucideClosedCaption', 'LucideCloud', 'LucideCloudAlert', 'LucideCloudBackup', 'LucideCloudCheck', 'LucideCloudCog', 'LucideCloudDownload', 'LucideCloudDrizzle', 'LucideCloudFog', 'LucideCloudHail', 'LucideCloudLightning', 'LucideCloudMoon', 'LucideCloudMoonRain', 'LucideCloudOff', 'LucideCloudRain', 'LucideCloudRainWind', 'LucideCloudSnow', 'LucideCloudSun', 'LucideCloudSunRain', 'LucideCloudSync', 'LucideCloudUpload', 'LucideCloudy', 'LucideClover', 'LucideClub', 'LucideCode', 'LucideCode2', 'LucideCodeSquare', 'LucideCodeXml', 'LucideCodepen', 'LucideCodesandbox', 'LucideCoffee', 'LucideCog', 'LucideCoins', 'LucideColumns', 'LucideColumns2', 'LucideColumns3', 'LucideColumns3Cog', 'LucideColumns4', 'LucideColumnsSettings', 'LucideCombine', 'LucideCommand', 'LucideCompass', 'LucideComponent', 'LucideComputer', 'LucideConciergeBell', 'LucideCone', 'LucideConstruction', 'LucideContact', 'LucideContact2', 'LucideContactRound', 'LucideContainer', 'LucideContrast', 'LucideCookie', 'LucideCookingPot', 'LucideCopy', 'LucideCopyCheck', 'LucideCopyMinus', 'LucideCopyPlus', 'LucideCopySlash', 'LucideCopyX', 'LucideCopyleft', 'LucideCopyright', 'LucideCornerDownLeft', 'LucideCornerDownRight', 'LucideCornerLeftDown', 'LucideCornerLeftUp', 'LucideCornerRightDown', 'LucideCornerRightUp', 'LucideCornerUpLeft', 'LucideCornerUpRight', 'LucideCpu', 'LucideCreativeCommons', 'LucideCreditCard', 'LucideCroissant', 'LucideCrop', 'LucideCross', 'LucideCrosshair', 'LucideCrown', 'LucideCuboid', 'LucideCupSoda', 'LucideCurlyBraces', 'LucideCurrency', 'LucideCylinder', 'LucideDam', 'LucideDatabase', 'LucideDatabaseBackup', 'LucideDatabaseZap', 'LucideDecimalsArrowLeft', 'LucideDecimalsArrowRight', 'LucideDelete', 'LucideDessert', 'LucideDiameter', 'LucideDiamond', 'LucideDiamondMinus', 'LucideDiamondPercent', 'LucideDiamondPlus', 'LucideDice1', 'LucideDice2', 'LucideDice3', 'LucideDice4', 'LucideDice5', 'LucideDice6', 'LucideDices', 'LucideDiff', 'LucideDisc', 'LucideDisc2', 'LucideDisc3', 'LucideDiscAlbum', 'LucideDivide', 'LucideDivideCircle', 'LucideDivideSquare', 'LucideDna', 'LucideDnaOff', 'LucideDock', 'LucideDog', 'LucideDollarSign', 'LucideDonut', 'LucideDoorClosed', 'LucideDoorClosedLocked', 'LucideDoorOpen', 'LucideDot', 'LucideDotSquare', 'LucideDownload', 'LucideDownloadCloud', 'LucideDraftingCompass', 'LucideDrama', 'LucideDribbble', 'LucideDrill', 'LucideDrone', 'LucideDroplet', 'LucideDropletOff', 'LucideDroplets', 'LucideDrum', 'LucideDrumstick', 'LucideDumbbell', 'LucideEar', 'LucideEarOff', 'LucideEarth', 'LucideEarthLock', 'LucideEclipse', 'LucideEdit', 'LucideEdit2', 'LucideEdit3', 'LucideEgg', 'LucideEggFried', 'LucideEggOff', 'LucideEllipsis', 'LucideEllipsisVertical', 'LucideEqual', 'LucideEqualApproximately', 'LucideEqualNot', 'LucideEqualSquare', 'LucideEraser', 'LucideEthernetPort', 'LucideEuro', 'LucideEvCharger', 'LucideExpand', 'LucideExternalLink', 'LucideEye', 'LucideEyeClosed', 'LucideEyeOff', 'LucideFacebook', 'LucideFactory', 'LucideFan', 'LucideFastForward', 'LucideFeather', 'LucideFence', 'LucideFerrisWheel', 'LucideFigma', 'LucideFile', 'LucideFileArchive', 'LucideFileAudio', 'LucideFileAudio2', 'LucideFileAxis3D', 'LucideFileAxis3d', 'LucideFileBadge', 'LucideFileBadge2', 'LucideFileBarChart', 'LucideFileBarChart2', 'LucideFileBox', 'LucideFileBraces', 'LucideFileBracesCorner', 'LucideFileChartColumn', 'LucideFileChartColumnIncreasing', 'LucideFileChartLine', 'LucideFileChartPie', 'LucideFileCheck', 'LucideFileCheck2', 'LucideFileCheckCorner', 'LucideFileClock', 'LucideFileCode', 'LucideFileCode2', 'LucideFileCodeCorner', 'LucideFileCog', 'LucideFileCog2', 'LucideFileDiff', 'LucideFileDigit', 'LucideFileDown', 'LucideFileEdit', 'LucideFileExclamationPoint', 'LucideFileHeadphone', 'LucideFileHeart', 'LucideFileImage', 'LucideFileInput', 'LucideFileJson', 'LucideFileJson2', 'LucideFileKey', 'LucideFileKey2', 'LucideFileLineChart', 'LucideFileLock', 'LucideFileLock2', 'LucideFileMinus', 'LucideFileMinus2', 'LucideFileMinusCorner', 'LucideFileMusic', 'LucideFileOutput', 'LucideFilePen', 'LucideFilePenLine', 'LucideFilePieChart', 'LucideFilePlay', 'LucideFilePlus', 'LucideFilePlus2', 'LucideFilePlusCorner', 'LucideFileQuestion', 'LucideFileQuestionMark', 'LucideFileScan', 'LucideFileSearch', 'LucideFileSearch2', 'LucideFileSearchCorner', 'LucideFileSignal', 'LucideFileSignature', 'LucideFileSliders', 'LucideFileSpreadsheet', 'LucideFileStack', 'LucideFileSymlink', 'LucideFileTerminal', 'LucideFileText', 'LucideFileType', 'LucideFileType2', 'LucideFileTypeCorner', 'LucideFileUp', 'LucideFileUser', 'LucideFileVideo', 'LucideFileVideo2', 'LucideFileVideoCamera', 'LucideFileVolume', 'LucideFileVolume2', 'LucideFileWarning', 'LucideFileX', 'LucideFileX2', 'LucideFileXCorner', 'LucideFiles', 'LucideFilm', 'LucideFilter', 'LucideFilterX', 'LucideFingerprint', 'LucideFingerprintPattern', 'LucideFireExtinguisher', 'LucideFish', 'LucideFishOff', 'LucideFishSymbol', 'LucideFishingHook', 'LucideFlag', 'LucideFlagOff', 'LucideFlagTriangleLeft', 'LucideFlagTriangleRight', 'LucideFlame', 'LucideFlameKindling', 'LucideFlashlight', 'LucideFlashlightOff', 'LucideFlaskConical', 'LucideFlaskConicalOff', 'LucideFlaskRound', 'LucideFlipHorizontal', 'LucideFlipHorizontal2', 'LucideFlipVertical', 'LucideFlipVertical2', 'LucideFlower', 'LucideFlower2', 'LucideFocus', 'LucideFoldHorizontal', 'LucideFoldVertical', 'LucideFolder', 'LucideFolderArchive', 'LucideFolderCheck', 'LucideFolderClock', 'LucideFolderClosed', 'LucideFolderCode', 'LucideFolderCog', 'LucideFolderCog2', 'LucideFolderDot', 'LucideFolderDown', 'LucideFolderEdit', 'LucideFolderGit', 'LucideFolderGit2', 'LucideFolderHeart', 'LucideFolderInput', 'LucideFolderKanban', 'LucideFolderKey', 'LucideFolderLock', 'LucideFolderMinus', 'LucideFolderOpen', 'LucideFolderOpenDot', 'LucideFolderOutput', 'LucideFolderPen', 'LucideFolderPlus', 'LucideFolderRoot', 'LucideFolderSearch', 'LucideFolderSearch2', 'LucideFolderSymlink', 'LucideFolderSync', 'LucideFolderTree', 'LucideFolderUp', 'LucideFolderX', 'LucideFolders', 'LucideFootprints', 'LucideForkKnife', 'LucideForkKnifeCrossed', 'LucideForklift', 'LucideForm', 'LucideFormInput', 'LucideForward', 'LucideFrame', 'LucideFramer', 'LucideFrown', 'LucideFuel', 'LucideFullscreen', 'LucideFunctionSquare', 'LucideFunnel', 'LucideFunnelPlus', 'LucideFunnelX', 'LucideGalleryHorizontal', 'LucideGalleryHorizontalEnd', 'LucideGalleryThumbnails', 'LucideGalleryVertical', 'LucideGalleryVerticalEnd', 'LucideGamepad', 'LucideGamepad2', 'LucideGamepadDirectional', 'LucideGanttChart', 'LucideGanttChartSquare', 'LucideGauge', 'LucideGaugeCircle', 'LucideGavel', 'LucideGem', 'LucideGeorgianLari', 'LucideGhost', 'LucideGift', 'LucideGitBranch', 'LucideGitBranchMinus', 'LucideGitBranchPlus', 'LucideGitCommit', 'LucideGitCommitHorizontal', 'LucideGitCommitVertical', 'LucideGitCompare', 'LucideGitCompareArrows', 'LucideGitFork', 'LucideGitGraph', 'LucideGitMerge', 'LucideGitPullRequest', 'LucideGitPullRequestArrow', 'LucideGitPullRequestClosed', 'LucideGitPullRequestCreate', 'LucideGitPullRequestCreateArrow', 'LucideGitPullRequestDraft', 'LucideGithub', 'LucideGitlab', 'LucideGlassWater', 'LucideGlasses', 'LucideGlobe', 'LucideGlobe2', 'LucideGlobeLock', 'LucideGlobeX', 'LucideGoal', 'LucideGpu', 'LucideGrab', 'LucideGraduationCap', 'LucideGrape', 'LucideGrid', 'LucideGrid2X2', 'LucideGrid2X2Check', 'LucideGrid2X2Plus', 'LucideGrid2X2X', 'LucideGrid2x2', 'LucideGrid2x2Check', 'LucideGrid2x2Plus', 'LucideGrid2x2X', 'LucideGrid3X3', 'LucideGrid3x2', 'LucideGrid3x3', 'LucideGrip', 'LucideGripHorizontal', 'LucideGripVertical', 'LucideGroup', 'LucideGuitar', 'LucideHam', 'LucideHamburger', 'LucideHammer', 'LucideHand', 'LucideHandCoins', 'LucideHandFist', 'LucideHandGrab', 'LucideHandHeart', 'LucideHandHelping', 'LucideHandMetal', 'LucideHandPlatter', 'LucideHandbag', 'LucideHandshake', 'LucideHardDrive', 'LucideHardDriveDownload', 'LucideHardDriveUpload', 'LucideHardHat', 'LucideHash', 'LucideHatGlasses', 'LucideHaze', 'LucideHd', 'LucideHdmiPort', 'LucideHeading', 'LucideHeading1', 'LucideHeading2', 'LucideHeading3', 'LucideHeading4', 'LucideHeading5', 'LucideHeading6', 'LucideHeadphoneOff', 'LucideHeadphones', 'LucideHeadset', 'LucideHeart', 'LucideHeartCrack', 'LucideHeartHandshake', 'LucideHeartMinus', 'LucideHeartOff', 'LucideHeartPlus', 'LucideHeartPulse', 'LucideHeater', 'LucideHelicopter', 'LucideHelpCircle', 'LucideHelpingHand', 'LucideHexagon', 'LucideHighlighter', 'LucideHistory', 'LucideHome', 'LucideHop', 'LucideHopOff', 'LucideHospital', 'LucideHotel', 'LucideHourglass', 'LucideHouse', 'LucideHouseHeart', 'LucideHousePlug', 'LucideHousePlus', 'LucideHouseWifi', 'LucideIceCream', 'LucideIceCream2', 'LucideIceCreamBowl', 'LucideIceCreamCone', 'LucideIdCard', 'LucideIdCardLanyard', 'LucideImage', 'LucideImageDown', 'LucideImageMinus', 'LucideImageOff', 'LucideImagePlay', 'LucideImagePlus', 'LucideImageUp', 'LucideImageUpscale', 'LucideImages', 'LucideImport', 'LucideInbox', 'LucideIndent', 'LucideIndentDecrease', 'LucideIndentIncrease', 'LucideIndianRupee', 'LucideInfinity', 'LucideInfo', 'LucideInspect', 'LucideInspectionPanel', 'LucideInstagram', 'LucideItalic', 'LucideIterationCcw', 'LucideIterationCw', 'LucideJapaneseYen', 'LucideJoystick', 'LucideKanban', 'LucideKanbanSquare', 'LucideKanbanSquareDashed', 'LucideKayak', 'LucideKey', 'LucideKeyRound', 'LucideKeySquare', 'LucideKeyboard', 'LucideKeyboardMusic', 'LucideKeyboardOff', 'LucideLamp', 'LucideLampCeiling', 'LucideLampDesk', 'LucideLampFloor', 'LucideLampWallDown', 'LucideLampWallUp', 'LucideLandPlot', 'LucideLandmark', 'LucideLanguages', 'LucideLaptop', 'LucideLaptop2', 'LucideLaptopMinimal', 'LucideLaptopMinimalCheck', 'LucideLasso', 'LucideLassoSelect', 'LucideLaugh', 'LucideLayers', 'LucideLayers2', 'LucideLayers3', 'LucideLayersPlus', 'LucideLayout', 'LucideLayoutDashboard', 'LucideLayoutGrid', 'LucideLayoutList', 'LucideLayoutPanelLeft', 'LucideLayoutPanelTop', 'LucideLayoutTemplate', 'LucideLeaf', 'LucideLeafyGreen', 'LucideLectern', 'LucideLetterText', 'LucideLibrary', 'LucideLibraryBig', 'LucideLibrarySquare', 'LucideLifeBuoy', 'LucideLigature', 'LucideLightbulb', 'LucideLightbulbOff', 'LucideLineChart', 'LucideLineSquiggle', 'LucideLink', 'LucideLink2', 'LucideLink2Off', 'LucideLinkedin', 'LucideList', 'LucideListCheck', 'LucideListChecks', 'LucideListChevronsDownUp', 'LucideListChevronsUpDown', 'LucideListCollapse', 'LucideListEnd', 'LucideListFilter', 'LucideListFilterPlus', 'LucideListIndentDecrease', 'LucideListIndentIncrease', 'LucideListMinus', 'LucideListMusic', 'LucideListOrdered', 'LucideListPlus', 'LucideListRestart', 'LucideListStart', 'LucideListTodo', 'LucideListTree', 'LucideListVideo', 'LucideListX', 'LucideLoader', 'LucideLoader2', 'LucideLoaderCircle', 'LucideLoaderPinwheel', 'LucideLocate', 'LucideLocateFixed', 'LucideLocateOff', 'LucideLocationEdit', 'LucideLock', 'LucideLockKeyhole', 'LucideLockKeyholeOpen', 'LucideLockOpen', 'LucideLogIn', 'LucideLogOut', 'LucideLogs', 'LucideLollipop', 'LucideLuggage', 'LucideMSquare', 'LucideMagnet', 'LucideMail', 'LucideMailCheck', 'LucideMailMinus', 'LucideMailOpen', 'LucideMailPlus', 'LucideMailQuestion', 'LucideMailQuestionMark', 'LucideMailSearch', 'LucideMailWarning', 'LucideMailX', 'LucideMailbox', 'LucideMails', 'LucideMap', 'LucideMapMinus', 'LucideMapPin', 'LucideMapPinCheck', 'LucideMapPinCheckInside', 'LucideMapPinHouse', 'LucideMapPinMinus', 'LucideMapPinMinusInside', 'LucideMapPinOff', 'LucideMapPinPen', 'LucideMapPinPlus', 'LucideMapPinPlusInside', 'LucideMapPinX', 'LucideMapPinXInside', 'LucideMapPinned', 'LucideMapPlus', 'LucideMars', 'LucideMarsStroke', 'LucideMartini', 'LucideMaximize', 'LucideMaximize2', 'LucideMedal', 'LucideMegaphone', 'LucideMegaphoneOff', 'LucideMeh', 'LucideMemoryStick', 'LucideMenu', 'LucideMenuSquare', 'LucideMerge', 'LucideMessageCircle', 'LucideMessageCircleCode', 'LucideMessageCircleDashed', 'LucideMessageCircleHeart', 'LucideMessageCircleMore', 'LucideMessageCircleOff', 'LucideMessageCirclePlus', 'LucideMessageCircleQuestion', 'LucideMessageCircleQuestionMark', 'LucideMessageCircleReply', 'LucideMessageCircleWarning', 'LucideMessageCircleX', 'LucideMessageSquare', 'LucideMessageSquareCode', 'LucideMessageSquareDashed', 'LucideMessageSquareDiff', 'LucideMessageSquareDot', 'LucideMessageSquareHeart', 'LucideMessageSquareLock', 'LucideMessageSquareMore', 'LucideMessageSquareOff', 'LucideMessageSquarePlus', 'LucideMessageSquareQuote', 'LucideMessageSquareReply', 'LucideMessageSquareShare', 'LucideMessageSquareText', 'LucideMessageSquareWarning', 'LucideMessageSquareX', 'LucideMessagesSquare', 'LucideMic', 'LucideMic2', 'LucideMicOff', 'LucideMicVocal', 'LucideMicrochip', 'LucideMicroscope', 'LucideMicrowave', 'LucideMilestone', 'LucideMilk', 'LucideMilkOff', 'LucideMinimize', 'LucideMinimize2', 'LucideMinus', 'LucideMinusCircle', 'LucideMinusSquare', 'LucideMonitor', 'LucideMonitorCheck', 'LucideMonitorCloud', 'LucideMonitorCog', 'LucideMonitorDot', 'LucideMonitorDown', 'LucideMonitorOff', 'LucideMonitorPause', 'LucideMonitorPlay', 'LucideMonitorSmartphone', 'LucideMonitorSpeaker', 'LucideMonitorStop', 'LucideMonitorUp', 'LucideMonitorX', 'LucideMoon', 'LucideMoonStar', 'LucideMoreHorizontal', 'LucideMoreVertical', 'LucideMotorbike', 'LucideMountain', 'LucideMountainSnow', 'LucideMouse', 'LucideMouseOff', 'LucideMousePointer', 'LucideMousePointer2', 'LucideMousePointer2Off', 'LucideMousePointerBan', 'LucideMousePointerClick', 'LucideMousePointerSquareDashed', 'LucideMove', 'LucideMove3D', 'LucideMove3d', 'LucideMoveDiagonal', 'LucideMoveDiagonal2', 'LucideMoveDown', 'LucideMoveDownLeft', 'LucideMoveDownRight', 'LucideMoveHorizontal', 'LucideMoveLeft', 'LucideMoveRight', 'LucideMoveUp', 'LucideMoveUpLeft', 'LucideMoveUpRight', 'LucideMoveVertical', 'LucideMusic', 'LucideMusic2', 'LucideMusic3', 'LucideMusic4', 'LucideNavigation', 'LucideNavigation2', 'LucideNavigation2Off', 'LucideNavigationOff', 'LucideNetwork', 'LucideNewspaper', 'LucideNfc', 'LucideNonBinary', 'LucideNotebook', 'LucideNotebookPen', 'LucideNotebookTabs', 'LucideNotebookText', 'LucideNotepadText', 'LucideNotepadTextDashed', 'LucideNut', 'LucideNutOff', 'LucideOctagon', 'LucideOctagonAlert', 'LucideOctagonMinus', 'LucideOctagonPause', 'LucideOctagonX', 'LucideOmega', 'LucideOption', 'LucideOrbit', 'LucideOrigami', 'LucideOutdent', 'LucidePackage', 'LucidePackage2', 'LucidePackageCheck', 'LucidePackageMinus', 'LucidePackageOpen', 'LucidePackagePlus', 'LucidePackageSearch', 'LucidePackageX', 'LucidePaintBucket', 'LucidePaintRoller', 'LucidePaintbrush', 'LucidePaintbrush2', 'LucidePaintbrushVertical', 'LucidePalette', 'LucidePalmtree', 'LucidePanda', 'LucidePanelBottom', 'LucidePanelBottomClose', 'LucidePanelBottomDashed', 'LucidePanelBottomInactive', 'LucidePanelBottomOpen', 'LucidePanelLeft', 'LucidePanelLeftClose', 'LucidePanelLeftDashed', 'LucidePanelLeftInactive', 'LucidePanelLeftOpen', 'LucidePanelLeftRightDashed', 'LucidePanelRight', 'LucidePanelRightClose', 'LucidePanelRightDashed', 'LucidePanelRightInactive', 'LucidePanelRightOpen', 'LucidePanelTop', 'LucidePanelTopBottomDashed', 'LucidePanelTopClose', 'LucidePanelTopDashed', 'LucidePanelTopInactive', 'LucidePanelTopOpen', 'LucidePanelsLeftBottom', 'LucidePanelsLeftRight', 'LucidePanelsRightBottom', 'LucidePanelsTopBottom', 'LucidePanelsTopLeft', 'LucidePaperclip', 'LucideParentheses', 'LucideParkingCircle', 'LucideParkingCircleOff', 'LucideParkingMeter', 'LucideParkingSquare', 'LucideParkingSquareOff', 'LucidePartyPopper', 'LucidePause', 'LucidePauseCircle', 'LucidePauseOctagon', 'LucidePawPrint', 'LucidePcCase', 'LucidePen', 'LucidePenBox', 'LucidePenLine', 'LucidePenOff', 'LucidePenSquare', 'LucidePenTool', 'LucidePencil', 'LucidePencilLine', 'LucidePencilOff', 'LucidePencilRuler', 'LucidePentagon', 'LucidePercent', 'LucidePercentCircle', 'LucidePercentDiamond', 'LucidePercentSquare', 'LucidePersonStanding', 'LucidePhilippinePeso', 'LucidePhone', 'LucidePhoneCall', 'LucidePhoneForwarded', 'LucidePhoneIncoming', 'LucidePhoneMissed', 'LucidePhoneOff', 'LucidePhoneOutgoing', 'LucidePi', 'LucidePiSquare', 'LucidePiano', 'LucidePickaxe', 'LucidePictureInPicture', 'LucidePictureInPicture2', 'LucidePieChart', 'LucidePiggyBank', 'LucidePilcrow', 'LucidePilcrowLeft', 'LucidePilcrowRight', 'LucidePilcrowSquare', 'LucidePill', 'LucidePillBottle', 'LucidePin', 'LucidePinOff', 'LucidePipette', 'LucidePizza', 'LucidePlane', 'LucidePlaneLanding', 'LucidePlaneTakeoff', 'LucidePlay', 'LucidePlayCircle', 'LucidePlaySquare', 'LucidePlug', 'LucidePlug2', 'LucidePlugZap', 'LucidePlugZap2', 'LucidePlus', 'LucidePlusCircle', 'LucidePlusSquare', 'LucidePocket', 'LucidePocketKnife', 'LucidePodcast', 'LucidePointer', 'LucidePointerOff', 'LucidePopcorn', 'LucidePopsicle', 'LucidePoundSterling', 'LucidePower', 'LucidePowerCircle', 'LucidePowerOff', 'LucidePowerSquare', 'LucidePresentation', 'LucidePrinter', 'LucidePrinterCheck', 'LucidePrinterX', 'LucideProjector', 'LucideProportions', 'LucidePuzzle', 'LucidePyramid', 'LucideQrCode', 'LucideQuote', 'LucideRabbit', 'LucideRadar', 'LucideRadiation', 'LucideRadical', 'LucideRadio', 'LucideRadioReceiver', 'LucideRadioTower', 'LucideRadius', 'LucideRailSymbol', 'LucideRainbow', 'LucideRat', 'LucideRatio', 'LucideReceipt', 'LucideReceiptCent', 'LucideReceiptEuro', 'LucideReceiptIndianRupee', 'LucideReceiptJapaneseYen', 'LucideReceiptPoundSterling', 'LucideReceiptRussianRuble', 'LucideReceiptSwissFranc', 'LucideReceiptText', 'LucideReceiptTurkishLira', 'LucideRectangleCircle', 'LucideRectangleEllipsis', 'LucideRectangleGoggles', 'LucideRectangleHorizontal', 'LucideRectangleVertical', 'LucideRecycle', 'LucideRedo', 'LucideRedo2', 'LucideRedoDot', 'LucideRefreshCcw', 'LucideRefreshCcwDot', 'LucideRefreshCw', 'LucideRefreshCwOff', 'LucideRefrigerator', 'LucideRegex', 'LucideRemoveFormatting', 'LucideRepeat', 'LucideRepeat1', 'LucideRepeat2', 'LucideReplace', 'LucideReplaceAll', 'LucideReply', 'LucideReplyAll', 'LucideRewind', 'LucideRibbon', 'LucideRocket', 'LucideRockingChair', 'LucideRollerCoaster', 'LucideRose', 'LucideRotate3D', 'LucideRotate3d', 'LucideRotateCcw', 'LucideRotateCcwKey', 'LucideRotateCcwSquare', 'LucideRotateCw', 'LucideRotateCwSquare', 'LucideRoute', 'LucideRouteOff', 'LucideRouter', 'LucideRows', 'LucideRows2', 'LucideRows3', 'LucideRows4', 'LucideRss', 'LucideRuler', 'LucideRulerDimensionLine', 'LucideRussianRuble', 'LucideSailboat', 'LucideSalad', 'LucideSandwich', 'LucideSatellite', 'LucideSatelliteDish', 'LucideSaudiRiyal', 'LucideSave', 'LucideSaveAll', 'LucideSaveOff', 'LucideScale', 'LucideScale3D', 'LucideScale3d', 'LucideScaling', 'LucideScan', 'LucideScanBarcode', 'LucideScanEye', 'LucideScanFace', 'LucideScanHeart', 'LucideScanLine', 'LucideScanQrCode', 'LucideScanSearch', 'LucideScanText', 'LucideScatterChart', 'LucideSchool', 'LucideSchool2', 'LucideScissors', 'LucideScissorsLineDashed', 'LucideScissorsSquare', 'LucideScissorsSquareDashedBottom', 'LucideScooter', 'LucideScreenShare', 'LucideScreenShareOff', 'LucideScroll', 'LucideScrollText', 'LucideSearch', 'LucideSearchAlert', 'LucideSearchCheck', 'LucideSearchCode', 'LucideSearchSlash', 'LucideSearchX', 'LucideSection', 'LucideSend', 'LucideSendHorizonal', 'LucideSendHorizontal', 'LucideSendToBack', 'LucideSeparatorHorizontal', 'LucideSeparatorVertical', 'LucideServer', 'LucideServerCog', 'LucideServerCrash', 'LucideServerOff', 'LucideSettings', 'LucideSettings2', 'LucideShapes', 'LucideShare', 'LucideShare2', 'LucideSheet', 'LucideShell', 'LucideShield', 'LucideShieldAlert', 'LucideShieldBan', 'LucideShieldCheck', 'LucideShieldClose', 'LucideShieldEllipsis', 'LucideShieldHalf', 'LucideShieldMinus', 'LucideShieldOff', 'LucideShieldPlus', 'LucideShieldQuestion', 'LucideShieldQuestionMark', 'LucideShieldUser', 'LucideShieldX', 'LucideShip', 'LucideShipWheel', 'LucideShirt', 'LucideShoppingBag', 'LucideShoppingBasket', 'LucideShoppingCart', 'LucideShovel', 'LucideShowerHead', 'LucideShredder', 'LucideShrimp', 'LucideShrink', 'LucideShrub', 'LucideShuffle', 'LucideSidebar', 'LucideSidebarClose', 'LucideSidebarOpen', 'LucideSigma', 'LucideSigmaSquare', 'LucideSignal', 'LucideSignalHigh', 'LucideSignalLow', 'LucideSignalMedium', 'LucideSignalZero', 'LucideSignature', 'LucideSignpost', 'LucideSignpostBig', 'LucideSiren', 'LucideSkipBack', 'LucideSkipForward', 'LucideSkull', 'LucideSlack', 'LucideSlash', 'LucideSlashSquare', 'LucideSlice', 'LucideSliders', 'LucideSlidersHorizontal', 'LucideSlidersVertical', 'LucideSmartphone', 'LucideSmartphoneCharging', 'LucideSmartphoneNfc', 'LucideSmile', 'LucideSmilePlus', 'LucideSnail', 'LucideSnowflake', 'LucideSoapDispenserDroplet', 'LucideSofa', 'LucideSolarPanel', 'LucideSortAsc', 'LucideSortDesc', 'LucideSoup', 'LucideSpace', 'LucideSpade', 'LucideSparkle', 'LucideSparkles', 'LucideSpeaker', 'LucideSpeech', 'LucideSpellCheck', 'LucideSpellCheck2', 'LucideSpline', 'LucideSplinePointer', 'LucideSplit', 'LucideSplitSquareHorizontal', 'LucideSplitSquareVertical', 'LucideSpool', 'LucideSpotlight', 'LucideSprayCan', 'LucideSprout', 'LucideSquare', 'LucideSquareActivity', 'LucideSquareArrowDown', 'LucideSquareArrowDownLeft', 'LucideSquareArrowDownRight', 'LucideSquareArrowLeft', 'LucideSquareArrowOutDownLeft', 'LucideSquareArrowOutDownRight', 'LucideSquareArrowOutUpLeft', 'LucideSquareArrowOutUpRight', 'LucideSquareArrowRight', 'LucideSquareArrowUp', 'LucideSquareArrowUpLeft', 'LucideSquareArrowUpRight', 'LucideSquareAsterisk', 'LucideSquareBottomDashedScissors', 'LucideSquareChartGantt', 'LucideSquareCheck', 'LucideSquareCheckBig', 'LucideSquareChevronDown', 'LucideSquareChevronLeft', 'LucideSquareChevronRight', 'LucideSquareChevronUp', 'LucideSquareCode', 'LucideSquareDashed', 'LucideSquareDashedBottom', 'LucideSquareDashedBottomCode', 'LucideSquareDashedKanban', 'LucideSquareDashedMousePointer', 'LucideSquareDashedTopSolid', 'LucideSquareDivide', 'LucideSquareDot', 'LucideSquareEqual', 'LucideSquareFunction', 'LucideSquareGanttChart', 'LucideSquareKanban', 'LucideSquareLibrary', 'LucideSquareM', 'LucideSquareMenu', 'LucideSquareMinus', 'LucideSquareMousePointer', 'LucideSquareParking', 'LucideSquareParkingOff', 'LucideSquarePause', 'LucideSquarePen', 'LucideSquarePercent', 'LucideSquarePi', 'LucideSquarePilcrow', 'LucideSquarePlay', 'LucideSquarePlus', 'LucideSquarePower', 'LucideSquareRadical', 'LucideSquareRoundCorner', 'LucideSquareScissors', 'LucideSquareSigma', 'LucideSquareSlash', 'LucideSquareSplitHorizontal', 'LucideSquareSplitVertical', 'LucideSquareSquare', 'LucideSquareStack', 'LucideSquareStar', 'LucideSquareStop', 'LucideSquareTerminal', 'LucideSquareUser', 'LucideSquareUserRound', 'LucideSquareX', 'LucideSquaresExclude', 'LucideSquaresIntersect', 'LucideSquaresSubtract', 'LucideSquaresUnite', 'LucideSquircle', 'LucideSquircleDashed', 'LucideSquirrel', 'LucideStamp', 'LucideStar', 'LucideStarHalf', 'LucideStarOff', 'LucideStars', 'LucideStepBack', 'LucideStepForward', 'LucideStethoscope', 'LucideSticker', 'LucideStickyNote', 'LucideStone', 'LucideStopCircle', 'LucideStore', 'LucideStretchHorizontal', 'LucideStretchVertical', 'LucideStrikethrough', 'LucideSubscript', 'LucideSubtitles', 'LucideSun', 'LucideSunDim', 'LucideSunMedium', 'LucideSunMoon', 'LucideSunSnow', 'LucideSunrise', 'LucideSunset', 'LucideSuperscript', 'LucideSwatchBook', 'LucideSwissFranc', 'LucideSwitchCamera', 'LucideSword', 'LucideSwords', 'LucideSyringe', 'LucideTable', 'LucideTable2', 'LucideTableCellsMerge', 'LucideTableCellsSplit', 'LucideTableColumnsSplit', 'LucideTableConfig', 'LucideTableOfContents', 'LucideTableProperties', 'LucideTableRowsSplit', 'LucideTablet', 'LucideTabletSmartphone', 'LucideTablets', 'LucideTag', 'LucideTags', 'LucideTally1', 'LucideTally2', 'LucideTally3', 'LucideTally4', 'LucideTally5', 'LucideTangent', 'LucideTarget', 'LucideTelescope', 'LucideTent', 'LucideTentTree', 'LucideTerminal', 'LucideTerminalSquare', 'LucideTestTube', 'LucideTestTube2', 'LucideTestTubeDiagonal', 'LucideTestTubes', 'LucideText', 'LucideTextAlignCenter', 'LucideTextAlignEnd', 'LucideTextAlignJustify', 'LucideTextAlignStart', 'LucideTextCursor', 'LucideTextCursorInput', 'LucideTextInitial', 'LucideTextQuote', 'LucideTextSearch', 'LucideTextSelect', 'LucideTextSelection', 'LucideTextWrap', 'LucideTheater', 'LucideThermometer', 'LucideThermometerSnowflake', 'LucideThermometerSun', 'LucideThumbsDown', 'LucideThumbsUp', 'LucideTicket', 'LucideTicketCheck', 'LucideTicketMinus', 'LucideTicketPercent', 'LucideTicketPlus', 'LucideTicketSlash', 'LucideTicketX', 'LucideTickets', 'LucideTicketsPlane', 'LucideTimer', 'LucideTimerOff', 'LucideTimerReset', 'LucideToggleLeft', 'LucideToggleRight', 'LucideToilet', 'LucideToolCase', 'LucideToolbox', 'LucideTornado', 'LucideTorus', 'LucideTouchpad', 'LucideTouchpadOff', 'LucideTowerControl', 'LucideToyBrick', 'LucideTractor', 'LucideTrafficCone', 'LucideTrain', 'LucideTrainFront', 'LucideTrainFrontTunnel', 'LucideTrainTrack', 'LucideTramFront', 'LucideTransgender', 'LucideTrash', 'LucideTrash2', 'LucideTreeDeciduous', 'LucideTreePalm', 'LucideTreePine', 'LucideTrees', 'LucideTrello', 'LucideTrendingDown', 'LucideTrendingUp', 'LucideTrendingUpDown', 'LucideTriangle', 'LucideTriangleAlert', 'LucideTriangleDashed', 'LucideTriangleRight', 'LucideTrophy', 'LucideTruck', 'LucideTruckElectric', 'LucideTurkishLira', 'LucideTurntable', 'LucideTurtle', 'LucideTv', 'LucideTv2', 'LucideTvMinimal', 'LucideTvMinimalPlay', 'LucideTwitch', 'LucideTwitter', 'LucideType', 'LucideTypeOutline', 'LucideUmbrella', 'LucideUmbrellaOff', 'LucideUnderline', 'LucideUndo', 'LucideUndo2', 'LucideUndoDot', 'LucideUnfoldHorizontal', 'LucideUnfoldVertical', 'LucideUngroup', 'LucideUniversity', 'LucideUnlink', 'LucideUnlink2', 'LucideUnlock', 'LucideUnlockKeyhole', 'LucideUnplug', 'LucideUpload', 'LucideUploadCloud', 'LucideUsb', 'LucideUser', 'LucideUser2', 'LucideUserCheck', 'LucideUserCheck2', 'LucideUserCircle', 'LucideUserCircle2', 'LucideUserCog', 'LucideUserCog2', 'LucideUserLock', 'LucideUserMinus', 'LucideUserMinus2', 'LucideUserPen', 'LucideUserPlus', 'LucideUserPlus2', 'LucideUserRound', 'LucideUserRoundCheck', 'LucideUserRoundCog', 'LucideUserRoundMinus', 'LucideUserRoundPen', 'LucideUserRoundPlus', 'LucideUserRoundSearch', 'LucideUserRoundX', 'LucideUserSearch', 'LucideUserSquare', 'LucideUserSquare2', 'LucideUserStar', 'LucideUserX', 'LucideUserX2', 'LucideUsers', 'LucideUsers2', 'LucideUsersRound', 'LucideUtensils', 'LucideUtensilsCrossed', 'LucideUtilityPole', 'LucideVan', 'LucideVariable', 'LucideVault', 'LucideVectorSquare', 'LucideVegan', 'LucideVenetianMask', 'LucideVenus', 'LucideVenusAndMars', 'LucideVerified', 'LucideVibrate', 'LucideVibrateOff', 'LucideVideo', 'LucideVideoOff', 'LucideVideotape', 'LucideView', 'LucideVoicemail', 'LucideVolleyball', 'LucideVolume', 'LucideVolume1', 'LucideVolume2', 'LucideVolumeOff', 'LucideVolumeX', 'LucideVote', 'LucideWallet', 'LucideWallet2', 'LucideWalletCards', 'LucideWalletMinimal', 'LucideWallpaper', 'LucideWand', 'LucideWand2', 'LucideWandSparkles', 'LucideWarehouse', 'LucideWashingMachine', 'LucideWatch', 'LucideWaves', 'LucideWavesArrowDown', 'LucideWavesArrowUp', 'LucideWavesLadder', 'LucideWaypoints', 'LucideWebcam', 'LucideWebhook', 'LucideWebhookOff', 'LucideWeight', 'LucideWeightTilde', 'LucideWheat', 'LucideWheatOff', 'LucideWholeWord', 'LucideWifi', 'LucideWifiCog', 'LucideWifiHigh', 'LucideWifiLow', 'LucideWifiOff', 'LucideWifiPen', 'LucideWifiSync', 'LucideWifiZero', 'LucideWind', 'LucideWindArrowDown', 'LucideWine', 'LucideWineOff', 'LucideWorkflow', 'LucideWorm', 'LucideWrapText', 'LucideWrench', 'LucideX', 'LucideXCircle', 'LucideXOctagon', 'LucideXSquare', 'LucideYoutube', 'LucideZap', 'LucideZapOff', 'LucideZoomIn', 'LucideZoomOut', 'Luggage', 'LuggageIcon', 'MSquare', 'MSquareIcon', 'Magnet', 'MagnetIcon', 'Mail', 'MailCheck', 'MailCheckIcon', 'MailIcon', 'MailMinus', 'MailMinusIcon', 'MailOpen', 'MailOpenIcon', 'MailPlus', 'MailPlusIcon', 'MailQuestion', 'MailQuestionIcon', 'MailQuestionMark', 'MailQuestionMarkIcon', 'MailSearch', 'MailSearchIcon', 'MailWarning', 'MailWarningIcon', 'MailX', 'MailXIcon', 'Mailbox', 'MailboxIcon', 'Mails', 'MailsIcon', 'Map', 'MapIcon', 'MapMinus', 'MapMinusIcon', 'MapPin', 'MapPinCheck', 'MapPinCheckIcon', 'MapPinCheckInside', 'MapPinCheckInsideIcon', 'MapPinHouse', 'MapPinHouseIcon', 'MapPinIcon', 'MapPinMinus', 'MapPinMinusIcon', 'MapPinMinusInside', 'MapPinMinusInsideIcon', 'MapPinOff', 'MapPinOffIcon', 'MapPinPen', 'MapPinPenIcon', 'MapPinPlus', 'MapPinPlusIcon', 'MapPinPlusInside', 'MapPinPlusInsideIcon', 'MapPinX', 'MapPinXIcon', 'MapPinXInside', 'MapPinXInsideIcon', 'MapPinned', 'MapPinnedIcon', 'MapPlus', 'MapPlusIcon', 'Mars', 'MarsIcon', 'MarsStroke', 'MarsStrokeIcon', 'Martini', 'MartiniIcon', 'Maximize', 'Maximize2', 'Maximize2Icon', 'MaximizeIcon', 'Medal', 'MedalIcon', 'Megaphone', 'MegaphoneIcon', 'MegaphoneOff', 'MegaphoneOffIcon', 'Meh', 'MehIcon', 'MemoryStick', 'MemoryStickIcon', 'Menu', 'MenuIcon', 'MenuSquare', 'MenuSquareIcon', 'Merge', 'MergeIcon', 'MessageCircle', 'MessageCircleCode', 'MessageCircleCodeIcon', 'MessageCircleDashed', 'MessageCircleDashedIcon', 'MessageCircleHeart', 'MessageCircleHeartIcon', 'MessageCircleIcon', 'MessageCircleMore', 'MessageCircleMoreIcon', 'MessageCircleOff', 'MessageCircleOffIcon', 'MessageCirclePlus', 'MessageCirclePlusIcon', 'MessageCircleQuestion', 'MessageCircleQuestionIcon', 'MessageCircleQuestionMark', 'MessageCircleQuestionMarkIcon', 'MessageCircleReply', 'MessageCircleReplyIcon', 'MessageCircleWarning', 'MessageCircleWarningIcon', 'MessageCircleX', 'MessageCircleXIcon', 'MessageSquare', 'MessageSquareCode', 'MessageSquareCodeIcon', 'MessageSquareDashed', 'MessageSquareDashedIcon', 'MessageSquareDiff', 'MessageSquareDiffIcon', 'MessageSquareDot', 'MessageSquareDotIcon', 'MessageSquareHeart', 'MessageSquareHeartIcon', 'MessageSquareIcon', 'MessageSquareLock', 'MessageSquareLockIcon', 'MessageSquareMore', 'MessageSquareMoreIcon', 'MessageSquareOff', 'MessageSquareOffIcon', 'MessageSquarePlus', 'MessageSquarePlusIcon', 'MessageSquareQuote', 'MessageSquareQuoteIcon', 'MessageSquareReply', 'MessageSquareReplyIcon', 'MessageSquareShare', 'MessageSquareShareIcon', 'MessageSquareText', 'MessageSquareTextIcon', 'MessageSquareWarning', 'MessageSquareWarningIcon', 'MessageSquareX', 'MessageSquareXIcon', 'MessagesSquare', 'MessagesSquareIcon', 'Mic', 'Mic2', 'Mic2Icon', 'MicIcon', 'MicOff', 'MicOffIcon', 'MicVocal', 'MicVocalIcon', 'Microchip', 'MicrochipIcon', 'Microscope', 'MicroscopeIcon', 'Microwave', 'MicrowaveIcon', 'Milestone', 'MilestoneIcon', 'Milk', 'MilkIcon', 'MilkOff', 'MilkOffIcon', 'Minimize', 'Minimize2', 'Minimize2Icon', 'MinimizeIcon', 'Minus', 'MinusCircle', 'MinusCircleIcon', 'MinusIcon', 'MinusSquare', 'MinusSquareIcon', 'Monitor', 'MonitorCheck', 'MonitorCheckIcon', 'MonitorCloud', 'MonitorCloudIcon', 'MonitorCog', 'MonitorCogIcon', 'MonitorDot', 'MonitorDotIcon', 'MonitorDown', 'MonitorDownIcon', 'MonitorIcon', 'MonitorOff', 'MonitorOffIcon', 'MonitorPause', 'MonitorPauseIcon', 'MonitorPlay', 'MonitorPlayIcon', 'MonitorSmartphone', 'MonitorSmartphoneIcon', 'MonitorSpeaker', 'MonitorSpeakerIcon', 'MonitorStop', 'MonitorStopIcon', 'MonitorUp', 'MonitorUpIcon', 'MonitorX', 'MonitorXIcon', 'Moon', 'MoonIcon', 'MoonStar', 'MoonStarIcon', 'MoreHorizontal', 'MoreHorizontalIcon', 'MoreVertical', 'MoreVerticalIcon', 'Motorbike', 'MotorbikeIcon', 'Mountain', 'MountainIcon', 'MountainSnow', 'MountainSnowIcon', 'Mouse', 'MouseIcon', 'MouseOff', 'MouseOffIcon', 'MousePointer', 'MousePointer2', 'MousePointer2Icon', 'MousePointer2Off', 'MousePointer2OffIcon', 'MousePointerBan', 'MousePointerBanIcon', 'MousePointerClick', 'MousePointerClickIcon', 'MousePointerIcon', 'MousePointerSquareDashed', 'MousePointerSquareDashedIcon', 'Move', 'Move3D', 'Move3DIcon', 'Move3d', 'Move3dIcon', 'MoveDiagonal', 'MoveDiagonal2', 'MoveDiagonal2Icon', 'MoveDiagonalIcon', 'MoveDown', 'MoveDownIcon', 'MoveDownLeft', 'MoveDownLeftIcon', 'MoveDownRight', 'MoveDownRightIcon', 'MoveHorizontal', 'MoveHorizontalIcon', 'MoveIcon', 'MoveLeft', 'MoveLeftIcon', 'MoveRight', 'MoveRightIcon', 'MoveUp', 'MoveUpIcon', 'MoveUpLeft', 'MoveUpLeftIcon', 'MoveUpRight', 'MoveUpRightIcon', 'MoveVertical', 'MoveVerticalIcon', 'Music', 'Music2', 'Music2Icon', 'Music3', 'Music3Icon', 'Music4', 'Music4Icon', 'MusicIcon', 'Navigation', 'Navigation2', 'Navigation2Icon', 'Navigation2Off', 'Navigation2OffIcon', 'NavigationIcon', 'NavigationOff', 'NavigationOffIcon', 'Network', 'NetworkIcon', 'Newspaper', 'NewspaperIcon', 'Nfc', 'NfcIcon', 'NonBinary', 'NonBinaryIcon', 'Notebook', 'NotebookIcon', 'NotebookPen', 'NotebookPenIcon', 'NotebookTabs', 'NotebookTabsIcon', 'NotebookText', 'NotebookTextIcon', 'NotepadText', 'NotepadTextDashed', 'NotepadTextDashedIcon', 'NotepadTextIcon', 'Nut', 'NutIcon', 'NutOff', 'NutOffIcon', 'Octagon', 'OctagonAlert', 'OctagonAlertIcon', 'OctagonIcon', 'OctagonMinus', 'OctagonMinusIcon', 'OctagonPause', 'OctagonPauseIcon', 'OctagonX', 'OctagonXIcon', 'Omega', 'OmegaIcon', 'Option', 'OptionIcon', 'Orbit', 'OrbitIcon', 'Origami', 'OrigamiIcon', 'Outdent', 'OutdentIcon', 'Package', 'Package2', 'Package2Icon', 'PackageCheck', 'PackageCheckIcon', 'PackageIcon', 'PackageMinus', 'PackageMinusIcon', 'PackageOpen', 'PackageOpenIcon', 'PackagePlus', 'PackagePlusIcon', 'PackageSearch', 'PackageSearchIcon', 'PackageX', 'PackageXIcon', 'PaintBucket', 'PaintBucketIcon', 'PaintRoller', 'PaintRollerIcon', 'Paintbrush', 'Paintbrush2', 'Paintbrush2Icon', 'PaintbrushIcon', 'PaintbrushVertical', 'PaintbrushVerticalIcon', 'Palette', 'PaletteIcon', 'Palmtree', 'PalmtreeIcon', 'Panda', 'PandaIcon', 'PanelBottom', 'PanelBottomClose', 'PanelBottomCloseIcon', 'PanelBottomDashed', 'PanelBottomDashedIcon', 'PanelBottomIcon', 'PanelBottomInactive', 'PanelBottomInactiveIcon', 'PanelBottomOpen', 'PanelBottomOpenIcon', 'PanelLeft', 'PanelLeftClose', 'PanelLeftCloseIcon', 'PanelLeftDashed', 'PanelLeftDashedIcon', 'PanelLeftIcon', 'PanelLeftInactive', 'PanelLeftInactiveIcon', 'PanelLeftOpen', 'PanelLeftOpenIcon', 'PanelLeftRightDashed', 'PanelLeftRightDashedIcon', 'PanelRight', 'PanelRightClose', 'PanelRightCloseIcon', 'PanelRightDashed', 'PanelRightDashedIcon', 'PanelRightIcon', 'PanelRightInactive', 'PanelRightInactiveIcon', 'PanelRightOpen', 'PanelRightOpenIcon', 'PanelTop', 'PanelTopBottomDashed', 'PanelTopBottomDashedIcon', 'PanelTopClose', 'PanelTopCloseIcon', 'PanelTopDashed', 'PanelTopDashedIcon', 'PanelTopIcon', 'PanelTopInactive', 'PanelTopInactiveIcon', 'PanelTopOpen', 'PanelTopOpenIcon', 'PanelsLeftBottom', 'PanelsLeftBottomIcon', 'PanelsLeftRight', 'PanelsLeftRightIcon', 'PanelsRightBottom', 'PanelsRightBottomIcon', 'PanelsTopBottom', 'PanelsTopBottomIcon', 'PanelsTopLeft', 'PanelsTopLeftIcon', 'Paperclip', 'PaperclipIcon', 'Parentheses', 'ParenthesesIcon', 'ParkingCircle', 'ParkingCircleIcon', 'ParkingCircleOff', 'ParkingCircleOffIcon', 'ParkingMeter', 'ParkingMeterIcon', 'ParkingSquare', 'ParkingSquareIcon', 'ParkingSquareOff', 'ParkingSquareOffIcon', 'PartyPopper', 'PartyPopperIcon', 'Pause', 'PauseCircle', 'PauseCircleIcon', 'PauseIcon', 'PauseOctagon', 'PauseOctagonIcon', 'PawPrint', 'PawPrintIcon', 'PcCase', 'PcCaseIcon', 'Pen', 'PenBox', 'PenBoxIcon', 'PenIcon', 'PenLine', 'PenLineIcon', 'PenOff', 'PenOffIcon', 'PenSquare', 'PenSquareIcon', 'PenTool', 'PenToolIcon', 'Pencil', 'PencilIcon', 'PencilLine', 'PencilLineIcon', 'PencilOff', 'PencilOffIcon', 'PencilRuler', 'PencilRulerIcon', 'Pentagon', 'PentagonIcon', 'Percent', 'PercentCircle', 'PercentCircleIcon', 'PercentDiamond', 'PercentDiamondIcon', 'PercentIcon', 'PercentSquare', 'PercentSquareIcon', 'PersonStanding', 'PersonStandingIcon', 'PhilippinePeso', 'PhilippinePesoIcon', 'Phone', 'PhoneCall', 'PhoneCallIcon', 'PhoneForwarded', 'PhoneForwardedIcon', 'PhoneIcon', 'PhoneIncoming', 'PhoneIncomingIcon', 'PhoneMissed', 'PhoneMissedIcon', 'PhoneOff', 'PhoneOffIcon', 'PhoneOutgoing', 'PhoneOutgoingIcon', 'Pi', 'PiIcon', 'PiSquare', 'PiSquareIcon', 'Piano', 'PianoIcon', 'Pickaxe', 'PickaxeIcon', 'PictureInPicture', 'PictureInPicture2', 'PictureInPicture2Icon', 'PictureInPictureIcon', 'PieChart', 'PieChartIcon', 'PiggyBank', 'PiggyBankIcon', 'Pilcrow', 'PilcrowIcon', 'PilcrowLeft', 'PilcrowLeftIcon', 'PilcrowRight', 'PilcrowRightIcon', 'PilcrowSquare', 'PilcrowSquareIcon', 'Pill', 'PillBottle', 'PillBottleIcon', 'PillIcon', 'Pin', 'PinIcon', 'PinOff', 'PinOffIcon', 'Pipette', 'PipetteIcon', 'Pizza', 'PizzaIcon', 'Plane', 'PlaneIcon', 'PlaneLanding', 'PlaneLandingIcon', 'PlaneTakeoff', 'PlaneTakeoffIcon', 'Play', 'PlayCircle', 'PlayCircleIcon', 'PlayIcon', 'PlaySquare', 'PlaySquareIcon', 'Plug', 'Plug2', 'Plug2Icon', 'PlugIcon', 'PlugZap', 'PlugZap2', 'PlugZap2Icon', 'PlugZapIcon', 'Plus', 'PlusCircle', 'PlusCircleIcon', 'PlusIcon', 'PlusSquare', 'PlusSquareIcon', 'Pocket', 'PocketIcon', 'PocketKnife', 'PocketKnifeIcon', 'Podcast', 'PodcastIcon', 'Pointer', 'PointerIcon', 'PointerOff', 'PointerOffIcon', 'Popcorn', 'PopcornIcon', 'Popsicle', 'PopsicleIcon', 'PoundSterling', 'PoundSterlingIcon', 'Power', 'PowerCircle', 'PowerCircleIcon', 'PowerIcon', 'PowerOff', 'PowerOffIcon', 'PowerSquare', 'PowerSquareIcon', 'Presentation', 'PresentationIcon', 'Printer', 'PrinterCheck', 'PrinterCheckIcon', 'PrinterIcon', 'PrinterX', 'PrinterXIcon', 'Projector', 'ProjectorIcon', 'Proportions', 'ProportionsIcon', 'Puzzle', 'PuzzleIcon', 'Pyramid', 'PyramidIcon', 'QrCode', 'QrCodeIcon', 'Quote', 'QuoteIcon', 'Rabbit', 'RabbitIcon', 'Radar', 'RadarIcon', 'Radiation', 'RadiationIcon', 'Radical', 'RadicalIcon', 'Radio', 'RadioIcon', 'RadioReceiver', 'RadioReceiverIcon', 'RadioTower', 'RadioTowerIcon', 'Radius', 'RadiusIcon', 'RailSymbol', 'RailSymbolIcon', 'Rainbow', 'RainbowIcon', 'Rat', 'RatIcon', 'Ratio', 'RatioIcon', 'Receipt', 'ReceiptCent', 'ReceiptCentIcon', 'ReceiptEuro', 'ReceiptEuroIcon', 'ReceiptIcon', 'ReceiptIndianRupee', 'ReceiptIndianRupeeIcon', 'ReceiptJapaneseYen', 'ReceiptJapaneseYenIcon', 'ReceiptPoundSterling', 'ReceiptPoundSterlingIcon', 'ReceiptRussianRuble', 'ReceiptRussianRubleIcon', 'ReceiptSwissFranc', 'ReceiptSwissFrancIcon', 'ReceiptText', 'ReceiptTextIcon', 'ReceiptTurkishLira', 'ReceiptTurkishLiraIcon', 'RectangleCircle', 'RectangleCircleIcon', 'RectangleEllipsis', 'RectangleEllipsisIcon', 'RectangleGoggles', 'RectangleGogglesIcon', 'RectangleHorizontal', 'RectangleHorizontalIcon', 'RectangleVertical', 'RectangleVerticalIcon', 'Recycle', 'RecycleIcon', 'Redo', 'Redo2', 'Redo2Icon', 'RedoDot', 'RedoDotIcon', 'RedoIcon', 'RefreshCcw', 'RefreshCcwDot', 'RefreshCcwDotIcon', 'RefreshCcwIcon', 'RefreshCw', 'RefreshCwIcon', 'RefreshCwOff', 'RefreshCwOffIcon', 'Refrigerator', 'RefrigeratorIcon', 'Regex', 'RegexIcon', 'RemoveFormatting', 'RemoveFormattingIcon', 'Repeat', 'Repeat1', 'Repeat1Icon', 'Repeat2', 'Repeat2Icon', 'RepeatIcon', 'Replace', 'ReplaceAll', 'ReplaceAllIcon', 'ReplaceIcon', 'Reply', 'ReplyAll', 'ReplyAllIcon', 'ReplyIcon', 'Rewind', 'RewindIcon', 'Ribbon', 'RibbonIcon', 'Rocket', 'RocketIcon', 'RockingChair', 'RockingChairIcon', 'RollerCoaster', 'RollerCoasterIcon', 'Rose', 'RoseIcon', 'Rotate3D', 'Rotate3DIcon', 'Rotate3d', 'Rotate3dIcon', 'RotateCcw', 'RotateCcwIcon', 'RotateCcwKey', 'RotateCcwKeyIcon', 'RotateCcwSquare', 'RotateCcwSquareIcon', 'RotateCw', 'RotateCwIcon', 'RotateCwSquare', 'RotateCwSquareIcon', 'Route', 'RouteIcon', 'RouteOff', 'RouteOffIcon', 'Router', 'RouterIcon', 'Rows', 'Rows2', 'Rows2Icon', 'Rows3', 'Rows3Icon', 'Rows4', 'Rows4Icon', 'RowsIcon', 'Rss', 'RssIcon', 'Ruler', 'RulerDimensionLine', 'RulerDimensionLineIcon', 'RulerIcon', 'RussianRuble', 'RussianRubleIcon', 'Sailboat', 'SailboatIcon', 'Salad', 'SaladIcon', 'Sandwich', 'SandwichIcon', 'Satellite', 'SatelliteDish', 'SatelliteDishIcon', 'SatelliteIcon', 'SaudiRiyal', 'SaudiRiyalIcon', 'Save', 'SaveAll', 'SaveAllIcon', 'SaveIcon', 'SaveOff', 'SaveOffIcon', 'Scale', 'Scale3D', 'Scale3DIcon', 'Scale3d', 'Scale3dIcon', 'ScaleIcon', 'Scaling', 'ScalingIcon', 'Scan', 'ScanBarcode', 'ScanBarcodeIcon', 'ScanEye', 'ScanEyeIcon', 'ScanFace', 'ScanFaceIcon', 'ScanHeart', 'ScanHeartIcon', 'ScanIcon', 'ScanLine', 'ScanLineIcon', 'ScanQrCode', 'ScanQrCodeIcon', 'ScanSearch', 'ScanSearchIcon', 'ScanText', 'ScanTextIcon', 'ScatterChart', 'ScatterChartIcon', 'School', 'School2', 'School2Icon', 'SchoolIcon', 'Scissors', 'ScissorsIcon', 'ScissorsLineDashed', 'ScissorsLineDashedIcon', 'ScissorsSquare', 'ScissorsSquareDashedBottom', 'ScissorsSquareDashedBottomIcon', 'ScissorsSquareIcon', 'Scooter', 'ScooterIcon', 'ScreenShare', 'ScreenShareIcon', 'ScreenShareOff', 'ScreenShareOffIcon', 'Scroll', 'ScrollIcon', 'ScrollText', 'ScrollTextIcon', 'Search', 'SearchAlert', 'SearchAlertIcon', 'SearchCheck', 'SearchCheckIcon', 'SearchCode', 'SearchCodeIcon', 'SearchIcon', 'SearchSlash', 'SearchSlashIcon', 'SearchX', 'SearchXIcon', 'Section', 'SectionIcon', 'Send', 'SendHorizonal', 'SendHorizonalIcon', 'SendHorizontal', 'SendHorizontalIcon', 'SendIcon', 'SendToBack', 'SendToBackIcon', 'SeparatorHorizontal', 'SeparatorHorizontalIcon', 'SeparatorVertical', 'SeparatorVerticalIcon', 'Server', 'ServerCog', 'ServerCogIcon', 'ServerCrash', 'ServerCrashIcon', 'ServerIcon', 'ServerOff', 'ServerOffIcon', 'Settings', 'Settings2', 'Settings2Icon', 'SettingsIcon', 'Shapes', 'ShapesIcon', 'Share', 'Share2', 'Share2Icon', 'ShareIcon', 'Sheet', 'SheetIcon', 'Shell', 'ShellIcon', 'Shield', 'ShieldAlert', 'ShieldAlertIcon', 'ShieldBan', 'ShieldBanIcon', 'ShieldCheck', 'ShieldCheckIcon', 'ShieldClose', 'ShieldCloseIcon', 'ShieldEllipsis', 'ShieldEllipsisIcon', 'ShieldHalf', 'ShieldHalfIcon', 'ShieldIcon', 'ShieldMinus', 'ShieldMinusIcon', 'ShieldOff', 'ShieldOffIcon', 'ShieldPlus', 'ShieldPlusIcon', 'ShieldQuestion', 'ShieldQuestionIcon', 'ShieldQuestionMark', 'ShieldQuestionMarkIcon', 'ShieldUser', 'ShieldUserIcon', 'ShieldX', 'ShieldXIcon', 'Ship', 'ShipIcon', 'ShipWheel', 'ShipWheelIcon', 'Shirt', 'ShirtIcon', 'ShoppingBag', 'ShoppingBagIcon', 'ShoppingBasket', 'ShoppingBasketIcon', 'ShoppingCart', 'ShoppingCartIcon', 'Shovel', 'ShovelIcon', 'ShowerHead', 'ShowerHeadIcon', 'Shredder', 'ShredderIcon', 'Shrimp', 'ShrimpIcon', 'Shrink', 'ShrinkIcon', 'Shrub', 'ShrubIcon', 'Shuffle', 'ShuffleIcon', 'Sidebar', 'SidebarClose', 'SidebarCloseIcon', 'SidebarIcon', 'SidebarOpen', 'SidebarOpenIcon', 'Sigma', 'SigmaIcon', 'SigmaSquare', 'SigmaSquareIcon', 'Signal', 'SignalHigh', 'SignalHighIcon', 'SignalIcon', 'SignalLow', 'SignalLowIcon', 'SignalMedium', 'SignalMediumIcon', 'SignalZero', 'SignalZeroIcon', 'Signature', 'SignatureIcon', 'Signpost', 'SignpostBig', 'SignpostBigIcon', 'SignpostIcon', 'Siren', 'SirenIcon', 'SkipBack', 'SkipBackIcon', 'SkipForward', 'SkipForwardIcon', 'Skull', 'SkullIcon', 'Slack', 'SlackIcon', 'Slash', 'SlashIcon', 'SlashSquare', 'SlashSquareIcon', 'Slice', 'SliceIcon', 'Sliders', 'SlidersHorizontal', 'SlidersHorizontalIcon', 'SlidersIcon', 'SlidersVertical', 'SlidersVerticalIcon', 'Smartphone', 'SmartphoneCharging', 'SmartphoneChargingIcon', 'SmartphoneIcon', 'SmartphoneNfc', 'SmartphoneNfcIcon', 'Smile', 'SmileIcon', 'SmilePlus', 'SmilePlusIcon', 'Snail', 'SnailIcon', 'Snowflake', 'SnowflakeIcon', 'SoapDispenserDroplet', 'SoapDispenserDropletIcon', 'Sofa', 'SofaIcon', 'SolarPanel', 'SolarPanelIcon', 'SortAsc', 'SortAscIcon', 'SortDesc', 'SortDescIcon', 'Soup', 'SoupIcon', 'Space', 'SpaceIcon', 'Spade', 'SpadeIcon', 'Sparkle', 'SparkleIcon', 'Sparkles', 'SparklesIcon', 'Speaker', 'SpeakerIcon', 'Speech', 'SpeechIcon', 'SpellCheck', 'SpellCheck2', 'SpellCheck2Icon', 'SpellCheckIcon', 'Spline', 'SplineIcon', 'SplinePointer', 'SplinePointerIcon', 'Split', 'SplitIcon', 'SplitSquareHorizontal', 'SplitSquareHorizontalIcon', 'SplitSquareVertical', 'SplitSquareVerticalIcon', 'Spool', 'SpoolIcon', 'Spotlight', 'SpotlightIcon', 'SprayCan', 'SprayCanIcon', 'Sprout', 'SproutIcon', 'Square', 'SquareActivity', 'SquareActivityIcon', 'SquareArrowDown', 'SquareArrowDownIcon', 'SquareArrowDownLeft', 'SquareArrowDownLeftIcon', 'SquareArrowDownRight', 'SquareArrowDownRightIcon', 'SquareArrowLeft', 'SquareArrowLeftIcon', 'SquareArrowOutDownLeft', 'SquareArrowOutDownLeftIcon', 'SquareArrowOutDownRight', 'SquareArrowOutDownRightIcon', 'SquareArrowOutUpLeft', 'SquareArrowOutUpLeftIcon', 'SquareArrowOutUpRight', 'SquareArrowOutUpRightIcon', 'SquareArrowRight', 'SquareArrowRightIcon', 'SquareArrowUp', 'SquareArrowUpIcon', 'SquareArrowUpLeft', 'SquareArrowUpLeftIcon', 'SquareArrowUpRight', 'SquareArrowUpRightIcon', 'SquareAsterisk', 'SquareAsteriskIcon', 'SquareBottomDashedScissors', 'SquareBottomDashedScissorsIcon', 'SquareChartGantt', 'SquareChartGanttIcon', 'SquareCheck', 'SquareCheckBig', 'SquareCheckBigIcon', 'SquareCheckIcon', 'SquareChevronDown', 'SquareChevronDownIcon', 'SquareChevronLeft', 'SquareChevronLeftIcon', 'SquareChevronRight', 'SquareChevronRightIcon', 'SquareChevronUp', 'SquareChevronUpIcon', 'SquareCode', 'SquareCodeIcon', 'SquareDashed', 'SquareDashedBottom', 'SquareDashedBottomCode', 'SquareDashedBottomCodeIcon', 'SquareDashedBottomIcon', 'SquareDashedIcon', 'SquareDashedKanban', 'SquareDashedKanbanIcon', 'SquareDashedMousePointer', 'SquareDashedMousePointerIcon', 'SquareDashedTopSolid', 'SquareDashedTopSolidIcon', 'SquareDivide', 'SquareDivideIcon', 'SquareDot', 'SquareDotIcon', 'SquareEqual', 'SquareEqualIcon', 'SquareFunction', 'SquareFunctionIcon', 'SquareGanttChart', 'SquareGanttChartIcon', 'SquareIcon', 'SquareKanban', 'SquareKanbanIcon', 'SquareLibrary', 'SquareLibraryIcon', 'SquareM', 'SquareMIcon', 'SquareMenu', 'SquareMenuIcon', 'SquareMinus', 'SquareMinusIcon', 'SquareMousePointer', 'SquareMousePointerIcon', 'SquareParking', 'SquareParkingIcon', 'SquareParkingOff', 'SquareParkingOffIcon', 'SquarePause', 'SquarePauseIcon', 'SquarePen', 'SquarePenIcon', 'SquarePercent', 'SquarePercentIcon', 'SquarePi', 'SquarePiIcon', 'SquarePilcrow', 'SquarePilcrowIcon', 'SquarePlay', 'SquarePlayIcon', 'SquarePlus', 'SquarePlusIcon', 'SquarePower', 'SquarePowerIcon', 'SquareRadical', 'SquareRadicalIcon', 'SquareRoundCorner', 'SquareRoundCornerIcon', 'SquareScissors', 'SquareScissorsIcon', 'SquareSigma', 'SquareSigmaIcon', 'SquareSlash', 'SquareSlashIcon', 'SquareSplitHorizontal', 'SquareSplitHorizontalIcon', 'SquareSplitVertical', 'SquareSplitVerticalIcon', 'SquareSquare', 'SquareSquareIcon', 'SquareStack', 'SquareStackIcon', 'SquareStar', 'SquareStarIcon', 'SquareStop', 'SquareStopIcon', 'SquareTerminal', 'SquareTerminalIcon', 'SquareUser', 'SquareUserIcon', 'SquareUserRound', 'SquareUserRoundIcon', 'SquareX', 'SquareXIcon', 'SquaresExclude', 'SquaresExcludeIcon', 'SquaresIntersect', 'SquaresIntersectIcon', 'SquaresSubtract', 'SquaresSubtractIcon', 'SquaresUnite', 'SquaresUniteIcon', 'Squircle', 'SquircleDashed', 'SquircleDashedIcon', 'SquircleIcon', 'Squirrel', 'SquirrelIcon', 'Stamp', 'StampIcon', 'Star', 'StarHalf', 'StarHalfIcon', 'StarIcon', 'StarOff', 'StarOffIcon', 'Stars', 'StarsIcon', 'StepBack', 'StepBackIcon', 'StepForward', 'StepForwardIcon', 'Stethoscope', 'StethoscopeIcon', 'Sticker', 'StickerIcon', 'StickyNote', 'StickyNoteIcon', 'Stone', 'StoneIcon', 'StopCircle', 'StopCircleIcon', 'Store', 'StoreIcon', 'StretchHorizontal', 'StretchHorizontalIcon', 'StretchVertical', 'StretchVerticalIcon', 'Strikethrough', 'StrikethroughIcon', 'Subscript', 'SubscriptIcon', 'Subtitles', 'SubtitlesIcon', 'Sun', 'SunDim', 'SunDimIcon', 'SunIcon', 'SunMedium', 'SunMediumIcon', 'SunMoon', 'SunMoonIcon', 'SunSnow', 'SunSnowIcon', 'Sunrise', 'SunriseIcon', 'Sunset', 'SunsetIcon', 'Superscript', 'SuperscriptIcon', 'SwatchBook', 'SwatchBookIcon', 'SwissFranc', 'SwissFrancIcon', 'SwitchCamera', 'SwitchCameraIcon', 'Sword', 'SwordIcon', 'Swords', 'SwordsIcon', 'Syringe', 'SyringeIcon', 'Table', 'Table2', 'Table2Icon', 'TableCellsMerge', 'TableCellsMergeIcon', 'TableCellsSplit', 'TableCellsSplitIcon', 'TableColumnsSplit', 'TableColumnsSplitIcon', 'TableConfig', 'TableConfigIcon', 'TableIcon', 'TableOfContents', 'TableOfContentsIcon', 'TableProperties', 'TablePropertiesIcon', 'TableRowsSplit', 'TableRowsSplitIcon', 'Tablet', 'TabletIcon', 'TabletSmartphone', 'TabletSmartphoneIcon', 'Tablets', 'TabletsIcon', 'Tag', 'TagIcon', 'Tags', 'TagsIcon', 'Tally1', 'Tally1Icon', 'Tally2', 'Tally2Icon', 'Tally3', 'Tally3Icon', 'Tally4', 'Tally4Icon', 'Tally5', 'Tally5Icon', 'Tangent', 'TangentIcon', 'Target', 'TargetIcon', 'Telescope', 'TelescopeIcon', 'Tent', 'TentIcon', 'TentTree', 'TentTreeIcon', 'Terminal', 'TerminalIcon', 'TerminalSquare', 'TerminalSquareIcon', 'TestTube', 'TestTube2', 'TestTube2Icon', 'TestTubeDiagonal', 'TestTubeDiagonalIcon', 'TestTubeIcon', 'TestTubes', 'TestTubesIcon', 'Text', 'TextAlignCenter', 'TextAlignCenterIcon', 'TextAlignEnd', 'TextAlignEndIcon', 'TextAlignJustify', 'TextAlignJustifyIcon', 'TextAlignStart', 'TextAlignStartIcon', 'TextCursor', 'TextCursorIcon', 'TextCursorInput', 'TextCursorInputIcon', 'TextIcon', 'TextInitial', 'TextInitialIcon', 'TextQuote', 'TextQuoteIcon', 'TextSearch', 'TextSearchIcon', 'TextSelect', 'TextSelectIcon', 'TextSelection', 'TextSelectionIcon', 'TextWrap', 'TextWrapIcon', 'Theater', 'TheaterIcon', 'Thermometer', 'ThermometerIcon', 'ThermometerSnowflake', 'ThermometerSnowflakeIcon', 'ThermometerSun', 'ThermometerSunIcon', 'ThumbsDown', 'ThumbsDownIcon', 'ThumbsUp', 'ThumbsUpIcon', 'Ticket', 'TicketCheck', 'TicketCheckIcon', 'TicketIcon', 'TicketMinus', 'TicketMinusIcon', 'TicketPercent', 'TicketPercentIcon', 'TicketPlus', 'TicketPlusIcon', 'TicketSlash', 'TicketSlashIcon', 'TicketX', 'TicketXIcon', 'Tickets', 'TicketsIcon', 'TicketsPlane', 'TicketsPlaneIcon', 'Timer', 'TimerIcon', 'TimerOff', 'TimerOffIcon', 'TimerReset', 'TimerResetIcon', 'ToggleLeft', 'ToggleLeftIcon', 'ToggleRight', 'ToggleRightIcon', 'Toilet', 'ToiletIcon', 'ToolCase', 'ToolCaseIcon', 'Toolbox', 'ToolboxIcon', 'Tornado', 'TornadoIcon', 'Torus', 'TorusIcon', 'Touchpad', 'TouchpadIcon', 'TouchpadOff', 'TouchpadOffIcon', 'TowerControl', 'TowerControlIcon', 'ToyBrick', 'ToyBrickIcon', 'Tractor', 'TractorIcon', 'TrafficCone', 'TrafficConeIcon', 'Train', 'TrainFront', 'TrainFrontIcon', 'TrainFrontTunnel', 'TrainFrontTunnelIcon', 'TrainIcon', 'TrainTrack', 'TrainTrackIcon', 'TramFront', 'TramFrontIcon', 'Transgender', 'TransgenderIcon', 'Trash', 'Trash2', 'Trash2Icon', 'TrashIcon', 'TreeDeciduous', 'TreeDeciduousIcon', 'TreePalm', 'TreePalmIcon', 'TreePine', 'TreePineIcon', 'Trees', 'TreesIcon', 'Trello', 'TrelloIcon', 'TrendingDown', 'TrendingDownIcon', 'TrendingUp', 'TrendingUpDown', 'TrendingUpDownIcon', 'TrendingUpIcon', 'Triangle', 'TriangleAlert', 'TriangleAlertIcon', 'TriangleDashed', 'TriangleDashedIcon', 'TriangleIcon', 'TriangleRight', 'TriangleRightIcon', 'Trophy', 'TrophyIcon', 'Truck', 'TruckElectric', 'TruckElectricIcon', 'TruckIcon', 'TurkishLira', 'TurkishLiraIcon', 'Turntable', 'TurntableIcon', 'Turtle', 'TurtleIcon', 'Tv', 'Tv2', 'Tv2Icon', 'TvIcon', 'TvMinimal', 'TvMinimalIcon', 'TvMinimalPlay', 'TvMinimalPlayIcon', 'Twitch', 'TwitchIcon', 'Twitter', 'TwitterIcon', 'Type', 'TypeIcon', 'TypeOutline', 'TypeOutlineIcon', 'Umbrella', 'UmbrellaIcon', 'UmbrellaOff', 'UmbrellaOffIcon', 'Underline', 'UnderlineIcon', 'Undo', 'Undo2', 'Undo2Icon', 'UndoDot', 'UndoDotIcon', 'UndoIcon', 'UnfoldHorizontal', 'UnfoldHorizontalIcon', 'UnfoldVertical', 'UnfoldVerticalIcon', 'Ungroup', 'UngroupIcon', 'University', 'UniversityIcon', 'Unlink', 'Unlink2', 'Unlink2Icon', 'UnlinkIcon', 'Unlock', 'UnlockIcon', 'UnlockKeyhole', 'UnlockKeyholeIcon', 'Unplug', 'UnplugIcon', 'Upload', 'UploadCloud', 'UploadCloudIcon', 'UploadIcon', 'Usb', 'UsbIcon', 'User', 'User2', 'User2Icon', 'UserCheck', 'UserCheck2', 'UserCheck2Icon', 'UserCheckIcon', 'UserCircle', 'UserCircle2', 'UserCircle2Icon', 'UserCircleIcon', 'UserCog', 'UserCog2', 'UserCog2Icon', 'UserCogIcon', 'UserIcon', 'UserLock', 'UserLockIcon', 'UserMinus', 'UserMinus2', 'UserMinus2Icon', 'UserMinusIcon', 'UserPen', 'UserPenIcon', 'UserPlus', 'UserPlus2', 'UserPlus2Icon', 'UserPlusIcon', 'UserRound', 'UserRoundCheck', 'UserRoundCheckIcon', 'UserRoundCog', 'UserRoundCogIcon', 'UserRoundIcon', 'UserRoundMinus', 'UserRoundMinusIcon', 'UserRoundPen', 'UserRoundPenIcon', 'UserRoundPlus', 'UserRoundPlusIcon', 'UserRoundSearch', 'UserRoundSearchIcon', 'UserRoundX', 'UserRoundXIcon', 'UserSearch', 'UserSearchIcon', 'UserSquare', 'UserSquare2', 'UserSquare2Icon', 'UserSquareIcon', 'UserStar', 'UserStarIcon', 'UserX', 'UserX2', 'UserX2Icon', 'UserXIcon', 'Users', 'Users2', 'Users2Icon', 'UsersIcon', 'UsersRound', 'UsersRoundIcon', 'Utensils', 'UtensilsCrossed', 'UtensilsCrossedIcon', 'UtensilsIcon', 'UtilityPole', 'UtilityPoleIcon', 'Van', 'VanIcon', 'Variable', 'VariableIcon', 'Vault', 'VaultIcon', 'VectorSquare', 'VectorSquareIcon', 'Vegan', 'VeganIcon', 'VenetianMask', 'VenetianMaskIcon', 'Venus', 'VenusAndMars', 'VenusAndMarsIcon', 'VenusIcon', 'Verified', 'VerifiedIcon', 'Vibrate', 'VibrateIcon', 'VibrateOff', 'VibrateOffIcon', 'Video', 'VideoIcon', 'VideoOff', 'VideoOffIcon', 'Videotape', 'VideotapeIcon', 'View', 'ViewIcon', 'Voicemail', 'VoicemailIcon', 'Volleyball', 'VolleyballIcon', 'Volume', 'Volume1', 'Volume1Icon', 'Volume2', 'Volume2Icon', 'VolumeIcon', 'VolumeOff', 'VolumeOffIcon', 'VolumeX', 'VolumeXIcon', 'Vote', 'VoteIcon', 'Wallet', 'Wallet2', 'Wallet2Icon', 'WalletCards', 'WalletCardsIcon', 'WalletIcon', 'WalletMinimal', 'WalletMinimalIcon', 'Wallpaper', 'WallpaperIcon', 'Wand', 'Wand2', 'Wand2Icon', 'WandIcon', 'WandSparkles', 'WandSparklesIcon', 'Warehouse', 'WarehouseIcon', 'WashingMachine', 'WashingMachineIcon', 'Watch', 'WatchIcon', 'Waves', 'WavesArrowDown', 'WavesArrowDownIcon', 'WavesArrowUp', 'WavesArrowUpIcon', 'WavesIcon', 'WavesLadder', 'WavesLadderIcon', 'Waypoints', 'WaypointsIcon', 'Webcam', 'WebcamIcon', 'Webhook', 'WebhookIcon', 'WebhookOff', 'WebhookOffIcon', 'Weight', 'WeightIcon', 'WeightTilde', 'WeightTildeIcon', 'Wheat', 'WheatIcon', 'WheatOff', 'WheatOffIcon', 'WholeWord', 'WholeWordIcon', 'Wifi', 'WifiCog', 'WifiCogIcon', 'WifiHigh', 'WifiHighIcon', 'WifiIcon', 'WifiLow', 'WifiLowIcon', 'WifiOff', 'WifiOffIcon', 'WifiPen', 'WifiPenIcon', 'WifiSync', 'WifiSyncIcon', 'WifiZero', 'WifiZeroIcon', 'Wind', 'WindArrowDown', 'WindArrowDownIcon', 'WindIcon', 'Wine', 'WineIcon', 'WineOff', 'WineOffIcon', 'Workflow', 'WorkflowIcon', 'Worm', 'WormIcon', 'WrapText', 'WrapTextIcon', 'Wrench', 'WrenchIcon', 'X', 'XCircle', 'XCircleIcon', 'XIcon', 'XOctagon', 'XOctagonIcon', 'XSquare', 'XSquareIcon', 'Youtube', 'YoutubeIcon', 'Zap', 'ZapIcon', 'ZapOff', 'ZapOffIcon', 'ZoomIn', 'ZoomInIcon', 'ZoomOut', 'ZoomOutIcon', 'createLucideIcon', 'default', 'icons');
  CREATE TYPE "public"."enum__pages_v_blocks_section_hero_with_badge_badge_icon" AS ENUM('AArrowDown', 'AArrowDownIcon', 'AArrowUp', 'AArrowUpIcon', 'ALargeSmall', 'ALargeSmallIcon', 'Accessibility', 'AccessibilityIcon', 'Activity', 'ActivityIcon', 'ActivitySquare', 'ActivitySquareIcon', 'AirVent', 'AirVentIcon', 'Airplay', 'AirplayIcon', 'AlarmCheck', 'AlarmCheckIcon', 'AlarmClock', 'AlarmClockCheck', 'AlarmClockCheckIcon', 'AlarmClockIcon', 'AlarmClockMinus', 'AlarmClockMinusIcon', 'AlarmClockOff', 'AlarmClockOffIcon', 'AlarmClockPlus', 'AlarmClockPlusIcon', 'AlarmMinus', 'AlarmMinusIcon', 'AlarmPlus', 'AlarmPlusIcon', 'AlarmSmoke', 'AlarmSmokeIcon', 'Album', 'AlbumIcon', 'AlertCircle', 'AlertCircleIcon', 'AlertOctagon', 'AlertOctagonIcon', 'AlertTriangle', 'AlertTriangleIcon', 'AlignCenter', 'AlignCenterHorizontal', 'AlignCenterHorizontalIcon', 'AlignCenterIcon', 'AlignCenterVertical', 'AlignCenterVerticalIcon', 'AlignEndHorizontal', 'AlignEndHorizontalIcon', 'AlignEndVertical', 'AlignEndVerticalIcon', 'AlignHorizontalDistributeCenter', 'AlignHorizontalDistributeCenterIcon', 'AlignHorizontalDistributeEnd', 'AlignHorizontalDistributeEndIcon', 'AlignHorizontalDistributeStart', 'AlignHorizontalDistributeStartIcon', 'AlignHorizontalJustifyCenter', 'AlignHorizontalJustifyCenterIcon', 'AlignHorizontalJustifyEnd', 'AlignHorizontalJustifyEndIcon', 'AlignHorizontalJustifyStart', 'AlignHorizontalJustifyStartIcon', 'AlignHorizontalSpaceAround', 'AlignHorizontalSpaceAroundIcon', 'AlignHorizontalSpaceBetween', 'AlignHorizontalSpaceBetweenIcon', 'AlignJustify', 'AlignJustifyIcon', 'AlignLeft', 'AlignLeftIcon', 'AlignRight', 'AlignRightIcon', 'AlignStartHorizontal', 'AlignStartHorizontalIcon', 'AlignStartVertical', 'AlignStartVerticalIcon', 'AlignVerticalDistributeCenter', 'AlignVerticalDistributeCenterIcon', 'AlignVerticalDistributeEnd', 'AlignVerticalDistributeEndIcon', 'AlignVerticalDistributeStart', 'AlignVerticalDistributeStartIcon', 'AlignVerticalJustifyCenter', 'AlignVerticalJustifyCenterIcon', 'AlignVerticalJustifyEnd', 'AlignVerticalJustifyEndIcon', 'AlignVerticalJustifyStart', 'AlignVerticalJustifyStartIcon', 'AlignVerticalSpaceAround', 'AlignVerticalSpaceAroundIcon', 'AlignVerticalSpaceBetween', 'AlignVerticalSpaceBetweenIcon', 'Ambulance', 'AmbulanceIcon', 'Ampersand', 'AmpersandIcon', 'Ampersands', 'AmpersandsIcon', 'Amphora', 'AmphoraIcon', 'Anchor', 'AnchorIcon', 'Angry', 'AngryIcon', 'Annoyed', 'AnnoyedIcon', 'Antenna', 'AntennaIcon', 'Anvil', 'AnvilIcon', 'Aperture', 'ApertureIcon', 'AppWindow', 'AppWindowIcon', 'AppWindowMac', 'AppWindowMacIcon', 'Apple', 'AppleIcon', 'Archive', 'ArchiveIcon', 'ArchiveRestore', 'ArchiveRestoreIcon', 'ArchiveX', 'ArchiveXIcon', 'AreaChart', 'AreaChartIcon', 'Armchair', 'ArmchairIcon', 'ArrowBigDown', 'ArrowBigDownDash', 'ArrowBigDownDashIcon', 'ArrowBigDownIcon', 'ArrowBigLeft', 'ArrowBigLeftDash', 'ArrowBigLeftDashIcon', 'ArrowBigLeftIcon', 'ArrowBigRight', 'ArrowBigRightDash', 'ArrowBigRightDashIcon', 'ArrowBigRightIcon', 'ArrowBigUp', 'ArrowBigUpDash', 'ArrowBigUpDashIcon', 'ArrowBigUpIcon', 'ArrowDown', 'ArrowDown01', 'ArrowDown01Icon', 'ArrowDown10', 'ArrowDown10Icon', 'ArrowDownAZ', 'ArrowDownAZIcon', 'ArrowDownAz', 'ArrowDownAzIcon', 'ArrowDownCircle', 'ArrowDownCircleIcon', 'ArrowDownFromLine', 'ArrowDownFromLineIcon', 'ArrowDownIcon', 'ArrowDownLeft', 'ArrowDownLeftFromCircle', 'ArrowDownLeftFromCircleIcon', 'ArrowDownLeftFromSquare', 'ArrowDownLeftFromSquareIcon', 'ArrowDownLeftIcon', 'ArrowDownLeftSquare', 'ArrowDownLeftSquareIcon', 'ArrowDownNarrowWide', 'ArrowDownNarrowWideIcon', 'ArrowDownRight', 'ArrowDownRightFromCircle', 'ArrowDownRightFromCircleIcon', 'ArrowDownRightFromSquare', 'ArrowDownRightFromSquareIcon', 'ArrowDownRightIcon', 'ArrowDownRightSquare', 'ArrowDownRightSquareIcon', 'ArrowDownSquare', 'ArrowDownSquareIcon', 'ArrowDownToDot', 'ArrowDownToDotIcon', 'ArrowDownToLine', 'ArrowDownToLineIcon', 'ArrowDownUp', 'ArrowDownUpIcon', 'ArrowDownWideNarrow', 'ArrowDownWideNarrowIcon', 'ArrowDownZA', 'ArrowDownZAIcon', 'ArrowDownZa', 'ArrowDownZaIcon', 'ArrowLeft', 'ArrowLeftCircle', 'ArrowLeftCircleIcon', 'ArrowLeftFromLine', 'ArrowLeftFromLineIcon', 'ArrowLeftIcon', 'ArrowLeftRight', 'ArrowLeftRightIcon', 'ArrowLeftSquare', 'ArrowLeftSquareIcon', 'ArrowLeftToLine', 'ArrowLeftToLineIcon', 'ArrowRight', 'ArrowRightCircle', 'ArrowRightCircleIcon', 'ArrowRightFromLine', 'ArrowRightFromLineIcon', 'ArrowRightIcon', 'ArrowRightLeft', 'ArrowRightLeftIcon', 'ArrowRightSquare', 'ArrowRightSquareIcon', 'ArrowRightToLine', 'ArrowRightToLineIcon', 'ArrowUp', 'ArrowUp01', 'ArrowUp01Icon', 'ArrowUp10', 'ArrowUp10Icon', 'ArrowUpAZ', 'ArrowUpAZIcon', 'ArrowUpAz', 'ArrowUpAzIcon', 'ArrowUpCircle', 'ArrowUpCircleIcon', 'ArrowUpDown', 'ArrowUpDownIcon', 'ArrowUpFromDot', 'ArrowUpFromDotIcon', 'ArrowUpFromLine', 'ArrowUpFromLineIcon', 'ArrowUpIcon', 'ArrowUpLeft', 'ArrowUpLeftFromCircle', 'ArrowUpLeftFromCircleIcon', 'ArrowUpLeftFromSquare', 'ArrowUpLeftFromSquareIcon', 'ArrowUpLeftIcon', 'ArrowUpLeftSquare', 'ArrowUpLeftSquareIcon', 'ArrowUpNarrowWide', 'ArrowUpNarrowWideIcon', 'ArrowUpRight', 'ArrowUpRightFromCircle', 'ArrowUpRightFromCircleIcon', 'ArrowUpRightFromSquare', 'ArrowUpRightFromSquareIcon', 'ArrowUpRightIcon', 'ArrowUpRightSquare', 'ArrowUpRightSquareIcon', 'ArrowUpSquare', 'ArrowUpSquareIcon', 'ArrowUpToLine', 'ArrowUpToLineIcon', 'ArrowUpWideNarrow', 'ArrowUpWideNarrowIcon', 'ArrowUpZA', 'ArrowUpZAIcon', 'ArrowUpZa', 'ArrowUpZaIcon', 'ArrowsUpFromLine', 'ArrowsUpFromLineIcon', 'Asterisk', 'AsteriskIcon', 'AsteriskSquare', 'AsteriskSquareIcon', 'AtSign', 'AtSignIcon', 'Atom', 'AtomIcon', 'AudioLines', 'AudioLinesIcon', 'AudioWaveform', 'AudioWaveformIcon', 'Award', 'AwardIcon', 'Axe', 'AxeIcon', 'Axis3D', 'Axis3DIcon', 'Axis3d', 'Axis3dIcon', 'Baby', 'BabyIcon', 'Backpack', 'BackpackIcon', 'Badge', 'BadgeAlert', 'BadgeAlertIcon', 'BadgeCent', 'BadgeCentIcon', 'BadgeCheck', 'BadgeCheckIcon', 'BadgeDollarSign', 'BadgeDollarSignIcon', 'BadgeEuro', 'BadgeEuroIcon', 'BadgeHelp', 'BadgeHelpIcon', 'BadgeIcon', 'BadgeIndianRupee', 'BadgeIndianRupeeIcon', 'BadgeInfo', 'BadgeInfoIcon', 'BadgeJapaneseYen', 'BadgeJapaneseYenIcon', 'BadgeMinus', 'BadgeMinusIcon', 'BadgePercent', 'BadgePercentIcon', 'BadgePlus', 'BadgePlusIcon', 'BadgePoundSterling', 'BadgePoundSterlingIcon', 'BadgeQuestionMark', 'BadgeQuestionMarkIcon', 'BadgeRussianRuble', 'BadgeRussianRubleIcon', 'BadgeSwissFranc', 'BadgeSwissFrancIcon', 'BadgeTurkishLira', 'BadgeTurkishLiraIcon', 'BadgeX', 'BadgeXIcon', 'BaggageClaim', 'BaggageClaimIcon', 'Balloon', 'BalloonIcon', 'Ban', 'BanIcon', 'Banana', 'BananaIcon', 'Bandage', 'BandageIcon', 'Banknote', 'BanknoteArrowDown', 'BanknoteArrowDownIcon', 'BanknoteArrowUp', 'BanknoteArrowUpIcon', 'BanknoteIcon', 'BanknoteX', 'BanknoteXIcon', 'BarChart', 'BarChart2', 'BarChart2Icon', 'BarChart3', 'BarChart3Icon', 'BarChart4', 'BarChart4Icon', 'BarChartBig', 'BarChartBigIcon', 'BarChartHorizontal', 'BarChartHorizontalBig', 'BarChartHorizontalBigIcon', 'BarChartHorizontalIcon', 'BarChartIcon', 'Barcode', 'BarcodeIcon', 'Barrel', 'BarrelIcon', 'Baseline', 'BaselineIcon', 'Bath', 'BathIcon', 'Battery', 'BatteryCharging', 'BatteryChargingIcon', 'BatteryFull', 'BatteryFullIcon', 'BatteryIcon', 'BatteryLow', 'BatteryLowIcon', 'BatteryMedium', 'BatteryMediumIcon', 'BatteryPlus', 'BatteryPlusIcon', 'BatteryWarning', 'BatteryWarningIcon', 'Beaker', 'BeakerIcon', 'Bean', 'BeanIcon', 'BeanOff', 'BeanOffIcon', 'Bed', 'BedDouble', 'BedDoubleIcon', 'BedIcon', 'BedSingle', 'BedSingleIcon', 'Beef', 'BeefIcon', 'Beer', 'BeerIcon', 'BeerOff', 'BeerOffIcon', 'Bell', 'BellDot', 'BellDotIcon', 'BellElectric', 'BellElectricIcon', 'BellIcon', 'BellMinus', 'BellMinusIcon', 'BellOff', 'BellOffIcon', 'BellPlus', 'BellPlusIcon', 'BellRing', 'BellRingIcon', 'BetweenHorizonalEnd', 'BetweenHorizonalEndIcon', 'BetweenHorizonalStart', 'BetweenHorizonalStartIcon', 'BetweenHorizontalEnd', 'BetweenHorizontalEndIcon', 'BetweenHorizontalStart', 'BetweenHorizontalStartIcon', 'BetweenVerticalEnd', 'BetweenVerticalEndIcon', 'BetweenVerticalStart', 'BetweenVerticalStartIcon', 'BicepsFlexed', 'BicepsFlexedIcon', 'Bike', 'BikeIcon', 'Binary', 'BinaryIcon', 'Binoculars', 'BinocularsIcon', 'Biohazard', 'BiohazardIcon', 'Bird', 'BirdIcon', 'Birdhouse', 'BirdhouseIcon', 'Bitcoin', 'BitcoinIcon', 'Blend', 'BlendIcon', 'Blinds', 'BlindsIcon', 'Blocks', 'BlocksIcon', 'Bluetooth', 'BluetoothConnected', 'BluetoothConnectedIcon', 'BluetoothIcon', 'BluetoothOff', 'BluetoothOffIcon', 'BluetoothSearching', 'BluetoothSearchingIcon', 'Bold', 'BoldIcon', 'Bolt', 'BoltIcon', 'Bomb', 'BombIcon', 'Bone', 'BoneIcon', 'Book', 'BookA', 'BookAIcon', 'BookAlert', 'BookAlertIcon', 'BookAudio', 'BookAudioIcon', 'BookCheck', 'BookCheckIcon', 'BookCopy', 'BookCopyIcon', 'BookDashed', 'BookDashedIcon', 'BookDown', 'BookDownIcon', 'BookHeadphones', 'BookHeadphonesIcon', 'BookHeart', 'BookHeartIcon', 'BookIcon', 'BookImage', 'BookImageIcon', 'BookKey', 'BookKeyIcon', 'BookLock', 'BookLockIcon', 'BookMarked', 'BookMarkedIcon', 'BookMinus', 'BookMinusIcon', 'BookOpen', 'BookOpenCheck', 'BookOpenCheckIcon', 'BookOpenIcon', 'BookOpenText', 'BookOpenTextIcon', 'BookPlus', 'BookPlusIcon', 'BookSearch', 'BookSearchIcon', 'BookTemplate', 'BookTemplateIcon', 'BookText', 'BookTextIcon', 'BookType', 'BookTypeIcon', 'BookUp', 'BookUp2', 'BookUp2Icon', 'BookUpIcon', 'BookUser', 'BookUserIcon', 'BookX', 'BookXIcon', 'Bookmark', 'BookmarkCheck', 'BookmarkCheckIcon', 'BookmarkIcon', 'BookmarkMinus', 'BookmarkMinusIcon', 'BookmarkPlus', 'BookmarkPlusIcon', 'BookmarkX', 'BookmarkXIcon', 'BoomBox', 'BoomBoxIcon', 'Bot', 'BotIcon', 'BotMessageSquare', 'BotMessageSquareIcon', 'BotOff', 'BotOffIcon', 'BottleWine', 'BottleWineIcon', 'BowArrow', 'BowArrowIcon', 'Box', 'BoxIcon', 'BoxSelect', 'BoxSelectIcon', 'Boxes', 'BoxesIcon', 'Braces', 'BracesIcon', 'Brackets', 'BracketsIcon', 'Brain', 'BrainCircuit', 'BrainCircuitIcon', 'BrainCog', 'BrainCogIcon', 'BrainIcon', 'BrickWall', 'BrickWallFire', 'BrickWallFireIcon', 'BrickWallIcon', 'BrickWallShield', 'BrickWallShieldIcon', 'Briefcase', 'BriefcaseBusiness', 'BriefcaseBusinessIcon', 'BriefcaseConveyorBelt', 'BriefcaseConveyorBeltIcon', 'BriefcaseIcon', 'BriefcaseMedical', 'BriefcaseMedicalIcon', 'BringToFront', 'BringToFrontIcon', 'Brush', 'BrushCleaning', 'BrushCleaningIcon', 'BrushIcon', 'Bubbles', 'BubblesIcon', 'Bug', 'BugIcon', 'BugOff', 'BugOffIcon', 'BugPlay', 'BugPlayIcon', 'Building', 'Building2', 'Building2Icon', 'BuildingIcon', 'Bus', 'BusFront', 'BusFrontIcon', 'BusIcon', 'Cable', 'CableCar', 'CableCarIcon', 'CableIcon', 'Cake', 'CakeIcon', 'CakeSlice', 'CakeSliceIcon', 'Calculator', 'CalculatorIcon', 'Calendar', 'Calendar1', 'Calendar1Icon', 'CalendarArrowDown', 'CalendarArrowDownIcon', 'CalendarArrowUp', 'CalendarArrowUpIcon', 'CalendarCheck', 'CalendarCheck2', 'CalendarCheck2Icon', 'CalendarCheckIcon', 'CalendarClock', 'CalendarClockIcon', 'CalendarCog', 'CalendarCogIcon', 'CalendarDays', 'CalendarDaysIcon', 'CalendarFold', 'CalendarFoldIcon', 'CalendarHeart', 'CalendarHeartIcon', 'CalendarIcon', 'CalendarMinus', 'CalendarMinus2', 'CalendarMinus2Icon', 'CalendarMinusIcon', 'CalendarOff', 'CalendarOffIcon', 'CalendarPlus', 'CalendarPlus2', 'CalendarPlus2Icon', 'CalendarPlusIcon', 'CalendarRange', 'CalendarRangeIcon', 'CalendarSearch', 'CalendarSearchIcon', 'CalendarSync', 'CalendarSyncIcon', 'CalendarX', 'CalendarX2', 'CalendarX2Icon', 'CalendarXIcon', 'Calendars', 'CalendarsIcon', 'Camera', 'CameraIcon', 'CameraOff', 'CameraOffIcon', 'CandlestickChart', 'CandlestickChartIcon', 'Candy', 'CandyCane', 'CandyCaneIcon', 'CandyIcon', 'CandyOff', 'CandyOffIcon', 'Cannabis', 'CannabisIcon', 'CannabisOff', 'CannabisOffIcon', 'Captions', 'CaptionsIcon', 'CaptionsOff', 'CaptionsOffIcon', 'Car', 'CarFront', 'CarFrontIcon', 'CarIcon', 'CarTaxiFront', 'CarTaxiFrontIcon', 'Caravan', 'CaravanIcon', 'CardSim', 'CardSimIcon', 'Carrot', 'CarrotIcon', 'CaseLower', 'CaseLowerIcon', 'CaseSensitive', 'CaseSensitiveIcon', 'CaseUpper', 'CaseUpperIcon', 'CassetteTape', 'CassetteTapeIcon', 'Cast', 'CastIcon', 'Castle', 'CastleIcon', 'Cat', 'CatIcon', 'Cctv', 'CctvIcon', 'ChartArea', 'ChartAreaIcon', 'ChartBar', 'ChartBarBig', 'ChartBarBigIcon', 'ChartBarDecreasing', 'ChartBarDecreasingIcon', 'ChartBarIcon', 'ChartBarIncreasing', 'ChartBarIncreasingIcon', 'ChartBarStacked', 'ChartBarStackedIcon', 'ChartCandlestick', 'ChartCandlestickIcon', 'ChartColumn', 'ChartColumnBig', 'ChartColumnBigIcon', 'ChartColumnDecreasing', 'ChartColumnDecreasingIcon', 'ChartColumnIcon', 'ChartColumnIncreasing', 'ChartColumnIncreasingIcon', 'ChartColumnStacked', 'ChartColumnStackedIcon', 'ChartGantt', 'ChartGanttIcon', 'ChartLine', 'ChartLineIcon', 'ChartNetwork', 'ChartNetworkIcon', 'ChartNoAxesColumn', 'ChartNoAxesColumnDecreasing', 'ChartNoAxesColumnDecreasingIcon', 'ChartNoAxesColumnIcon', 'ChartNoAxesColumnIncreasing', 'ChartNoAxesColumnIncreasingIcon', 'ChartNoAxesCombined', 'ChartNoAxesCombinedIcon', 'ChartNoAxesGantt', 'ChartNoAxesGanttIcon', 'ChartPie', 'ChartPieIcon', 'ChartScatter', 'ChartScatterIcon', 'ChartSpline', 'ChartSplineIcon', 'Check', 'CheckCheck', 'CheckCheckIcon', 'CheckCircle', 'CheckCircle2', 'CheckCircle2Icon', 'CheckCircleIcon', 'CheckIcon', 'CheckLine', 'CheckLineIcon', 'CheckSquare', 'CheckSquare2', 'CheckSquare2Icon', 'CheckSquareIcon', 'ChefHat', 'ChefHatIcon', 'Cherry', 'CherryIcon', 'ChessBishop', 'ChessBishopIcon', 'ChessKing', 'ChessKingIcon', 'ChessKnight', 'ChessKnightIcon', 'ChessPawn', 'ChessPawnIcon', 'ChessQueen', 'ChessQueenIcon', 'ChessRook', 'ChessRookIcon', 'ChevronDown', 'ChevronDownCircle', 'ChevronDownCircleIcon', 'ChevronDownIcon', 'ChevronDownSquare', 'ChevronDownSquareIcon', 'ChevronFirst', 'ChevronFirstIcon', 'ChevronLast', 'ChevronLastIcon', 'ChevronLeft', 'ChevronLeftCircle', 'ChevronLeftCircleIcon', 'ChevronLeftIcon', 'ChevronLeftSquare', 'ChevronLeftSquareIcon', 'ChevronRight', 'ChevronRightCircle', 'ChevronRightCircleIcon', 'ChevronRightIcon', 'ChevronRightSquare', 'ChevronRightSquareIcon', 'ChevronUp', 'ChevronUpCircle', 'ChevronUpCircleIcon', 'ChevronUpIcon', 'ChevronUpSquare', 'ChevronUpSquareIcon', 'ChevronsDown', 'ChevronsDownIcon', 'ChevronsDownUp', 'ChevronsDownUpIcon', 'ChevronsLeft', 'ChevronsLeftIcon', 'ChevronsLeftRight', 'ChevronsLeftRightEllipsis', 'ChevronsLeftRightEllipsisIcon', 'ChevronsLeftRightIcon', 'ChevronsRight', 'ChevronsRightIcon', 'ChevronsRightLeft', 'ChevronsRightLeftIcon', 'ChevronsUp', 'ChevronsUpDown', 'ChevronsUpDownIcon', 'ChevronsUpIcon', 'Chrome', 'ChromeIcon', 'Chromium', 'ChromiumIcon', 'Church', 'ChurchIcon', 'Cigarette', 'CigaretteIcon', 'CigaretteOff', 'CigaretteOffIcon', 'Circle', 'CircleAlert', 'CircleAlertIcon', 'CircleArrowDown', 'CircleArrowDownIcon', 'CircleArrowLeft', 'CircleArrowLeftIcon', 'CircleArrowOutDownLeft', 'CircleArrowOutDownLeftIcon', 'CircleArrowOutDownRight', 'CircleArrowOutDownRightIcon', 'CircleArrowOutUpLeft', 'CircleArrowOutUpLeftIcon', 'CircleArrowOutUpRight', 'CircleArrowOutUpRightIcon', 'CircleArrowRight', 'CircleArrowRightIcon', 'CircleArrowUp', 'CircleArrowUpIcon', 'CircleCheck', 'CircleCheckBig', 'CircleCheckBigIcon', 'CircleCheckIcon', 'CircleChevronDown', 'CircleChevronDownIcon', 'CircleChevronLeft', 'CircleChevronLeftIcon', 'CircleChevronRight', 'CircleChevronRightIcon', 'CircleChevronUp', 'CircleChevronUpIcon', 'CircleDashed', 'CircleDashedIcon', 'CircleDivide', 'CircleDivideIcon', 'CircleDollarSign', 'CircleDollarSignIcon', 'CircleDot', 'CircleDotDashed', 'CircleDotDashedIcon', 'CircleDotIcon', 'CircleEllipsis', 'CircleEllipsisIcon', 'CircleEqual', 'CircleEqualIcon', 'CircleFadingArrowUp', 'CircleFadingArrowUpIcon', 'CircleFadingPlus', 'CircleFadingPlusIcon', 'CircleGauge', 'CircleGaugeIcon', 'CircleHelp', 'CircleHelpIcon', 'CircleIcon', 'CircleMinus', 'CircleMinusIcon', 'CircleOff', 'CircleOffIcon', 'CircleParking', 'CircleParkingIcon', 'CircleParkingOff', 'CircleParkingOffIcon', 'CirclePause', 'CirclePauseIcon', 'CirclePercent', 'CirclePercentIcon', 'CirclePile', 'CirclePileIcon', 'CirclePlay', 'CirclePlayIcon', 'CirclePlus', 'CirclePlusIcon', 'CirclePoundSterling', 'CirclePoundSterlingIcon', 'CirclePower', 'CirclePowerIcon', 'CircleQuestionMark', 'CircleQuestionMarkIcon', 'CircleSlash', 'CircleSlash2', 'CircleSlash2Icon', 'CircleSlashIcon', 'CircleSlashed', 'CircleSlashedIcon', 'CircleSmall', 'CircleSmallIcon', 'CircleStar', 'CircleStarIcon', 'CircleStop', 'CircleStopIcon', 'CircleUser', 'CircleUserIcon', 'CircleUserRound', 'CircleUserRoundIcon', 'CircleX', 'CircleXIcon', 'CircuitBoard', 'CircuitBoardIcon', 'Citrus', 'CitrusIcon', 'Clapperboard', 'ClapperboardIcon', 'Clipboard', 'ClipboardCheck', 'ClipboardCheckIcon', 'ClipboardClock', 'ClipboardClockIcon', 'ClipboardCopy', 'ClipboardCopyIcon', 'ClipboardEdit', 'ClipboardEditIcon', 'ClipboardIcon', 'ClipboardList', 'ClipboardListIcon', 'ClipboardMinus', 'ClipboardMinusIcon', 'ClipboardPaste', 'ClipboardPasteIcon', 'ClipboardPen', 'ClipboardPenIcon', 'ClipboardPenLine', 'ClipboardPenLineIcon', 'ClipboardPlus', 'ClipboardPlusIcon', 'ClipboardSignature', 'ClipboardSignatureIcon', 'ClipboardType', 'ClipboardTypeIcon', 'ClipboardX', 'ClipboardXIcon', 'Clock', 'Clock1', 'Clock10', 'Clock10Icon', 'Clock11', 'Clock11Icon', 'Clock12', 'Clock12Icon', 'Clock1Icon', 'Clock2', 'Clock2Icon', 'Clock3', 'Clock3Icon', 'Clock4', 'Clock4Icon', 'Clock5', 'Clock5Icon', 'Clock6', 'Clock6Icon', 'Clock7', 'Clock7Icon', 'Clock8', 'Clock8Icon', 'Clock9', 'Clock9Icon', 'ClockAlert', 'ClockAlertIcon', 'ClockArrowDown', 'ClockArrowDownIcon', 'ClockArrowUp', 'ClockArrowUpIcon', 'ClockCheck', 'ClockCheckIcon', 'ClockFading', 'ClockFadingIcon', 'ClockIcon', 'ClockPlus', 'ClockPlusIcon', 'ClosedCaption', 'ClosedCaptionIcon', 'Cloud', 'CloudAlert', 'CloudAlertIcon', 'CloudBackup', 'CloudBackupIcon', 'CloudCheck', 'CloudCheckIcon', 'CloudCog', 'CloudCogIcon', 'CloudDownload', 'CloudDownloadIcon', 'CloudDrizzle', 'CloudDrizzleIcon', 'CloudFog', 'CloudFogIcon', 'CloudHail', 'CloudHailIcon', 'CloudIcon', 'CloudLightning', 'CloudLightningIcon', 'CloudMoon', 'CloudMoonIcon', 'CloudMoonRain', 'CloudMoonRainIcon', 'CloudOff', 'CloudOffIcon', 'CloudRain', 'CloudRainIcon', 'CloudRainWind', 'CloudRainWindIcon', 'CloudSnow', 'CloudSnowIcon', 'CloudSun', 'CloudSunIcon', 'CloudSunRain', 'CloudSunRainIcon', 'CloudSync', 'CloudSyncIcon', 'CloudUpload', 'CloudUploadIcon', 'Cloudy', 'CloudyIcon', 'Clover', 'CloverIcon', 'Club', 'ClubIcon', 'Code', 'Code2', 'Code2Icon', 'CodeIcon', 'CodeSquare', 'CodeSquareIcon', 'CodeXml', 'CodeXmlIcon', 'Codepen', 'CodepenIcon', 'Codesandbox', 'CodesandboxIcon', 'Coffee', 'CoffeeIcon', 'Cog', 'CogIcon', 'Coins', 'CoinsIcon', 'Columns', 'Columns2', 'Columns2Icon', 'Columns3', 'Columns3Cog', 'Columns3CogIcon', 'Columns3Icon', 'Columns4', 'Columns4Icon', 'ColumnsIcon', 'ColumnsSettings', 'ColumnsSettingsIcon', 'Combine', 'CombineIcon', 'Command', 'CommandIcon', 'Compass', 'CompassIcon', 'Component', 'ComponentIcon', 'Computer', 'ComputerIcon', 'ConciergeBell', 'ConciergeBellIcon', 'Cone', 'ConeIcon', 'Construction', 'ConstructionIcon', 'Contact', 'Contact2', 'Contact2Icon', 'ContactIcon', 'ContactRound', 'ContactRoundIcon', 'Container', 'ContainerIcon', 'Contrast', 'ContrastIcon', 'Cookie', 'CookieIcon', 'CookingPot', 'CookingPotIcon', 'Copy', 'CopyCheck', 'CopyCheckIcon', 'CopyIcon', 'CopyMinus', 'CopyMinusIcon', 'CopyPlus', 'CopyPlusIcon', 'CopySlash', 'CopySlashIcon', 'CopyX', 'CopyXIcon', 'Copyleft', 'CopyleftIcon', 'Copyright', 'CopyrightIcon', 'CornerDownLeft', 'CornerDownLeftIcon', 'CornerDownRight', 'CornerDownRightIcon', 'CornerLeftDown', 'CornerLeftDownIcon', 'CornerLeftUp', 'CornerLeftUpIcon', 'CornerRightDown', 'CornerRightDownIcon', 'CornerRightUp', 'CornerRightUpIcon', 'CornerUpLeft', 'CornerUpLeftIcon', 'CornerUpRight', 'CornerUpRightIcon', 'Cpu', 'CpuIcon', 'CreativeCommons', 'CreativeCommonsIcon', 'CreditCard', 'CreditCardIcon', 'Croissant', 'CroissantIcon', 'Crop', 'CropIcon', 'Cross', 'CrossIcon', 'Crosshair', 'CrosshairIcon', 'Crown', 'CrownIcon', 'Cuboid', 'CuboidIcon', 'CupSoda', 'CupSodaIcon', 'CurlyBraces', 'CurlyBracesIcon', 'Currency', 'CurrencyIcon', 'Cylinder', 'CylinderIcon', 'Dam', 'DamIcon', 'Database', 'DatabaseBackup', 'DatabaseBackupIcon', 'DatabaseIcon', 'DatabaseZap', 'DatabaseZapIcon', 'DecimalsArrowLeft', 'DecimalsArrowLeftIcon', 'DecimalsArrowRight', 'DecimalsArrowRightIcon', 'Delete', 'DeleteIcon', 'Dessert', 'DessertIcon', 'Diameter', 'DiameterIcon', 'Diamond', 'DiamondIcon', 'DiamondMinus', 'DiamondMinusIcon', 'DiamondPercent', 'DiamondPercentIcon', 'DiamondPlus', 'DiamondPlusIcon', 'Dice1', 'Dice1Icon', 'Dice2', 'Dice2Icon', 'Dice3', 'Dice3Icon', 'Dice4', 'Dice4Icon', 'Dice5', 'Dice5Icon', 'Dice6', 'Dice6Icon', 'Dices', 'DicesIcon', 'Diff', 'DiffIcon', 'Disc', 'Disc2', 'Disc2Icon', 'Disc3', 'Disc3Icon', 'DiscAlbum', 'DiscAlbumIcon', 'DiscIcon', 'Divide', 'DivideCircle', 'DivideCircleIcon', 'DivideIcon', 'DivideSquare', 'DivideSquareIcon', 'Dna', 'DnaIcon', 'DnaOff', 'DnaOffIcon', 'Dock', 'DockIcon', 'Dog', 'DogIcon', 'DollarSign', 'DollarSignIcon', 'Donut', 'DonutIcon', 'DoorClosed', 'DoorClosedIcon', 'DoorClosedLocked', 'DoorClosedLockedIcon', 'DoorOpen', 'DoorOpenIcon', 'Dot', 'DotIcon', 'DotSquare', 'DotSquareIcon', 'Download', 'DownloadCloud', 'DownloadCloudIcon', 'DownloadIcon', 'DraftingCompass', 'DraftingCompassIcon', 'Drama', 'DramaIcon', 'Dribbble', 'DribbbleIcon', 'Drill', 'DrillIcon', 'Drone', 'DroneIcon', 'Droplet', 'DropletIcon', 'DropletOff', 'DropletOffIcon', 'Droplets', 'DropletsIcon', 'Drum', 'DrumIcon', 'Drumstick', 'DrumstickIcon', 'Dumbbell', 'DumbbellIcon', 'Ear', 'EarIcon', 'EarOff', 'EarOffIcon', 'Earth', 'EarthIcon', 'EarthLock', 'EarthLockIcon', 'Eclipse', 'EclipseIcon', 'Edit', 'Edit2', 'Edit2Icon', 'Edit3', 'Edit3Icon', 'EditIcon', 'Egg', 'EggFried', 'EggFriedIcon', 'EggIcon', 'EggOff', 'EggOffIcon', 'Ellipsis', 'EllipsisIcon', 'EllipsisVertical', 'EllipsisVerticalIcon', 'Equal', 'EqualApproximately', 'EqualApproximatelyIcon', 'EqualIcon', 'EqualNot', 'EqualNotIcon', 'EqualSquare', 'EqualSquareIcon', 'Eraser', 'EraserIcon', 'EthernetPort', 'EthernetPortIcon', 'Euro', 'EuroIcon', 'EvCharger', 'EvChargerIcon', 'Expand', 'ExpandIcon', 'ExternalLink', 'ExternalLinkIcon', 'Eye', 'EyeClosed', 'EyeClosedIcon', 'EyeIcon', 'EyeOff', 'EyeOffIcon', 'Facebook', 'FacebookIcon', 'Factory', 'FactoryIcon', 'Fan', 'FanIcon', 'FastForward', 'FastForwardIcon', 'Feather', 'FeatherIcon', 'Fence', 'FenceIcon', 'FerrisWheel', 'FerrisWheelIcon', 'Figma', 'FigmaIcon', 'File', 'FileArchive', 'FileArchiveIcon', 'FileAudio', 'FileAudio2', 'FileAudio2Icon', 'FileAudioIcon', 'FileAxis3D', 'FileAxis3DIcon', 'FileAxis3d', 'FileAxis3dIcon', 'FileBadge', 'FileBadge2', 'FileBadge2Icon', 'FileBadgeIcon', 'FileBarChart', 'FileBarChart2', 'FileBarChart2Icon', 'FileBarChartIcon', 'FileBox', 'FileBoxIcon', 'FileBraces', 'FileBracesCorner', 'FileBracesCornerIcon', 'FileBracesIcon', 'FileChartColumn', 'FileChartColumnIcon', 'FileChartColumnIncreasing', 'FileChartColumnIncreasingIcon', 'FileChartLine', 'FileChartLineIcon', 'FileChartPie', 'FileChartPieIcon', 'FileCheck', 'FileCheck2', 'FileCheck2Icon', 'FileCheckCorner', 'FileCheckCornerIcon', 'FileCheckIcon', 'FileClock', 'FileClockIcon', 'FileCode', 'FileCode2', 'FileCode2Icon', 'FileCodeCorner', 'FileCodeCornerIcon', 'FileCodeIcon', 'FileCog', 'FileCog2', 'FileCog2Icon', 'FileCogIcon', 'FileDiff', 'FileDiffIcon', 'FileDigit', 'FileDigitIcon', 'FileDown', 'FileDownIcon', 'FileEdit', 'FileEditIcon', 'FileExclamationPoint', 'FileExclamationPointIcon', 'FileHeadphone', 'FileHeadphoneIcon', 'FileHeart', 'FileHeartIcon', 'FileIcon', 'FileImage', 'FileImageIcon', 'FileInput', 'FileInputIcon', 'FileJson', 'FileJson2', 'FileJson2Icon', 'FileJsonIcon', 'FileKey', 'FileKey2', 'FileKey2Icon', 'FileKeyIcon', 'FileLineChart', 'FileLineChartIcon', 'FileLock', 'FileLock2', 'FileLock2Icon', 'FileLockIcon', 'FileMinus', 'FileMinus2', 'FileMinus2Icon', 'FileMinusCorner', 'FileMinusCornerIcon', 'FileMinusIcon', 'FileMusic', 'FileMusicIcon', 'FileOutput', 'FileOutputIcon', 'FilePen', 'FilePenIcon', 'FilePenLine', 'FilePenLineIcon', 'FilePieChart', 'FilePieChartIcon', 'FilePlay', 'FilePlayIcon', 'FilePlus', 'FilePlus2', 'FilePlus2Icon', 'FilePlusCorner', 'FilePlusCornerIcon', 'FilePlusIcon', 'FileQuestion', 'FileQuestionIcon', 'FileQuestionMark', 'FileQuestionMarkIcon', 'FileScan', 'FileScanIcon', 'FileSearch', 'FileSearch2', 'FileSearch2Icon', 'FileSearchCorner', 'FileSearchCornerIcon', 'FileSearchIcon', 'FileSignal', 'FileSignalIcon', 'FileSignature', 'FileSignatureIcon', 'FileSliders', 'FileSlidersIcon', 'FileSpreadsheet', 'FileSpreadsheetIcon', 'FileStack', 'FileStackIcon', 'FileSymlink', 'FileSymlinkIcon', 'FileTerminal', 'FileTerminalIcon', 'FileText', 'FileTextIcon', 'FileType', 'FileType2', 'FileType2Icon', 'FileTypeCorner', 'FileTypeCornerIcon', 'FileTypeIcon', 'FileUp', 'FileUpIcon', 'FileUser', 'FileUserIcon', 'FileVideo', 'FileVideo2', 'FileVideo2Icon', 'FileVideoCamera', 'FileVideoCameraIcon', 'FileVideoIcon', 'FileVolume', 'FileVolume2', 'FileVolume2Icon', 'FileVolumeIcon', 'FileWarning', 'FileWarningIcon', 'FileX', 'FileX2', 'FileX2Icon', 'FileXCorner', 'FileXCornerIcon', 'FileXIcon', 'Files', 'FilesIcon', 'Film', 'FilmIcon', 'Filter', 'FilterIcon', 'FilterX', 'FilterXIcon', 'Fingerprint', 'FingerprintIcon', 'FingerprintPattern', 'FingerprintPatternIcon', 'FireExtinguisher', 'FireExtinguisherIcon', 'Fish', 'FishIcon', 'FishOff', 'FishOffIcon', 'FishSymbol', 'FishSymbolIcon', 'FishingHook', 'FishingHookIcon', 'Flag', 'FlagIcon', 'FlagOff', 'FlagOffIcon', 'FlagTriangleLeft', 'FlagTriangleLeftIcon', 'FlagTriangleRight', 'FlagTriangleRightIcon', 'Flame', 'FlameIcon', 'FlameKindling', 'FlameKindlingIcon', 'Flashlight', 'FlashlightIcon', 'FlashlightOff', 'FlashlightOffIcon', 'FlaskConical', 'FlaskConicalIcon', 'FlaskConicalOff', 'FlaskConicalOffIcon', 'FlaskRound', 'FlaskRoundIcon', 'FlipHorizontal', 'FlipHorizontal2', 'FlipHorizontal2Icon', 'FlipHorizontalIcon', 'FlipVertical', 'FlipVertical2', 'FlipVertical2Icon', 'FlipVerticalIcon', 'Flower', 'Flower2', 'Flower2Icon', 'FlowerIcon', 'Focus', 'FocusIcon', 'FoldHorizontal', 'FoldHorizontalIcon', 'FoldVertical', 'FoldVerticalIcon', 'Folder', 'FolderArchive', 'FolderArchiveIcon', 'FolderCheck', 'FolderCheckIcon', 'FolderClock', 'FolderClockIcon', 'FolderClosed', 'FolderClosedIcon', 'FolderCode', 'FolderCodeIcon', 'FolderCog', 'FolderCog2', 'FolderCog2Icon', 'FolderCogIcon', 'FolderDot', 'FolderDotIcon', 'FolderDown', 'FolderDownIcon', 'FolderEdit', 'FolderEditIcon', 'FolderGit', 'FolderGit2', 'FolderGit2Icon', 'FolderGitIcon', 'FolderHeart', 'FolderHeartIcon', 'FolderIcon', 'FolderInput', 'FolderInputIcon', 'FolderKanban', 'FolderKanbanIcon', 'FolderKey', 'FolderKeyIcon', 'FolderLock', 'FolderLockIcon', 'FolderMinus', 'FolderMinusIcon', 'FolderOpen', 'FolderOpenDot', 'FolderOpenDotIcon', 'FolderOpenIcon', 'FolderOutput', 'FolderOutputIcon', 'FolderPen', 'FolderPenIcon', 'FolderPlus', 'FolderPlusIcon', 'FolderRoot', 'FolderRootIcon', 'FolderSearch', 'FolderSearch2', 'FolderSearch2Icon', 'FolderSearchIcon', 'FolderSymlink', 'FolderSymlinkIcon', 'FolderSync', 'FolderSyncIcon', 'FolderTree', 'FolderTreeIcon', 'FolderUp', 'FolderUpIcon', 'FolderX', 'FolderXIcon', 'Folders', 'FoldersIcon', 'Footprints', 'FootprintsIcon', 'ForkKnife', 'ForkKnifeCrossed', 'ForkKnifeCrossedIcon', 'ForkKnifeIcon', 'Forklift', 'ForkliftIcon', 'Form', 'FormIcon', 'FormInput', 'FormInputIcon', 'Forward', 'ForwardIcon', 'Frame', 'FrameIcon', 'Framer', 'FramerIcon', 'Frown', 'FrownIcon', 'Fuel', 'FuelIcon', 'Fullscreen', 'FullscreenIcon', 'FunctionSquare', 'FunctionSquareIcon', 'Funnel', 'FunnelIcon', 'FunnelPlus', 'FunnelPlusIcon', 'FunnelX', 'FunnelXIcon', 'GalleryHorizontal', 'GalleryHorizontalEnd', 'GalleryHorizontalEndIcon', 'GalleryHorizontalIcon', 'GalleryThumbnails', 'GalleryThumbnailsIcon', 'GalleryVertical', 'GalleryVerticalEnd', 'GalleryVerticalEndIcon', 'GalleryVerticalIcon', 'Gamepad', 'Gamepad2', 'Gamepad2Icon', 'GamepadDirectional', 'GamepadDirectionalIcon', 'GamepadIcon', 'GanttChart', 'GanttChartIcon', 'GanttChartSquare', 'GanttChartSquareIcon', 'Gauge', 'GaugeCircle', 'GaugeCircleIcon', 'GaugeIcon', 'Gavel', 'GavelIcon', 'Gem', 'GemIcon', 'GeorgianLari', 'GeorgianLariIcon', 'Ghost', 'GhostIcon', 'Gift', 'GiftIcon', 'GitBranch', 'GitBranchIcon', 'GitBranchMinus', 'GitBranchMinusIcon', 'GitBranchPlus', 'GitBranchPlusIcon', 'GitCommit', 'GitCommitHorizontal', 'GitCommitHorizontalIcon', 'GitCommitIcon', 'GitCommitVertical', 'GitCommitVerticalIcon', 'GitCompare', 'GitCompareArrows', 'GitCompareArrowsIcon', 'GitCompareIcon', 'GitFork', 'GitForkIcon', 'GitGraph', 'GitGraphIcon', 'GitMerge', 'GitMergeIcon', 'GitPullRequest', 'GitPullRequestArrow', 'GitPullRequestArrowIcon', 'GitPullRequestClosed', 'GitPullRequestClosedIcon', 'GitPullRequestCreate', 'GitPullRequestCreateArrow', 'GitPullRequestCreateArrowIcon', 'GitPullRequestCreateIcon', 'GitPullRequestDraft', 'GitPullRequestDraftIcon', 'GitPullRequestIcon', 'Github', 'GithubIcon', 'Gitlab', 'GitlabIcon', 'GlassWater', 'GlassWaterIcon', 'Glasses', 'GlassesIcon', 'Globe', 'Globe2', 'Globe2Icon', 'GlobeIcon', 'GlobeLock', 'GlobeLockIcon', 'GlobeX', 'GlobeXIcon', 'Goal', 'GoalIcon', 'Gpu', 'GpuIcon', 'Grab', 'GrabIcon', 'GraduationCap', 'GraduationCapIcon', 'Grape', 'GrapeIcon', 'Grid', 'Grid2X2', 'Grid2X2Check', 'Grid2X2CheckIcon', 'Grid2X2Icon', 'Grid2X2Plus', 'Grid2X2PlusIcon', 'Grid2X2X', 'Grid2X2XIcon', 'Grid2x2', 'Grid2x2Check', 'Grid2x2CheckIcon', 'Grid2x2Icon', 'Grid2x2Plus', 'Grid2x2PlusIcon', 'Grid2x2X', 'Grid2x2XIcon', 'Grid3X3', 'Grid3X3Icon', 'Grid3x2', 'Grid3x2Icon', 'Grid3x3', 'Grid3x3Icon', 'GridIcon', 'Grip', 'GripHorizontal', 'GripHorizontalIcon', 'GripIcon', 'GripVertical', 'GripVerticalIcon', 'Group', 'GroupIcon', 'Guitar', 'GuitarIcon', 'Ham', 'HamIcon', 'Hamburger', 'HamburgerIcon', 'Hammer', 'HammerIcon', 'Hand', 'HandCoins', 'HandCoinsIcon', 'HandFist', 'HandFistIcon', 'HandGrab', 'HandGrabIcon', 'HandHeart', 'HandHeartIcon', 'HandHelping', 'HandHelpingIcon', 'HandIcon', 'HandMetal', 'HandMetalIcon', 'HandPlatter', 'HandPlatterIcon', 'Handbag', 'HandbagIcon', 'Handshake', 'HandshakeIcon', 'HardDrive', 'HardDriveDownload', 'HardDriveDownloadIcon', 'HardDriveIcon', 'HardDriveUpload', 'HardDriveUploadIcon', 'HardHat', 'HardHatIcon', 'Hash', 'HashIcon', 'HatGlasses', 'HatGlassesIcon', 'Haze', 'HazeIcon', 'Hd', 'HdIcon', 'HdmiPort', 'HdmiPortIcon', 'Heading', 'Heading1', 'Heading1Icon', 'Heading2', 'Heading2Icon', 'Heading3', 'Heading3Icon', 'Heading4', 'Heading4Icon', 'Heading5', 'Heading5Icon', 'Heading6', 'Heading6Icon', 'HeadingIcon', 'HeadphoneOff', 'HeadphoneOffIcon', 'Headphones', 'HeadphonesIcon', 'Headset', 'HeadsetIcon', 'Heart', 'HeartCrack', 'HeartCrackIcon', 'HeartHandshake', 'HeartHandshakeIcon', 'HeartIcon', 'HeartMinus', 'HeartMinusIcon', 'HeartOff', 'HeartOffIcon', 'HeartPlus', 'HeartPlusIcon', 'HeartPulse', 'HeartPulseIcon', 'Heater', 'HeaterIcon', 'Helicopter', 'HelicopterIcon', 'HelpCircle', 'HelpCircleIcon', 'HelpingHand', 'HelpingHandIcon', 'Hexagon', 'HexagonIcon', 'Highlighter', 'HighlighterIcon', 'History', 'HistoryIcon', 'Home', 'HomeIcon', 'Hop', 'HopIcon', 'HopOff', 'HopOffIcon', 'Hospital', 'HospitalIcon', 'Hotel', 'HotelIcon', 'Hourglass', 'HourglassIcon', 'House', 'HouseHeart', 'HouseHeartIcon', 'HouseIcon', 'HousePlug', 'HousePlugIcon', 'HousePlus', 'HousePlusIcon', 'HouseWifi', 'HouseWifiIcon', 'IceCream', 'IceCream2', 'IceCream2Icon', 'IceCreamBowl', 'IceCreamBowlIcon', 'IceCreamCone', 'IceCreamConeIcon', 'IceCreamIcon', 'Icon', 'IdCard', 'IdCardIcon', 'IdCardLanyard', 'IdCardLanyardIcon', 'Image', 'ImageDown', 'ImageDownIcon', 'ImageIcon', 'ImageMinus', 'ImageMinusIcon', 'ImageOff', 'ImageOffIcon', 'ImagePlay', 'ImagePlayIcon', 'ImagePlus', 'ImagePlusIcon', 'ImageUp', 'ImageUpIcon', 'ImageUpscale', 'ImageUpscaleIcon', 'Images', 'ImagesIcon', 'Import', 'ImportIcon', 'Inbox', 'InboxIcon', 'Indent', 'IndentDecrease', 'IndentDecreaseIcon', 'IndentIcon', 'IndentIncrease', 'IndentIncreaseIcon', 'IndianRupee', 'IndianRupeeIcon', 'Infinity', 'InfinityIcon', 'Info', 'InfoIcon', 'Inspect', 'InspectIcon', 'InspectionPanel', 'InspectionPanelIcon', 'Instagram', 'InstagramIcon', 'Italic', 'ItalicIcon', 'IterationCcw', 'IterationCcwIcon', 'IterationCw', 'IterationCwIcon', 'JapaneseYen', 'JapaneseYenIcon', 'Joystick', 'JoystickIcon', 'Kanban', 'KanbanIcon', 'KanbanSquare', 'KanbanSquareDashed', 'KanbanSquareDashedIcon', 'KanbanSquareIcon', 'Kayak', 'KayakIcon', 'Key', 'KeyIcon', 'KeyRound', 'KeyRoundIcon', 'KeySquare', 'KeySquareIcon', 'Keyboard', 'KeyboardIcon', 'KeyboardMusic', 'KeyboardMusicIcon', 'KeyboardOff', 'KeyboardOffIcon', 'Lamp', 'LampCeiling', 'LampCeilingIcon', 'LampDesk', 'LampDeskIcon', 'LampFloor', 'LampFloorIcon', 'LampIcon', 'LampWallDown', 'LampWallDownIcon', 'LampWallUp', 'LampWallUpIcon', 'LandPlot', 'LandPlotIcon', 'Landmark', 'LandmarkIcon', 'Languages', 'LanguagesIcon', 'Laptop', 'Laptop2', 'Laptop2Icon', 'LaptopIcon', 'LaptopMinimal', 'LaptopMinimalCheck', 'LaptopMinimalCheckIcon', 'LaptopMinimalIcon', 'Lasso', 'LassoIcon', 'LassoSelect', 'LassoSelectIcon', 'Laugh', 'LaughIcon', 'Layers', 'Layers2', 'Layers2Icon', 'Layers3', 'Layers3Icon', 'LayersIcon', 'LayersPlus', 'LayersPlusIcon', 'Layout', 'LayoutDashboard', 'LayoutDashboardIcon', 'LayoutGrid', 'LayoutGridIcon', 'LayoutIcon', 'LayoutList', 'LayoutListIcon', 'LayoutPanelLeft', 'LayoutPanelLeftIcon', 'LayoutPanelTop', 'LayoutPanelTopIcon', 'LayoutTemplate', 'LayoutTemplateIcon', 'Leaf', 'LeafIcon', 'LeafyGreen', 'LeafyGreenIcon', 'Lectern', 'LecternIcon', 'LetterText', 'LetterTextIcon', 'Library', 'LibraryBig', 'LibraryBigIcon', 'LibraryIcon', 'LibrarySquare', 'LibrarySquareIcon', 'LifeBuoy', 'LifeBuoyIcon', 'Ligature', 'LigatureIcon', 'Lightbulb', 'LightbulbIcon', 'LightbulbOff', 'LightbulbOffIcon', 'LineChart', 'LineChartIcon', 'LineSquiggle', 'LineSquiggleIcon', 'Link', 'Link2', 'Link2Icon', 'Link2Off', 'Link2OffIcon', 'LinkIcon', 'Linkedin', 'LinkedinIcon', 'List', 'ListCheck', 'ListCheckIcon', 'ListChecks', 'ListChecksIcon', 'ListChevronsDownUp', 'ListChevronsDownUpIcon', 'ListChevronsUpDown', 'ListChevronsUpDownIcon', 'ListCollapse', 'ListCollapseIcon', 'ListEnd', 'ListEndIcon', 'ListFilter', 'ListFilterIcon', 'ListFilterPlus', 'ListFilterPlusIcon', 'ListIcon', 'ListIndentDecrease', 'ListIndentDecreaseIcon', 'ListIndentIncrease', 'ListIndentIncreaseIcon', 'ListMinus', 'ListMinusIcon', 'ListMusic', 'ListMusicIcon', 'ListOrdered', 'ListOrderedIcon', 'ListPlus', 'ListPlusIcon', 'ListRestart', 'ListRestartIcon', 'ListStart', 'ListStartIcon', 'ListTodo', 'ListTodoIcon', 'ListTree', 'ListTreeIcon', 'ListVideo', 'ListVideoIcon', 'ListX', 'ListXIcon', 'Loader', 'Loader2', 'Loader2Icon', 'LoaderCircle', 'LoaderCircleIcon', 'LoaderIcon', 'LoaderPinwheel', 'LoaderPinwheelIcon', 'Locate', 'LocateFixed', 'LocateFixedIcon', 'LocateIcon', 'LocateOff', 'LocateOffIcon', 'LocationEdit', 'LocationEditIcon', 'Lock', 'LockIcon', 'LockKeyhole', 'LockKeyholeIcon', 'LockKeyholeOpen', 'LockKeyholeOpenIcon', 'LockOpen', 'LockOpenIcon', 'LogIn', 'LogInIcon', 'LogOut', 'LogOutIcon', 'Logs', 'LogsIcon', 'Lollipop', 'LollipopIcon', 'LucideAArrowDown', 'LucideAArrowUp', 'LucideALargeSmall', 'LucideAccessibility', 'LucideActivity', 'LucideActivitySquare', 'LucideAirVent', 'LucideAirplay', 'LucideAlarmCheck', 'LucideAlarmClock', 'LucideAlarmClockCheck', 'LucideAlarmClockMinus', 'LucideAlarmClockOff', 'LucideAlarmClockPlus', 'LucideAlarmMinus', 'LucideAlarmPlus', 'LucideAlarmSmoke', 'LucideAlbum', 'LucideAlertCircle', 'LucideAlertOctagon', 'LucideAlertTriangle', 'LucideAlignCenter', 'LucideAlignCenterHorizontal', 'LucideAlignCenterVertical', 'LucideAlignEndHorizontal', 'LucideAlignEndVertical', 'LucideAlignHorizontalDistributeCenter', 'LucideAlignHorizontalDistributeEnd', 'LucideAlignHorizontalDistributeStart', 'LucideAlignHorizontalJustifyCenter', 'LucideAlignHorizontalJustifyEnd', 'LucideAlignHorizontalJustifyStart', 'LucideAlignHorizontalSpaceAround', 'LucideAlignHorizontalSpaceBetween', 'LucideAlignJustify', 'LucideAlignLeft', 'LucideAlignRight', 'LucideAlignStartHorizontal', 'LucideAlignStartVertical', 'LucideAlignVerticalDistributeCenter', 'LucideAlignVerticalDistributeEnd', 'LucideAlignVerticalDistributeStart', 'LucideAlignVerticalJustifyCenter', 'LucideAlignVerticalJustifyEnd', 'LucideAlignVerticalJustifyStart', 'LucideAlignVerticalSpaceAround', 'LucideAlignVerticalSpaceBetween', 'LucideAmbulance', 'LucideAmpersand', 'LucideAmpersands', 'LucideAmphora', 'LucideAnchor', 'LucideAngry', 'LucideAnnoyed', 'LucideAntenna', 'LucideAnvil', 'LucideAperture', 'LucideAppWindow', 'LucideAppWindowMac', 'LucideApple', 'LucideArchive', 'LucideArchiveRestore', 'LucideArchiveX', 'LucideAreaChart', 'LucideArmchair', 'LucideArrowBigDown', 'LucideArrowBigDownDash', 'LucideArrowBigLeft', 'LucideArrowBigLeftDash', 'LucideArrowBigRight', 'LucideArrowBigRightDash', 'LucideArrowBigUp', 'LucideArrowBigUpDash', 'LucideArrowDown', 'LucideArrowDown01', 'LucideArrowDown10', 'LucideArrowDownAZ', 'LucideArrowDownAz', 'LucideArrowDownCircle', 'LucideArrowDownFromLine', 'LucideArrowDownLeft', 'LucideArrowDownLeftFromCircle', 'LucideArrowDownLeftFromSquare', 'LucideArrowDownLeftSquare', 'LucideArrowDownNarrowWide', 'LucideArrowDownRight', 'LucideArrowDownRightFromCircle', 'LucideArrowDownRightFromSquare', 'LucideArrowDownRightSquare', 'LucideArrowDownSquare', 'LucideArrowDownToDot', 'LucideArrowDownToLine', 'LucideArrowDownUp', 'LucideArrowDownWideNarrow', 'LucideArrowDownZA', 'LucideArrowDownZa', 'LucideArrowLeft', 'LucideArrowLeftCircle', 'LucideArrowLeftFromLine', 'LucideArrowLeftRight', 'LucideArrowLeftSquare', 'LucideArrowLeftToLine', 'LucideArrowRight', 'LucideArrowRightCircle', 'LucideArrowRightFromLine', 'LucideArrowRightLeft', 'LucideArrowRightSquare', 'LucideArrowRightToLine', 'LucideArrowUp', 'LucideArrowUp01', 'LucideArrowUp10', 'LucideArrowUpAZ', 'LucideArrowUpAz', 'LucideArrowUpCircle', 'LucideArrowUpDown', 'LucideArrowUpFromDot', 'LucideArrowUpFromLine', 'LucideArrowUpLeft', 'LucideArrowUpLeftFromCircle', 'LucideArrowUpLeftFromSquare', 'LucideArrowUpLeftSquare', 'LucideArrowUpNarrowWide', 'LucideArrowUpRight', 'LucideArrowUpRightFromCircle', 'LucideArrowUpRightFromSquare', 'LucideArrowUpRightSquare', 'LucideArrowUpSquare', 'LucideArrowUpToLine', 'LucideArrowUpWideNarrow', 'LucideArrowUpZA', 'LucideArrowUpZa', 'LucideArrowsUpFromLine', 'LucideAsterisk', 'LucideAsteriskSquare', 'LucideAtSign', 'LucideAtom', 'LucideAudioLines', 'LucideAudioWaveform', 'LucideAward', 'LucideAxe', 'LucideAxis3D', 'LucideAxis3d', 'LucideBaby', 'LucideBackpack', 'LucideBadge', 'LucideBadgeAlert', 'LucideBadgeCent', 'LucideBadgeCheck', 'LucideBadgeDollarSign', 'LucideBadgeEuro', 'LucideBadgeHelp', 'LucideBadgeIndianRupee', 'LucideBadgeInfo', 'LucideBadgeJapaneseYen', 'LucideBadgeMinus', 'LucideBadgePercent', 'LucideBadgePlus', 'LucideBadgePoundSterling', 'LucideBadgeQuestionMark', 'LucideBadgeRussianRuble', 'LucideBadgeSwissFranc', 'LucideBadgeTurkishLira', 'LucideBadgeX', 'LucideBaggageClaim', 'LucideBalloon', 'LucideBan', 'LucideBanana', 'LucideBandage', 'LucideBanknote', 'LucideBanknoteArrowDown', 'LucideBanknoteArrowUp', 'LucideBanknoteX', 'LucideBarChart', 'LucideBarChart2', 'LucideBarChart3', 'LucideBarChart4', 'LucideBarChartBig', 'LucideBarChartHorizontal', 'LucideBarChartHorizontalBig', 'LucideBarcode', 'LucideBarrel', 'LucideBaseline', 'LucideBath', 'LucideBattery', 'LucideBatteryCharging', 'LucideBatteryFull', 'LucideBatteryLow', 'LucideBatteryMedium', 'LucideBatteryPlus', 'LucideBatteryWarning', 'LucideBeaker', 'LucideBean', 'LucideBeanOff', 'LucideBed', 'LucideBedDouble', 'LucideBedSingle', 'LucideBeef', 'LucideBeer', 'LucideBeerOff', 'LucideBell', 'LucideBellDot', 'LucideBellElectric', 'LucideBellMinus', 'LucideBellOff', 'LucideBellPlus', 'LucideBellRing', 'LucideBetweenHorizonalEnd', 'LucideBetweenHorizonalStart', 'LucideBetweenHorizontalEnd', 'LucideBetweenHorizontalStart', 'LucideBetweenVerticalEnd', 'LucideBetweenVerticalStart', 'LucideBicepsFlexed', 'LucideBike', 'LucideBinary', 'LucideBinoculars', 'LucideBiohazard', 'LucideBird', 'LucideBirdhouse', 'LucideBitcoin', 'LucideBlend', 'LucideBlinds', 'LucideBlocks', 'LucideBluetooth', 'LucideBluetoothConnected', 'LucideBluetoothOff', 'LucideBluetoothSearching', 'LucideBold', 'LucideBolt', 'LucideBomb', 'LucideBone', 'LucideBook', 'LucideBookA', 'LucideBookAlert', 'LucideBookAudio', 'LucideBookCheck', 'LucideBookCopy', 'LucideBookDashed', 'LucideBookDown', 'LucideBookHeadphones', 'LucideBookHeart', 'LucideBookImage', 'LucideBookKey', 'LucideBookLock', 'LucideBookMarked', 'LucideBookMinus', 'LucideBookOpen', 'LucideBookOpenCheck', 'LucideBookOpenText', 'LucideBookPlus', 'LucideBookSearch', 'LucideBookTemplate', 'LucideBookText', 'LucideBookType', 'LucideBookUp', 'LucideBookUp2', 'LucideBookUser', 'LucideBookX', 'LucideBookmark', 'LucideBookmarkCheck', 'LucideBookmarkMinus', 'LucideBookmarkPlus', 'LucideBookmarkX', 'LucideBoomBox', 'LucideBot', 'LucideBotMessageSquare', 'LucideBotOff', 'LucideBottleWine', 'LucideBowArrow', 'LucideBox', 'LucideBoxSelect', 'LucideBoxes', 'LucideBraces', 'LucideBrackets', 'LucideBrain', 'LucideBrainCircuit', 'LucideBrainCog', 'LucideBrickWall', 'LucideBrickWallFire', 'LucideBrickWallShield', 'LucideBriefcase', 'LucideBriefcaseBusiness', 'LucideBriefcaseConveyorBelt', 'LucideBriefcaseMedical', 'LucideBringToFront', 'LucideBrush', 'LucideBrushCleaning', 'LucideBubbles', 'LucideBug', 'LucideBugOff', 'LucideBugPlay', 'LucideBuilding', 'LucideBuilding2', 'LucideBus', 'LucideBusFront', 'LucideCable', 'LucideCableCar', 'LucideCake', 'LucideCakeSlice', 'LucideCalculator', 'LucideCalendar', 'LucideCalendar1', 'LucideCalendarArrowDown', 'LucideCalendarArrowUp', 'LucideCalendarCheck', 'LucideCalendarCheck2', 'LucideCalendarClock', 'LucideCalendarCog', 'LucideCalendarDays', 'LucideCalendarFold', 'LucideCalendarHeart', 'LucideCalendarMinus', 'LucideCalendarMinus2', 'LucideCalendarOff', 'LucideCalendarPlus', 'LucideCalendarPlus2', 'LucideCalendarRange', 'LucideCalendarSearch', 'LucideCalendarSync', 'LucideCalendarX', 'LucideCalendarX2', 'LucideCalendars', 'LucideCamera', 'LucideCameraOff', 'LucideCandlestickChart', 'LucideCandy', 'LucideCandyCane', 'LucideCandyOff', 'LucideCannabis', 'LucideCannabisOff', 'LucideCaptions', 'LucideCaptionsOff', 'LucideCar', 'LucideCarFront', 'LucideCarTaxiFront', 'LucideCaravan', 'LucideCardSim', 'LucideCarrot', 'LucideCaseLower', 'LucideCaseSensitive', 'LucideCaseUpper', 'LucideCassetteTape', 'LucideCast', 'LucideCastle', 'LucideCat', 'LucideCctv', 'LucideChartArea', 'LucideChartBar', 'LucideChartBarBig', 'LucideChartBarDecreasing', 'LucideChartBarIncreasing', 'LucideChartBarStacked', 'LucideChartCandlestick', 'LucideChartColumn', 'LucideChartColumnBig', 'LucideChartColumnDecreasing', 'LucideChartColumnIncreasing', 'LucideChartColumnStacked', 'LucideChartGantt', 'LucideChartLine', 'LucideChartNetwork', 'LucideChartNoAxesColumn', 'LucideChartNoAxesColumnDecreasing', 'LucideChartNoAxesColumnIncreasing', 'LucideChartNoAxesCombined', 'LucideChartNoAxesGantt', 'LucideChartPie', 'LucideChartScatter', 'LucideChartSpline', 'LucideCheck', 'LucideCheckCheck', 'LucideCheckCircle', 'LucideCheckCircle2', 'LucideCheckLine', 'LucideCheckSquare', 'LucideCheckSquare2', 'LucideChefHat', 'LucideCherry', 'LucideChessBishop', 'LucideChessKing', 'LucideChessKnight', 'LucideChessPawn', 'LucideChessQueen', 'LucideChessRook', 'LucideChevronDown', 'LucideChevronDownCircle', 'LucideChevronDownSquare', 'LucideChevronFirst', 'LucideChevronLast', 'LucideChevronLeft', 'LucideChevronLeftCircle', 'LucideChevronLeftSquare', 'LucideChevronRight', 'LucideChevronRightCircle', 'LucideChevronRightSquare', 'LucideChevronUp', 'LucideChevronUpCircle', 'LucideChevronUpSquare', 'LucideChevronsDown', 'LucideChevronsDownUp', 'LucideChevronsLeft', 'LucideChevronsLeftRight', 'LucideChevronsLeftRightEllipsis', 'LucideChevronsRight', 'LucideChevronsRightLeft', 'LucideChevronsUp', 'LucideChevronsUpDown', 'LucideChrome', 'LucideChromium', 'LucideChurch', 'LucideCigarette', 'LucideCigaretteOff', 'LucideCircle', 'LucideCircleAlert', 'LucideCircleArrowDown', 'LucideCircleArrowLeft', 'LucideCircleArrowOutDownLeft', 'LucideCircleArrowOutDownRight', 'LucideCircleArrowOutUpLeft', 'LucideCircleArrowOutUpRight', 'LucideCircleArrowRight', 'LucideCircleArrowUp', 'LucideCircleCheck', 'LucideCircleCheckBig', 'LucideCircleChevronDown', 'LucideCircleChevronLeft', 'LucideCircleChevronRight', 'LucideCircleChevronUp', 'LucideCircleDashed', 'LucideCircleDivide', 'LucideCircleDollarSign', 'LucideCircleDot', 'LucideCircleDotDashed', 'LucideCircleEllipsis', 'LucideCircleEqual', 'LucideCircleFadingArrowUp', 'LucideCircleFadingPlus', 'LucideCircleGauge', 'LucideCircleHelp', 'LucideCircleMinus', 'LucideCircleOff', 'LucideCircleParking', 'LucideCircleParkingOff', 'LucideCirclePause', 'LucideCirclePercent', 'LucideCirclePile', 'LucideCirclePlay', 'LucideCirclePlus', 'LucideCirclePoundSterling', 'LucideCirclePower', 'LucideCircleQuestionMark', 'LucideCircleSlash', 'LucideCircleSlash2', 'LucideCircleSlashed', 'LucideCircleSmall', 'LucideCircleStar', 'LucideCircleStop', 'LucideCircleUser', 'LucideCircleUserRound', 'LucideCircleX', 'LucideCircuitBoard', 'LucideCitrus', 'LucideClapperboard', 'LucideClipboard', 'LucideClipboardCheck', 'LucideClipboardClock', 'LucideClipboardCopy', 'LucideClipboardEdit', 'LucideClipboardList', 'LucideClipboardMinus', 'LucideClipboardPaste', 'LucideClipboardPen', 'LucideClipboardPenLine', 'LucideClipboardPlus', 'LucideClipboardSignature', 'LucideClipboardType', 'LucideClipboardX', 'LucideClock', 'LucideClock1', 'LucideClock10', 'LucideClock11', 'LucideClock12', 'LucideClock2', 'LucideClock3', 'LucideClock4', 'LucideClock5', 'LucideClock6', 'LucideClock7', 'LucideClock8', 'LucideClock9', 'LucideClockAlert', 'LucideClockArrowDown', 'LucideClockArrowUp', 'LucideClockCheck', 'LucideClockFading', 'LucideClockPlus', 'LucideClosedCaption', 'LucideCloud', 'LucideCloudAlert', 'LucideCloudBackup', 'LucideCloudCheck', 'LucideCloudCog', 'LucideCloudDownload', 'LucideCloudDrizzle', 'LucideCloudFog', 'LucideCloudHail', 'LucideCloudLightning', 'LucideCloudMoon', 'LucideCloudMoonRain', 'LucideCloudOff', 'LucideCloudRain', 'LucideCloudRainWind', 'LucideCloudSnow', 'LucideCloudSun', 'LucideCloudSunRain', 'LucideCloudSync', 'LucideCloudUpload', 'LucideCloudy', 'LucideClover', 'LucideClub', 'LucideCode', 'LucideCode2', 'LucideCodeSquare', 'LucideCodeXml', 'LucideCodepen', 'LucideCodesandbox', 'LucideCoffee', 'LucideCog', 'LucideCoins', 'LucideColumns', 'LucideColumns2', 'LucideColumns3', 'LucideColumns3Cog', 'LucideColumns4', 'LucideColumnsSettings', 'LucideCombine', 'LucideCommand', 'LucideCompass', 'LucideComponent', 'LucideComputer', 'LucideConciergeBell', 'LucideCone', 'LucideConstruction', 'LucideContact', 'LucideContact2', 'LucideContactRound', 'LucideContainer', 'LucideContrast', 'LucideCookie', 'LucideCookingPot', 'LucideCopy', 'LucideCopyCheck', 'LucideCopyMinus', 'LucideCopyPlus', 'LucideCopySlash', 'LucideCopyX', 'LucideCopyleft', 'LucideCopyright', 'LucideCornerDownLeft', 'LucideCornerDownRight', 'LucideCornerLeftDown', 'LucideCornerLeftUp', 'LucideCornerRightDown', 'LucideCornerRightUp', 'LucideCornerUpLeft', 'LucideCornerUpRight', 'LucideCpu', 'LucideCreativeCommons', 'LucideCreditCard', 'LucideCroissant', 'LucideCrop', 'LucideCross', 'LucideCrosshair', 'LucideCrown', 'LucideCuboid', 'LucideCupSoda', 'LucideCurlyBraces', 'LucideCurrency', 'LucideCylinder', 'LucideDam', 'LucideDatabase', 'LucideDatabaseBackup', 'LucideDatabaseZap', 'LucideDecimalsArrowLeft', 'LucideDecimalsArrowRight', 'LucideDelete', 'LucideDessert', 'LucideDiameter', 'LucideDiamond', 'LucideDiamondMinus', 'LucideDiamondPercent', 'LucideDiamondPlus', 'LucideDice1', 'LucideDice2', 'LucideDice3', 'LucideDice4', 'LucideDice5', 'LucideDice6', 'LucideDices', 'LucideDiff', 'LucideDisc', 'LucideDisc2', 'LucideDisc3', 'LucideDiscAlbum', 'LucideDivide', 'LucideDivideCircle', 'LucideDivideSquare', 'LucideDna', 'LucideDnaOff', 'LucideDock', 'LucideDog', 'LucideDollarSign', 'LucideDonut', 'LucideDoorClosed', 'LucideDoorClosedLocked', 'LucideDoorOpen', 'LucideDot', 'LucideDotSquare', 'LucideDownload', 'LucideDownloadCloud', 'LucideDraftingCompass', 'LucideDrama', 'LucideDribbble', 'LucideDrill', 'LucideDrone', 'LucideDroplet', 'LucideDropletOff', 'LucideDroplets', 'LucideDrum', 'LucideDrumstick', 'LucideDumbbell', 'LucideEar', 'LucideEarOff', 'LucideEarth', 'LucideEarthLock', 'LucideEclipse', 'LucideEdit', 'LucideEdit2', 'LucideEdit3', 'LucideEgg', 'LucideEggFried', 'LucideEggOff', 'LucideEllipsis', 'LucideEllipsisVertical', 'LucideEqual', 'LucideEqualApproximately', 'LucideEqualNot', 'LucideEqualSquare', 'LucideEraser', 'LucideEthernetPort', 'LucideEuro', 'LucideEvCharger', 'LucideExpand', 'LucideExternalLink', 'LucideEye', 'LucideEyeClosed', 'LucideEyeOff', 'LucideFacebook', 'LucideFactory', 'LucideFan', 'LucideFastForward', 'LucideFeather', 'LucideFence', 'LucideFerrisWheel', 'LucideFigma', 'LucideFile', 'LucideFileArchive', 'LucideFileAudio', 'LucideFileAudio2', 'LucideFileAxis3D', 'LucideFileAxis3d', 'LucideFileBadge', 'LucideFileBadge2', 'LucideFileBarChart', 'LucideFileBarChart2', 'LucideFileBox', 'LucideFileBraces', 'LucideFileBracesCorner', 'LucideFileChartColumn', 'LucideFileChartColumnIncreasing', 'LucideFileChartLine', 'LucideFileChartPie', 'LucideFileCheck', 'LucideFileCheck2', 'LucideFileCheckCorner', 'LucideFileClock', 'LucideFileCode', 'LucideFileCode2', 'LucideFileCodeCorner', 'LucideFileCog', 'LucideFileCog2', 'LucideFileDiff', 'LucideFileDigit', 'LucideFileDown', 'LucideFileEdit', 'LucideFileExclamationPoint', 'LucideFileHeadphone', 'LucideFileHeart', 'LucideFileImage', 'LucideFileInput', 'LucideFileJson', 'LucideFileJson2', 'LucideFileKey', 'LucideFileKey2', 'LucideFileLineChart', 'LucideFileLock', 'LucideFileLock2', 'LucideFileMinus', 'LucideFileMinus2', 'LucideFileMinusCorner', 'LucideFileMusic', 'LucideFileOutput', 'LucideFilePen', 'LucideFilePenLine', 'LucideFilePieChart', 'LucideFilePlay', 'LucideFilePlus', 'LucideFilePlus2', 'LucideFilePlusCorner', 'LucideFileQuestion', 'LucideFileQuestionMark', 'LucideFileScan', 'LucideFileSearch', 'LucideFileSearch2', 'LucideFileSearchCorner', 'LucideFileSignal', 'LucideFileSignature', 'LucideFileSliders', 'LucideFileSpreadsheet', 'LucideFileStack', 'LucideFileSymlink', 'LucideFileTerminal', 'LucideFileText', 'LucideFileType', 'LucideFileType2', 'LucideFileTypeCorner', 'LucideFileUp', 'LucideFileUser', 'LucideFileVideo', 'LucideFileVideo2', 'LucideFileVideoCamera', 'LucideFileVolume', 'LucideFileVolume2', 'LucideFileWarning', 'LucideFileX', 'LucideFileX2', 'LucideFileXCorner', 'LucideFiles', 'LucideFilm', 'LucideFilter', 'LucideFilterX', 'LucideFingerprint', 'LucideFingerprintPattern', 'LucideFireExtinguisher', 'LucideFish', 'LucideFishOff', 'LucideFishSymbol', 'LucideFishingHook', 'LucideFlag', 'LucideFlagOff', 'LucideFlagTriangleLeft', 'LucideFlagTriangleRight', 'LucideFlame', 'LucideFlameKindling', 'LucideFlashlight', 'LucideFlashlightOff', 'LucideFlaskConical', 'LucideFlaskConicalOff', 'LucideFlaskRound', 'LucideFlipHorizontal', 'LucideFlipHorizontal2', 'LucideFlipVertical', 'LucideFlipVertical2', 'LucideFlower', 'LucideFlower2', 'LucideFocus', 'LucideFoldHorizontal', 'LucideFoldVertical', 'LucideFolder', 'LucideFolderArchive', 'LucideFolderCheck', 'LucideFolderClock', 'LucideFolderClosed', 'LucideFolderCode', 'LucideFolderCog', 'LucideFolderCog2', 'LucideFolderDot', 'LucideFolderDown', 'LucideFolderEdit', 'LucideFolderGit', 'LucideFolderGit2', 'LucideFolderHeart', 'LucideFolderInput', 'LucideFolderKanban', 'LucideFolderKey', 'LucideFolderLock', 'LucideFolderMinus', 'LucideFolderOpen', 'LucideFolderOpenDot', 'LucideFolderOutput', 'LucideFolderPen', 'LucideFolderPlus', 'LucideFolderRoot', 'LucideFolderSearch', 'LucideFolderSearch2', 'LucideFolderSymlink', 'LucideFolderSync', 'LucideFolderTree', 'LucideFolderUp', 'LucideFolderX', 'LucideFolders', 'LucideFootprints', 'LucideForkKnife', 'LucideForkKnifeCrossed', 'LucideForklift', 'LucideForm', 'LucideFormInput', 'LucideForward', 'LucideFrame', 'LucideFramer', 'LucideFrown', 'LucideFuel', 'LucideFullscreen', 'LucideFunctionSquare', 'LucideFunnel', 'LucideFunnelPlus', 'LucideFunnelX', 'LucideGalleryHorizontal', 'LucideGalleryHorizontalEnd', 'LucideGalleryThumbnails', 'LucideGalleryVertical', 'LucideGalleryVerticalEnd', 'LucideGamepad', 'LucideGamepad2', 'LucideGamepadDirectional', 'LucideGanttChart', 'LucideGanttChartSquare', 'LucideGauge', 'LucideGaugeCircle', 'LucideGavel', 'LucideGem', 'LucideGeorgianLari', 'LucideGhost', 'LucideGift', 'LucideGitBranch', 'LucideGitBranchMinus', 'LucideGitBranchPlus', 'LucideGitCommit', 'LucideGitCommitHorizontal', 'LucideGitCommitVertical', 'LucideGitCompare', 'LucideGitCompareArrows', 'LucideGitFork', 'LucideGitGraph', 'LucideGitMerge', 'LucideGitPullRequest', 'LucideGitPullRequestArrow', 'LucideGitPullRequestClosed', 'LucideGitPullRequestCreate', 'LucideGitPullRequestCreateArrow', 'LucideGitPullRequestDraft', 'LucideGithub', 'LucideGitlab', 'LucideGlassWater', 'LucideGlasses', 'LucideGlobe', 'LucideGlobe2', 'LucideGlobeLock', 'LucideGlobeX', 'LucideGoal', 'LucideGpu', 'LucideGrab', 'LucideGraduationCap', 'LucideGrape', 'LucideGrid', 'LucideGrid2X2', 'LucideGrid2X2Check', 'LucideGrid2X2Plus', 'LucideGrid2X2X', 'LucideGrid2x2', 'LucideGrid2x2Check', 'LucideGrid2x2Plus', 'LucideGrid2x2X', 'LucideGrid3X3', 'LucideGrid3x2', 'LucideGrid3x3', 'LucideGrip', 'LucideGripHorizontal', 'LucideGripVertical', 'LucideGroup', 'LucideGuitar', 'LucideHam', 'LucideHamburger', 'LucideHammer', 'LucideHand', 'LucideHandCoins', 'LucideHandFist', 'LucideHandGrab', 'LucideHandHeart', 'LucideHandHelping', 'LucideHandMetal', 'LucideHandPlatter', 'LucideHandbag', 'LucideHandshake', 'LucideHardDrive', 'LucideHardDriveDownload', 'LucideHardDriveUpload', 'LucideHardHat', 'LucideHash', 'LucideHatGlasses', 'LucideHaze', 'LucideHd', 'LucideHdmiPort', 'LucideHeading', 'LucideHeading1', 'LucideHeading2', 'LucideHeading3', 'LucideHeading4', 'LucideHeading5', 'LucideHeading6', 'LucideHeadphoneOff', 'LucideHeadphones', 'LucideHeadset', 'LucideHeart', 'LucideHeartCrack', 'LucideHeartHandshake', 'LucideHeartMinus', 'LucideHeartOff', 'LucideHeartPlus', 'LucideHeartPulse', 'LucideHeater', 'LucideHelicopter', 'LucideHelpCircle', 'LucideHelpingHand', 'LucideHexagon', 'LucideHighlighter', 'LucideHistory', 'LucideHome', 'LucideHop', 'LucideHopOff', 'LucideHospital', 'LucideHotel', 'LucideHourglass', 'LucideHouse', 'LucideHouseHeart', 'LucideHousePlug', 'LucideHousePlus', 'LucideHouseWifi', 'LucideIceCream', 'LucideIceCream2', 'LucideIceCreamBowl', 'LucideIceCreamCone', 'LucideIdCard', 'LucideIdCardLanyard', 'LucideImage', 'LucideImageDown', 'LucideImageMinus', 'LucideImageOff', 'LucideImagePlay', 'LucideImagePlus', 'LucideImageUp', 'LucideImageUpscale', 'LucideImages', 'LucideImport', 'LucideInbox', 'LucideIndent', 'LucideIndentDecrease', 'LucideIndentIncrease', 'LucideIndianRupee', 'LucideInfinity', 'LucideInfo', 'LucideInspect', 'LucideInspectionPanel', 'LucideInstagram', 'LucideItalic', 'LucideIterationCcw', 'LucideIterationCw', 'LucideJapaneseYen', 'LucideJoystick', 'LucideKanban', 'LucideKanbanSquare', 'LucideKanbanSquareDashed', 'LucideKayak', 'LucideKey', 'LucideKeyRound', 'LucideKeySquare', 'LucideKeyboard', 'LucideKeyboardMusic', 'LucideKeyboardOff', 'LucideLamp', 'LucideLampCeiling', 'LucideLampDesk', 'LucideLampFloor', 'LucideLampWallDown', 'LucideLampWallUp', 'LucideLandPlot', 'LucideLandmark', 'LucideLanguages', 'LucideLaptop', 'LucideLaptop2', 'LucideLaptopMinimal', 'LucideLaptopMinimalCheck', 'LucideLasso', 'LucideLassoSelect', 'LucideLaugh', 'LucideLayers', 'LucideLayers2', 'LucideLayers3', 'LucideLayersPlus', 'LucideLayout', 'LucideLayoutDashboard', 'LucideLayoutGrid', 'LucideLayoutList', 'LucideLayoutPanelLeft', 'LucideLayoutPanelTop', 'LucideLayoutTemplate', 'LucideLeaf', 'LucideLeafyGreen', 'LucideLectern', 'LucideLetterText', 'LucideLibrary', 'LucideLibraryBig', 'LucideLibrarySquare', 'LucideLifeBuoy', 'LucideLigature', 'LucideLightbulb', 'LucideLightbulbOff', 'LucideLineChart', 'LucideLineSquiggle', 'LucideLink', 'LucideLink2', 'LucideLink2Off', 'LucideLinkedin', 'LucideList', 'LucideListCheck', 'LucideListChecks', 'LucideListChevronsDownUp', 'LucideListChevronsUpDown', 'LucideListCollapse', 'LucideListEnd', 'LucideListFilter', 'LucideListFilterPlus', 'LucideListIndentDecrease', 'LucideListIndentIncrease', 'LucideListMinus', 'LucideListMusic', 'LucideListOrdered', 'LucideListPlus', 'LucideListRestart', 'LucideListStart', 'LucideListTodo', 'LucideListTree', 'LucideListVideo', 'LucideListX', 'LucideLoader', 'LucideLoader2', 'LucideLoaderCircle', 'LucideLoaderPinwheel', 'LucideLocate', 'LucideLocateFixed', 'LucideLocateOff', 'LucideLocationEdit', 'LucideLock', 'LucideLockKeyhole', 'LucideLockKeyholeOpen', 'LucideLockOpen', 'LucideLogIn', 'LucideLogOut', 'LucideLogs', 'LucideLollipop', 'LucideLuggage', 'LucideMSquare', 'LucideMagnet', 'LucideMail', 'LucideMailCheck', 'LucideMailMinus', 'LucideMailOpen', 'LucideMailPlus', 'LucideMailQuestion', 'LucideMailQuestionMark', 'LucideMailSearch', 'LucideMailWarning', 'LucideMailX', 'LucideMailbox', 'LucideMails', 'LucideMap', 'LucideMapMinus', 'LucideMapPin', 'LucideMapPinCheck', 'LucideMapPinCheckInside', 'LucideMapPinHouse', 'LucideMapPinMinus', 'LucideMapPinMinusInside', 'LucideMapPinOff', 'LucideMapPinPen', 'LucideMapPinPlus', 'LucideMapPinPlusInside', 'LucideMapPinX', 'LucideMapPinXInside', 'LucideMapPinned', 'LucideMapPlus', 'LucideMars', 'LucideMarsStroke', 'LucideMartini', 'LucideMaximize', 'LucideMaximize2', 'LucideMedal', 'LucideMegaphone', 'LucideMegaphoneOff', 'LucideMeh', 'LucideMemoryStick', 'LucideMenu', 'LucideMenuSquare', 'LucideMerge', 'LucideMessageCircle', 'LucideMessageCircleCode', 'LucideMessageCircleDashed', 'LucideMessageCircleHeart', 'LucideMessageCircleMore', 'LucideMessageCircleOff', 'LucideMessageCirclePlus', 'LucideMessageCircleQuestion', 'LucideMessageCircleQuestionMark', 'LucideMessageCircleReply', 'LucideMessageCircleWarning', 'LucideMessageCircleX', 'LucideMessageSquare', 'LucideMessageSquareCode', 'LucideMessageSquareDashed', 'LucideMessageSquareDiff', 'LucideMessageSquareDot', 'LucideMessageSquareHeart', 'LucideMessageSquareLock', 'LucideMessageSquareMore', 'LucideMessageSquareOff', 'LucideMessageSquarePlus', 'LucideMessageSquareQuote', 'LucideMessageSquareReply', 'LucideMessageSquareShare', 'LucideMessageSquareText', 'LucideMessageSquareWarning', 'LucideMessageSquareX', 'LucideMessagesSquare', 'LucideMic', 'LucideMic2', 'LucideMicOff', 'LucideMicVocal', 'LucideMicrochip', 'LucideMicroscope', 'LucideMicrowave', 'LucideMilestone', 'LucideMilk', 'LucideMilkOff', 'LucideMinimize', 'LucideMinimize2', 'LucideMinus', 'LucideMinusCircle', 'LucideMinusSquare', 'LucideMonitor', 'LucideMonitorCheck', 'LucideMonitorCloud', 'LucideMonitorCog', 'LucideMonitorDot', 'LucideMonitorDown', 'LucideMonitorOff', 'LucideMonitorPause', 'LucideMonitorPlay', 'LucideMonitorSmartphone', 'LucideMonitorSpeaker', 'LucideMonitorStop', 'LucideMonitorUp', 'LucideMonitorX', 'LucideMoon', 'LucideMoonStar', 'LucideMoreHorizontal', 'LucideMoreVertical', 'LucideMotorbike', 'LucideMountain', 'LucideMountainSnow', 'LucideMouse', 'LucideMouseOff', 'LucideMousePointer', 'LucideMousePointer2', 'LucideMousePointer2Off', 'LucideMousePointerBan', 'LucideMousePointerClick', 'LucideMousePointerSquareDashed', 'LucideMove', 'LucideMove3D', 'LucideMove3d', 'LucideMoveDiagonal', 'LucideMoveDiagonal2', 'LucideMoveDown', 'LucideMoveDownLeft', 'LucideMoveDownRight', 'LucideMoveHorizontal', 'LucideMoveLeft', 'LucideMoveRight', 'LucideMoveUp', 'LucideMoveUpLeft', 'LucideMoveUpRight', 'LucideMoveVertical', 'LucideMusic', 'LucideMusic2', 'LucideMusic3', 'LucideMusic4', 'LucideNavigation', 'LucideNavigation2', 'LucideNavigation2Off', 'LucideNavigationOff', 'LucideNetwork', 'LucideNewspaper', 'LucideNfc', 'LucideNonBinary', 'LucideNotebook', 'LucideNotebookPen', 'LucideNotebookTabs', 'LucideNotebookText', 'LucideNotepadText', 'LucideNotepadTextDashed', 'LucideNut', 'LucideNutOff', 'LucideOctagon', 'LucideOctagonAlert', 'LucideOctagonMinus', 'LucideOctagonPause', 'LucideOctagonX', 'LucideOmega', 'LucideOption', 'LucideOrbit', 'LucideOrigami', 'LucideOutdent', 'LucidePackage', 'LucidePackage2', 'LucidePackageCheck', 'LucidePackageMinus', 'LucidePackageOpen', 'LucidePackagePlus', 'LucidePackageSearch', 'LucidePackageX', 'LucidePaintBucket', 'LucidePaintRoller', 'LucidePaintbrush', 'LucidePaintbrush2', 'LucidePaintbrushVertical', 'LucidePalette', 'LucidePalmtree', 'LucidePanda', 'LucidePanelBottom', 'LucidePanelBottomClose', 'LucidePanelBottomDashed', 'LucidePanelBottomInactive', 'LucidePanelBottomOpen', 'LucidePanelLeft', 'LucidePanelLeftClose', 'LucidePanelLeftDashed', 'LucidePanelLeftInactive', 'LucidePanelLeftOpen', 'LucidePanelLeftRightDashed', 'LucidePanelRight', 'LucidePanelRightClose', 'LucidePanelRightDashed', 'LucidePanelRightInactive', 'LucidePanelRightOpen', 'LucidePanelTop', 'LucidePanelTopBottomDashed', 'LucidePanelTopClose', 'LucidePanelTopDashed', 'LucidePanelTopInactive', 'LucidePanelTopOpen', 'LucidePanelsLeftBottom', 'LucidePanelsLeftRight', 'LucidePanelsRightBottom', 'LucidePanelsTopBottom', 'LucidePanelsTopLeft', 'LucidePaperclip', 'LucideParentheses', 'LucideParkingCircle', 'LucideParkingCircleOff', 'LucideParkingMeter', 'LucideParkingSquare', 'LucideParkingSquareOff', 'LucidePartyPopper', 'LucidePause', 'LucidePauseCircle', 'LucidePauseOctagon', 'LucidePawPrint', 'LucidePcCase', 'LucidePen', 'LucidePenBox', 'LucidePenLine', 'LucidePenOff', 'LucidePenSquare', 'LucidePenTool', 'LucidePencil', 'LucidePencilLine', 'LucidePencilOff', 'LucidePencilRuler', 'LucidePentagon', 'LucidePercent', 'LucidePercentCircle', 'LucidePercentDiamond', 'LucidePercentSquare', 'LucidePersonStanding', 'LucidePhilippinePeso', 'LucidePhone', 'LucidePhoneCall', 'LucidePhoneForwarded', 'LucidePhoneIncoming', 'LucidePhoneMissed', 'LucidePhoneOff', 'LucidePhoneOutgoing', 'LucidePi', 'LucidePiSquare', 'LucidePiano', 'LucidePickaxe', 'LucidePictureInPicture', 'LucidePictureInPicture2', 'LucidePieChart', 'LucidePiggyBank', 'LucidePilcrow', 'LucidePilcrowLeft', 'LucidePilcrowRight', 'LucidePilcrowSquare', 'LucidePill', 'LucidePillBottle', 'LucidePin', 'LucidePinOff', 'LucidePipette', 'LucidePizza', 'LucidePlane', 'LucidePlaneLanding', 'LucidePlaneTakeoff', 'LucidePlay', 'LucidePlayCircle', 'LucidePlaySquare', 'LucidePlug', 'LucidePlug2', 'LucidePlugZap', 'LucidePlugZap2', 'LucidePlus', 'LucidePlusCircle', 'LucidePlusSquare', 'LucidePocket', 'LucidePocketKnife', 'LucidePodcast', 'LucidePointer', 'LucidePointerOff', 'LucidePopcorn', 'LucidePopsicle', 'LucidePoundSterling', 'LucidePower', 'LucidePowerCircle', 'LucidePowerOff', 'LucidePowerSquare', 'LucidePresentation', 'LucidePrinter', 'LucidePrinterCheck', 'LucidePrinterX', 'LucideProjector', 'LucideProportions', 'LucidePuzzle', 'LucidePyramid', 'LucideQrCode', 'LucideQuote', 'LucideRabbit', 'LucideRadar', 'LucideRadiation', 'LucideRadical', 'LucideRadio', 'LucideRadioReceiver', 'LucideRadioTower', 'LucideRadius', 'LucideRailSymbol', 'LucideRainbow', 'LucideRat', 'LucideRatio', 'LucideReceipt', 'LucideReceiptCent', 'LucideReceiptEuro', 'LucideReceiptIndianRupee', 'LucideReceiptJapaneseYen', 'LucideReceiptPoundSterling', 'LucideReceiptRussianRuble', 'LucideReceiptSwissFranc', 'LucideReceiptText', 'LucideReceiptTurkishLira', 'LucideRectangleCircle', 'LucideRectangleEllipsis', 'LucideRectangleGoggles', 'LucideRectangleHorizontal', 'LucideRectangleVertical', 'LucideRecycle', 'LucideRedo', 'LucideRedo2', 'LucideRedoDot', 'LucideRefreshCcw', 'LucideRefreshCcwDot', 'LucideRefreshCw', 'LucideRefreshCwOff', 'LucideRefrigerator', 'LucideRegex', 'LucideRemoveFormatting', 'LucideRepeat', 'LucideRepeat1', 'LucideRepeat2', 'LucideReplace', 'LucideReplaceAll', 'LucideReply', 'LucideReplyAll', 'LucideRewind', 'LucideRibbon', 'LucideRocket', 'LucideRockingChair', 'LucideRollerCoaster', 'LucideRose', 'LucideRotate3D', 'LucideRotate3d', 'LucideRotateCcw', 'LucideRotateCcwKey', 'LucideRotateCcwSquare', 'LucideRotateCw', 'LucideRotateCwSquare', 'LucideRoute', 'LucideRouteOff', 'LucideRouter', 'LucideRows', 'LucideRows2', 'LucideRows3', 'LucideRows4', 'LucideRss', 'LucideRuler', 'LucideRulerDimensionLine', 'LucideRussianRuble', 'LucideSailboat', 'LucideSalad', 'LucideSandwich', 'LucideSatellite', 'LucideSatelliteDish', 'LucideSaudiRiyal', 'LucideSave', 'LucideSaveAll', 'LucideSaveOff', 'LucideScale', 'LucideScale3D', 'LucideScale3d', 'LucideScaling', 'LucideScan', 'LucideScanBarcode', 'LucideScanEye', 'LucideScanFace', 'LucideScanHeart', 'LucideScanLine', 'LucideScanQrCode', 'LucideScanSearch', 'LucideScanText', 'LucideScatterChart', 'LucideSchool', 'LucideSchool2', 'LucideScissors', 'LucideScissorsLineDashed', 'LucideScissorsSquare', 'LucideScissorsSquareDashedBottom', 'LucideScooter', 'LucideScreenShare', 'LucideScreenShareOff', 'LucideScroll', 'LucideScrollText', 'LucideSearch', 'LucideSearchAlert', 'LucideSearchCheck', 'LucideSearchCode', 'LucideSearchSlash', 'LucideSearchX', 'LucideSection', 'LucideSend', 'LucideSendHorizonal', 'LucideSendHorizontal', 'LucideSendToBack', 'LucideSeparatorHorizontal', 'LucideSeparatorVertical', 'LucideServer', 'LucideServerCog', 'LucideServerCrash', 'LucideServerOff', 'LucideSettings', 'LucideSettings2', 'LucideShapes', 'LucideShare', 'LucideShare2', 'LucideSheet', 'LucideShell', 'LucideShield', 'LucideShieldAlert', 'LucideShieldBan', 'LucideShieldCheck', 'LucideShieldClose', 'LucideShieldEllipsis', 'LucideShieldHalf', 'LucideShieldMinus', 'LucideShieldOff', 'LucideShieldPlus', 'LucideShieldQuestion', 'LucideShieldQuestionMark', 'LucideShieldUser', 'LucideShieldX', 'LucideShip', 'LucideShipWheel', 'LucideShirt', 'LucideShoppingBag', 'LucideShoppingBasket', 'LucideShoppingCart', 'LucideShovel', 'LucideShowerHead', 'LucideShredder', 'LucideShrimp', 'LucideShrink', 'LucideShrub', 'LucideShuffle', 'LucideSidebar', 'LucideSidebarClose', 'LucideSidebarOpen', 'LucideSigma', 'LucideSigmaSquare', 'LucideSignal', 'LucideSignalHigh', 'LucideSignalLow', 'LucideSignalMedium', 'LucideSignalZero', 'LucideSignature', 'LucideSignpost', 'LucideSignpostBig', 'LucideSiren', 'LucideSkipBack', 'LucideSkipForward', 'LucideSkull', 'LucideSlack', 'LucideSlash', 'LucideSlashSquare', 'LucideSlice', 'LucideSliders', 'LucideSlidersHorizontal', 'LucideSlidersVertical', 'LucideSmartphone', 'LucideSmartphoneCharging', 'LucideSmartphoneNfc', 'LucideSmile', 'LucideSmilePlus', 'LucideSnail', 'LucideSnowflake', 'LucideSoapDispenserDroplet', 'LucideSofa', 'LucideSolarPanel', 'LucideSortAsc', 'LucideSortDesc', 'LucideSoup', 'LucideSpace', 'LucideSpade', 'LucideSparkle', 'LucideSparkles', 'LucideSpeaker', 'LucideSpeech', 'LucideSpellCheck', 'LucideSpellCheck2', 'LucideSpline', 'LucideSplinePointer', 'LucideSplit', 'LucideSplitSquareHorizontal', 'LucideSplitSquareVertical', 'LucideSpool', 'LucideSpotlight', 'LucideSprayCan', 'LucideSprout', 'LucideSquare', 'LucideSquareActivity', 'LucideSquareArrowDown', 'LucideSquareArrowDownLeft', 'LucideSquareArrowDownRight', 'LucideSquareArrowLeft', 'LucideSquareArrowOutDownLeft', 'LucideSquareArrowOutDownRight', 'LucideSquareArrowOutUpLeft', 'LucideSquareArrowOutUpRight', 'LucideSquareArrowRight', 'LucideSquareArrowUp', 'LucideSquareArrowUpLeft', 'LucideSquareArrowUpRight', 'LucideSquareAsterisk', 'LucideSquareBottomDashedScissors', 'LucideSquareChartGantt', 'LucideSquareCheck', 'LucideSquareCheckBig', 'LucideSquareChevronDown', 'LucideSquareChevronLeft', 'LucideSquareChevronRight', 'LucideSquareChevronUp', 'LucideSquareCode', 'LucideSquareDashed', 'LucideSquareDashedBottom', 'LucideSquareDashedBottomCode', 'LucideSquareDashedKanban', 'LucideSquareDashedMousePointer', 'LucideSquareDashedTopSolid', 'LucideSquareDivide', 'LucideSquareDot', 'LucideSquareEqual', 'LucideSquareFunction', 'LucideSquareGanttChart', 'LucideSquareKanban', 'LucideSquareLibrary', 'LucideSquareM', 'LucideSquareMenu', 'LucideSquareMinus', 'LucideSquareMousePointer', 'LucideSquareParking', 'LucideSquareParkingOff', 'LucideSquarePause', 'LucideSquarePen', 'LucideSquarePercent', 'LucideSquarePi', 'LucideSquarePilcrow', 'LucideSquarePlay', 'LucideSquarePlus', 'LucideSquarePower', 'LucideSquareRadical', 'LucideSquareRoundCorner', 'LucideSquareScissors', 'LucideSquareSigma', 'LucideSquareSlash', 'LucideSquareSplitHorizontal', 'LucideSquareSplitVertical', 'LucideSquareSquare', 'LucideSquareStack', 'LucideSquareStar', 'LucideSquareStop', 'LucideSquareTerminal', 'LucideSquareUser', 'LucideSquareUserRound', 'LucideSquareX', 'LucideSquaresExclude', 'LucideSquaresIntersect', 'LucideSquaresSubtract', 'LucideSquaresUnite', 'LucideSquircle', 'LucideSquircleDashed', 'LucideSquirrel', 'LucideStamp', 'LucideStar', 'LucideStarHalf', 'LucideStarOff', 'LucideStars', 'LucideStepBack', 'LucideStepForward', 'LucideStethoscope', 'LucideSticker', 'LucideStickyNote', 'LucideStone', 'LucideStopCircle', 'LucideStore', 'LucideStretchHorizontal', 'LucideStretchVertical', 'LucideStrikethrough', 'LucideSubscript', 'LucideSubtitles', 'LucideSun', 'LucideSunDim', 'LucideSunMedium', 'LucideSunMoon', 'LucideSunSnow', 'LucideSunrise', 'LucideSunset', 'LucideSuperscript', 'LucideSwatchBook', 'LucideSwissFranc', 'LucideSwitchCamera', 'LucideSword', 'LucideSwords', 'LucideSyringe', 'LucideTable', 'LucideTable2', 'LucideTableCellsMerge', 'LucideTableCellsSplit', 'LucideTableColumnsSplit', 'LucideTableConfig', 'LucideTableOfContents', 'LucideTableProperties', 'LucideTableRowsSplit', 'LucideTablet', 'LucideTabletSmartphone', 'LucideTablets', 'LucideTag', 'LucideTags', 'LucideTally1', 'LucideTally2', 'LucideTally3', 'LucideTally4', 'LucideTally5', 'LucideTangent', 'LucideTarget', 'LucideTelescope', 'LucideTent', 'LucideTentTree', 'LucideTerminal', 'LucideTerminalSquare', 'LucideTestTube', 'LucideTestTube2', 'LucideTestTubeDiagonal', 'LucideTestTubes', 'LucideText', 'LucideTextAlignCenter', 'LucideTextAlignEnd', 'LucideTextAlignJustify', 'LucideTextAlignStart', 'LucideTextCursor', 'LucideTextCursorInput', 'LucideTextInitial', 'LucideTextQuote', 'LucideTextSearch', 'LucideTextSelect', 'LucideTextSelection', 'LucideTextWrap', 'LucideTheater', 'LucideThermometer', 'LucideThermometerSnowflake', 'LucideThermometerSun', 'LucideThumbsDown', 'LucideThumbsUp', 'LucideTicket', 'LucideTicketCheck', 'LucideTicketMinus', 'LucideTicketPercent', 'LucideTicketPlus', 'LucideTicketSlash', 'LucideTicketX', 'LucideTickets', 'LucideTicketsPlane', 'LucideTimer', 'LucideTimerOff', 'LucideTimerReset', 'LucideToggleLeft', 'LucideToggleRight', 'LucideToilet', 'LucideToolCase', 'LucideToolbox', 'LucideTornado', 'LucideTorus', 'LucideTouchpad', 'LucideTouchpadOff', 'LucideTowerControl', 'LucideToyBrick', 'LucideTractor', 'LucideTrafficCone', 'LucideTrain', 'LucideTrainFront', 'LucideTrainFrontTunnel', 'LucideTrainTrack', 'LucideTramFront', 'LucideTransgender', 'LucideTrash', 'LucideTrash2', 'LucideTreeDeciduous', 'LucideTreePalm', 'LucideTreePine', 'LucideTrees', 'LucideTrello', 'LucideTrendingDown', 'LucideTrendingUp', 'LucideTrendingUpDown', 'LucideTriangle', 'LucideTriangleAlert', 'LucideTriangleDashed', 'LucideTriangleRight', 'LucideTrophy', 'LucideTruck', 'LucideTruckElectric', 'LucideTurkishLira', 'LucideTurntable', 'LucideTurtle', 'LucideTv', 'LucideTv2', 'LucideTvMinimal', 'LucideTvMinimalPlay', 'LucideTwitch', 'LucideTwitter', 'LucideType', 'LucideTypeOutline', 'LucideUmbrella', 'LucideUmbrellaOff', 'LucideUnderline', 'LucideUndo', 'LucideUndo2', 'LucideUndoDot', 'LucideUnfoldHorizontal', 'LucideUnfoldVertical', 'LucideUngroup', 'LucideUniversity', 'LucideUnlink', 'LucideUnlink2', 'LucideUnlock', 'LucideUnlockKeyhole', 'LucideUnplug', 'LucideUpload', 'LucideUploadCloud', 'LucideUsb', 'LucideUser', 'LucideUser2', 'LucideUserCheck', 'LucideUserCheck2', 'LucideUserCircle', 'LucideUserCircle2', 'LucideUserCog', 'LucideUserCog2', 'LucideUserLock', 'LucideUserMinus', 'LucideUserMinus2', 'LucideUserPen', 'LucideUserPlus', 'LucideUserPlus2', 'LucideUserRound', 'LucideUserRoundCheck', 'LucideUserRoundCog', 'LucideUserRoundMinus', 'LucideUserRoundPen', 'LucideUserRoundPlus', 'LucideUserRoundSearch', 'LucideUserRoundX', 'LucideUserSearch', 'LucideUserSquare', 'LucideUserSquare2', 'LucideUserStar', 'LucideUserX', 'LucideUserX2', 'LucideUsers', 'LucideUsers2', 'LucideUsersRound', 'LucideUtensils', 'LucideUtensilsCrossed', 'LucideUtilityPole', 'LucideVan', 'LucideVariable', 'LucideVault', 'LucideVectorSquare', 'LucideVegan', 'LucideVenetianMask', 'LucideVenus', 'LucideVenusAndMars', 'LucideVerified', 'LucideVibrate', 'LucideVibrateOff', 'LucideVideo', 'LucideVideoOff', 'LucideVideotape', 'LucideView', 'LucideVoicemail', 'LucideVolleyball', 'LucideVolume', 'LucideVolume1', 'LucideVolume2', 'LucideVolumeOff', 'LucideVolumeX', 'LucideVote', 'LucideWallet', 'LucideWallet2', 'LucideWalletCards', 'LucideWalletMinimal', 'LucideWallpaper', 'LucideWand', 'LucideWand2', 'LucideWandSparkles', 'LucideWarehouse', 'LucideWashingMachine', 'LucideWatch', 'LucideWaves', 'LucideWavesArrowDown', 'LucideWavesArrowUp', 'LucideWavesLadder', 'LucideWaypoints', 'LucideWebcam', 'LucideWebhook', 'LucideWebhookOff', 'LucideWeight', 'LucideWeightTilde', 'LucideWheat', 'LucideWheatOff', 'LucideWholeWord', 'LucideWifi', 'LucideWifiCog', 'LucideWifiHigh', 'LucideWifiLow', 'LucideWifiOff', 'LucideWifiPen', 'LucideWifiSync', 'LucideWifiZero', 'LucideWind', 'LucideWindArrowDown', 'LucideWine', 'LucideWineOff', 'LucideWorkflow', 'LucideWorm', 'LucideWrapText', 'LucideWrench', 'LucideX', 'LucideXCircle', 'LucideXOctagon', 'LucideXSquare', 'LucideYoutube', 'LucideZap', 'LucideZapOff', 'LucideZoomIn', 'LucideZoomOut', 'Luggage', 'LuggageIcon', 'MSquare', 'MSquareIcon', 'Magnet', 'MagnetIcon', 'Mail', 'MailCheck', 'MailCheckIcon', 'MailIcon', 'MailMinus', 'MailMinusIcon', 'MailOpen', 'MailOpenIcon', 'MailPlus', 'MailPlusIcon', 'MailQuestion', 'MailQuestionIcon', 'MailQuestionMark', 'MailQuestionMarkIcon', 'MailSearch', 'MailSearchIcon', 'MailWarning', 'MailWarningIcon', 'MailX', 'MailXIcon', 'Mailbox', 'MailboxIcon', 'Mails', 'MailsIcon', 'Map', 'MapIcon', 'MapMinus', 'MapMinusIcon', 'MapPin', 'MapPinCheck', 'MapPinCheckIcon', 'MapPinCheckInside', 'MapPinCheckInsideIcon', 'MapPinHouse', 'MapPinHouseIcon', 'MapPinIcon', 'MapPinMinus', 'MapPinMinusIcon', 'MapPinMinusInside', 'MapPinMinusInsideIcon', 'MapPinOff', 'MapPinOffIcon', 'MapPinPen', 'MapPinPenIcon', 'MapPinPlus', 'MapPinPlusIcon', 'MapPinPlusInside', 'MapPinPlusInsideIcon', 'MapPinX', 'MapPinXIcon', 'MapPinXInside', 'MapPinXInsideIcon', 'MapPinned', 'MapPinnedIcon', 'MapPlus', 'MapPlusIcon', 'Mars', 'MarsIcon', 'MarsStroke', 'MarsStrokeIcon', 'Martini', 'MartiniIcon', 'Maximize', 'Maximize2', 'Maximize2Icon', 'MaximizeIcon', 'Medal', 'MedalIcon', 'Megaphone', 'MegaphoneIcon', 'MegaphoneOff', 'MegaphoneOffIcon', 'Meh', 'MehIcon', 'MemoryStick', 'MemoryStickIcon', 'Menu', 'MenuIcon', 'MenuSquare', 'MenuSquareIcon', 'Merge', 'MergeIcon', 'MessageCircle', 'MessageCircleCode', 'MessageCircleCodeIcon', 'MessageCircleDashed', 'MessageCircleDashedIcon', 'MessageCircleHeart', 'MessageCircleHeartIcon', 'MessageCircleIcon', 'MessageCircleMore', 'MessageCircleMoreIcon', 'MessageCircleOff', 'MessageCircleOffIcon', 'MessageCirclePlus', 'MessageCirclePlusIcon', 'MessageCircleQuestion', 'MessageCircleQuestionIcon', 'MessageCircleQuestionMark', 'MessageCircleQuestionMarkIcon', 'MessageCircleReply', 'MessageCircleReplyIcon', 'MessageCircleWarning', 'MessageCircleWarningIcon', 'MessageCircleX', 'MessageCircleXIcon', 'MessageSquare', 'MessageSquareCode', 'MessageSquareCodeIcon', 'MessageSquareDashed', 'MessageSquareDashedIcon', 'MessageSquareDiff', 'MessageSquareDiffIcon', 'MessageSquareDot', 'MessageSquareDotIcon', 'MessageSquareHeart', 'MessageSquareHeartIcon', 'MessageSquareIcon', 'MessageSquareLock', 'MessageSquareLockIcon', 'MessageSquareMore', 'MessageSquareMoreIcon', 'MessageSquareOff', 'MessageSquareOffIcon', 'MessageSquarePlus', 'MessageSquarePlusIcon', 'MessageSquareQuote', 'MessageSquareQuoteIcon', 'MessageSquareReply', 'MessageSquareReplyIcon', 'MessageSquareShare', 'MessageSquareShareIcon', 'MessageSquareText', 'MessageSquareTextIcon', 'MessageSquareWarning', 'MessageSquareWarningIcon', 'MessageSquareX', 'MessageSquareXIcon', 'MessagesSquare', 'MessagesSquareIcon', 'Mic', 'Mic2', 'Mic2Icon', 'MicIcon', 'MicOff', 'MicOffIcon', 'MicVocal', 'MicVocalIcon', 'Microchip', 'MicrochipIcon', 'Microscope', 'MicroscopeIcon', 'Microwave', 'MicrowaveIcon', 'Milestone', 'MilestoneIcon', 'Milk', 'MilkIcon', 'MilkOff', 'MilkOffIcon', 'Minimize', 'Minimize2', 'Minimize2Icon', 'MinimizeIcon', 'Minus', 'MinusCircle', 'MinusCircleIcon', 'MinusIcon', 'MinusSquare', 'MinusSquareIcon', 'Monitor', 'MonitorCheck', 'MonitorCheckIcon', 'MonitorCloud', 'MonitorCloudIcon', 'MonitorCog', 'MonitorCogIcon', 'MonitorDot', 'MonitorDotIcon', 'MonitorDown', 'MonitorDownIcon', 'MonitorIcon', 'MonitorOff', 'MonitorOffIcon', 'MonitorPause', 'MonitorPauseIcon', 'MonitorPlay', 'MonitorPlayIcon', 'MonitorSmartphone', 'MonitorSmartphoneIcon', 'MonitorSpeaker', 'MonitorSpeakerIcon', 'MonitorStop', 'MonitorStopIcon', 'MonitorUp', 'MonitorUpIcon', 'MonitorX', 'MonitorXIcon', 'Moon', 'MoonIcon', 'MoonStar', 'MoonStarIcon', 'MoreHorizontal', 'MoreHorizontalIcon', 'MoreVertical', 'MoreVerticalIcon', 'Motorbike', 'MotorbikeIcon', 'Mountain', 'MountainIcon', 'MountainSnow', 'MountainSnowIcon', 'Mouse', 'MouseIcon', 'MouseOff', 'MouseOffIcon', 'MousePointer', 'MousePointer2', 'MousePointer2Icon', 'MousePointer2Off', 'MousePointer2OffIcon', 'MousePointerBan', 'MousePointerBanIcon', 'MousePointerClick', 'MousePointerClickIcon', 'MousePointerIcon', 'MousePointerSquareDashed', 'MousePointerSquareDashedIcon', 'Move', 'Move3D', 'Move3DIcon', 'Move3d', 'Move3dIcon', 'MoveDiagonal', 'MoveDiagonal2', 'MoveDiagonal2Icon', 'MoveDiagonalIcon', 'MoveDown', 'MoveDownIcon', 'MoveDownLeft', 'MoveDownLeftIcon', 'MoveDownRight', 'MoveDownRightIcon', 'MoveHorizontal', 'MoveHorizontalIcon', 'MoveIcon', 'MoveLeft', 'MoveLeftIcon', 'MoveRight', 'MoveRightIcon', 'MoveUp', 'MoveUpIcon', 'MoveUpLeft', 'MoveUpLeftIcon', 'MoveUpRight', 'MoveUpRightIcon', 'MoveVertical', 'MoveVerticalIcon', 'Music', 'Music2', 'Music2Icon', 'Music3', 'Music3Icon', 'Music4', 'Music4Icon', 'MusicIcon', 'Navigation', 'Navigation2', 'Navigation2Icon', 'Navigation2Off', 'Navigation2OffIcon', 'NavigationIcon', 'NavigationOff', 'NavigationOffIcon', 'Network', 'NetworkIcon', 'Newspaper', 'NewspaperIcon', 'Nfc', 'NfcIcon', 'NonBinary', 'NonBinaryIcon', 'Notebook', 'NotebookIcon', 'NotebookPen', 'NotebookPenIcon', 'NotebookTabs', 'NotebookTabsIcon', 'NotebookText', 'NotebookTextIcon', 'NotepadText', 'NotepadTextDashed', 'NotepadTextDashedIcon', 'NotepadTextIcon', 'Nut', 'NutIcon', 'NutOff', 'NutOffIcon', 'Octagon', 'OctagonAlert', 'OctagonAlertIcon', 'OctagonIcon', 'OctagonMinus', 'OctagonMinusIcon', 'OctagonPause', 'OctagonPauseIcon', 'OctagonX', 'OctagonXIcon', 'Omega', 'OmegaIcon', 'Option', 'OptionIcon', 'Orbit', 'OrbitIcon', 'Origami', 'OrigamiIcon', 'Outdent', 'OutdentIcon', 'Package', 'Package2', 'Package2Icon', 'PackageCheck', 'PackageCheckIcon', 'PackageIcon', 'PackageMinus', 'PackageMinusIcon', 'PackageOpen', 'PackageOpenIcon', 'PackagePlus', 'PackagePlusIcon', 'PackageSearch', 'PackageSearchIcon', 'PackageX', 'PackageXIcon', 'PaintBucket', 'PaintBucketIcon', 'PaintRoller', 'PaintRollerIcon', 'Paintbrush', 'Paintbrush2', 'Paintbrush2Icon', 'PaintbrushIcon', 'PaintbrushVertical', 'PaintbrushVerticalIcon', 'Palette', 'PaletteIcon', 'Palmtree', 'PalmtreeIcon', 'Panda', 'PandaIcon', 'PanelBottom', 'PanelBottomClose', 'PanelBottomCloseIcon', 'PanelBottomDashed', 'PanelBottomDashedIcon', 'PanelBottomIcon', 'PanelBottomInactive', 'PanelBottomInactiveIcon', 'PanelBottomOpen', 'PanelBottomOpenIcon', 'PanelLeft', 'PanelLeftClose', 'PanelLeftCloseIcon', 'PanelLeftDashed', 'PanelLeftDashedIcon', 'PanelLeftIcon', 'PanelLeftInactive', 'PanelLeftInactiveIcon', 'PanelLeftOpen', 'PanelLeftOpenIcon', 'PanelLeftRightDashed', 'PanelLeftRightDashedIcon', 'PanelRight', 'PanelRightClose', 'PanelRightCloseIcon', 'PanelRightDashed', 'PanelRightDashedIcon', 'PanelRightIcon', 'PanelRightInactive', 'PanelRightInactiveIcon', 'PanelRightOpen', 'PanelRightOpenIcon', 'PanelTop', 'PanelTopBottomDashed', 'PanelTopBottomDashedIcon', 'PanelTopClose', 'PanelTopCloseIcon', 'PanelTopDashed', 'PanelTopDashedIcon', 'PanelTopIcon', 'PanelTopInactive', 'PanelTopInactiveIcon', 'PanelTopOpen', 'PanelTopOpenIcon', 'PanelsLeftBottom', 'PanelsLeftBottomIcon', 'PanelsLeftRight', 'PanelsLeftRightIcon', 'PanelsRightBottom', 'PanelsRightBottomIcon', 'PanelsTopBottom', 'PanelsTopBottomIcon', 'PanelsTopLeft', 'PanelsTopLeftIcon', 'Paperclip', 'PaperclipIcon', 'Parentheses', 'ParenthesesIcon', 'ParkingCircle', 'ParkingCircleIcon', 'ParkingCircleOff', 'ParkingCircleOffIcon', 'ParkingMeter', 'ParkingMeterIcon', 'ParkingSquare', 'ParkingSquareIcon', 'ParkingSquareOff', 'ParkingSquareOffIcon', 'PartyPopper', 'PartyPopperIcon', 'Pause', 'PauseCircle', 'PauseCircleIcon', 'PauseIcon', 'PauseOctagon', 'PauseOctagonIcon', 'PawPrint', 'PawPrintIcon', 'PcCase', 'PcCaseIcon', 'Pen', 'PenBox', 'PenBoxIcon', 'PenIcon', 'PenLine', 'PenLineIcon', 'PenOff', 'PenOffIcon', 'PenSquare', 'PenSquareIcon', 'PenTool', 'PenToolIcon', 'Pencil', 'PencilIcon', 'PencilLine', 'PencilLineIcon', 'PencilOff', 'PencilOffIcon', 'PencilRuler', 'PencilRulerIcon', 'Pentagon', 'PentagonIcon', 'Percent', 'PercentCircle', 'PercentCircleIcon', 'PercentDiamond', 'PercentDiamondIcon', 'PercentIcon', 'PercentSquare', 'PercentSquareIcon', 'PersonStanding', 'PersonStandingIcon', 'PhilippinePeso', 'PhilippinePesoIcon', 'Phone', 'PhoneCall', 'PhoneCallIcon', 'PhoneForwarded', 'PhoneForwardedIcon', 'PhoneIcon', 'PhoneIncoming', 'PhoneIncomingIcon', 'PhoneMissed', 'PhoneMissedIcon', 'PhoneOff', 'PhoneOffIcon', 'PhoneOutgoing', 'PhoneOutgoingIcon', 'Pi', 'PiIcon', 'PiSquare', 'PiSquareIcon', 'Piano', 'PianoIcon', 'Pickaxe', 'PickaxeIcon', 'PictureInPicture', 'PictureInPicture2', 'PictureInPicture2Icon', 'PictureInPictureIcon', 'PieChart', 'PieChartIcon', 'PiggyBank', 'PiggyBankIcon', 'Pilcrow', 'PilcrowIcon', 'PilcrowLeft', 'PilcrowLeftIcon', 'PilcrowRight', 'PilcrowRightIcon', 'PilcrowSquare', 'PilcrowSquareIcon', 'Pill', 'PillBottle', 'PillBottleIcon', 'PillIcon', 'Pin', 'PinIcon', 'PinOff', 'PinOffIcon', 'Pipette', 'PipetteIcon', 'Pizza', 'PizzaIcon', 'Plane', 'PlaneIcon', 'PlaneLanding', 'PlaneLandingIcon', 'PlaneTakeoff', 'PlaneTakeoffIcon', 'Play', 'PlayCircle', 'PlayCircleIcon', 'PlayIcon', 'PlaySquare', 'PlaySquareIcon', 'Plug', 'Plug2', 'Plug2Icon', 'PlugIcon', 'PlugZap', 'PlugZap2', 'PlugZap2Icon', 'PlugZapIcon', 'Plus', 'PlusCircle', 'PlusCircleIcon', 'PlusIcon', 'PlusSquare', 'PlusSquareIcon', 'Pocket', 'PocketIcon', 'PocketKnife', 'PocketKnifeIcon', 'Podcast', 'PodcastIcon', 'Pointer', 'PointerIcon', 'PointerOff', 'PointerOffIcon', 'Popcorn', 'PopcornIcon', 'Popsicle', 'PopsicleIcon', 'PoundSterling', 'PoundSterlingIcon', 'Power', 'PowerCircle', 'PowerCircleIcon', 'PowerIcon', 'PowerOff', 'PowerOffIcon', 'PowerSquare', 'PowerSquareIcon', 'Presentation', 'PresentationIcon', 'Printer', 'PrinterCheck', 'PrinterCheckIcon', 'PrinterIcon', 'PrinterX', 'PrinterXIcon', 'Projector', 'ProjectorIcon', 'Proportions', 'ProportionsIcon', 'Puzzle', 'PuzzleIcon', 'Pyramid', 'PyramidIcon', 'QrCode', 'QrCodeIcon', 'Quote', 'QuoteIcon', 'Rabbit', 'RabbitIcon', 'Radar', 'RadarIcon', 'Radiation', 'RadiationIcon', 'Radical', 'RadicalIcon', 'Radio', 'RadioIcon', 'RadioReceiver', 'RadioReceiverIcon', 'RadioTower', 'RadioTowerIcon', 'Radius', 'RadiusIcon', 'RailSymbol', 'RailSymbolIcon', 'Rainbow', 'RainbowIcon', 'Rat', 'RatIcon', 'Ratio', 'RatioIcon', 'Receipt', 'ReceiptCent', 'ReceiptCentIcon', 'ReceiptEuro', 'ReceiptEuroIcon', 'ReceiptIcon', 'ReceiptIndianRupee', 'ReceiptIndianRupeeIcon', 'ReceiptJapaneseYen', 'ReceiptJapaneseYenIcon', 'ReceiptPoundSterling', 'ReceiptPoundSterlingIcon', 'ReceiptRussianRuble', 'ReceiptRussianRubleIcon', 'ReceiptSwissFranc', 'ReceiptSwissFrancIcon', 'ReceiptText', 'ReceiptTextIcon', 'ReceiptTurkishLira', 'ReceiptTurkishLiraIcon', 'RectangleCircle', 'RectangleCircleIcon', 'RectangleEllipsis', 'RectangleEllipsisIcon', 'RectangleGoggles', 'RectangleGogglesIcon', 'RectangleHorizontal', 'RectangleHorizontalIcon', 'RectangleVertical', 'RectangleVerticalIcon', 'Recycle', 'RecycleIcon', 'Redo', 'Redo2', 'Redo2Icon', 'RedoDot', 'RedoDotIcon', 'RedoIcon', 'RefreshCcw', 'RefreshCcwDot', 'RefreshCcwDotIcon', 'RefreshCcwIcon', 'RefreshCw', 'RefreshCwIcon', 'RefreshCwOff', 'RefreshCwOffIcon', 'Refrigerator', 'RefrigeratorIcon', 'Regex', 'RegexIcon', 'RemoveFormatting', 'RemoveFormattingIcon', 'Repeat', 'Repeat1', 'Repeat1Icon', 'Repeat2', 'Repeat2Icon', 'RepeatIcon', 'Replace', 'ReplaceAll', 'ReplaceAllIcon', 'ReplaceIcon', 'Reply', 'ReplyAll', 'ReplyAllIcon', 'ReplyIcon', 'Rewind', 'RewindIcon', 'Ribbon', 'RibbonIcon', 'Rocket', 'RocketIcon', 'RockingChair', 'RockingChairIcon', 'RollerCoaster', 'RollerCoasterIcon', 'Rose', 'RoseIcon', 'Rotate3D', 'Rotate3DIcon', 'Rotate3d', 'Rotate3dIcon', 'RotateCcw', 'RotateCcwIcon', 'RotateCcwKey', 'RotateCcwKeyIcon', 'RotateCcwSquare', 'RotateCcwSquareIcon', 'RotateCw', 'RotateCwIcon', 'RotateCwSquare', 'RotateCwSquareIcon', 'Route', 'RouteIcon', 'RouteOff', 'RouteOffIcon', 'Router', 'RouterIcon', 'Rows', 'Rows2', 'Rows2Icon', 'Rows3', 'Rows3Icon', 'Rows4', 'Rows4Icon', 'RowsIcon', 'Rss', 'RssIcon', 'Ruler', 'RulerDimensionLine', 'RulerDimensionLineIcon', 'RulerIcon', 'RussianRuble', 'RussianRubleIcon', 'Sailboat', 'SailboatIcon', 'Salad', 'SaladIcon', 'Sandwich', 'SandwichIcon', 'Satellite', 'SatelliteDish', 'SatelliteDishIcon', 'SatelliteIcon', 'SaudiRiyal', 'SaudiRiyalIcon', 'Save', 'SaveAll', 'SaveAllIcon', 'SaveIcon', 'SaveOff', 'SaveOffIcon', 'Scale', 'Scale3D', 'Scale3DIcon', 'Scale3d', 'Scale3dIcon', 'ScaleIcon', 'Scaling', 'ScalingIcon', 'Scan', 'ScanBarcode', 'ScanBarcodeIcon', 'ScanEye', 'ScanEyeIcon', 'ScanFace', 'ScanFaceIcon', 'ScanHeart', 'ScanHeartIcon', 'ScanIcon', 'ScanLine', 'ScanLineIcon', 'ScanQrCode', 'ScanQrCodeIcon', 'ScanSearch', 'ScanSearchIcon', 'ScanText', 'ScanTextIcon', 'ScatterChart', 'ScatterChartIcon', 'School', 'School2', 'School2Icon', 'SchoolIcon', 'Scissors', 'ScissorsIcon', 'ScissorsLineDashed', 'ScissorsLineDashedIcon', 'ScissorsSquare', 'ScissorsSquareDashedBottom', 'ScissorsSquareDashedBottomIcon', 'ScissorsSquareIcon', 'Scooter', 'ScooterIcon', 'ScreenShare', 'ScreenShareIcon', 'ScreenShareOff', 'ScreenShareOffIcon', 'Scroll', 'ScrollIcon', 'ScrollText', 'ScrollTextIcon', 'Search', 'SearchAlert', 'SearchAlertIcon', 'SearchCheck', 'SearchCheckIcon', 'SearchCode', 'SearchCodeIcon', 'SearchIcon', 'SearchSlash', 'SearchSlashIcon', 'SearchX', 'SearchXIcon', 'Section', 'SectionIcon', 'Send', 'SendHorizonal', 'SendHorizonalIcon', 'SendHorizontal', 'SendHorizontalIcon', 'SendIcon', 'SendToBack', 'SendToBackIcon', 'SeparatorHorizontal', 'SeparatorHorizontalIcon', 'SeparatorVertical', 'SeparatorVerticalIcon', 'Server', 'ServerCog', 'ServerCogIcon', 'ServerCrash', 'ServerCrashIcon', 'ServerIcon', 'ServerOff', 'ServerOffIcon', 'Settings', 'Settings2', 'Settings2Icon', 'SettingsIcon', 'Shapes', 'ShapesIcon', 'Share', 'Share2', 'Share2Icon', 'ShareIcon', 'Sheet', 'SheetIcon', 'Shell', 'ShellIcon', 'Shield', 'ShieldAlert', 'ShieldAlertIcon', 'ShieldBan', 'ShieldBanIcon', 'ShieldCheck', 'ShieldCheckIcon', 'ShieldClose', 'ShieldCloseIcon', 'ShieldEllipsis', 'ShieldEllipsisIcon', 'ShieldHalf', 'ShieldHalfIcon', 'ShieldIcon', 'ShieldMinus', 'ShieldMinusIcon', 'ShieldOff', 'ShieldOffIcon', 'ShieldPlus', 'ShieldPlusIcon', 'ShieldQuestion', 'ShieldQuestionIcon', 'ShieldQuestionMark', 'ShieldQuestionMarkIcon', 'ShieldUser', 'ShieldUserIcon', 'ShieldX', 'ShieldXIcon', 'Ship', 'ShipIcon', 'ShipWheel', 'ShipWheelIcon', 'Shirt', 'ShirtIcon', 'ShoppingBag', 'ShoppingBagIcon', 'ShoppingBasket', 'ShoppingBasketIcon', 'ShoppingCart', 'ShoppingCartIcon', 'Shovel', 'ShovelIcon', 'ShowerHead', 'ShowerHeadIcon', 'Shredder', 'ShredderIcon', 'Shrimp', 'ShrimpIcon', 'Shrink', 'ShrinkIcon', 'Shrub', 'ShrubIcon', 'Shuffle', 'ShuffleIcon', 'Sidebar', 'SidebarClose', 'SidebarCloseIcon', 'SidebarIcon', 'SidebarOpen', 'SidebarOpenIcon', 'Sigma', 'SigmaIcon', 'SigmaSquare', 'SigmaSquareIcon', 'Signal', 'SignalHigh', 'SignalHighIcon', 'SignalIcon', 'SignalLow', 'SignalLowIcon', 'SignalMedium', 'SignalMediumIcon', 'SignalZero', 'SignalZeroIcon', 'Signature', 'SignatureIcon', 'Signpost', 'SignpostBig', 'SignpostBigIcon', 'SignpostIcon', 'Siren', 'SirenIcon', 'SkipBack', 'SkipBackIcon', 'SkipForward', 'SkipForwardIcon', 'Skull', 'SkullIcon', 'Slack', 'SlackIcon', 'Slash', 'SlashIcon', 'SlashSquare', 'SlashSquareIcon', 'Slice', 'SliceIcon', 'Sliders', 'SlidersHorizontal', 'SlidersHorizontalIcon', 'SlidersIcon', 'SlidersVertical', 'SlidersVerticalIcon', 'Smartphone', 'SmartphoneCharging', 'SmartphoneChargingIcon', 'SmartphoneIcon', 'SmartphoneNfc', 'SmartphoneNfcIcon', 'Smile', 'SmileIcon', 'SmilePlus', 'SmilePlusIcon', 'Snail', 'SnailIcon', 'Snowflake', 'SnowflakeIcon', 'SoapDispenserDroplet', 'SoapDispenserDropletIcon', 'Sofa', 'SofaIcon', 'SolarPanel', 'SolarPanelIcon', 'SortAsc', 'SortAscIcon', 'SortDesc', 'SortDescIcon', 'Soup', 'SoupIcon', 'Space', 'SpaceIcon', 'Spade', 'SpadeIcon', 'Sparkle', 'SparkleIcon', 'Sparkles', 'SparklesIcon', 'Speaker', 'SpeakerIcon', 'Speech', 'SpeechIcon', 'SpellCheck', 'SpellCheck2', 'SpellCheck2Icon', 'SpellCheckIcon', 'Spline', 'SplineIcon', 'SplinePointer', 'SplinePointerIcon', 'Split', 'SplitIcon', 'SplitSquareHorizontal', 'SplitSquareHorizontalIcon', 'SplitSquareVertical', 'SplitSquareVerticalIcon', 'Spool', 'SpoolIcon', 'Spotlight', 'SpotlightIcon', 'SprayCan', 'SprayCanIcon', 'Sprout', 'SproutIcon', 'Square', 'SquareActivity', 'SquareActivityIcon', 'SquareArrowDown', 'SquareArrowDownIcon', 'SquareArrowDownLeft', 'SquareArrowDownLeftIcon', 'SquareArrowDownRight', 'SquareArrowDownRightIcon', 'SquareArrowLeft', 'SquareArrowLeftIcon', 'SquareArrowOutDownLeft', 'SquareArrowOutDownLeftIcon', 'SquareArrowOutDownRight', 'SquareArrowOutDownRightIcon', 'SquareArrowOutUpLeft', 'SquareArrowOutUpLeftIcon', 'SquareArrowOutUpRight', 'SquareArrowOutUpRightIcon', 'SquareArrowRight', 'SquareArrowRightIcon', 'SquareArrowUp', 'SquareArrowUpIcon', 'SquareArrowUpLeft', 'SquareArrowUpLeftIcon', 'SquareArrowUpRight', 'SquareArrowUpRightIcon', 'SquareAsterisk', 'SquareAsteriskIcon', 'SquareBottomDashedScissors', 'SquareBottomDashedScissorsIcon', 'SquareChartGantt', 'SquareChartGanttIcon', 'SquareCheck', 'SquareCheckBig', 'SquareCheckBigIcon', 'SquareCheckIcon', 'SquareChevronDown', 'SquareChevronDownIcon', 'SquareChevronLeft', 'SquareChevronLeftIcon', 'SquareChevronRight', 'SquareChevronRightIcon', 'SquareChevronUp', 'SquareChevronUpIcon', 'SquareCode', 'SquareCodeIcon', 'SquareDashed', 'SquareDashedBottom', 'SquareDashedBottomCode', 'SquareDashedBottomCodeIcon', 'SquareDashedBottomIcon', 'SquareDashedIcon', 'SquareDashedKanban', 'SquareDashedKanbanIcon', 'SquareDashedMousePointer', 'SquareDashedMousePointerIcon', 'SquareDashedTopSolid', 'SquareDashedTopSolidIcon', 'SquareDivide', 'SquareDivideIcon', 'SquareDot', 'SquareDotIcon', 'SquareEqual', 'SquareEqualIcon', 'SquareFunction', 'SquareFunctionIcon', 'SquareGanttChart', 'SquareGanttChartIcon', 'SquareIcon', 'SquareKanban', 'SquareKanbanIcon', 'SquareLibrary', 'SquareLibraryIcon', 'SquareM', 'SquareMIcon', 'SquareMenu', 'SquareMenuIcon', 'SquareMinus', 'SquareMinusIcon', 'SquareMousePointer', 'SquareMousePointerIcon', 'SquareParking', 'SquareParkingIcon', 'SquareParkingOff', 'SquareParkingOffIcon', 'SquarePause', 'SquarePauseIcon', 'SquarePen', 'SquarePenIcon', 'SquarePercent', 'SquarePercentIcon', 'SquarePi', 'SquarePiIcon', 'SquarePilcrow', 'SquarePilcrowIcon', 'SquarePlay', 'SquarePlayIcon', 'SquarePlus', 'SquarePlusIcon', 'SquarePower', 'SquarePowerIcon', 'SquareRadical', 'SquareRadicalIcon', 'SquareRoundCorner', 'SquareRoundCornerIcon', 'SquareScissors', 'SquareScissorsIcon', 'SquareSigma', 'SquareSigmaIcon', 'SquareSlash', 'SquareSlashIcon', 'SquareSplitHorizontal', 'SquareSplitHorizontalIcon', 'SquareSplitVertical', 'SquareSplitVerticalIcon', 'SquareSquare', 'SquareSquareIcon', 'SquareStack', 'SquareStackIcon', 'SquareStar', 'SquareStarIcon', 'SquareStop', 'SquareStopIcon', 'SquareTerminal', 'SquareTerminalIcon', 'SquareUser', 'SquareUserIcon', 'SquareUserRound', 'SquareUserRoundIcon', 'SquareX', 'SquareXIcon', 'SquaresExclude', 'SquaresExcludeIcon', 'SquaresIntersect', 'SquaresIntersectIcon', 'SquaresSubtract', 'SquaresSubtractIcon', 'SquaresUnite', 'SquaresUniteIcon', 'Squircle', 'SquircleDashed', 'SquircleDashedIcon', 'SquircleIcon', 'Squirrel', 'SquirrelIcon', 'Stamp', 'StampIcon', 'Star', 'StarHalf', 'StarHalfIcon', 'StarIcon', 'StarOff', 'StarOffIcon', 'Stars', 'StarsIcon', 'StepBack', 'StepBackIcon', 'StepForward', 'StepForwardIcon', 'Stethoscope', 'StethoscopeIcon', 'Sticker', 'StickerIcon', 'StickyNote', 'StickyNoteIcon', 'Stone', 'StoneIcon', 'StopCircle', 'StopCircleIcon', 'Store', 'StoreIcon', 'StretchHorizontal', 'StretchHorizontalIcon', 'StretchVertical', 'StretchVerticalIcon', 'Strikethrough', 'StrikethroughIcon', 'Subscript', 'SubscriptIcon', 'Subtitles', 'SubtitlesIcon', 'Sun', 'SunDim', 'SunDimIcon', 'SunIcon', 'SunMedium', 'SunMediumIcon', 'SunMoon', 'SunMoonIcon', 'SunSnow', 'SunSnowIcon', 'Sunrise', 'SunriseIcon', 'Sunset', 'SunsetIcon', 'Superscript', 'SuperscriptIcon', 'SwatchBook', 'SwatchBookIcon', 'SwissFranc', 'SwissFrancIcon', 'SwitchCamera', 'SwitchCameraIcon', 'Sword', 'SwordIcon', 'Swords', 'SwordsIcon', 'Syringe', 'SyringeIcon', 'Table', 'Table2', 'Table2Icon', 'TableCellsMerge', 'TableCellsMergeIcon', 'TableCellsSplit', 'TableCellsSplitIcon', 'TableColumnsSplit', 'TableColumnsSplitIcon', 'TableConfig', 'TableConfigIcon', 'TableIcon', 'TableOfContents', 'TableOfContentsIcon', 'TableProperties', 'TablePropertiesIcon', 'TableRowsSplit', 'TableRowsSplitIcon', 'Tablet', 'TabletIcon', 'TabletSmartphone', 'TabletSmartphoneIcon', 'Tablets', 'TabletsIcon', 'Tag', 'TagIcon', 'Tags', 'TagsIcon', 'Tally1', 'Tally1Icon', 'Tally2', 'Tally2Icon', 'Tally3', 'Tally3Icon', 'Tally4', 'Tally4Icon', 'Tally5', 'Tally5Icon', 'Tangent', 'TangentIcon', 'Target', 'TargetIcon', 'Telescope', 'TelescopeIcon', 'Tent', 'TentIcon', 'TentTree', 'TentTreeIcon', 'Terminal', 'TerminalIcon', 'TerminalSquare', 'TerminalSquareIcon', 'TestTube', 'TestTube2', 'TestTube2Icon', 'TestTubeDiagonal', 'TestTubeDiagonalIcon', 'TestTubeIcon', 'TestTubes', 'TestTubesIcon', 'Text', 'TextAlignCenter', 'TextAlignCenterIcon', 'TextAlignEnd', 'TextAlignEndIcon', 'TextAlignJustify', 'TextAlignJustifyIcon', 'TextAlignStart', 'TextAlignStartIcon', 'TextCursor', 'TextCursorIcon', 'TextCursorInput', 'TextCursorInputIcon', 'TextIcon', 'TextInitial', 'TextInitialIcon', 'TextQuote', 'TextQuoteIcon', 'TextSearch', 'TextSearchIcon', 'TextSelect', 'TextSelectIcon', 'TextSelection', 'TextSelectionIcon', 'TextWrap', 'TextWrapIcon', 'Theater', 'TheaterIcon', 'Thermometer', 'ThermometerIcon', 'ThermometerSnowflake', 'ThermometerSnowflakeIcon', 'ThermometerSun', 'ThermometerSunIcon', 'ThumbsDown', 'ThumbsDownIcon', 'ThumbsUp', 'ThumbsUpIcon', 'Ticket', 'TicketCheck', 'TicketCheckIcon', 'TicketIcon', 'TicketMinus', 'TicketMinusIcon', 'TicketPercent', 'TicketPercentIcon', 'TicketPlus', 'TicketPlusIcon', 'TicketSlash', 'TicketSlashIcon', 'TicketX', 'TicketXIcon', 'Tickets', 'TicketsIcon', 'TicketsPlane', 'TicketsPlaneIcon', 'Timer', 'TimerIcon', 'TimerOff', 'TimerOffIcon', 'TimerReset', 'TimerResetIcon', 'ToggleLeft', 'ToggleLeftIcon', 'ToggleRight', 'ToggleRightIcon', 'Toilet', 'ToiletIcon', 'ToolCase', 'ToolCaseIcon', 'Toolbox', 'ToolboxIcon', 'Tornado', 'TornadoIcon', 'Torus', 'TorusIcon', 'Touchpad', 'TouchpadIcon', 'TouchpadOff', 'TouchpadOffIcon', 'TowerControl', 'TowerControlIcon', 'ToyBrick', 'ToyBrickIcon', 'Tractor', 'TractorIcon', 'TrafficCone', 'TrafficConeIcon', 'Train', 'TrainFront', 'TrainFrontIcon', 'TrainFrontTunnel', 'TrainFrontTunnelIcon', 'TrainIcon', 'TrainTrack', 'TrainTrackIcon', 'TramFront', 'TramFrontIcon', 'Transgender', 'TransgenderIcon', 'Trash', 'Trash2', 'Trash2Icon', 'TrashIcon', 'TreeDeciduous', 'TreeDeciduousIcon', 'TreePalm', 'TreePalmIcon', 'TreePine', 'TreePineIcon', 'Trees', 'TreesIcon', 'Trello', 'TrelloIcon', 'TrendingDown', 'TrendingDownIcon', 'TrendingUp', 'TrendingUpDown', 'TrendingUpDownIcon', 'TrendingUpIcon', 'Triangle', 'TriangleAlert', 'TriangleAlertIcon', 'TriangleDashed', 'TriangleDashedIcon', 'TriangleIcon', 'TriangleRight', 'TriangleRightIcon', 'Trophy', 'TrophyIcon', 'Truck', 'TruckElectric', 'TruckElectricIcon', 'TruckIcon', 'TurkishLira', 'TurkishLiraIcon', 'Turntable', 'TurntableIcon', 'Turtle', 'TurtleIcon', 'Tv', 'Tv2', 'Tv2Icon', 'TvIcon', 'TvMinimal', 'TvMinimalIcon', 'TvMinimalPlay', 'TvMinimalPlayIcon', 'Twitch', 'TwitchIcon', 'Twitter', 'TwitterIcon', 'Type', 'TypeIcon', 'TypeOutline', 'TypeOutlineIcon', 'Umbrella', 'UmbrellaIcon', 'UmbrellaOff', 'UmbrellaOffIcon', 'Underline', 'UnderlineIcon', 'Undo', 'Undo2', 'Undo2Icon', 'UndoDot', 'UndoDotIcon', 'UndoIcon', 'UnfoldHorizontal', 'UnfoldHorizontalIcon', 'UnfoldVertical', 'UnfoldVerticalIcon', 'Ungroup', 'UngroupIcon', 'University', 'UniversityIcon', 'Unlink', 'Unlink2', 'Unlink2Icon', 'UnlinkIcon', 'Unlock', 'UnlockIcon', 'UnlockKeyhole', 'UnlockKeyholeIcon', 'Unplug', 'UnplugIcon', 'Upload', 'UploadCloud', 'UploadCloudIcon', 'UploadIcon', 'Usb', 'UsbIcon', 'User', 'User2', 'User2Icon', 'UserCheck', 'UserCheck2', 'UserCheck2Icon', 'UserCheckIcon', 'UserCircle', 'UserCircle2', 'UserCircle2Icon', 'UserCircleIcon', 'UserCog', 'UserCog2', 'UserCog2Icon', 'UserCogIcon', 'UserIcon', 'UserLock', 'UserLockIcon', 'UserMinus', 'UserMinus2', 'UserMinus2Icon', 'UserMinusIcon', 'UserPen', 'UserPenIcon', 'UserPlus', 'UserPlus2', 'UserPlus2Icon', 'UserPlusIcon', 'UserRound', 'UserRoundCheck', 'UserRoundCheckIcon', 'UserRoundCog', 'UserRoundCogIcon', 'UserRoundIcon', 'UserRoundMinus', 'UserRoundMinusIcon', 'UserRoundPen', 'UserRoundPenIcon', 'UserRoundPlus', 'UserRoundPlusIcon', 'UserRoundSearch', 'UserRoundSearchIcon', 'UserRoundX', 'UserRoundXIcon', 'UserSearch', 'UserSearchIcon', 'UserSquare', 'UserSquare2', 'UserSquare2Icon', 'UserSquareIcon', 'UserStar', 'UserStarIcon', 'UserX', 'UserX2', 'UserX2Icon', 'UserXIcon', 'Users', 'Users2', 'Users2Icon', 'UsersIcon', 'UsersRound', 'UsersRoundIcon', 'Utensils', 'UtensilsCrossed', 'UtensilsCrossedIcon', 'UtensilsIcon', 'UtilityPole', 'UtilityPoleIcon', 'Van', 'VanIcon', 'Variable', 'VariableIcon', 'Vault', 'VaultIcon', 'VectorSquare', 'VectorSquareIcon', 'Vegan', 'VeganIcon', 'VenetianMask', 'VenetianMaskIcon', 'Venus', 'VenusAndMars', 'VenusAndMarsIcon', 'VenusIcon', 'Verified', 'VerifiedIcon', 'Vibrate', 'VibrateIcon', 'VibrateOff', 'VibrateOffIcon', 'Video', 'VideoIcon', 'VideoOff', 'VideoOffIcon', 'Videotape', 'VideotapeIcon', 'View', 'ViewIcon', 'Voicemail', 'VoicemailIcon', 'Volleyball', 'VolleyballIcon', 'Volume', 'Volume1', 'Volume1Icon', 'Volume2', 'Volume2Icon', 'VolumeIcon', 'VolumeOff', 'VolumeOffIcon', 'VolumeX', 'VolumeXIcon', 'Vote', 'VoteIcon', 'Wallet', 'Wallet2', 'Wallet2Icon', 'WalletCards', 'WalletCardsIcon', 'WalletIcon', 'WalletMinimal', 'WalletMinimalIcon', 'Wallpaper', 'WallpaperIcon', 'Wand', 'Wand2', 'Wand2Icon', 'WandIcon', 'WandSparkles', 'WandSparklesIcon', 'Warehouse', 'WarehouseIcon', 'WashingMachine', 'WashingMachineIcon', 'Watch', 'WatchIcon', 'Waves', 'WavesArrowDown', 'WavesArrowDownIcon', 'WavesArrowUp', 'WavesArrowUpIcon', 'WavesIcon', 'WavesLadder', 'WavesLadderIcon', 'Waypoints', 'WaypointsIcon', 'Webcam', 'WebcamIcon', 'Webhook', 'WebhookIcon', 'WebhookOff', 'WebhookOffIcon', 'Weight', 'WeightIcon', 'WeightTilde', 'WeightTildeIcon', 'Wheat', 'WheatIcon', 'WheatOff', 'WheatOffIcon', 'WholeWord', 'WholeWordIcon', 'Wifi', 'WifiCog', 'WifiCogIcon', 'WifiHigh', 'WifiHighIcon', 'WifiIcon', 'WifiLow', 'WifiLowIcon', 'WifiOff', 'WifiOffIcon', 'WifiPen', 'WifiPenIcon', 'WifiSync', 'WifiSyncIcon', 'WifiZero', 'WifiZeroIcon', 'Wind', 'WindArrowDown', 'WindArrowDownIcon', 'WindIcon', 'Wine', 'WineIcon', 'WineOff', 'WineOffIcon', 'Workflow', 'WorkflowIcon', 'Worm', 'WormIcon', 'WrapText', 'WrapTextIcon', 'Wrench', 'WrenchIcon', 'X', 'XCircle', 'XCircleIcon', 'XIcon', 'XOctagon', 'XOctagonIcon', 'XSquare', 'XSquareIcon', 'Youtube', 'YoutubeIcon', 'Zap', 'ZapIcon', 'ZapOff', 'ZapOffIcon', 'ZoomIn', 'ZoomInIcon', 'ZoomOut', 'ZoomOutIcon', 'createLucideIcon', 'default', 'icons');
  CREATE TYPE "public"."enum__pages_v_blocks_embed_code_width_mode" AS ENUM('content', 'full', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_feature_highlights_spacing_preset" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_feature_highlights_background_theme" AS ENUM('default', 'light', 'dark', 'primary');
  CREATE TYPE "public"."enum__pages_v_blocks_feature_highlights_content_alignment" AS ENUM('start', 'center', 'end');
  CREATE TYPE "public"."enum__pages_v_blocks_text_section_cta_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_text_section_cta_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_text_section_text_alignment" AS ENUM('start', 'center', 'end');
  CREATE TYPE "public"."enum__pages_v_blocks_text_section_spacing_preset" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_text_section_background_theme" AS ENUM('default', 'light', 'dark', 'primary');
  CREATE TYPE "public"."enum__pages_v_blocks_text_section_content_alignment" AS ENUM('start', 'center', 'end');
  CREATE TYPE "public"."enum__pages_v_blocks_image_content_cta_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_image_content_cta_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_image_content_text_placement" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum__pages_v_blocks_image_content_spacing_preset" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_image_content_background_theme" AS ENUM('default', 'light', 'dark', 'primary');
  CREATE TYPE "public"."enum__pages_v_blocks_image_content_content_alignment" AS ENUM('start', 'center', 'end');
  CREATE TYPE "public"."enum__pages_v_blocks_faq_text_alignment" AS ENUM('start', 'center', 'end');
  CREATE TYPE "public"."enum__pages_v_blocks_faq_spacing_preset" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_faq_background_theme" AS ENUM('default', 'light', 'dark', 'primary');
  CREATE TYPE "public"."enum__pages_v_blocks_faq_content_alignment" AS ENUM('start', 'center', 'end');
  CREATE TYPE "public"."enum__pages_v_blocks_faq_grid_spacing_preset" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_faq_grid_background_theme" AS ENUM('default', 'light', 'dark', 'primary');
  CREATE TYPE "public"."enum__pages_v_blocks_faq_grid_content_alignment" AS ENUM('start', 'center', 'end');
  CREATE TYPE "public"."enum__pages_v_blocks_testimonial1_spacing_preset" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_testimonial1_background_theme" AS ENUM('default', 'light', 'dark', 'primary');
  CREATE TYPE "public"."enum__pages_v_blocks_testimonial1_content_alignment" AS ENUM('start', 'center', 'end');
  CREATE TYPE "public"."enum__pages_v_blocks_testimonial3_cta_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_testimonial3_cta_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_testimonial3_spacing_preset" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_testimonial3_background_theme" AS ENUM('default', 'light', 'dark', 'primary');
  CREATE TYPE "public"."enum__pages_v_blocks_testimonial3_content_alignment" AS ENUM('start', 'center', 'end');
  CREATE TYPE "public"."enum__pages_v_blocks_testimonial4_testimonials_rating" AS ENUM('5', '4.5', '4', '3.5', '3');
  CREATE TYPE "public"."enum__pages_v_blocks_testimonial4_cta_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_testimonial4_cta_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_testimonial4_spacing_preset" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_testimonial4_background_theme" AS ENUM('default', 'light', 'dark', 'primary');
  CREATE TYPE "public"."enum__pages_v_blocks_testimonial4_content_alignment" AS ENUM('start', 'center', 'end');
  CREATE TYPE "public"."enum__pages_v_blocks_testimonial_grid_spacing_preset" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_testimonial_grid_background_theme" AS ENUM('default', 'light', 'dark', 'primary');
  CREATE TYPE "public"."enum__pages_v_blocks_testimonial_grid_content_alignment" AS ENUM('start', 'center', 'end');
  CREATE TYPE "public"."enum__pages_v_blocks_pricing1_plans_cta_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_pricing1_plans_cta_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_pricing1_spacing_preset" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_pricing1_background_theme" AS ENUM('default', 'light', 'dark', 'primary');
  CREATE TYPE "public"."enum__pages_v_blocks_pricing1_content_alignment" AS ENUM('start', 'center', 'end');
  CREATE TYPE "public"."enum__pages_v_blocks_logo_carousel_populate_by" AS ENUM('collection', 'selection');
  CREATE TYPE "public"."enum__pages_v_blocks_logo_carousel_collection_type" AS ENUM('clients', 'institutes', 'technologies');
  CREATE TYPE "public"."enum__pages_v_blocks_logo_carousel_logo_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum__pages_v_version_hero_type" AS ENUM('none', 'highImpact', 'mediumImpact', 'lowImpact');
  CREATE TYPE "public"."enum__pages_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_posts_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__posts_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_projects_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__projects_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_institutes_type" AS ENUM('university', 'certification', 'bootcamp', 'other');
  CREATE TYPE "public"."enum_technologies_category" AS ENUM('frontend-framework', 'backend-runtime', 'language', 'database', 'cloud', 'web-services', 'dev-tools', 'scripting', 'ui-ux', 'graphic-design', 'cad', 'microcontroller', 'sbc', 'embedded', 'electronics-design', 'iot', 'protocol', 'wireless', '3d-printing', 'cnc', 'manufacturing', 'material', 'other');
  CREATE TYPE "public"."enum_users_role" AS ENUM('superadmin', 'admin', 'user');
  CREATE TYPE "public"."enum_redirects_to_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_forms_confirmation_type" AS ENUM('message', 'redirect');
  CREATE TYPE "public"."enum_payload_jobs_log_task_slug" AS ENUM('inline', 'schedulePublish');
  CREATE TYPE "public"."enum_payload_jobs_log_state" AS ENUM('failed', 'succeeded');
  CREATE TYPE "public"."enum_payload_jobs_task_slug" AS ENUM('inline', 'schedulePublish');
  CREATE TYPE "public"."enum_header_nav_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_header_buttons_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_header_buttons_style" AS ENUM('default', 'primary', 'secondary', 'outline', 'link');
  CREATE TYPE "public"."enum_header_buttons_icon" AS ENUM('none', 'google', 'email', 'search', 'user', 'arrow-right', 'external-link', 'chevron-right');
  CREATE TYPE "public"."enum_header_buttons_icon_position" AS ENUM('before', 'after', 'only');
  CREATE TYPE "public"."enum_header_logo_logo_mode" AS ENUM('simple', 'lightDark');
  CREATE TYPE "public"."enum_header_header_style" AS ENUM('default', 'modern', 'minimal', 'fullWidth');
  CREATE TYPE "public"."enum_header_background_type" AS ENUM('transparent', 'semi-transparent', 'solid');
  CREATE TYPE "public"."enum_header_text_color" AS ENUM('auto', 'primary', 'custom');
  CREATE TYPE "public"."enum_header_menu_position" AS ENUM('left', 'center', 'right');
  CREATE TYPE "public"."enum_footer_nav_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_logo_logo_mode" AS ENUM('simple', 'lightDark');
  CREATE TYPE "public"."enum_site_settings_legal_policies_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_site_settings_social_media_platforms_platform" AS ENUM('facebook', 'twitter', 'instagram', 'linkedin', 'youtube', 'tiktok', 'github', 'discord');
  CREATE TYPE "public"."enum_site_settings_branding_logo_mode" AS ENUM('simple', 'lightDark');
  CREATE TYPE "public"."enum_site_settings_branding_admin_logo_mode" AS ENUM('simple', 'lightDark');
  CREATE TYPE "public"."enum_site_settings_theme_settings_theme_mode" AS ENUM('light-only', 'dark-only', 'both');
  CREATE TYPE "public"."enum_site_settings_theme_settings_default_theme" AS ENUM('light', 'dark', 'system');
  CREATE TABLE "pages_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_hero_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_hero_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "pages_blocks_cta_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_cta_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_cta_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "pages_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_content_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"size" "enum_pages_blocks_content_columns_size" DEFAULT 'oneThird',
  	"rich_text" jsonb,
  	"enable_link" boolean,
  	"link_type" "enum_pages_blocks_content_columns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_content_columns_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "pages_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_cta_card" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"cta_primary_type" "enum_pages_blocks_cta_card_cta_primary_type" DEFAULT 'reference',
  	"cta_primary_new_tab" boolean,
  	"cta_primary_url" varchar,
  	"cta_primary_label" varchar,
  	"cta_primary_appearance" "enum_pages_blocks_cta_card_cta_primary_appearance" DEFAULT 'default',
  	"cta_secondary_type" "enum_pages_blocks_cta_card_cta_secondary_type" DEFAULT 'reference',
  	"cta_secondary_new_tab" boolean,
  	"cta_secondary_url" varchar,
  	"cta_secondary_label" varchar,
  	"cta_secondary_appearance" "enum_pages_blocks_cta_card_cta_secondary_appearance" DEFAULT 'default',
  	"variant" "enum_pages_blocks_cta_card_variant" DEFAULT 'muted',
  	"text_alignment" "enum_pages_blocks_cta_card_text_alignment" DEFAULT 'center',
  	"spacing_preset" "enum_pages_blocks_cta_card_spacing_preset" DEFAULT 'medium',
  	"background_theme" "enum_pages_blocks_cta_card_background_theme" DEFAULT 'default',
  	"content_alignment" "enum_pages_blocks_cta_card_content_alignment" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_cta_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"cta_primary_type" "enum_pages_blocks_cta_section_cta_primary_type" DEFAULT 'reference',
  	"cta_primary_new_tab" boolean,
  	"cta_primary_url" varchar,
  	"cta_primary_label" varchar,
  	"cta_primary_appearance" "enum_pages_blocks_cta_section_cta_primary_appearance" DEFAULT 'default',
  	"cta_secondary_type" "enum_pages_blocks_cta_section_cta_secondary_type" DEFAULT 'reference',
  	"cta_secondary_new_tab" boolean,
  	"cta_secondary_url" varchar,
  	"cta_secondary_label" varchar,
  	"cta_secondary_appearance" "enum_pages_blocks_cta_section_cta_secondary_appearance" DEFAULT 'default',
  	"text_alignment" "enum_pages_blocks_cta_section_text_alignment" DEFAULT 'center',
  	"spacing_preset" "enum_pages_blocks_cta_section_spacing_preset" DEFAULT 'medium',
  	"background_theme" "enum_pages_blocks_cta_section_background_theme" DEFAULT 'default',
  	"content_alignment" "enum_pages_blocks_cta_section_content_alignment" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_media_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"width_type" "enum_pages_blocks_media_block_width_type" DEFAULT 'max',
  	"width_preset" "enum_pages_blocks_media_block_width_preset" DEFAULT 'custom',
  	"width_max_width" numeric DEFAULT 896,
  	"width_alignment" "enum_pages_blocks_media_block_width_alignment" DEFAULT 'center',
  	"aspect_ratio" "enum_pages_blocks_media_block_aspect_ratio" DEFAULT 'auto',
  	"shadow" "enum_pages_blocks_media_block_shadow" DEFAULT 'none',
  	"show_border" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_archive" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"intro_content" jsonb,
  	"populate_by" "enum_pages_blocks_archive_populate_by" DEFAULT 'collection',
  	"relation_to" "enum_pages_blocks_archive_relation_to" DEFAULT 'posts',
  	"limit" numeric DEFAULT 10,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_form_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"form_id" integer,
  	"enable_intro" boolean,
  	"intro_content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_signup_c_t_a_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_pages_blocks_signup_c_t_a_buttons_type" DEFAULT 'reference',
  	"url" varchar,
  	"label" varchar,
  	"style" "enum_pages_blocks_signup_c_t_a_buttons_style" DEFAULT 'primary',
  	"icon" "enum_pages_blocks_signup_c_t_a_buttons_icon" DEFAULT 'none'
  );
  
  CREATE TABLE "pages_blocks_signup_c_t_a" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"subtitle" varchar,
  	"show_user_avatars" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_two_column_text_image_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_pages_blocks_two_column_text_image_links_type" DEFAULT 'reference',
  	"url" varchar,
  	"label" varchar,
  	"appearance" "enum_pages_blocks_two_column_text_image_links_appearance" DEFAULT 'primary'
  );
  
  CREATE TABLE "pages_blocks_two_column_text_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"media_id" integer,
  	"image_position" "enum_pages_blocks_two_column_text_image_image_position" DEFAULT 'right',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_profile_with_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"sub_heading_text" varchar,
  	"sub_heading_heighlight" boolean DEFAULT true,
  	"content" jsonb,
  	"media_id" integer,
  	"media_display_alignment" "enum_pages_blocks_profile_with_image_media_display_alignment" DEFAULT 'right',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_video_embed_with_heading_heading" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"highlight" boolean DEFAULT false
  );
  
  CREATE TABLE "pages_blocks_video_embed_with_heading" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"video_url" varchar,
  	"video_title" varchar,
  	"video_allow_full_screen" boolean DEFAULT true,
  	"video_width" varchar DEFAULT '100%',
  	"video_height" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_pricing_plan_grid_heading" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"highlight" boolean DEFAULT false
  );
  
  CREATE TABLE "pages_blocks_pricing_card" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_pages_blocks_pricing_card_icon",
  	"price" numeric,
  	"title" varchar,
  	"subtitle" varchar,
  	"description" varchar,
  	"call_to_action_link" varchar,
  	"call_to_action_text" varchar,
  	"call_to_action_external" boolean DEFAULT false,
  	"highlight" boolean DEFAULT false,
  	"highlight_label" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_pricing_plan_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"description" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_section_hero_with_badge" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"highlight_heading" varchar,
  	"description" jsonb,
  	"badge_text" varchar,
  	"badge_icon" "enum_pages_blocks_section_hero_with_badge_badge_icon",
  	"image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_service_card_grid_heading" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"highlight" boolean DEFAULT false
  );
  
  CREATE TABLE "pages_blocks_service_card" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"image_id" integer,
  	"primary_button_text" varchar DEFAULT 'Start planning',
  	"primary_button_href" varchar,
  	"secondary_button_text" varchar DEFAULT 'Learn more →',
  	"secondary_button_href" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_service_card_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"section_header" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_embed_code" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"embed_code" varchar,
  	"width_mode" "enum_pages_blocks_embed_code_width_mode" DEFAULT 'content',
  	"custom_width" numeric,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_feature_cards_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "pages_blocks_feature_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_feature_highlights_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "pages_blocks_feature_highlights" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"badge_text" varchar,
  	"title" varchar,
  	"subtitle" varchar,
  	"image_id" integer,
  	"spacing_preset" "enum_pages_blocks_feature_highlights_spacing_preset" DEFAULT 'medium',
  	"background_theme" "enum_pages_blocks_feature_highlights_background_theme" DEFAULT 'default',
  	"content_alignment" "enum_pages_blocks_feature_highlights_content_alignment" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_text_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"description" varchar,
  	"cta_type" "enum_pages_blocks_text_section_cta_type" DEFAULT 'reference',
  	"cta_new_tab" boolean,
  	"cta_url" varchar,
  	"cta_label" varchar,
  	"cta_appearance" "enum_pages_blocks_text_section_cta_appearance" DEFAULT 'default',
  	"text_alignment" "enum_pages_blocks_text_section_text_alignment" DEFAULT 'center',
  	"spacing_preset" "enum_pages_blocks_text_section_spacing_preset" DEFAULT 'medium',
  	"background_theme" "enum_pages_blocks_text_section_background_theme" DEFAULT 'default',
  	"content_alignment" "enum_pages_blocks_text_section_content_alignment" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_image_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"description" varchar,
  	"image_id" integer,
  	"cta_type" "enum_pages_blocks_image_content_cta_type" DEFAULT 'reference',
  	"cta_new_tab" boolean,
  	"cta_url" varchar,
  	"cta_label" varchar,
  	"cta_appearance" "enum_pages_blocks_image_content_cta_appearance" DEFAULT 'default',
  	"text_placement" "enum_pages_blocks_image_content_text_placement" DEFAULT 'left',
  	"spacing_preset" "enum_pages_blocks_image_content_spacing_preset" DEFAULT 'medium',
  	"background_theme" "enum_pages_blocks_image_content_background_theme" DEFAULT 'default',
  	"content_alignment" "enum_pages_blocks_image_content_content_alignment" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_faq_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar
  );
  
  CREATE TABLE "pages_blocks_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"description" varchar,
  	"text_alignment" "enum_pages_blocks_faq_text_alignment" DEFAULT 'center',
  	"spacing_preset" "enum_pages_blocks_faq_spacing_preset" DEFAULT 'medium',
  	"background_theme" "enum_pages_blocks_faq_background_theme" DEFAULT 'default',
  	"content_alignment" "enum_pages_blocks_faq_content_alignment" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_faq_grid_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar
  );
  
  CREATE TABLE "pages_blocks_faq_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"spacing_preset" "enum_pages_blocks_faq_grid_spacing_preset" DEFAULT 'medium',
  	"background_theme" "enum_pages_blocks_faq_grid_background_theme" DEFAULT 'default',
  	"content_alignment" "enum_pages_blocks_faq_grid_content_alignment" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_testimonial1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"quote" varchar,
  	"author_name" varchar,
  	"author_role" varchar,
  	"author_company" varchar,
  	"author_image_id" integer,
  	"spacing_preset" "enum_pages_blocks_testimonial1_spacing_preset" DEFAULT 'medium',
  	"background_theme" "enum_pages_blocks_testimonial1_background_theme" DEFAULT 'default',
  	"content_alignment" "enum_pages_blocks_testimonial1_content_alignment" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_testimonial3_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"quote" varchar,
  	"author_name" varchar,
  	"author_role" varchar,
  	"author_company" varchar,
  	"author_image_id" integer
  );
  
  CREATE TABLE "pages_blocks_testimonial3" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"description" varchar,
  	"cta_type" "enum_pages_blocks_testimonial3_cta_type" DEFAULT 'reference',
  	"cta_new_tab" boolean,
  	"cta_url" varchar,
  	"cta_label" varchar,
  	"cta_appearance" "enum_pages_blocks_testimonial3_cta_appearance" DEFAULT 'default',
  	"spacing_preset" "enum_pages_blocks_testimonial3_spacing_preset" DEFAULT 'medium',
  	"background_theme" "enum_pages_blocks_testimonial3_background_theme" DEFAULT 'default',
  	"content_alignment" "enum_pages_blocks_testimonial3_content_alignment" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_testimonial4_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"quote" varchar,
  	"author_name" varchar,
  	"author_role" varchar,
  	"author_company" varchar,
  	"author_image_id" integer,
  	"rating" "enum_pages_blocks_testimonial4_testimonials_rating" DEFAULT '5'
  );
  
  CREATE TABLE "pages_blocks_testimonial4" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"description" varchar,
  	"cta_type" "enum_pages_blocks_testimonial4_cta_type" DEFAULT 'reference',
  	"cta_new_tab" boolean,
  	"cta_url" varchar,
  	"cta_label" varchar,
  	"cta_appearance" "enum_pages_blocks_testimonial4_cta_appearance" DEFAULT 'default',
  	"spacing_preset" "enum_pages_blocks_testimonial4_spacing_preset" DEFAULT 'medium',
  	"background_theme" "enum_pages_blocks_testimonial4_background_theme" DEFAULT 'default',
  	"content_alignment" "enum_pages_blocks_testimonial4_content_alignment" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_testimonial_grid_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"quote" varchar,
  	"author_name" varchar,
  	"author_role" varchar,
  	"author_company" varchar,
  	"author_image_id" integer
  );
  
  CREATE TABLE "pages_blocks_testimonial_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"spacing_preset" "enum_pages_blocks_testimonial_grid_spacing_preset" DEFAULT 'medium',
  	"background_theme" "enum_pages_blocks_testimonial_grid_background_theme" DEFAULT 'default',
  	"content_alignment" "enum_pages_blocks_testimonial_grid_content_alignment" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_pricing1_plans_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"feature" varchar
  );
  
  CREATE TABLE "pages_blocks_pricing1_plans" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"price" varchar,
  	"interval" varchar,
  	"description" varchar,
  	"highlighted" boolean DEFAULT false,
  	"cta_type" "enum_pages_blocks_pricing1_plans_cta_type" DEFAULT 'reference',
  	"cta_new_tab" boolean,
  	"cta_url" varchar,
  	"cta_label" varchar,
  	"cta_appearance" "enum_pages_blocks_pricing1_plans_cta_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "pages_blocks_pricing1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"spacing_preset" "enum_pages_blocks_pricing1_spacing_preset" DEFAULT 'medium',
  	"background_theme" "enum_pages_blocks_pricing1_background_theme" DEFAULT 'default',
  	"content_alignment" "enum_pages_blocks_pricing1_content_alignment" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_logo_carousel" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"populate_by" "enum_pages_blocks_logo_carousel_populate_by" DEFAULT 'collection',
  	"collection_type" "enum_pages_blocks_logo_carousel_collection_type" DEFAULT 'technologies',
  	"limit" numeric DEFAULT 12,
  	"autoplay" boolean DEFAULT true,
  	"speed" numeric DEFAULT 3000,
  	"logo_size" "enum_pages_blocks_logo_carousel_logo_size" DEFAULT 'md',
  	"grayscale" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"hero_type" "enum_pages_hero_type" DEFAULT 'lowImpact',
  	"hero_rich_text" jsonb,
  	"hero_media_id" integer,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"generate_slug" boolean DEFAULT true,
  	"slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_pages_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "pages_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer,
  	"categories_id" integer,
  	"projects_id" integer,
  	"clients_id" integer,
  	"institutes_id" integer,
  	"technologies_id" integer
  );
  
  CREATE TABLE "_pages_v_version_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_version_hero_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_version_hero_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cta_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_cta_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_cta_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_content_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"size" "enum__pages_v_blocks_content_columns_size" DEFAULT 'oneThird',
  	"rich_text" jsonb,
  	"enable_link" boolean,
  	"link_type" "enum__pages_v_blocks_content_columns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_content_columns_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cta_card" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"cta_primary_type" "enum__pages_v_blocks_cta_card_cta_primary_type" DEFAULT 'reference',
  	"cta_primary_new_tab" boolean,
  	"cta_primary_url" varchar,
  	"cta_primary_label" varchar,
  	"cta_primary_appearance" "enum__pages_v_blocks_cta_card_cta_primary_appearance" DEFAULT 'default',
  	"cta_secondary_type" "enum__pages_v_blocks_cta_card_cta_secondary_type" DEFAULT 'reference',
  	"cta_secondary_new_tab" boolean,
  	"cta_secondary_url" varchar,
  	"cta_secondary_label" varchar,
  	"cta_secondary_appearance" "enum__pages_v_blocks_cta_card_cta_secondary_appearance" DEFAULT 'default',
  	"variant" "enum__pages_v_blocks_cta_card_variant" DEFAULT 'muted',
  	"text_alignment" "enum__pages_v_blocks_cta_card_text_alignment" DEFAULT 'center',
  	"spacing_preset" "enum__pages_v_blocks_cta_card_spacing_preset" DEFAULT 'medium',
  	"background_theme" "enum__pages_v_blocks_cta_card_background_theme" DEFAULT 'default',
  	"content_alignment" "enum__pages_v_blocks_cta_card_content_alignment" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cta_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"cta_primary_type" "enum__pages_v_blocks_cta_section_cta_primary_type" DEFAULT 'reference',
  	"cta_primary_new_tab" boolean,
  	"cta_primary_url" varchar,
  	"cta_primary_label" varchar,
  	"cta_primary_appearance" "enum__pages_v_blocks_cta_section_cta_primary_appearance" DEFAULT 'default',
  	"cta_secondary_type" "enum__pages_v_blocks_cta_section_cta_secondary_type" DEFAULT 'reference',
  	"cta_secondary_new_tab" boolean,
  	"cta_secondary_url" varchar,
  	"cta_secondary_label" varchar,
  	"cta_secondary_appearance" "enum__pages_v_blocks_cta_section_cta_secondary_appearance" DEFAULT 'default',
  	"text_alignment" "enum__pages_v_blocks_cta_section_text_alignment" DEFAULT 'center',
  	"spacing_preset" "enum__pages_v_blocks_cta_section_spacing_preset" DEFAULT 'medium',
  	"background_theme" "enum__pages_v_blocks_cta_section_background_theme" DEFAULT 'default',
  	"content_alignment" "enum__pages_v_blocks_cta_section_content_alignment" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_media_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"width_type" "enum__pages_v_blocks_media_block_width_type" DEFAULT 'max',
  	"width_preset" "enum__pages_v_blocks_media_block_width_preset" DEFAULT 'custom',
  	"width_max_width" numeric DEFAULT 896,
  	"width_alignment" "enum__pages_v_blocks_media_block_width_alignment" DEFAULT 'center',
  	"aspect_ratio" "enum__pages_v_blocks_media_block_aspect_ratio" DEFAULT 'auto',
  	"shadow" "enum__pages_v_blocks_media_block_shadow" DEFAULT 'none',
  	"show_border" boolean DEFAULT true,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_archive" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"intro_content" jsonb,
  	"populate_by" "enum__pages_v_blocks_archive_populate_by" DEFAULT 'collection',
  	"relation_to" "enum__pages_v_blocks_archive_relation_to" DEFAULT 'posts',
  	"limit" numeric DEFAULT 10,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_form_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"form_id" integer,
  	"enable_intro" boolean,
  	"intro_content" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_signup_c_t_a_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__pages_v_blocks_signup_c_t_a_buttons_type" DEFAULT 'reference',
  	"url" varchar,
  	"label" varchar,
  	"style" "enum__pages_v_blocks_signup_c_t_a_buttons_style" DEFAULT 'primary',
  	"icon" "enum__pages_v_blocks_signup_c_t_a_buttons_icon" DEFAULT 'none',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_signup_c_t_a" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"subtitle" varchar,
  	"show_user_avatars" boolean DEFAULT true,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_two_column_text_image_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__pages_v_blocks_two_column_text_image_links_type" DEFAULT 'reference',
  	"url" varchar,
  	"label" varchar,
  	"appearance" "enum__pages_v_blocks_two_column_text_image_links_appearance" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_two_column_text_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"media_id" integer,
  	"image_position" "enum__pages_v_blocks_two_column_text_image_image_position" DEFAULT 'right',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_profile_with_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"sub_heading_text" varchar,
  	"sub_heading_heighlight" boolean DEFAULT true,
  	"content" jsonb,
  	"media_id" integer,
  	"media_display_alignment" "enum__pages_v_blocks_profile_with_image_media_display_alignment" DEFAULT 'right',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_video_embed_with_heading_heading" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"highlight" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_video_embed_with_heading" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"video_url" varchar,
  	"video_title" varchar,
  	"video_allow_full_screen" boolean DEFAULT true,
  	"video_width" varchar DEFAULT '100%',
  	"video_height" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_pricing_plan_grid_heading" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"highlight" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_pricing_card" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "enum__pages_v_blocks_pricing_card_icon",
  	"price" numeric,
  	"title" varchar,
  	"subtitle" varchar,
  	"description" varchar,
  	"call_to_action_link" varchar,
  	"call_to_action_text" varchar,
  	"call_to_action_external" boolean DEFAULT false,
  	"highlight" boolean DEFAULT false,
  	"highlight_label" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_pricing_plan_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"description" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_section_hero_with_badge" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"highlight_heading" varchar,
  	"description" jsonb,
  	"badge_text" varchar,
  	"badge_icon" "enum__pages_v_blocks_section_hero_with_badge_badge_icon",
  	"image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_service_card_grid_heading" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"highlight" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_service_card" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"image_id" integer,
  	"primary_button_text" varchar DEFAULT 'Start planning',
  	"primary_button_href" varchar,
  	"secondary_button_text" varchar DEFAULT 'Learn more →',
  	"secondary_button_href" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_service_card_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"section_header" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_embed_code" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"embed_code" varchar,
  	"width_mode" "enum__pages_v_blocks_embed_code_width_mode" DEFAULT 'content',
  	"custom_width" numeric,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_feature_cards_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_feature_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_feature_highlights_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_feature_highlights" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"badge_text" varchar,
  	"title" varchar,
  	"subtitle" varchar,
  	"image_id" integer,
  	"spacing_preset" "enum__pages_v_blocks_feature_highlights_spacing_preset" DEFAULT 'medium',
  	"background_theme" "enum__pages_v_blocks_feature_highlights_background_theme" DEFAULT 'default',
  	"content_alignment" "enum__pages_v_blocks_feature_highlights_content_alignment" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_text_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"description" varchar,
  	"cta_type" "enum__pages_v_blocks_text_section_cta_type" DEFAULT 'reference',
  	"cta_new_tab" boolean,
  	"cta_url" varchar,
  	"cta_label" varchar,
  	"cta_appearance" "enum__pages_v_blocks_text_section_cta_appearance" DEFAULT 'default',
  	"text_alignment" "enum__pages_v_blocks_text_section_text_alignment" DEFAULT 'center',
  	"spacing_preset" "enum__pages_v_blocks_text_section_spacing_preset" DEFAULT 'medium',
  	"background_theme" "enum__pages_v_blocks_text_section_background_theme" DEFAULT 'default',
  	"content_alignment" "enum__pages_v_blocks_text_section_content_alignment" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_image_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"description" varchar,
  	"image_id" integer,
  	"cta_type" "enum__pages_v_blocks_image_content_cta_type" DEFAULT 'reference',
  	"cta_new_tab" boolean,
  	"cta_url" varchar,
  	"cta_label" varchar,
  	"cta_appearance" "enum__pages_v_blocks_image_content_cta_appearance" DEFAULT 'default',
  	"text_placement" "enum__pages_v_blocks_image_content_text_placement" DEFAULT 'left',
  	"spacing_preset" "enum__pages_v_blocks_image_content_spacing_preset" DEFAULT 'medium',
  	"background_theme" "enum__pages_v_blocks_image_content_background_theme" DEFAULT 'default',
  	"content_alignment" "enum__pages_v_blocks_image_content_content_alignment" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_faq_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"description" varchar,
  	"text_alignment" "enum__pages_v_blocks_faq_text_alignment" DEFAULT 'center',
  	"spacing_preset" "enum__pages_v_blocks_faq_spacing_preset" DEFAULT 'medium',
  	"background_theme" "enum__pages_v_blocks_faq_background_theme" DEFAULT 'default',
  	"content_alignment" "enum__pages_v_blocks_faq_content_alignment" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_faq_grid_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_faq_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"spacing_preset" "enum__pages_v_blocks_faq_grid_spacing_preset" DEFAULT 'medium',
  	"background_theme" "enum__pages_v_blocks_faq_grid_background_theme" DEFAULT 'default',
  	"content_alignment" "enum__pages_v_blocks_faq_grid_content_alignment" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_testimonial1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"quote" varchar,
  	"author_name" varchar,
  	"author_role" varchar,
  	"author_company" varchar,
  	"author_image_id" integer,
  	"spacing_preset" "enum__pages_v_blocks_testimonial1_spacing_preset" DEFAULT 'medium',
  	"background_theme" "enum__pages_v_blocks_testimonial1_background_theme" DEFAULT 'default',
  	"content_alignment" "enum__pages_v_blocks_testimonial1_content_alignment" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_testimonial3_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"quote" varchar,
  	"author_name" varchar,
  	"author_role" varchar,
  	"author_company" varchar,
  	"author_image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_testimonial3" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"description" varchar,
  	"cta_type" "enum__pages_v_blocks_testimonial3_cta_type" DEFAULT 'reference',
  	"cta_new_tab" boolean,
  	"cta_url" varchar,
  	"cta_label" varchar,
  	"cta_appearance" "enum__pages_v_blocks_testimonial3_cta_appearance" DEFAULT 'default',
  	"spacing_preset" "enum__pages_v_blocks_testimonial3_spacing_preset" DEFAULT 'medium',
  	"background_theme" "enum__pages_v_blocks_testimonial3_background_theme" DEFAULT 'default',
  	"content_alignment" "enum__pages_v_blocks_testimonial3_content_alignment" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_testimonial4_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"quote" varchar,
  	"author_name" varchar,
  	"author_role" varchar,
  	"author_company" varchar,
  	"author_image_id" integer,
  	"rating" "enum__pages_v_blocks_testimonial4_testimonials_rating" DEFAULT '5',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_testimonial4" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"description" varchar,
  	"cta_type" "enum__pages_v_blocks_testimonial4_cta_type" DEFAULT 'reference',
  	"cta_new_tab" boolean,
  	"cta_url" varchar,
  	"cta_label" varchar,
  	"cta_appearance" "enum__pages_v_blocks_testimonial4_cta_appearance" DEFAULT 'default',
  	"spacing_preset" "enum__pages_v_blocks_testimonial4_spacing_preset" DEFAULT 'medium',
  	"background_theme" "enum__pages_v_blocks_testimonial4_background_theme" DEFAULT 'default',
  	"content_alignment" "enum__pages_v_blocks_testimonial4_content_alignment" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_testimonial_grid_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"quote" varchar,
  	"author_name" varchar,
  	"author_role" varchar,
  	"author_company" varchar,
  	"author_image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_testimonial_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"spacing_preset" "enum__pages_v_blocks_testimonial_grid_spacing_preset" DEFAULT 'medium',
  	"background_theme" "enum__pages_v_blocks_testimonial_grid_background_theme" DEFAULT 'default',
  	"content_alignment" "enum__pages_v_blocks_testimonial_grid_content_alignment" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_pricing1_plans_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"feature" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_pricing1_plans" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"price" varchar,
  	"interval" varchar,
  	"description" varchar,
  	"highlighted" boolean DEFAULT false,
  	"cta_type" "enum__pages_v_blocks_pricing1_plans_cta_type" DEFAULT 'reference',
  	"cta_new_tab" boolean,
  	"cta_url" varchar,
  	"cta_label" varchar,
  	"cta_appearance" "enum__pages_v_blocks_pricing1_plans_cta_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_pricing1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"spacing_preset" "enum__pages_v_blocks_pricing1_spacing_preset" DEFAULT 'medium',
  	"background_theme" "enum__pages_v_blocks_pricing1_background_theme" DEFAULT 'default',
  	"content_alignment" "enum__pages_v_blocks_pricing1_content_alignment" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_logo_carousel" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"populate_by" "enum__pages_v_blocks_logo_carousel_populate_by" DEFAULT 'collection',
  	"collection_type" "enum__pages_v_blocks_logo_carousel_collection_type" DEFAULT 'technologies',
  	"limit" numeric DEFAULT 12,
  	"autoplay" boolean DEFAULT true,
  	"speed" numeric DEFAULT 3000,
  	"logo_size" "enum__pages_v_blocks_logo_carousel_logo_size" DEFAULT 'md',
  	"grayscale" boolean DEFAULT true,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_hero_type" "enum__pages_v_version_hero_type" DEFAULT 'lowImpact',
  	"version_hero_rich_text" jsonb,
  	"version_hero_media_id" integer,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_generate_slug" boolean DEFAULT true,
  	"version_slug" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__pages_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_pages_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer,
  	"categories_id" integer,
  	"projects_id" integer,
  	"clients_id" integer,
  	"institutes_id" integer,
  	"technologies_id" integer
  );
  
  CREATE TABLE "posts_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar
  );
  
  CREATE TABLE "posts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"hero_image_id" integer,
  	"content" jsonb,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"generate_slug" boolean DEFAULT true,
  	"slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_posts_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "posts_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"posts_id" integer,
  	"categories_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE "_posts_v_version_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"name" varchar
  );
  
  CREATE TABLE "_posts_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_hero_image_id" integer,
  	"version_content" jsonb,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_generate_slug" boolean DEFAULT true,
  	"version_slug" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__posts_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_posts_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"posts_id" integer,
  	"categories_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE "projects" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"hero_image_id" integer,
  	"summary" varchar,
  	"content" jsonb,
  	"role" varchar,
  	"live_url" varchar,
  	"repo_url" varchar,
  	"featured" boolean DEFAULT false,
  	"completed_at" timestamp(3) with time zone,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"generate_slug" boolean DEFAULT true,
  	"slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_projects_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "projects_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"clients_id" integer,
  	"technologies_id" integer,
  	"categories_id" integer
  );
  
  CREATE TABLE "_projects_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_hero_image_id" integer,
  	"version_summary" varchar,
  	"version_content" jsonb,
  	"version_role" varchar,
  	"version_live_url" varchar,
  	"version_repo_url" varchar,
  	"version_featured" boolean DEFAULT false,
  	"version_completed_at" timestamp(3) with time zone,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_generate_slug" boolean DEFAULT true,
  	"version_slug" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__projects_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_projects_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"clients_id" integer,
  	"technologies_id" integer,
  	"categories_id" integer
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar,
  	"caption" jsonb,
  	"prefix" varchar DEFAULT 'charlie-portfolio/media',
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_thumbnail_url" varchar,
  	"sizes_thumbnail_width" numeric,
  	"sizes_thumbnail_height" numeric,
  	"sizes_thumbnail_mime_type" varchar,
  	"sizes_thumbnail_filesize" numeric,
  	"sizes_thumbnail_filename" varchar,
  	"sizes_square_url" varchar,
  	"sizes_square_width" numeric,
  	"sizes_square_height" numeric,
  	"sizes_square_mime_type" varchar,
  	"sizes_square_filesize" numeric,
  	"sizes_square_filename" varchar,
  	"sizes_small_url" varchar,
  	"sizes_small_width" numeric,
  	"sizes_small_height" numeric,
  	"sizes_small_mime_type" varchar,
  	"sizes_small_filesize" numeric,
  	"sizes_small_filename" varchar,
  	"sizes_medium_url" varchar,
  	"sizes_medium_width" numeric,
  	"sizes_medium_height" numeric,
  	"sizes_medium_mime_type" varchar,
  	"sizes_medium_filesize" numeric,
  	"sizes_medium_filename" varchar,
  	"sizes_large_url" varchar,
  	"sizes_large_width" numeric,
  	"sizes_large_height" numeric,
  	"sizes_large_mime_type" varchar,
  	"sizes_large_filesize" numeric,
  	"sizes_large_filename" varchar,
  	"sizes_xlarge_url" varchar,
  	"sizes_xlarge_width" numeric,
  	"sizes_xlarge_height" numeric,
  	"sizes_xlarge_mime_type" varchar,
  	"sizes_xlarge_filesize" numeric,
  	"sizes_xlarge_filename" varchar,
  	"sizes_og_url" varchar,
  	"sizes_og_width" numeric,
  	"sizes_og_height" numeric,
  	"sizes_og_mime_type" varchar,
  	"sizes_og_filesize" numeric,
  	"sizes_og_filename" varchar
  );
  
  CREATE TABLE "categories_breadcrumbs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"doc_id" integer,
  	"url" varchar,
  	"label" varchar
  );
  
  CREATE TABLE "categories" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"generate_slug" boolean DEFAULT true,
  	"slug" varchar NOT NULL,
  	"parent_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "clients" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"logo_id" integer,
  	"logo_dark_id" integer,
  	"website" varchar,
  	"industry" varchar,
  	"description" varchar,
  	"featured" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "institutes" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"logo_id" integer,
  	"logo_dark_id" integer,
  	"website" varchar,
  	"type" "enum_institutes_type" DEFAULT 'university',
  	"credential" varchar,
  	"featured" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "technologies" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"logo_id" integer,
  	"logo_dark_id" integer,
  	"website" varchar,
  	"category" "enum_technologies_category",
  	"featured" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"avatar_id" integer,
  	"role" "enum_users_role" DEFAULT 'user',
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "user_avatar" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar,
  	"user_id" integer NOT NULL,
  	"prefix" varchar DEFAULT 'charlie-portfolio/avatars',
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_thumbnail_url" varchar,
  	"sizes_thumbnail_width" numeric,
  	"sizes_thumbnail_height" numeric,
  	"sizes_thumbnail_mime_type" varchar,
  	"sizes_thumbnail_filesize" numeric,
  	"sizes_thumbnail_filename" varchar,
  	"sizes_small_url" varchar,
  	"sizes_small_width" numeric,
  	"sizes_small_height" numeric,
  	"sizes_small_mime_type" varchar,
  	"sizes_small_filesize" numeric,
  	"sizes_small_filename" varchar,
  	"sizes_medium_url" varchar,
  	"sizes_medium_width" numeric,
  	"sizes_medium_height" numeric,
  	"sizes_medium_mime_type" varchar,
  	"sizes_medium_filesize" numeric,
  	"sizes_medium_filename" varchar
  );
  
  CREATE TABLE "redirects" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"from" varchar NOT NULL,
  	"to_type" "enum_redirects_to_type" DEFAULT 'reference',
  	"to_url" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "redirects_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer
  );
  
  CREATE TABLE "forms_blocks_checkbox" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"default_value" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_country" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_email" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_message" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"message" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_number" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"default_value" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_select_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE "forms_blocks_select" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"default_value" varchar,
  	"placeholder" varchar,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_state" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"default_value" varchar,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_textarea" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"default_value" varchar,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_emails" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"email_to" varchar,
  	"cc" varchar,
  	"bcc" varchar,
  	"reply_to" varchar,
  	"email_from" varchar,
  	"subject" varchar DEFAULT 'You''ve received a new message.' NOT NULL,
  	"message" jsonb
  );
  
  CREATE TABLE "forms" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"submit_button_label" varchar,
  	"confirmation_type" "enum_forms_confirmation_type" DEFAULT 'message',
  	"confirmation_message" jsonb,
  	"redirect_url" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "form_submissions_submission_data" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"field" varchar NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE "form_submissions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"form_id" integer NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "search_categories" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"relation_to" varchar,
  	"title" varchar
  );
  
  CREATE TABLE "search" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"priority" numeric,
  	"slug" varchar,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "search_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"posts_id" integer
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_jobs_log" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"executed_at" timestamp(3) with time zone NOT NULL,
  	"completed_at" timestamp(3) with time zone NOT NULL,
  	"task_slug" "enum_payload_jobs_log_task_slug" NOT NULL,
  	"task_i_d" varchar NOT NULL,
  	"input" jsonb,
  	"output" jsonb,
  	"state" "enum_payload_jobs_log_state" NOT NULL,
  	"error" jsonb
  );
  
  CREATE TABLE "payload_jobs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"input" jsonb,
  	"completed_at" timestamp(3) with time zone,
  	"total_tried" numeric DEFAULT 0,
  	"has_error" boolean DEFAULT false,
  	"error" jsonb,
  	"task_slug" "enum_payload_jobs_task_slug",
  	"queue" varchar DEFAULT 'default',
  	"wait_until" timestamp(3) with time zone,
  	"processing" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer,
  	"projects_id" integer,
  	"media_id" integer,
  	"categories_id" integer,
  	"clients_id" integer,
  	"institutes_id" integer,
  	"technologies_id" integer,
  	"users_id" integer,
  	"user_avatar_id" integer,
  	"redirects_id" integer,
  	"forms_id" integer,
  	"form_submissions_id" integer,
  	"search_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "header_nav_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_header_nav_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar NOT NULL
  );
  
  CREATE TABLE "header_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_header_buttons_type" DEFAULT 'reference',
  	"url" varchar,
  	"label" varchar NOT NULL,
  	"style" "enum_header_buttons_style" DEFAULT 'primary',
  	"icon" "enum_header_buttons_icon" DEFAULT 'none',
  	"icon_position" "enum_header_buttons_icon_position" DEFAULT 'before'
  );
  
  CREATE TABLE "header" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"logo_override_site_logo" boolean,
  	"logo_logo_mode" "enum_header_logo_logo_mode" DEFAULT 'simple',
  	"logo_custom_logo_id" integer,
  	"logo_custom_logo_light_id" integer,
  	"logo_custom_logo_dark_id" integer,
  	"logo_height" numeric DEFAULT 40,
  	"header_style" "enum_header_header_style" DEFAULT 'default',
  	"sticky" boolean DEFAULT false,
  	"background_type" "enum_header_background_type" DEFAULT 'transparent',
  	"pill_padding_top" numeric DEFAULT 10,
  	"pill_padding_bottom" numeric DEFAULT 10,
  	"pill_padding_left" numeric DEFAULT 10,
  	"pill_padding_right" numeric DEFAULT 10,
  	"background_color" varchar,
  	"text_color" "enum_header_text_color" DEFAULT 'auto',
  	"custom_text_color" varchar,
  	"menu_position" "enum_header_menu_position" DEFAULT 'right',
  	"show_search_bar" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "header_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer
  );
  
  CREATE TABLE "footer_nav_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_footer_nav_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar NOT NULL
  );
  
  CREATE TABLE "footer" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"logo_override_site_logo" boolean,
  	"logo_logo_mode" "enum_footer_logo_logo_mode" DEFAULT 'simple',
  	"logo_custom_logo_id" integer,
  	"logo_custom_logo_light_id" integer,
  	"logo_custom_logo_dark_id" integer,
  	"logo_height" numeric DEFAULT 100,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "footer_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer
  );
  
  CREATE TABLE "site_settings_legal_policies" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"type" "enum_site_settings_legal_policies_type" DEFAULT 'reference' NOT NULL,
  	"url" varchar,
  	"new_tab" boolean
  );
  
  CREATE TABLE "site_settings_social_media_platforms" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"platform" "enum_site_settings_social_media_platforms_platform" NOT NULL,
  	"url" varchar NOT NULL
  );
  
  CREATE TABLE "site_settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"contact_email" varchar,
  	"contact_phone" varchar,
  	"contact_address" varchar,
  	"branding_site_name" varchar,
  	"branding_logo_mode" "enum_site_settings_branding_logo_mode" DEFAULT 'simple' NOT NULL,
  	"branding_logo_id" integer,
  	"branding_logo_light_id" integer,
  	"branding_logo_dark_id" integer,
  	"branding_favicon_id" integer,
  	"branding_use_custom_admin_logo" boolean DEFAULT false,
  	"branding_admin_logo_mode" "enum_site_settings_branding_admin_logo_mode" DEFAULT 'simple',
  	"branding_admin_logo_id" integer,
  	"branding_admin_logo_light_id" integer,
  	"branding_admin_logo_dark_id" integer,
  	"theme_settings_theme_mode" "enum_site_settings_theme_settings_theme_mode" DEFAULT 'both' NOT NULL,
  	"theme_settings_default_theme" "enum_site_settings_theme_settings_default_theme" DEFAULT 'light',
  	"theme_settings_custom_colors" boolean DEFAULT false,
  	"theme_settings_primary_color" varchar DEFAULT '#015A86',
  	"theme_settings_secondary_color" varchar DEFAULT '#6B7280',
  	"theme_settings_custom_fonts" boolean DEFAULT false,
  	"seo_site_description" varchar,
  	"seo_keywords" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "site_settings_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer
  );
  
  ALTER TABLE "pages_hero_links" ADD CONSTRAINT "pages_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta_links" ADD CONSTRAINT "pages_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta" ADD CONSTRAINT "pages_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_content_columns" ADD CONSTRAINT "pages_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_content" ADD CONSTRAINT "pages_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta_card" ADD CONSTRAINT "pages_blocks_cta_card_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta_section" ADD CONSTRAINT "pages_blocks_cta_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_media_block" ADD CONSTRAINT "pages_blocks_media_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_media_block" ADD CONSTRAINT "pages_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_archive" ADD CONSTRAINT "pages_blocks_archive_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_form_block" ADD CONSTRAINT "pages_blocks_form_block_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_form_block" ADD CONSTRAINT "pages_blocks_form_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_signup_c_t_a_buttons" ADD CONSTRAINT "pages_blocks_signup_c_t_a_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_signup_c_t_a"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_signup_c_t_a" ADD CONSTRAINT "pages_blocks_signup_c_t_a_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_two_column_text_image_links" ADD CONSTRAINT "pages_blocks_two_column_text_image_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_two_column_text_image"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_two_column_text_image" ADD CONSTRAINT "pages_blocks_two_column_text_image_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_two_column_text_image" ADD CONSTRAINT "pages_blocks_two_column_text_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_profile_with_image" ADD CONSTRAINT "pages_blocks_profile_with_image_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_profile_with_image" ADD CONSTRAINT "pages_blocks_profile_with_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_video_embed_with_heading_heading" ADD CONSTRAINT "pages_blocks_video_embed_with_heading_heading_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_video_embed_with_heading"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_video_embed_with_heading" ADD CONSTRAINT "pages_blocks_video_embed_with_heading_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing_plan_grid_heading" ADD CONSTRAINT "pages_blocks_pricing_plan_grid_heading_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_pricing_plan_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing_card" ADD CONSTRAINT "pages_blocks_pricing_card_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing_plan_grid" ADD CONSTRAINT "pages_blocks_pricing_plan_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_section_hero_with_badge" ADD CONSTRAINT "pages_blocks_section_hero_with_badge_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_section_hero_with_badge" ADD CONSTRAINT "pages_blocks_section_hero_with_badge_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_service_card_grid_heading" ADD CONSTRAINT "pages_blocks_service_card_grid_heading_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_service_card_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_service_card" ADD CONSTRAINT "pages_blocks_service_card_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_service_card" ADD CONSTRAINT "pages_blocks_service_card_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_service_card_grid" ADD CONSTRAINT "pages_blocks_service_card_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_embed_code" ADD CONSTRAINT "pages_blocks_embed_code_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_feature_cards_features" ADD CONSTRAINT "pages_blocks_feature_cards_features_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_feature_cards_features" ADD CONSTRAINT "pages_blocks_feature_cards_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_feature_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_feature_cards" ADD CONSTRAINT "pages_blocks_feature_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_feature_highlights_features" ADD CONSTRAINT "pages_blocks_feature_highlights_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_feature_highlights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_feature_highlights" ADD CONSTRAINT "pages_blocks_feature_highlights_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_feature_highlights" ADD CONSTRAINT "pages_blocks_feature_highlights_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_text_section" ADD CONSTRAINT "pages_blocks_text_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_image_content" ADD CONSTRAINT "pages_blocks_image_content_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_image_content" ADD CONSTRAINT "pages_blocks_image_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq_faq_items" ADD CONSTRAINT "pages_blocks_faq_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq" ADD CONSTRAINT "pages_blocks_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq_grid_faq_items" ADD CONSTRAINT "pages_blocks_faq_grid_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_faq_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq_grid" ADD CONSTRAINT "pages_blocks_faq_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonial1" ADD CONSTRAINT "pages_blocks_testimonial1_author_image_id_media_id_fk" FOREIGN KEY ("author_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonial1" ADD CONSTRAINT "pages_blocks_testimonial1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonial3_testimonials" ADD CONSTRAINT "pages_blocks_testimonial3_testimonials_author_image_id_media_id_fk" FOREIGN KEY ("author_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonial3_testimonials" ADD CONSTRAINT "pages_blocks_testimonial3_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_testimonial3"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonial3" ADD CONSTRAINT "pages_blocks_testimonial3_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonial4_testimonials" ADD CONSTRAINT "pages_blocks_testimonial4_testimonials_author_image_id_media_id_fk" FOREIGN KEY ("author_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonial4_testimonials" ADD CONSTRAINT "pages_blocks_testimonial4_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_testimonial4"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonial4" ADD CONSTRAINT "pages_blocks_testimonial4_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonial_grid_testimonials" ADD CONSTRAINT "pages_blocks_testimonial_grid_testimonials_author_image_id_media_id_fk" FOREIGN KEY ("author_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonial_grid_testimonials" ADD CONSTRAINT "pages_blocks_testimonial_grid_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_testimonial_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonial_grid" ADD CONSTRAINT "pages_blocks_testimonial_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing1_plans_features" ADD CONSTRAINT "pages_blocks_pricing1_plans_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_pricing1_plans"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing1_plans" ADD CONSTRAINT "pages_blocks_pricing1_plans_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_pricing1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing1" ADD CONSTRAINT "pages_blocks_pricing1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_logo_carousel" ADD CONSTRAINT "pages_blocks_logo_carousel_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_media_id_media_id_fk" FOREIGN KEY ("hero_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_clients_fk" FOREIGN KEY ("clients_id") REFERENCES "public"."clients"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_institutes_fk" FOREIGN KEY ("institutes_id") REFERENCES "public"."institutes"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_technologies_fk" FOREIGN KEY ("technologies_id") REFERENCES "public"."technologies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_hero_links" ADD CONSTRAINT "_pages_v_version_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta_links" ADD CONSTRAINT "_pages_v_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta" ADD CONSTRAINT "_pages_v_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_content_columns" ADD CONSTRAINT "_pages_v_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_content" ADD CONSTRAINT "_pages_v_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta_card" ADD CONSTRAINT "_pages_v_blocks_cta_card_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta_section" ADD CONSTRAINT "_pages_v_blocks_cta_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_media_block" ADD CONSTRAINT "_pages_v_blocks_media_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_media_block" ADD CONSTRAINT "_pages_v_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_archive" ADD CONSTRAINT "_pages_v_blocks_archive_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_form_block" ADD CONSTRAINT "_pages_v_blocks_form_block_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_form_block" ADD CONSTRAINT "_pages_v_blocks_form_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_signup_c_t_a_buttons" ADD CONSTRAINT "_pages_v_blocks_signup_c_t_a_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_signup_c_t_a"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_signup_c_t_a" ADD CONSTRAINT "_pages_v_blocks_signup_c_t_a_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_two_column_text_image_links" ADD CONSTRAINT "_pages_v_blocks_two_column_text_image_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_two_column_text_image"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_two_column_text_image" ADD CONSTRAINT "_pages_v_blocks_two_column_text_image_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_two_column_text_image" ADD CONSTRAINT "_pages_v_blocks_two_column_text_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_profile_with_image" ADD CONSTRAINT "_pages_v_blocks_profile_with_image_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_profile_with_image" ADD CONSTRAINT "_pages_v_blocks_profile_with_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_video_embed_with_heading_heading" ADD CONSTRAINT "_pages_v_blocks_video_embed_with_heading_heading_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_video_embed_with_heading"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_video_embed_with_heading" ADD CONSTRAINT "_pages_v_blocks_video_embed_with_heading_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing_plan_grid_heading" ADD CONSTRAINT "_pages_v_blocks_pricing_plan_grid_heading_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_pricing_plan_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing_card" ADD CONSTRAINT "_pages_v_blocks_pricing_card_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing_plan_grid" ADD CONSTRAINT "_pages_v_blocks_pricing_plan_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_section_hero_with_badge" ADD CONSTRAINT "_pages_v_blocks_section_hero_with_badge_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_section_hero_with_badge" ADD CONSTRAINT "_pages_v_blocks_section_hero_with_badge_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_service_card_grid_heading" ADD CONSTRAINT "_pages_v_blocks_service_card_grid_heading_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_service_card_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_service_card" ADD CONSTRAINT "_pages_v_blocks_service_card_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_service_card" ADD CONSTRAINT "_pages_v_blocks_service_card_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_service_card_grid" ADD CONSTRAINT "_pages_v_blocks_service_card_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_embed_code" ADD CONSTRAINT "_pages_v_blocks_embed_code_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_feature_cards_features" ADD CONSTRAINT "_pages_v_blocks_feature_cards_features_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_feature_cards_features" ADD CONSTRAINT "_pages_v_blocks_feature_cards_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_feature_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_feature_cards" ADD CONSTRAINT "_pages_v_blocks_feature_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_feature_highlights_features" ADD CONSTRAINT "_pages_v_blocks_feature_highlights_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_feature_highlights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_feature_highlights" ADD CONSTRAINT "_pages_v_blocks_feature_highlights_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_feature_highlights" ADD CONSTRAINT "_pages_v_blocks_feature_highlights_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_text_section" ADD CONSTRAINT "_pages_v_blocks_text_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_image_content" ADD CONSTRAINT "_pages_v_blocks_image_content_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_image_content" ADD CONSTRAINT "_pages_v_blocks_image_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq_faq_items" ADD CONSTRAINT "_pages_v_blocks_faq_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq" ADD CONSTRAINT "_pages_v_blocks_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq_grid_faq_items" ADD CONSTRAINT "_pages_v_blocks_faq_grid_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_faq_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq_grid" ADD CONSTRAINT "_pages_v_blocks_faq_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonial1" ADD CONSTRAINT "_pages_v_blocks_testimonial1_author_image_id_media_id_fk" FOREIGN KEY ("author_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonial1" ADD CONSTRAINT "_pages_v_blocks_testimonial1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonial3_testimonials" ADD CONSTRAINT "_pages_v_blocks_testimonial3_testimonials_author_image_id_media_id_fk" FOREIGN KEY ("author_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonial3_testimonials" ADD CONSTRAINT "_pages_v_blocks_testimonial3_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_testimonial3"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonial3" ADD CONSTRAINT "_pages_v_blocks_testimonial3_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonial4_testimonials" ADD CONSTRAINT "_pages_v_blocks_testimonial4_testimonials_author_image_id_media_id_fk" FOREIGN KEY ("author_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonial4_testimonials" ADD CONSTRAINT "_pages_v_blocks_testimonial4_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_testimonial4"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonial4" ADD CONSTRAINT "_pages_v_blocks_testimonial4_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonial_grid_testimonials" ADD CONSTRAINT "_pages_v_blocks_testimonial_grid_testimonials_author_image_id_media_id_fk" FOREIGN KEY ("author_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonial_grid_testimonials" ADD CONSTRAINT "_pages_v_blocks_testimonial_grid_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_testimonial_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonial_grid" ADD CONSTRAINT "_pages_v_blocks_testimonial_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing1_plans_features" ADD CONSTRAINT "_pages_v_blocks_pricing1_plans_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_pricing1_plans"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing1_plans" ADD CONSTRAINT "_pages_v_blocks_pricing1_plans_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_pricing1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing1" ADD CONSTRAINT "_pages_v_blocks_pricing1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_logo_carousel" ADD CONSTRAINT "_pages_v_blocks_logo_carousel_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_media_id_media_id_fk" FOREIGN KEY ("version_hero_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_clients_fk" FOREIGN KEY ("clients_id") REFERENCES "public"."clients"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_institutes_fk" FOREIGN KEY ("institutes_id") REFERENCES "public"."institutes"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_technologies_fk" FOREIGN KEY ("technologies_id") REFERENCES "public"."technologies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_populated_authors" ADD CONSTRAINT "posts_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts" ADD CONSTRAINT "posts_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts" ADD CONSTRAINT "posts_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_version_populated_authors" ADD CONSTRAINT "_posts_v_version_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_parent_id_posts_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects" ADD CONSTRAINT "projects_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "projects" ADD CONSTRAINT "projects_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "projects_rels" ADD CONSTRAINT "projects_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_rels" ADD CONSTRAINT "projects_rels_clients_fk" FOREIGN KEY ("clients_id") REFERENCES "public"."clients"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_rels" ADD CONSTRAINT "projects_rels_technologies_fk" FOREIGN KEY ("technologies_id") REFERENCES "public"."technologies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_rels" ADD CONSTRAINT "projects_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v" ADD CONSTRAINT "_projects_v_parent_id_projects_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_projects_v" ADD CONSTRAINT "_projects_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_projects_v" ADD CONSTRAINT "_projects_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_projects_v_rels" ADD CONSTRAINT "_projects_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_projects_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_rels" ADD CONSTRAINT "_projects_v_rels_clients_fk" FOREIGN KEY ("clients_id") REFERENCES "public"."clients"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_rels" ADD CONSTRAINT "_projects_v_rels_technologies_fk" FOREIGN KEY ("technologies_id") REFERENCES "public"."technologies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_rels" ADD CONSTRAINT "_projects_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "categories_breadcrumbs" ADD CONSTRAINT "categories_breadcrumbs_doc_id_categories_id_fk" FOREIGN KEY ("doc_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "categories_breadcrumbs" ADD CONSTRAINT "categories_breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "categories" ADD CONSTRAINT "categories_parent_id_categories_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "clients" ADD CONSTRAINT "clients_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "clients" ADD CONSTRAINT "clients_logo_dark_id_media_id_fk" FOREIGN KEY ("logo_dark_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "institutes" ADD CONSTRAINT "institutes_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "institutes" ADD CONSTRAINT "institutes_logo_dark_id_media_id_fk" FOREIGN KEY ("logo_dark_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "technologies" ADD CONSTRAINT "technologies_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "technologies" ADD CONSTRAINT "technologies_logo_dark_id_media_id_fk" FOREIGN KEY ("logo_dark_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "users" ADD CONSTRAINT "users_avatar_id_user_avatar_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."user_avatar"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "user_avatar" ADD CONSTRAINT "user_avatar_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."redirects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_checkbox" ADD CONSTRAINT "forms_blocks_checkbox_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_country" ADD CONSTRAINT "forms_blocks_country_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_email" ADD CONSTRAINT "forms_blocks_email_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_message" ADD CONSTRAINT "forms_blocks_message_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_number" ADD CONSTRAINT "forms_blocks_number_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_select_options" ADD CONSTRAINT "forms_blocks_select_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_select"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_select" ADD CONSTRAINT "forms_blocks_select_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_state" ADD CONSTRAINT "forms_blocks_state_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_text" ADD CONSTRAINT "forms_blocks_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_textarea" ADD CONSTRAINT "forms_blocks_textarea_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_emails" ADD CONSTRAINT "forms_emails_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "form_submissions_submission_data" ADD CONSTRAINT "form_submissions_submission_data_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."form_submissions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "form_submissions" ADD CONSTRAINT "form_submissions_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "search_categories" ADD CONSTRAINT "search_categories_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."search"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "search" ADD CONSTRAINT "search_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "search_rels" ADD CONSTRAINT "search_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."search"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "search_rels" ADD CONSTRAINT "search_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_jobs_log" ADD CONSTRAINT "payload_jobs_log_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."payload_jobs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_clients_fk" FOREIGN KEY ("clients_id") REFERENCES "public"."clients"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_institutes_fk" FOREIGN KEY ("institutes_id") REFERENCES "public"."institutes"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_technologies_fk" FOREIGN KEY ("technologies_id") REFERENCES "public"."technologies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_user_avatar_fk" FOREIGN KEY ("user_avatar_id") REFERENCES "public"."user_avatar"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_redirects_fk" FOREIGN KEY ("redirects_id") REFERENCES "public"."redirects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_forms_fk" FOREIGN KEY ("forms_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_form_submissions_fk" FOREIGN KEY ("form_submissions_id") REFERENCES "public"."form_submissions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_search_fk" FOREIGN KEY ("search_id") REFERENCES "public"."search"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_nav_items" ADD CONSTRAINT "header_nav_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_buttons" ADD CONSTRAINT "header_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header" ADD CONSTRAINT "header_logo_custom_logo_id_media_id_fk" FOREIGN KEY ("logo_custom_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header" ADD CONSTRAINT "header_logo_custom_logo_light_id_media_id_fk" FOREIGN KEY ("logo_custom_logo_light_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header" ADD CONSTRAINT "header_logo_custom_logo_dark_id_media_id_fk" FOREIGN KEY ("logo_custom_logo_dark_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_nav_items" ADD CONSTRAINT "footer_nav_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer" ADD CONSTRAINT "footer_logo_custom_logo_id_media_id_fk" FOREIGN KEY ("logo_custom_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer" ADD CONSTRAINT "footer_logo_custom_logo_light_id_media_id_fk" FOREIGN KEY ("logo_custom_logo_light_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer" ADD CONSTRAINT "footer_logo_custom_logo_dark_id_media_id_fk" FOREIGN KEY ("logo_custom_logo_dark_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_legal_policies" ADD CONSTRAINT "site_settings_legal_policies_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_social_media_platforms" ADD CONSTRAINT "site_settings_social_media_platforms_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_branding_logo_id_media_id_fk" FOREIGN KEY ("branding_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_branding_logo_light_id_media_id_fk" FOREIGN KEY ("branding_logo_light_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_branding_logo_dark_id_media_id_fk" FOREIGN KEY ("branding_logo_dark_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_branding_favicon_id_media_id_fk" FOREIGN KEY ("branding_favicon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_branding_admin_logo_id_media_id_fk" FOREIGN KEY ("branding_admin_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_branding_admin_logo_light_id_media_id_fk" FOREIGN KEY ("branding_admin_logo_light_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_branding_admin_logo_dark_id_media_id_fk" FOREIGN KEY ("branding_admin_logo_dark_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_settings_rels" ADD CONSTRAINT "site_settings_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_rels" ADD CONSTRAINT "site_settings_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_rels" ADD CONSTRAINT "site_settings_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_hero_links_order_idx" ON "pages_hero_links" USING btree ("_order");
  CREATE INDEX "pages_hero_links_parent_id_idx" ON "pages_hero_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta_links_order_idx" ON "pages_blocks_cta_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta_links_parent_id_idx" ON "pages_blocks_cta_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta_order_idx" ON "pages_blocks_cta" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta_parent_id_idx" ON "pages_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta_path_idx" ON "pages_blocks_cta" USING btree ("_path");
  CREATE INDEX "pages_blocks_content_columns_order_idx" ON "pages_blocks_content_columns" USING btree ("_order");
  CREATE INDEX "pages_blocks_content_columns_parent_id_idx" ON "pages_blocks_content_columns" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_content_order_idx" ON "pages_blocks_content" USING btree ("_order");
  CREATE INDEX "pages_blocks_content_parent_id_idx" ON "pages_blocks_content" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_content_path_idx" ON "pages_blocks_content" USING btree ("_path");
  CREATE INDEX "pages_blocks_cta_card_order_idx" ON "pages_blocks_cta_card" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta_card_parent_id_idx" ON "pages_blocks_cta_card" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta_card_path_idx" ON "pages_blocks_cta_card" USING btree ("_path");
  CREATE INDEX "pages_blocks_cta_section_order_idx" ON "pages_blocks_cta_section" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta_section_parent_id_idx" ON "pages_blocks_cta_section" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta_section_path_idx" ON "pages_blocks_cta_section" USING btree ("_path");
  CREATE INDEX "pages_blocks_media_block_order_idx" ON "pages_blocks_media_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_media_block_parent_id_idx" ON "pages_blocks_media_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_media_block_path_idx" ON "pages_blocks_media_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_media_block_media_idx" ON "pages_blocks_media_block" USING btree ("media_id");
  CREATE INDEX "pages_blocks_archive_order_idx" ON "pages_blocks_archive" USING btree ("_order");
  CREATE INDEX "pages_blocks_archive_parent_id_idx" ON "pages_blocks_archive" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_archive_path_idx" ON "pages_blocks_archive" USING btree ("_path");
  CREATE INDEX "pages_blocks_form_block_order_idx" ON "pages_blocks_form_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_form_block_parent_id_idx" ON "pages_blocks_form_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_form_block_path_idx" ON "pages_blocks_form_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_form_block_form_idx" ON "pages_blocks_form_block" USING btree ("form_id");
  CREATE INDEX "pages_blocks_signup_c_t_a_buttons_order_idx" ON "pages_blocks_signup_c_t_a_buttons" USING btree ("_order");
  CREATE INDEX "pages_blocks_signup_c_t_a_buttons_parent_id_idx" ON "pages_blocks_signup_c_t_a_buttons" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_signup_c_t_a_order_idx" ON "pages_blocks_signup_c_t_a" USING btree ("_order");
  CREATE INDEX "pages_blocks_signup_c_t_a_parent_id_idx" ON "pages_blocks_signup_c_t_a" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_signup_c_t_a_path_idx" ON "pages_blocks_signup_c_t_a" USING btree ("_path");
  CREATE INDEX "pages_blocks_two_column_text_image_links_order_idx" ON "pages_blocks_two_column_text_image_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_two_column_text_image_links_parent_id_idx" ON "pages_blocks_two_column_text_image_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_two_column_text_image_order_idx" ON "pages_blocks_two_column_text_image" USING btree ("_order");
  CREATE INDEX "pages_blocks_two_column_text_image_parent_id_idx" ON "pages_blocks_two_column_text_image" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_two_column_text_image_path_idx" ON "pages_blocks_two_column_text_image" USING btree ("_path");
  CREATE INDEX "pages_blocks_two_column_text_image_media_idx" ON "pages_blocks_two_column_text_image" USING btree ("media_id");
  CREATE INDEX "pages_blocks_profile_with_image_order_idx" ON "pages_blocks_profile_with_image" USING btree ("_order");
  CREATE INDEX "pages_blocks_profile_with_image_parent_id_idx" ON "pages_blocks_profile_with_image" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_profile_with_image_path_idx" ON "pages_blocks_profile_with_image" USING btree ("_path");
  CREATE INDEX "pages_blocks_profile_with_image_media_idx" ON "pages_blocks_profile_with_image" USING btree ("media_id");
  CREATE INDEX "pages_blocks_video_embed_with_heading_heading_order_idx" ON "pages_blocks_video_embed_with_heading_heading" USING btree ("_order");
  CREATE INDEX "pages_blocks_video_embed_with_heading_heading_parent_id_idx" ON "pages_blocks_video_embed_with_heading_heading" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_video_embed_with_heading_order_idx" ON "pages_blocks_video_embed_with_heading" USING btree ("_order");
  CREATE INDEX "pages_blocks_video_embed_with_heading_parent_id_idx" ON "pages_blocks_video_embed_with_heading" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_video_embed_with_heading_path_idx" ON "pages_blocks_video_embed_with_heading" USING btree ("_path");
  CREATE INDEX "pages_blocks_pricing_plan_grid_heading_order_idx" ON "pages_blocks_pricing_plan_grid_heading" USING btree ("_order");
  CREATE INDEX "pages_blocks_pricing_plan_grid_heading_parent_id_idx" ON "pages_blocks_pricing_plan_grid_heading" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_pricing_card_order_idx" ON "pages_blocks_pricing_card" USING btree ("_order");
  CREATE INDEX "pages_blocks_pricing_card_parent_id_idx" ON "pages_blocks_pricing_card" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_pricing_card_path_idx" ON "pages_blocks_pricing_card" USING btree ("_path");
  CREATE INDEX "pages_blocks_pricing_plan_grid_order_idx" ON "pages_blocks_pricing_plan_grid" USING btree ("_order");
  CREATE INDEX "pages_blocks_pricing_plan_grid_parent_id_idx" ON "pages_blocks_pricing_plan_grid" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_pricing_plan_grid_path_idx" ON "pages_blocks_pricing_plan_grid" USING btree ("_path");
  CREATE INDEX "pages_blocks_section_hero_with_badge_order_idx" ON "pages_blocks_section_hero_with_badge" USING btree ("_order");
  CREATE INDEX "pages_blocks_section_hero_with_badge_parent_id_idx" ON "pages_blocks_section_hero_with_badge" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_section_hero_with_badge_path_idx" ON "pages_blocks_section_hero_with_badge" USING btree ("_path");
  CREATE INDEX "pages_blocks_section_hero_with_badge_image_idx" ON "pages_blocks_section_hero_with_badge" USING btree ("image_id");
  CREATE INDEX "pages_blocks_service_card_grid_heading_order_idx" ON "pages_blocks_service_card_grid_heading" USING btree ("_order");
  CREATE INDEX "pages_blocks_service_card_grid_heading_parent_id_idx" ON "pages_blocks_service_card_grid_heading" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_service_card_order_idx" ON "pages_blocks_service_card" USING btree ("_order");
  CREATE INDEX "pages_blocks_service_card_parent_id_idx" ON "pages_blocks_service_card" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_service_card_path_idx" ON "pages_blocks_service_card" USING btree ("_path");
  CREATE INDEX "pages_blocks_service_card_image_idx" ON "pages_blocks_service_card" USING btree ("image_id");
  CREATE INDEX "pages_blocks_service_card_grid_order_idx" ON "pages_blocks_service_card_grid" USING btree ("_order");
  CREATE INDEX "pages_blocks_service_card_grid_parent_id_idx" ON "pages_blocks_service_card_grid" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_service_card_grid_path_idx" ON "pages_blocks_service_card_grid" USING btree ("_path");
  CREATE INDEX "pages_blocks_embed_code_order_idx" ON "pages_blocks_embed_code" USING btree ("_order");
  CREATE INDEX "pages_blocks_embed_code_parent_id_idx" ON "pages_blocks_embed_code" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_embed_code_path_idx" ON "pages_blocks_embed_code" USING btree ("_path");
  CREATE INDEX "pages_blocks_feature_cards_features_order_idx" ON "pages_blocks_feature_cards_features" USING btree ("_order");
  CREATE INDEX "pages_blocks_feature_cards_features_parent_id_idx" ON "pages_blocks_feature_cards_features" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_feature_cards_features_image_idx" ON "pages_blocks_feature_cards_features" USING btree ("image_id");
  CREATE INDEX "pages_blocks_feature_cards_order_idx" ON "pages_blocks_feature_cards" USING btree ("_order");
  CREATE INDEX "pages_blocks_feature_cards_parent_id_idx" ON "pages_blocks_feature_cards" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_feature_cards_path_idx" ON "pages_blocks_feature_cards" USING btree ("_path");
  CREATE INDEX "pages_blocks_feature_highlights_features_order_idx" ON "pages_blocks_feature_highlights_features" USING btree ("_order");
  CREATE INDEX "pages_blocks_feature_highlights_features_parent_id_idx" ON "pages_blocks_feature_highlights_features" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_feature_highlights_order_idx" ON "pages_blocks_feature_highlights" USING btree ("_order");
  CREATE INDEX "pages_blocks_feature_highlights_parent_id_idx" ON "pages_blocks_feature_highlights" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_feature_highlights_path_idx" ON "pages_blocks_feature_highlights" USING btree ("_path");
  CREATE INDEX "pages_blocks_feature_highlights_image_idx" ON "pages_blocks_feature_highlights" USING btree ("image_id");
  CREATE INDEX "pages_blocks_text_section_order_idx" ON "pages_blocks_text_section" USING btree ("_order");
  CREATE INDEX "pages_blocks_text_section_parent_id_idx" ON "pages_blocks_text_section" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_text_section_path_idx" ON "pages_blocks_text_section" USING btree ("_path");
  CREATE INDEX "pages_blocks_image_content_order_idx" ON "pages_blocks_image_content" USING btree ("_order");
  CREATE INDEX "pages_blocks_image_content_parent_id_idx" ON "pages_blocks_image_content" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_image_content_path_idx" ON "pages_blocks_image_content" USING btree ("_path");
  CREATE INDEX "pages_blocks_image_content_image_idx" ON "pages_blocks_image_content" USING btree ("image_id");
  CREATE INDEX "pages_blocks_faq_faq_items_order_idx" ON "pages_blocks_faq_faq_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq_faq_items_parent_id_idx" ON "pages_blocks_faq_faq_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_order_idx" ON "pages_blocks_faq" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq_parent_id_idx" ON "pages_blocks_faq" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_path_idx" ON "pages_blocks_faq" USING btree ("_path");
  CREATE INDEX "pages_blocks_faq_grid_faq_items_order_idx" ON "pages_blocks_faq_grid_faq_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq_grid_faq_items_parent_id_idx" ON "pages_blocks_faq_grid_faq_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_grid_order_idx" ON "pages_blocks_faq_grid" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq_grid_parent_id_idx" ON "pages_blocks_faq_grid" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_grid_path_idx" ON "pages_blocks_faq_grid" USING btree ("_path");
  CREATE INDEX "pages_blocks_testimonial1_order_idx" ON "pages_blocks_testimonial1" USING btree ("_order");
  CREATE INDEX "pages_blocks_testimonial1_parent_id_idx" ON "pages_blocks_testimonial1" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_testimonial1_path_idx" ON "pages_blocks_testimonial1" USING btree ("_path");
  CREATE INDEX "pages_blocks_testimonial1_author_image_idx" ON "pages_blocks_testimonial1" USING btree ("author_image_id");
  CREATE INDEX "pages_blocks_testimonial3_testimonials_order_idx" ON "pages_blocks_testimonial3_testimonials" USING btree ("_order");
  CREATE INDEX "pages_blocks_testimonial3_testimonials_parent_id_idx" ON "pages_blocks_testimonial3_testimonials" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_testimonial3_testimonials_author_image_idx" ON "pages_blocks_testimonial3_testimonials" USING btree ("author_image_id");
  CREATE INDEX "pages_blocks_testimonial3_order_idx" ON "pages_blocks_testimonial3" USING btree ("_order");
  CREATE INDEX "pages_blocks_testimonial3_parent_id_idx" ON "pages_blocks_testimonial3" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_testimonial3_path_idx" ON "pages_blocks_testimonial3" USING btree ("_path");
  CREATE INDEX "pages_blocks_testimonial4_testimonials_order_idx" ON "pages_blocks_testimonial4_testimonials" USING btree ("_order");
  CREATE INDEX "pages_blocks_testimonial4_testimonials_parent_id_idx" ON "pages_blocks_testimonial4_testimonials" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_testimonial4_testimonials_author_image_idx" ON "pages_blocks_testimonial4_testimonials" USING btree ("author_image_id");
  CREATE INDEX "pages_blocks_testimonial4_order_idx" ON "pages_blocks_testimonial4" USING btree ("_order");
  CREATE INDEX "pages_blocks_testimonial4_parent_id_idx" ON "pages_blocks_testimonial4" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_testimonial4_path_idx" ON "pages_blocks_testimonial4" USING btree ("_path");
  CREATE INDEX "pages_blocks_testimonial_grid_testimonials_order_idx" ON "pages_blocks_testimonial_grid_testimonials" USING btree ("_order");
  CREATE INDEX "pages_blocks_testimonial_grid_testimonials_parent_id_idx" ON "pages_blocks_testimonial_grid_testimonials" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_testimonial_grid_testimonials_author_image_idx" ON "pages_blocks_testimonial_grid_testimonials" USING btree ("author_image_id");
  CREATE INDEX "pages_blocks_testimonial_grid_order_idx" ON "pages_blocks_testimonial_grid" USING btree ("_order");
  CREATE INDEX "pages_blocks_testimonial_grid_parent_id_idx" ON "pages_blocks_testimonial_grid" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_testimonial_grid_path_idx" ON "pages_blocks_testimonial_grid" USING btree ("_path");
  CREATE INDEX "pages_blocks_pricing1_plans_features_order_idx" ON "pages_blocks_pricing1_plans_features" USING btree ("_order");
  CREATE INDEX "pages_blocks_pricing1_plans_features_parent_id_idx" ON "pages_blocks_pricing1_plans_features" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_pricing1_plans_order_idx" ON "pages_blocks_pricing1_plans" USING btree ("_order");
  CREATE INDEX "pages_blocks_pricing1_plans_parent_id_idx" ON "pages_blocks_pricing1_plans" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_pricing1_order_idx" ON "pages_blocks_pricing1" USING btree ("_order");
  CREATE INDEX "pages_blocks_pricing1_parent_id_idx" ON "pages_blocks_pricing1" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_pricing1_path_idx" ON "pages_blocks_pricing1" USING btree ("_path");
  CREATE INDEX "pages_blocks_logo_carousel_order_idx" ON "pages_blocks_logo_carousel" USING btree ("_order");
  CREATE INDEX "pages_blocks_logo_carousel_parent_id_idx" ON "pages_blocks_logo_carousel" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_logo_carousel_path_idx" ON "pages_blocks_logo_carousel" USING btree ("_path");
  CREATE INDEX "pages_hero_hero_media_idx" ON "pages" USING btree ("hero_media_id");
  CREATE INDEX "pages_meta_meta_image_idx" ON "pages" USING btree ("meta_image_id");
  CREATE UNIQUE INDEX "pages_slug_idx" ON "pages" USING btree ("slug");
  CREATE INDEX "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX "pages__status_idx" ON "pages" USING btree ("_status");
  CREATE INDEX "pages_rels_order_idx" ON "pages_rels" USING btree ("order");
  CREATE INDEX "pages_rels_parent_idx" ON "pages_rels" USING btree ("parent_id");
  CREATE INDEX "pages_rels_path_idx" ON "pages_rels" USING btree ("path");
  CREATE INDEX "pages_rels_pages_id_idx" ON "pages_rels" USING btree ("pages_id");
  CREATE INDEX "pages_rels_posts_id_idx" ON "pages_rels" USING btree ("posts_id");
  CREATE INDEX "pages_rels_categories_id_idx" ON "pages_rels" USING btree ("categories_id");
  CREATE INDEX "pages_rels_projects_id_idx" ON "pages_rels" USING btree ("projects_id");
  CREATE INDEX "pages_rels_clients_id_idx" ON "pages_rels" USING btree ("clients_id");
  CREATE INDEX "pages_rels_institutes_id_idx" ON "pages_rels" USING btree ("institutes_id");
  CREATE INDEX "pages_rels_technologies_id_idx" ON "pages_rels" USING btree ("technologies_id");
  CREATE INDEX "_pages_v_version_hero_links_order_idx" ON "_pages_v_version_hero_links" USING btree ("_order");
  CREATE INDEX "_pages_v_version_hero_links_parent_id_idx" ON "_pages_v_version_hero_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta_links_order_idx" ON "_pages_v_blocks_cta_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cta_links_parent_id_idx" ON "_pages_v_blocks_cta_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta_order_idx" ON "_pages_v_blocks_cta" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cta_parent_id_idx" ON "_pages_v_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta_path_idx" ON "_pages_v_blocks_cta" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_content_columns_order_idx" ON "_pages_v_blocks_content_columns" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_content_columns_parent_id_idx" ON "_pages_v_blocks_content_columns" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_content_order_idx" ON "_pages_v_blocks_content" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_content_parent_id_idx" ON "_pages_v_blocks_content" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_content_path_idx" ON "_pages_v_blocks_content" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_cta_card_order_idx" ON "_pages_v_blocks_cta_card" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cta_card_parent_id_idx" ON "_pages_v_blocks_cta_card" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta_card_path_idx" ON "_pages_v_blocks_cta_card" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_cta_section_order_idx" ON "_pages_v_blocks_cta_section" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cta_section_parent_id_idx" ON "_pages_v_blocks_cta_section" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta_section_path_idx" ON "_pages_v_blocks_cta_section" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_media_block_order_idx" ON "_pages_v_blocks_media_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_media_block_parent_id_idx" ON "_pages_v_blocks_media_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_media_block_path_idx" ON "_pages_v_blocks_media_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_media_block_media_idx" ON "_pages_v_blocks_media_block" USING btree ("media_id");
  CREATE INDEX "_pages_v_blocks_archive_order_idx" ON "_pages_v_blocks_archive" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_archive_parent_id_idx" ON "_pages_v_blocks_archive" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_archive_path_idx" ON "_pages_v_blocks_archive" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_form_block_order_idx" ON "_pages_v_blocks_form_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_form_block_parent_id_idx" ON "_pages_v_blocks_form_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_form_block_path_idx" ON "_pages_v_blocks_form_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_form_block_form_idx" ON "_pages_v_blocks_form_block" USING btree ("form_id");
  CREATE INDEX "_pages_v_blocks_signup_c_t_a_buttons_order_idx" ON "_pages_v_blocks_signup_c_t_a_buttons" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_signup_c_t_a_buttons_parent_id_idx" ON "_pages_v_blocks_signup_c_t_a_buttons" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_signup_c_t_a_order_idx" ON "_pages_v_blocks_signup_c_t_a" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_signup_c_t_a_parent_id_idx" ON "_pages_v_blocks_signup_c_t_a" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_signup_c_t_a_path_idx" ON "_pages_v_blocks_signup_c_t_a" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_two_column_text_image_links_order_idx" ON "_pages_v_blocks_two_column_text_image_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_two_column_text_image_links_parent_id_idx" ON "_pages_v_blocks_two_column_text_image_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_two_column_text_image_order_idx" ON "_pages_v_blocks_two_column_text_image" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_two_column_text_image_parent_id_idx" ON "_pages_v_blocks_two_column_text_image" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_two_column_text_image_path_idx" ON "_pages_v_blocks_two_column_text_image" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_two_column_text_image_media_idx" ON "_pages_v_blocks_two_column_text_image" USING btree ("media_id");
  CREATE INDEX "_pages_v_blocks_profile_with_image_order_idx" ON "_pages_v_blocks_profile_with_image" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_profile_with_image_parent_id_idx" ON "_pages_v_blocks_profile_with_image" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_profile_with_image_path_idx" ON "_pages_v_blocks_profile_with_image" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_profile_with_image_media_idx" ON "_pages_v_blocks_profile_with_image" USING btree ("media_id");
  CREATE INDEX "_pages_v_blocks_video_embed_with_heading_heading_order_idx" ON "_pages_v_blocks_video_embed_with_heading_heading" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_video_embed_with_heading_heading_parent_id_idx" ON "_pages_v_blocks_video_embed_with_heading_heading" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_video_embed_with_heading_order_idx" ON "_pages_v_blocks_video_embed_with_heading" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_video_embed_with_heading_parent_id_idx" ON "_pages_v_blocks_video_embed_with_heading" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_video_embed_with_heading_path_idx" ON "_pages_v_blocks_video_embed_with_heading" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_pricing_plan_grid_heading_order_idx" ON "_pages_v_blocks_pricing_plan_grid_heading" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_pricing_plan_grid_heading_parent_id_idx" ON "_pages_v_blocks_pricing_plan_grid_heading" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_pricing_card_order_idx" ON "_pages_v_blocks_pricing_card" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_pricing_card_parent_id_idx" ON "_pages_v_blocks_pricing_card" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_pricing_card_path_idx" ON "_pages_v_blocks_pricing_card" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_pricing_plan_grid_order_idx" ON "_pages_v_blocks_pricing_plan_grid" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_pricing_plan_grid_parent_id_idx" ON "_pages_v_blocks_pricing_plan_grid" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_pricing_plan_grid_path_idx" ON "_pages_v_blocks_pricing_plan_grid" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_section_hero_with_badge_order_idx" ON "_pages_v_blocks_section_hero_with_badge" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_section_hero_with_badge_parent_id_idx" ON "_pages_v_blocks_section_hero_with_badge" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_section_hero_with_badge_path_idx" ON "_pages_v_blocks_section_hero_with_badge" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_section_hero_with_badge_image_idx" ON "_pages_v_blocks_section_hero_with_badge" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_service_card_grid_heading_order_idx" ON "_pages_v_blocks_service_card_grid_heading" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_service_card_grid_heading_parent_id_idx" ON "_pages_v_blocks_service_card_grid_heading" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_service_card_order_idx" ON "_pages_v_blocks_service_card" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_service_card_parent_id_idx" ON "_pages_v_blocks_service_card" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_service_card_path_idx" ON "_pages_v_blocks_service_card" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_service_card_image_idx" ON "_pages_v_blocks_service_card" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_service_card_grid_order_idx" ON "_pages_v_blocks_service_card_grid" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_service_card_grid_parent_id_idx" ON "_pages_v_blocks_service_card_grid" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_service_card_grid_path_idx" ON "_pages_v_blocks_service_card_grid" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_embed_code_order_idx" ON "_pages_v_blocks_embed_code" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_embed_code_parent_id_idx" ON "_pages_v_blocks_embed_code" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_embed_code_path_idx" ON "_pages_v_blocks_embed_code" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_feature_cards_features_order_idx" ON "_pages_v_blocks_feature_cards_features" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_feature_cards_features_parent_id_idx" ON "_pages_v_blocks_feature_cards_features" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_feature_cards_features_image_idx" ON "_pages_v_blocks_feature_cards_features" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_feature_cards_order_idx" ON "_pages_v_blocks_feature_cards" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_feature_cards_parent_id_idx" ON "_pages_v_blocks_feature_cards" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_feature_cards_path_idx" ON "_pages_v_blocks_feature_cards" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_feature_highlights_features_order_idx" ON "_pages_v_blocks_feature_highlights_features" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_feature_highlights_features_parent_id_idx" ON "_pages_v_blocks_feature_highlights_features" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_feature_highlights_order_idx" ON "_pages_v_blocks_feature_highlights" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_feature_highlights_parent_id_idx" ON "_pages_v_blocks_feature_highlights" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_feature_highlights_path_idx" ON "_pages_v_blocks_feature_highlights" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_feature_highlights_image_idx" ON "_pages_v_blocks_feature_highlights" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_text_section_order_idx" ON "_pages_v_blocks_text_section" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_text_section_parent_id_idx" ON "_pages_v_blocks_text_section" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_text_section_path_idx" ON "_pages_v_blocks_text_section" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_image_content_order_idx" ON "_pages_v_blocks_image_content" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_image_content_parent_id_idx" ON "_pages_v_blocks_image_content" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_image_content_path_idx" ON "_pages_v_blocks_image_content" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_image_content_image_idx" ON "_pages_v_blocks_image_content" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_faq_faq_items_order_idx" ON "_pages_v_blocks_faq_faq_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_faq_faq_items_parent_id_idx" ON "_pages_v_blocks_faq_faq_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_faq_order_idx" ON "_pages_v_blocks_faq" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_faq_parent_id_idx" ON "_pages_v_blocks_faq" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_faq_path_idx" ON "_pages_v_blocks_faq" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_faq_grid_faq_items_order_idx" ON "_pages_v_blocks_faq_grid_faq_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_faq_grid_faq_items_parent_id_idx" ON "_pages_v_blocks_faq_grid_faq_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_faq_grid_order_idx" ON "_pages_v_blocks_faq_grid" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_faq_grid_parent_id_idx" ON "_pages_v_blocks_faq_grid" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_faq_grid_path_idx" ON "_pages_v_blocks_faq_grid" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_testimonial1_order_idx" ON "_pages_v_blocks_testimonial1" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_testimonial1_parent_id_idx" ON "_pages_v_blocks_testimonial1" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_testimonial1_path_idx" ON "_pages_v_blocks_testimonial1" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_testimonial1_author_image_idx" ON "_pages_v_blocks_testimonial1" USING btree ("author_image_id");
  CREATE INDEX "_pages_v_blocks_testimonial3_testimonials_order_idx" ON "_pages_v_blocks_testimonial3_testimonials" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_testimonial3_testimonials_parent_id_idx" ON "_pages_v_blocks_testimonial3_testimonials" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_testimonial3_testimonials_author_image_idx" ON "_pages_v_blocks_testimonial3_testimonials" USING btree ("author_image_id");
  CREATE INDEX "_pages_v_blocks_testimonial3_order_idx" ON "_pages_v_blocks_testimonial3" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_testimonial3_parent_id_idx" ON "_pages_v_blocks_testimonial3" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_testimonial3_path_idx" ON "_pages_v_blocks_testimonial3" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_testimonial4_testimonials_order_idx" ON "_pages_v_blocks_testimonial4_testimonials" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_testimonial4_testimonials_parent_id_idx" ON "_pages_v_blocks_testimonial4_testimonials" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_testimonial4_testimonials_author_image_idx" ON "_pages_v_blocks_testimonial4_testimonials" USING btree ("author_image_id");
  CREATE INDEX "_pages_v_blocks_testimonial4_order_idx" ON "_pages_v_blocks_testimonial4" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_testimonial4_parent_id_idx" ON "_pages_v_blocks_testimonial4" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_testimonial4_path_idx" ON "_pages_v_blocks_testimonial4" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_testimonial_grid_testimonials_order_idx" ON "_pages_v_blocks_testimonial_grid_testimonials" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_testimonial_grid_testimonials_parent_id_idx" ON "_pages_v_blocks_testimonial_grid_testimonials" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_testimonial_grid_testimonials_author_ima_idx" ON "_pages_v_blocks_testimonial_grid_testimonials" USING btree ("author_image_id");
  CREATE INDEX "_pages_v_blocks_testimonial_grid_order_idx" ON "_pages_v_blocks_testimonial_grid" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_testimonial_grid_parent_id_idx" ON "_pages_v_blocks_testimonial_grid" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_testimonial_grid_path_idx" ON "_pages_v_blocks_testimonial_grid" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_pricing1_plans_features_order_idx" ON "_pages_v_blocks_pricing1_plans_features" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_pricing1_plans_features_parent_id_idx" ON "_pages_v_blocks_pricing1_plans_features" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_pricing1_plans_order_idx" ON "_pages_v_blocks_pricing1_plans" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_pricing1_plans_parent_id_idx" ON "_pages_v_blocks_pricing1_plans" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_pricing1_order_idx" ON "_pages_v_blocks_pricing1" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_pricing1_parent_id_idx" ON "_pages_v_blocks_pricing1" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_pricing1_path_idx" ON "_pages_v_blocks_pricing1" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_logo_carousel_order_idx" ON "_pages_v_blocks_logo_carousel" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_logo_carousel_parent_id_idx" ON "_pages_v_blocks_logo_carousel" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_logo_carousel_path_idx" ON "_pages_v_blocks_logo_carousel" USING btree ("_path");
  CREATE INDEX "_pages_v_parent_idx" ON "_pages_v" USING btree ("parent_id");
  CREATE INDEX "_pages_v_version_hero_version_hero_media_idx" ON "_pages_v" USING btree ("version_hero_media_id");
  CREATE INDEX "_pages_v_version_meta_version_meta_image_idx" ON "_pages_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_pages_v_version_version_slug_idx" ON "_pages_v" USING btree ("version_slug");
  CREATE INDEX "_pages_v_version_version_updated_at_idx" ON "_pages_v" USING btree ("version_updated_at");
  CREATE INDEX "_pages_v_version_version_created_at_idx" ON "_pages_v" USING btree ("version_created_at");
  CREATE INDEX "_pages_v_version_version__status_idx" ON "_pages_v" USING btree ("version__status");
  CREATE INDEX "_pages_v_created_at_idx" ON "_pages_v" USING btree ("created_at");
  CREATE INDEX "_pages_v_updated_at_idx" ON "_pages_v" USING btree ("updated_at");
  CREATE INDEX "_pages_v_latest_idx" ON "_pages_v" USING btree ("latest");
  CREATE INDEX "_pages_v_autosave_idx" ON "_pages_v" USING btree ("autosave");
  CREATE INDEX "_pages_v_rels_order_idx" ON "_pages_v_rels" USING btree ("order");
  CREATE INDEX "_pages_v_rels_parent_idx" ON "_pages_v_rels" USING btree ("parent_id");
  CREATE INDEX "_pages_v_rels_path_idx" ON "_pages_v_rels" USING btree ("path");
  CREATE INDEX "_pages_v_rels_pages_id_idx" ON "_pages_v_rels" USING btree ("pages_id");
  CREATE INDEX "_pages_v_rels_posts_id_idx" ON "_pages_v_rels" USING btree ("posts_id");
  CREATE INDEX "_pages_v_rels_categories_id_idx" ON "_pages_v_rels" USING btree ("categories_id");
  CREATE INDEX "_pages_v_rels_projects_id_idx" ON "_pages_v_rels" USING btree ("projects_id");
  CREATE INDEX "_pages_v_rels_clients_id_idx" ON "_pages_v_rels" USING btree ("clients_id");
  CREATE INDEX "_pages_v_rels_institutes_id_idx" ON "_pages_v_rels" USING btree ("institutes_id");
  CREATE INDEX "_pages_v_rels_technologies_id_idx" ON "_pages_v_rels" USING btree ("technologies_id");
  CREATE INDEX "posts_populated_authors_order_idx" ON "posts_populated_authors" USING btree ("_order");
  CREATE INDEX "posts_populated_authors_parent_id_idx" ON "posts_populated_authors" USING btree ("_parent_id");
  CREATE INDEX "posts_hero_image_idx" ON "posts" USING btree ("hero_image_id");
  CREATE INDEX "posts_meta_meta_image_idx" ON "posts" USING btree ("meta_image_id");
  CREATE UNIQUE INDEX "posts_slug_idx" ON "posts" USING btree ("slug");
  CREATE INDEX "posts_updated_at_idx" ON "posts" USING btree ("updated_at");
  CREATE INDEX "posts_created_at_idx" ON "posts" USING btree ("created_at");
  CREATE INDEX "posts__status_idx" ON "posts" USING btree ("_status");
  CREATE INDEX "posts_rels_order_idx" ON "posts_rels" USING btree ("order");
  CREATE INDEX "posts_rels_parent_idx" ON "posts_rels" USING btree ("parent_id");
  CREATE INDEX "posts_rels_path_idx" ON "posts_rels" USING btree ("path");
  CREATE INDEX "posts_rels_posts_id_idx" ON "posts_rels" USING btree ("posts_id");
  CREATE INDEX "posts_rels_categories_id_idx" ON "posts_rels" USING btree ("categories_id");
  CREATE INDEX "posts_rels_users_id_idx" ON "posts_rels" USING btree ("users_id");
  CREATE INDEX "_posts_v_version_populated_authors_order_idx" ON "_posts_v_version_populated_authors" USING btree ("_order");
  CREATE INDEX "_posts_v_version_populated_authors_parent_id_idx" ON "_posts_v_version_populated_authors" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_parent_idx" ON "_posts_v" USING btree ("parent_id");
  CREATE INDEX "_posts_v_version_version_hero_image_idx" ON "_posts_v" USING btree ("version_hero_image_id");
  CREATE INDEX "_posts_v_version_meta_version_meta_image_idx" ON "_posts_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_posts_v_version_version_slug_idx" ON "_posts_v" USING btree ("version_slug");
  CREATE INDEX "_posts_v_version_version_updated_at_idx" ON "_posts_v" USING btree ("version_updated_at");
  CREATE INDEX "_posts_v_version_version_created_at_idx" ON "_posts_v" USING btree ("version_created_at");
  CREATE INDEX "_posts_v_version_version__status_idx" ON "_posts_v" USING btree ("version__status");
  CREATE INDEX "_posts_v_created_at_idx" ON "_posts_v" USING btree ("created_at");
  CREATE INDEX "_posts_v_updated_at_idx" ON "_posts_v" USING btree ("updated_at");
  CREATE INDEX "_posts_v_latest_idx" ON "_posts_v" USING btree ("latest");
  CREATE INDEX "_posts_v_autosave_idx" ON "_posts_v" USING btree ("autosave");
  CREATE INDEX "_posts_v_rels_order_idx" ON "_posts_v_rels" USING btree ("order");
  CREATE INDEX "_posts_v_rels_parent_idx" ON "_posts_v_rels" USING btree ("parent_id");
  CREATE INDEX "_posts_v_rels_path_idx" ON "_posts_v_rels" USING btree ("path");
  CREATE INDEX "_posts_v_rels_posts_id_idx" ON "_posts_v_rels" USING btree ("posts_id");
  CREATE INDEX "_posts_v_rels_categories_id_idx" ON "_posts_v_rels" USING btree ("categories_id");
  CREATE INDEX "_posts_v_rels_users_id_idx" ON "_posts_v_rels" USING btree ("users_id");
  CREATE INDEX "projects_hero_image_idx" ON "projects" USING btree ("hero_image_id");
  CREATE INDEX "projects_meta_meta_image_idx" ON "projects" USING btree ("meta_image_id");
  CREATE UNIQUE INDEX "projects_slug_idx" ON "projects" USING btree ("slug");
  CREATE INDEX "projects_updated_at_idx" ON "projects" USING btree ("updated_at");
  CREATE INDEX "projects_created_at_idx" ON "projects" USING btree ("created_at");
  CREATE INDEX "projects__status_idx" ON "projects" USING btree ("_status");
  CREATE INDEX "projects_rels_order_idx" ON "projects_rels" USING btree ("order");
  CREATE INDEX "projects_rels_parent_idx" ON "projects_rels" USING btree ("parent_id");
  CREATE INDEX "projects_rels_path_idx" ON "projects_rels" USING btree ("path");
  CREATE INDEX "projects_rels_clients_id_idx" ON "projects_rels" USING btree ("clients_id");
  CREATE INDEX "projects_rels_technologies_id_idx" ON "projects_rels" USING btree ("technologies_id");
  CREATE INDEX "projects_rels_categories_id_idx" ON "projects_rels" USING btree ("categories_id");
  CREATE INDEX "_projects_v_parent_idx" ON "_projects_v" USING btree ("parent_id");
  CREATE INDEX "_projects_v_version_version_hero_image_idx" ON "_projects_v" USING btree ("version_hero_image_id");
  CREATE INDEX "_projects_v_version_meta_version_meta_image_idx" ON "_projects_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_projects_v_version_version_slug_idx" ON "_projects_v" USING btree ("version_slug");
  CREATE INDEX "_projects_v_version_version_updated_at_idx" ON "_projects_v" USING btree ("version_updated_at");
  CREATE INDEX "_projects_v_version_version_created_at_idx" ON "_projects_v" USING btree ("version_created_at");
  CREATE INDEX "_projects_v_version_version__status_idx" ON "_projects_v" USING btree ("version__status");
  CREATE INDEX "_projects_v_created_at_idx" ON "_projects_v" USING btree ("created_at");
  CREATE INDEX "_projects_v_updated_at_idx" ON "_projects_v" USING btree ("updated_at");
  CREATE INDEX "_projects_v_latest_idx" ON "_projects_v" USING btree ("latest");
  CREATE INDEX "_projects_v_autosave_idx" ON "_projects_v" USING btree ("autosave");
  CREATE INDEX "_projects_v_rels_order_idx" ON "_projects_v_rels" USING btree ("order");
  CREATE INDEX "_projects_v_rels_parent_idx" ON "_projects_v_rels" USING btree ("parent_id");
  CREATE INDEX "_projects_v_rels_path_idx" ON "_projects_v_rels" USING btree ("path");
  CREATE INDEX "_projects_v_rels_clients_id_idx" ON "_projects_v_rels" USING btree ("clients_id");
  CREATE INDEX "_projects_v_rels_technologies_id_idx" ON "_projects_v_rels" USING btree ("technologies_id");
  CREATE INDEX "_projects_v_rels_categories_id_idx" ON "_projects_v_rels" USING btree ("categories_id");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "media_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "media" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX "media_sizes_square_sizes_square_filename_idx" ON "media" USING btree ("sizes_square_filename");
  CREATE INDEX "media_sizes_small_sizes_small_filename_idx" ON "media" USING btree ("sizes_small_filename");
  CREATE INDEX "media_sizes_medium_sizes_medium_filename_idx" ON "media" USING btree ("sizes_medium_filename");
  CREATE INDEX "media_sizes_large_sizes_large_filename_idx" ON "media" USING btree ("sizes_large_filename");
  CREATE INDEX "media_sizes_xlarge_sizes_xlarge_filename_idx" ON "media" USING btree ("sizes_xlarge_filename");
  CREATE INDEX "media_sizes_og_sizes_og_filename_idx" ON "media" USING btree ("sizes_og_filename");
  CREATE INDEX "categories_breadcrumbs_order_idx" ON "categories_breadcrumbs" USING btree ("_order");
  CREATE INDEX "categories_breadcrumbs_parent_id_idx" ON "categories_breadcrumbs" USING btree ("_parent_id");
  CREATE INDEX "categories_breadcrumbs_doc_idx" ON "categories_breadcrumbs" USING btree ("doc_id");
  CREATE UNIQUE INDEX "categories_slug_idx" ON "categories" USING btree ("slug");
  CREATE INDEX "categories_parent_idx" ON "categories" USING btree ("parent_id");
  CREATE INDEX "categories_updated_at_idx" ON "categories" USING btree ("updated_at");
  CREATE INDEX "categories_created_at_idx" ON "categories" USING btree ("created_at");
  CREATE INDEX "clients_logo_idx" ON "clients" USING btree ("logo_id");
  CREATE INDEX "clients_logo_dark_idx" ON "clients" USING btree ("logo_dark_id");
  CREATE INDEX "clients_updated_at_idx" ON "clients" USING btree ("updated_at");
  CREATE INDEX "clients_created_at_idx" ON "clients" USING btree ("created_at");
  CREATE INDEX "institutes_logo_idx" ON "institutes" USING btree ("logo_id");
  CREATE INDEX "institutes_logo_dark_idx" ON "institutes" USING btree ("logo_dark_id");
  CREATE INDEX "institutes_updated_at_idx" ON "institutes" USING btree ("updated_at");
  CREATE INDEX "institutes_created_at_idx" ON "institutes" USING btree ("created_at");
  CREATE INDEX "technologies_logo_idx" ON "technologies" USING btree ("logo_id");
  CREATE INDEX "technologies_logo_dark_idx" ON "technologies" USING btree ("logo_dark_id");
  CREATE INDEX "technologies_updated_at_idx" ON "technologies" USING btree ("updated_at");
  CREATE INDEX "technologies_created_at_idx" ON "technologies" USING btree ("created_at");
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_avatar_idx" ON "users" USING btree ("avatar_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE UNIQUE INDEX "user_avatar_user_idx" ON "user_avatar" USING btree ("user_id");
  CREATE INDEX "user_avatar_updated_at_idx" ON "user_avatar" USING btree ("updated_at");
  CREATE INDEX "user_avatar_created_at_idx" ON "user_avatar" USING btree ("created_at");
  CREATE UNIQUE INDEX "user_avatar_filename_idx" ON "user_avatar" USING btree ("filename");
  CREATE INDEX "user_avatar_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "user_avatar" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX "user_avatar_sizes_small_sizes_small_filename_idx" ON "user_avatar" USING btree ("sizes_small_filename");
  CREATE INDEX "user_avatar_sizes_medium_sizes_medium_filename_idx" ON "user_avatar" USING btree ("sizes_medium_filename");
  CREATE UNIQUE INDEX "redirects_from_idx" ON "redirects" USING btree ("from");
  CREATE INDEX "redirects_updated_at_idx" ON "redirects" USING btree ("updated_at");
  CREATE INDEX "redirects_created_at_idx" ON "redirects" USING btree ("created_at");
  CREATE INDEX "redirects_rels_order_idx" ON "redirects_rels" USING btree ("order");
  CREATE INDEX "redirects_rels_parent_idx" ON "redirects_rels" USING btree ("parent_id");
  CREATE INDEX "redirects_rels_path_idx" ON "redirects_rels" USING btree ("path");
  CREATE INDEX "redirects_rels_pages_id_idx" ON "redirects_rels" USING btree ("pages_id");
  CREATE INDEX "redirects_rels_posts_id_idx" ON "redirects_rels" USING btree ("posts_id");
  CREATE INDEX "forms_blocks_checkbox_order_idx" ON "forms_blocks_checkbox" USING btree ("_order");
  CREATE INDEX "forms_blocks_checkbox_parent_id_idx" ON "forms_blocks_checkbox" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_checkbox_path_idx" ON "forms_blocks_checkbox" USING btree ("_path");
  CREATE INDEX "forms_blocks_country_order_idx" ON "forms_blocks_country" USING btree ("_order");
  CREATE INDEX "forms_blocks_country_parent_id_idx" ON "forms_blocks_country" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_country_path_idx" ON "forms_blocks_country" USING btree ("_path");
  CREATE INDEX "forms_blocks_email_order_idx" ON "forms_blocks_email" USING btree ("_order");
  CREATE INDEX "forms_blocks_email_parent_id_idx" ON "forms_blocks_email" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_email_path_idx" ON "forms_blocks_email" USING btree ("_path");
  CREATE INDEX "forms_blocks_message_order_idx" ON "forms_blocks_message" USING btree ("_order");
  CREATE INDEX "forms_blocks_message_parent_id_idx" ON "forms_blocks_message" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_message_path_idx" ON "forms_blocks_message" USING btree ("_path");
  CREATE INDEX "forms_blocks_number_order_idx" ON "forms_blocks_number" USING btree ("_order");
  CREATE INDEX "forms_blocks_number_parent_id_idx" ON "forms_blocks_number" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_number_path_idx" ON "forms_blocks_number" USING btree ("_path");
  CREATE INDEX "forms_blocks_select_options_order_idx" ON "forms_blocks_select_options" USING btree ("_order");
  CREATE INDEX "forms_blocks_select_options_parent_id_idx" ON "forms_blocks_select_options" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_select_order_idx" ON "forms_blocks_select" USING btree ("_order");
  CREATE INDEX "forms_blocks_select_parent_id_idx" ON "forms_blocks_select" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_select_path_idx" ON "forms_blocks_select" USING btree ("_path");
  CREATE INDEX "forms_blocks_state_order_idx" ON "forms_blocks_state" USING btree ("_order");
  CREATE INDEX "forms_blocks_state_parent_id_idx" ON "forms_blocks_state" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_state_path_idx" ON "forms_blocks_state" USING btree ("_path");
  CREATE INDEX "forms_blocks_text_order_idx" ON "forms_blocks_text" USING btree ("_order");
  CREATE INDEX "forms_blocks_text_parent_id_idx" ON "forms_blocks_text" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_text_path_idx" ON "forms_blocks_text" USING btree ("_path");
  CREATE INDEX "forms_blocks_textarea_order_idx" ON "forms_blocks_textarea" USING btree ("_order");
  CREATE INDEX "forms_blocks_textarea_parent_id_idx" ON "forms_blocks_textarea" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_textarea_path_idx" ON "forms_blocks_textarea" USING btree ("_path");
  CREATE INDEX "forms_emails_order_idx" ON "forms_emails" USING btree ("_order");
  CREATE INDEX "forms_emails_parent_id_idx" ON "forms_emails" USING btree ("_parent_id");
  CREATE INDEX "forms_updated_at_idx" ON "forms" USING btree ("updated_at");
  CREATE INDEX "forms_created_at_idx" ON "forms" USING btree ("created_at");
  CREATE INDEX "form_submissions_submission_data_order_idx" ON "form_submissions_submission_data" USING btree ("_order");
  CREATE INDEX "form_submissions_submission_data_parent_id_idx" ON "form_submissions_submission_data" USING btree ("_parent_id");
  CREATE INDEX "form_submissions_form_idx" ON "form_submissions" USING btree ("form_id");
  CREATE INDEX "form_submissions_updated_at_idx" ON "form_submissions" USING btree ("updated_at");
  CREATE INDEX "form_submissions_created_at_idx" ON "form_submissions" USING btree ("created_at");
  CREATE INDEX "search_categories_order_idx" ON "search_categories" USING btree ("_order");
  CREATE INDEX "search_categories_parent_id_idx" ON "search_categories" USING btree ("_parent_id");
  CREATE INDEX "search_slug_idx" ON "search" USING btree ("slug");
  CREATE INDEX "search_meta_meta_image_idx" ON "search" USING btree ("meta_image_id");
  CREATE INDEX "search_updated_at_idx" ON "search" USING btree ("updated_at");
  CREATE INDEX "search_created_at_idx" ON "search" USING btree ("created_at");
  CREATE INDEX "search_rels_order_idx" ON "search_rels" USING btree ("order");
  CREATE INDEX "search_rels_parent_idx" ON "search_rels" USING btree ("parent_id");
  CREATE INDEX "search_rels_path_idx" ON "search_rels" USING btree ("path");
  CREATE INDEX "search_rels_posts_id_idx" ON "search_rels" USING btree ("posts_id");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_jobs_log_order_idx" ON "payload_jobs_log" USING btree ("_order");
  CREATE INDEX "payload_jobs_log_parent_id_idx" ON "payload_jobs_log" USING btree ("_parent_id");
  CREATE INDEX "payload_jobs_completed_at_idx" ON "payload_jobs" USING btree ("completed_at");
  CREATE INDEX "payload_jobs_total_tried_idx" ON "payload_jobs" USING btree ("total_tried");
  CREATE INDEX "payload_jobs_has_error_idx" ON "payload_jobs" USING btree ("has_error");
  CREATE INDEX "payload_jobs_task_slug_idx" ON "payload_jobs" USING btree ("task_slug");
  CREATE INDEX "payload_jobs_queue_idx" ON "payload_jobs" USING btree ("queue");
  CREATE INDEX "payload_jobs_wait_until_idx" ON "payload_jobs" USING btree ("wait_until");
  CREATE INDEX "payload_jobs_processing_idx" ON "payload_jobs" USING btree ("processing");
  CREATE INDEX "payload_jobs_updated_at_idx" ON "payload_jobs" USING btree ("updated_at");
  CREATE INDEX "payload_jobs_created_at_idx" ON "payload_jobs" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");
  CREATE INDEX "payload_locked_documents_rels_posts_id_idx" ON "payload_locked_documents_rels" USING btree ("posts_id");
  CREATE INDEX "payload_locked_documents_rels_projects_id_idx" ON "payload_locked_documents_rels" USING btree ("projects_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_categories_id_idx" ON "payload_locked_documents_rels" USING btree ("categories_id");
  CREATE INDEX "payload_locked_documents_rels_clients_id_idx" ON "payload_locked_documents_rels" USING btree ("clients_id");
  CREATE INDEX "payload_locked_documents_rels_institutes_id_idx" ON "payload_locked_documents_rels" USING btree ("institutes_id");
  CREATE INDEX "payload_locked_documents_rels_technologies_id_idx" ON "payload_locked_documents_rels" USING btree ("technologies_id");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_locked_documents_rels_user_avatar_id_idx" ON "payload_locked_documents_rels" USING btree ("user_avatar_id");
  CREATE INDEX "payload_locked_documents_rels_redirects_id_idx" ON "payload_locked_documents_rels" USING btree ("redirects_id");
  CREATE INDEX "payload_locked_documents_rels_forms_id_idx" ON "payload_locked_documents_rels" USING btree ("forms_id");
  CREATE INDEX "payload_locked_documents_rels_form_submissions_id_idx" ON "payload_locked_documents_rels" USING btree ("form_submissions_id");
  CREATE INDEX "payload_locked_documents_rels_search_id_idx" ON "payload_locked_documents_rels" USING btree ("search_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "header_nav_items_order_idx" ON "header_nav_items" USING btree ("_order");
  CREATE INDEX "header_nav_items_parent_id_idx" ON "header_nav_items" USING btree ("_parent_id");
  CREATE INDEX "header_buttons_order_idx" ON "header_buttons" USING btree ("_order");
  CREATE INDEX "header_buttons_parent_id_idx" ON "header_buttons" USING btree ("_parent_id");
  CREATE INDEX "header_logo_logo_custom_logo_idx" ON "header" USING btree ("logo_custom_logo_id");
  CREATE INDEX "header_logo_logo_custom_logo_light_idx" ON "header" USING btree ("logo_custom_logo_light_id");
  CREATE INDEX "header_logo_logo_custom_logo_dark_idx" ON "header" USING btree ("logo_custom_logo_dark_id");
  CREATE INDEX "header_rels_order_idx" ON "header_rels" USING btree ("order");
  CREATE INDEX "header_rels_parent_idx" ON "header_rels" USING btree ("parent_id");
  CREATE INDEX "header_rels_path_idx" ON "header_rels" USING btree ("path");
  CREATE INDEX "header_rels_pages_id_idx" ON "header_rels" USING btree ("pages_id");
  CREATE INDEX "header_rels_posts_id_idx" ON "header_rels" USING btree ("posts_id");
  CREATE INDEX "footer_nav_items_order_idx" ON "footer_nav_items" USING btree ("_order");
  CREATE INDEX "footer_nav_items_parent_id_idx" ON "footer_nav_items" USING btree ("_parent_id");
  CREATE INDEX "footer_logo_logo_custom_logo_idx" ON "footer" USING btree ("logo_custom_logo_id");
  CREATE INDEX "footer_logo_logo_custom_logo_light_idx" ON "footer" USING btree ("logo_custom_logo_light_id");
  CREATE INDEX "footer_logo_logo_custom_logo_dark_idx" ON "footer" USING btree ("logo_custom_logo_dark_id");
  CREATE INDEX "footer_rels_order_idx" ON "footer_rels" USING btree ("order");
  CREATE INDEX "footer_rels_parent_idx" ON "footer_rels" USING btree ("parent_id");
  CREATE INDEX "footer_rels_path_idx" ON "footer_rels" USING btree ("path");
  CREATE INDEX "footer_rels_pages_id_idx" ON "footer_rels" USING btree ("pages_id");
  CREATE INDEX "footer_rels_posts_id_idx" ON "footer_rels" USING btree ("posts_id");
  CREATE INDEX "site_settings_legal_policies_order_idx" ON "site_settings_legal_policies" USING btree ("_order");
  CREATE INDEX "site_settings_legal_policies_parent_id_idx" ON "site_settings_legal_policies" USING btree ("_parent_id");
  CREATE INDEX "site_settings_social_media_platforms_order_idx" ON "site_settings_social_media_platforms" USING btree ("_order");
  CREATE INDEX "site_settings_social_media_platforms_parent_id_idx" ON "site_settings_social_media_platforms" USING btree ("_parent_id");
  CREATE INDEX "site_settings_branding_branding_logo_idx" ON "site_settings" USING btree ("branding_logo_id");
  CREATE INDEX "site_settings_branding_branding_logo_light_idx" ON "site_settings" USING btree ("branding_logo_light_id");
  CREATE INDEX "site_settings_branding_branding_logo_dark_idx" ON "site_settings" USING btree ("branding_logo_dark_id");
  CREATE INDEX "site_settings_branding_branding_favicon_idx" ON "site_settings" USING btree ("branding_favicon_id");
  CREATE INDEX "site_settings_branding_branding_admin_logo_idx" ON "site_settings" USING btree ("branding_admin_logo_id");
  CREATE INDEX "site_settings_branding_branding_admin_logo_light_idx" ON "site_settings" USING btree ("branding_admin_logo_light_id");
  CREATE INDEX "site_settings_branding_branding_admin_logo_dark_idx" ON "site_settings" USING btree ("branding_admin_logo_dark_id");
  CREATE INDEX "site_settings_rels_order_idx" ON "site_settings_rels" USING btree ("order");
  CREATE INDEX "site_settings_rels_parent_idx" ON "site_settings_rels" USING btree ("parent_id");
  CREATE INDEX "site_settings_rels_path_idx" ON "site_settings_rels" USING btree ("path");
  CREATE INDEX "site_settings_rels_pages_id_idx" ON "site_settings_rels" USING btree ("pages_id");
  CREATE INDEX "site_settings_rels_posts_id_idx" ON "site_settings_rels" USING btree ("posts_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_hero_links" CASCADE;
  DROP TABLE "pages_blocks_cta_links" CASCADE;
  DROP TABLE "pages_blocks_cta" CASCADE;
  DROP TABLE "pages_blocks_content_columns" CASCADE;
  DROP TABLE "pages_blocks_content" CASCADE;
  DROP TABLE "pages_blocks_cta_card" CASCADE;
  DROP TABLE "pages_blocks_cta_section" CASCADE;
  DROP TABLE "pages_blocks_media_block" CASCADE;
  DROP TABLE "pages_blocks_archive" CASCADE;
  DROP TABLE "pages_blocks_form_block" CASCADE;
  DROP TABLE "pages_blocks_signup_c_t_a_buttons" CASCADE;
  DROP TABLE "pages_blocks_signup_c_t_a" CASCADE;
  DROP TABLE "pages_blocks_two_column_text_image_links" CASCADE;
  DROP TABLE "pages_blocks_two_column_text_image" CASCADE;
  DROP TABLE "pages_blocks_profile_with_image" CASCADE;
  DROP TABLE "pages_blocks_video_embed_with_heading_heading" CASCADE;
  DROP TABLE "pages_blocks_video_embed_with_heading" CASCADE;
  DROP TABLE "pages_blocks_pricing_plan_grid_heading" CASCADE;
  DROP TABLE "pages_blocks_pricing_card" CASCADE;
  DROP TABLE "pages_blocks_pricing_plan_grid" CASCADE;
  DROP TABLE "pages_blocks_section_hero_with_badge" CASCADE;
  DROP TABLE "pages_blocks_service_card_grid_heading" CASCADE;
  DROP TABLE "pages_blocks_service_card" CASCADE;
  DROP TABLE "pages_blocks_service_card_grid" CASCADE;
  DROP TABLE "pages_blocks_embed_code" CASCADE;
  DROP TABLE "pages_blocks_feature_cards_features" CASCADE;
  DROP TABLE "pages_blocks_feature_cards" CASCADE;
  DROP TABLE "pages_blocks_feature_highlights_features" CASCADE;
  DROP TABLE "pages_blocks_feature_highlights" CASCADE;
  DROP TABLE "pages_blocks_text_section" CASCADE;
  DROP TABLE "pages_blocks_image_content" CASCADE;
  DROP TABLE "pages_blocks_faq_faq_items" CASCADE;
  DROP TABLE "pages_blocks_faq" CASCADE;
  DROP TABLE "pages_blocks_faq_grid_faq_items" CASCADE;
  DROP TABLE "pages_blocks_faq_grid" CASCADE;
  DROP TABLE "pages_blocks_testimonial1" CASCADE;
  DROP TABLE "pages_blocks_testimonial3_testimonials" CASCADE;
  DROP TABLE "pages_blocks_testimonial3" CASCADE;
  DROP TABLE "pages_blocks_testimonial4_testimonials" CASCADE;
  DROP TABLE "pages_blocks_testimonial4" CASCADE;
  DROP TABLE "pages_blocks_testimonial_grid_testimonials" CASCADE;
  DROP TABLE "pages_blocks_testimonial_grid" CASCADE;
  DROP TABLE "pages_blocks_pricing1_plans_features" CASCADE;
  DROP TABLE "pages_blocks_pricing1_plans" CASCADE;
  DROP TABLE "pages_blocks_pricing1" CASCADE;
  DROP TABLE "pages_blocks_logo_carousel" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "pages_rels" CASCADE;
  DROP TABLE "_pages_v_version_hero_links" CASCADE;
  DROP TABLE "_pages_v_blocks_cta_links" CASCADE;
  DROP TABLE "_pages_v_blocks_cta" CASCADE;
  DROP TABLE "_pages_v_blocks_content_columns" CASCADE;
  DROP TABLE "_pages_v_blocks_content" CASCADE;
  DROP TABLE "_pages_v_blocks_cta_card" CASCADE;
  DROP TABLE "_pages_v_blocks_cta_section" CASCADE;
  DROP TABLE "_pages_v_blocks_media_block" CASCADE;
  DROP TABLE "_pages_v_blocks_archive" CASCADE;
  DROP TABLE "_pages_v_blocks_form_block" CASCADE;
  DROP TABLE "_pages_v_blocks_signup_c_t_a_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_signup_c_t_a" CASCADE;
  DROP TABLE "_pages_v_blocks_two_column_text_image_links" CASCADE;
  DROP TABLE "_pages_v_blocks_two_column_text_image" CASCADE;
  DROP TABLE "_pages_v_blocks_profile_with_image" CASCADE;
  DROP TABLE "_pages_v_blocks_video_embed_with_heading_heading" CASCADE;
  DROP TABLE "_pages_v_blocks_video_embed_with_heading" CASCADE;
  DROP TABLE "_pages_v_blocks_pricing_plan_grid_heading" CASCADE;
  DROP TABLE "_pages_v_blocks_pricing_card" CASCADE;
  DROP TABLE "_pages_v_blocks_pricing_plan_grid" CASCADE;
  DROP TABLE "_pages_v_blocks_section_hero_with_badge" CASCADE;
  DROP TABLE "_pages_v_blocks_service_card_grid_heading" CASCADE;
  DROP TABLE "_pages_v_blocks_service_card" CASCADE;
  DROP TABLE "_pages_v_blocks_service_card_grid" CASCADE;
  DROP TABLE "_pages_v_blocks_embed_code" CASCADE;
  DROP TABLE "_pages_v_blocks_feature_cards_features" CASCADE;
  DROP TABLE "_pages_v_blocks_feature_cards" CASCADE;
  DROP TABLE "_pages_v_blocks_feature_highlights_features" CASCADE;
  DROP TABLE "_pages_v_blocks_feature_highlights" CASCADE;
  DROP TABLE "_pages_v_blocks_text_section" CASCADE;
  DROP TABLE "_pages_v_blocks_image_content" CASCADE;
  DROP TABLE "_pages_v_blocks_faq_faq_items" CASCADE;
  DROP TABLE "_pages_v_blocks_faq" CASCADE;
  DROP TABLE "_pages_v_blocks_faq_grid_faq_items" CASCADE;
  DROP TABLE "_pages_v_blocks_faq_grid" CASCADE;
  DROP TABLE "_pages_v_blocks_testimonial1" CASCADE;
  DROP TABLE "_pages_v_blocks_testimonial3_testimonials" CASCADE;
  DROP TABLE "_pages_v_blocks_testimonial3" CASCADE;
  DROP TABLE "_pages_v_blocks_testimonial4_testimonials" CASCADE;
  DROP TABLE "_pages_v_blocks_testimonial4" CASCADE;
  DROP TABLE "_pages_v_blocks_testimonial_grid_testimonials" CASCADE;
  DROP TABLE "_pages_v_blocks_testimonial_grid" CASCADE;
  DROP TABLE "_pages_v_blocks_pricing1_plans_features" CASCADE;
  DROP TABLE "_pages_v_blocks_pricing1_plans" CASCADE;
  DROP TABLE "_pages_v_blocks_pricing1" CASCADE;
  DROP TABLE "_pages_v_blocks_logo_carousel" CASCADE;
  DROP TABLE "_pages_v" CASCADE;
  DROP TABLE "_pages_v_rels" CASCADE;
  DROP TABLE "posts_populated_authors" CASCADE;
  DROP TABLE "posts" CASCADE;
  DROP TABLE "posts_rels" CASCADE;
  DROP TABLE "_posts_v_version_populated_authors" CASCADE;
  DROP TABLE "_posts_v" CASCADE;
  DROP TABLE "_posts_v_rels" CASCADE;
  DROP TABLE "projects" CASCADE;
  DROP TABLE "projects_rels" CASCADE;
  DROP TABLE "_projects_v" CASCADE;
  DROP TABLE "_projects_v_rels" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "categories_breadcrumbs" CASCADE;
  DROP TABLE "categories" CASCADE;
  DROP TABLE "clients" CASCADE;
  DROP TABLE "institutes" CASCADE;
  DROP TABLE "technologies" CASCADE;
  DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "user_avatar" CASCADE;
  DROP TABLE "redirects" CASCADE;
  DROP TABLE "redirects_rels" CASCADE;
  DROP TABLE "forms_blocks_checkbox" CASCADE;
  DROP TABLE "forms_blocks_country" CASCADE;
  DROP TABLE "forms_blocks_email" CASCADE;
  DROP TABLE "forms_blocks_message" CASCADE;
  DROP TABLE "forms_blocks_number" CASCADE;
  DROP TABLE "forms_blocks_select_options" CASCADE;
  DROP TABLE "forms_blocks_select" CASCADE;
  DROP TABLE "forms_blocks_state" CASCADE;
  DROP TABLE "forms_blocks_text" CASCADE;
  DROP TABLE "forms_blocks_textarea" CASCADE;
  DROP TABLE "forms_emails" CASCADE;
  DROP TABLE "forms" CASCADE;
  DROP TABLE "form_submissions_submission_data" CASCADE;
  DROP TABLE "form_submissions" CASCADE;
  DROP TABLE "search_categories" CASCADE;
  DROP TABLE "search" CASCADE;
  DROP TABLE "search_rels" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_jobs_log" CASCADE;
  DROP TABLE "payload_jobs" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "header_nav_items" CASCADE;
  DROP TABLE "header_buttons" CASCADE;
  DROP TABLE "header" CASCADE;
  DROP TABLE "header_rels" CASCADE;
  DROP TABLE "footer_nav_items" CASCADE;
  DROP TABLE "footer" CASCADE;
  DROP TABLE "footer_rels" CASCADE;
  DROP TABLE "site_settings_legal_policies" CASCADE;
  DROP TABLE "site_settings_social_media_platforms" CASCADE;
  DROP TABLE "site_settings" CASCADE;
  DROP TABLE "site_settings_rels" CASCADE;
  DROP TYPE "public"."enum_pages_hero_links_link_type";
  DROP TYPE "public"."enum_pages_hero_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_cta_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_cta_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_content_columns_size";
  DROP TYPE "public"."enum_pages_blocks_content_columns_link_type";
  DROP TYPE "public"."enum_pages_blocks_content_columns_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_cta_card_cta_primary_type";
  DROP TYPE "public"."enum_pages_blocks_cta_card_cta_primary_appearance";
  DROP TYPE "public"."enum_pages_blocks_cta_card_cta_secondary_type";
  DROP TYPE "public"."enum_pages_blocks_cta_card_cta_secondary_appearance";
  DROP TYPE "public"."enum_pages_blocks_cta_card_variant";
  DROP TYPE "public"."enum_pages_blocks_cta_card_text_alignment";
  DROP TYPE "public"."enum_pages_blocks_cta_card_spacing_preset";
  DROP TYPE "public"."enum_pages_blocks_cta_card_background_theme";
  DROP TYPE "public"."enum_pages_blocks_cta_card_content_alignment";
  DROP TYPE "public"."enum_pages_blocks_cta_section_cta_primary_type";
  DROP TYPE "public"."enum_pages_blocks_cta_section_cta_primary_appearance";
  DROP TYPE "public"."enum_pages_blocks_cta_section_cta_secondary_type";
  DROP TYPE "public"."enum_pages_blocks_cta_section_cta_secondary_appearance";
  DROP TYPE "public"."enum_pages_blocks_cta_section_text_alignment";
  DROP TYPE "public"."enum_pages_blocks_cta_section_spacing_preset";
  DROP TYPE "public"."enum_pages_blocks_cta_section_background_theme";
  DROP TYPE "public"."enum_pages_blocks_cta_section_content_alignment";
  DROP TYPE "public"."enum_pages_blocks_media_block_width_type";
  DROP TYPE "public"."enum_pages_blocks_media_block_width_preset";
  DROP TYPE "public"."enum_pages_blocks_media_block_width_alignment";
  DROP TYPE "public"."enum_pages_blocks_media_block_aspect_ratio";
  DROP TYPE "public"."enum_pages_blocks_media_block_shadow";
  DROP TYPE "public"."enum_pages_blocks_archive_populate_by";
  DROP TYPE "public"."enum_pages_blocks_archive_relation_to";
  DROP TYPE "public"."enum_pages_blocks_signup_c_t_a_buttons_type";
  DROP TYPE "public"."enum_pages_blocks_signup_c_t_a_buttons_style";
  DROP TYPE "public"."enum_pages_blocks_signup_c_t_a_buttons_icon";
  DROP TYPE "public"."enum_pages_blocks_two_column_text_image_links_type";
  DROP TYPE "public"."enum_pages_blocks_two_column_text_image_links_appearance";
  DROP TYPE "public"."enum_pages_blocks_two_column_text_image_image_position";
  DROP TYPE "public"."enum_pages_blocks_profile_with_image_media_display_alignment";
  DROP TYPE "public"."enum_pages_blocks_pricing_card_icon";
  DROP TYPE "public"."enum_pages_blocks_section_hero_with_badge_badge_icon";
  DROP TYPE "public"."enum_pages_blocks_embed_code_width_mode";
  DROP TYPE "public"."enum_pages_blocks_feature_highlights_spacing_preset";
  DROP TYPE "public"."enum_pages_blocks_feature_highlights_background_theme";
  DROP TYPE "public"."enum_pages_blocks_feature_highlights_content_alignment";
  DROP TYPE "public"."enum_pages_blocks_text_section_cta_type";
  DROP TYPE "public"."enum_pages_blocks_text_section_cta_appearance";
  DROP TYPE "public"."enum_pages_blocks_text_section_text_alignment";
  DROP TYPE "public"."enum_pages_blocks_text_section_spacing_preset";
  DROP TYPE "public"."enum_pages_blocks_text_section_background_theme";
  DROP TYPE "public"."enum_pages_blocks_text_section_content_alignment";
  DROP TYPE "public"."enum_pages_blocks_image_content_cta_type";
  DROP TYPE "public"."enum_pages_blocks_image_content_cta_appearance";
  DROP TYPE "public"."enum_pages_blocks_image_content_text_placement";
  DROP TYPE "public"."enum_pages_blocks_image_content_spacing_preset";
  DROP TYPE "public"."enum_pages_blocks_image_content_background_theme";
  DROP TYPE "public"."enum_pages_blocks_image_content_content_alignment";
  DROP TYPE "public"."enum_pages_blocks_faq_text_alignment";
  DROP TYPE "public"."enum_pages_blocks_faq_spacing_preset";
  DROP TYPE "public"."enum_pages_blocks_faq_background_theme";
  DROP TYPE "public"."enum_pages_blocks_faq_content_alignment";
  DROP TYPE "public"."enum_pages_blocks_faq_grid_spacing_preset";
  DROP TYPE "public"."enum_pages_blocks_faq_grid_background_theme";
  DROP TYPE "public"."enum_pages_blocks_faq_grid_content_alignment";
  DROP TYPE "public"."enum_pages_blocks_testimonial1_spacing_preset";
  DROP TYPE "public"."enum_pages_blocks_testimonial1_background_theme";
  DROP TYPE "public"."enum_pages_blocks_testimonial1_content_alignment";
  DROP TYPE "public"."enum_pages_blocks_testimonial3_cta_type";
  DROP TYPE "public"."enum_pages_blocks_testimonial3_cta_appearance";
  DROP TYPE "public"."enum_pages_blocks_testimonial3_spacing_preset";
  DROP TYPE "public"."enum_pages_blocks_testimonial3_background_theme";
  DROP TYPE "public"."enum_pages_blocks_testimonial3_content_alignment";
  DROP TYPE "public"."enum_pages_blocks_testimonial4_testimonials_rating";
  DROP TYPE "public"."enum_pages_blocks_testimonial4_cta_type";
  DROP TYPE "public"."enum_pages_blocks_testimonial4_cta_appearance";
  DROP TYPE "public"."enum_pages_blocks_testimonial4_spacing_preset";
  DROP TYPE "public"."enum_pages_blocks_testimonial4_background_theme";
  DROP TYPE "public"."enum_pages_blocks_testimonial4_content_alignment";
  DROP TYPE "public"."enum_pages_blocks_testimonial_grid_spacing_preset";
  DROP TYPE "public"."enum_pages_blocks_testimonial_grid_background_theme";
  DROP TYPE "public"."enum_pages_blocks_testimonial_grid_content_alignment";
  DROP TYPE "public"."enum_pages_blocks_pricing1_plans_cta_type";
  DROP TYPE "public"."enum_pages_blocks_pricing1_plans_cta_appearance";
  DROP TYPE "public"."enum_pages_blocks_pricing1_spacing_preset";
  DROP TYPE "public"."enum_pages_blocks_pricing1_background_theme";
  DROP TYPE "public"."enum_pages_blocks_pricing1_content_alignment";
  DROP TYPE "public"."enum_pages_blocks_logo_carousel_populate_by";
  DROP TYPE "public"."enum_pages_blocks_logo_carousel_collection_type";
  DROP TYPE "public"."enum_pages_blocks_logo_carousel_logo_size";
  DROP TYPE "public"."enum_pages_hero_type";
  DROP TYPE "public"."enum_pages_status";
  DROP TYPE "public"."enum__pages_v_version_hero_links_link_type";
  DROP TYPE "public"."enum__pages_v_version_hero_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_cta_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_cta_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_content_columns_size";
  DROP TYPE "public"."enum__pages_v_blocks_content_columns_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_content_columns_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_cta_card_cta_primary_type";
  DROP TYPE "public"."enum__pages_v_blocks_cta_card_cta_primary_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_cta_card_cta_secondary_type";
  DROP TYPE "public"."enum__pages_v_blocks_cta_card_cta_secondary_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_cta_card_variant";
  DROP TYPE "public"."enum__pages_v_blocks_cta_card_text_alignment";
  DROP TYPE "public"."enum__pages_v_blocks_cta_card_spacing_preset";
  DROP TYPE "public"."enum__pages_v_blocks_cta_card_background_theme";
  DROP TYPE "public"."enum__pages_v_blocks_cta_card_content_alignment";
  DROP TYPE "public"."enum__pages_v_blocks_cta_section_cta_primary_type";
  DROP TYPE "public"."enum__pages_v_blocks_cta_section_cta_primary_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_cta_section_cta_secondary_type";
  DROP TYPE "public"."enum__pages_v_blocks_cta_section_cta_secondary_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_cta_section_text_alignment";
  DROP TYPE "public"."enum__pages_v_blocks_cta_section_spacing_preset";
  DROP TYPE "public"."enum__pages_v_blocks_cta_section_background_theme";
  DROP TYPE "public"."enum__pages_v_blocks_cta_section_content_alignment";
  DROP TYPE "public"."enum__pages_v_blocks_media_block_width_type";
  DROP TYPE "public"."enum__pages_v_blocks_media_block_width_preset";
  DROP TYPE "public"."enum__pages_v_blocks_media_block_width_alignment";
  DROP TYPE "public"."enum__pages_v_blocks_media_block_aspect_ratio";
  DROP TYPE "public"."enum__pages_v_blocks_media_block_shadow";
  DROP TYPE "public"."enum__pages_v_blocks_archive_populate_by";
  DROP TYPE "public"."enum__pages_v_blocks_archive_relation_to";
  DROP TYPE "public"."enum__pages_v_blocks_signup_c_t_a_buttons_type";
  DROP TYPE "public"."enum__pages_v_blocks_signup_c_t_a_buttons_style";
  DROP TYPE "public"."enum__pages_v_blocks_signup_c_t_a_buttons_icon";
  DROP TYPE "public"."enum__pages_v_blocks_two_column_text_image_links_type";
  DROP TYPE "public"."enum__pages_v_blocks_two_column_text_image_links_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_two_column_text_image_image_position";
  DROP TYPE "public"."enum__pages_v_blocks_profile_with_image_media_display_alignment";
  DROP TYPE "public"."enum__pages_v_blocks_pricing_card_icon";
  DROP TYPE "public"."enum__pages_v_blocks_section_hero_with_badge_badge_icon";
  DROP TYPE "public"."enum__pages_v_blocks_embed_code_width_mode";
  DROP TYPE "public"."enum__pages_v_blocks_feature_highlights_spacing_preset";
  DROP TYPE "public"."enum__pages_v_blocks_feature_highlights_background_theme";
  DROP TYPE "public"."enum__pages_v_blocks_feature_highlights_content_alignment";
  DROP TYPE "public"."enum__pages_v_blocks_text_section_cta_type";
  DROP TYPE "public"."enum__pages_v_blocks_text_section_cta_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_text_section_text_alignment";
  DROP TYPE "public"."enum__pages_v_blocks_text_section_spacing_preset";
  DROP TYPE "public"."enum__pages_v_blocks_text_section_background_theme";
  DROP TYPE "public"."enum__pages_v_blocks_text_section_content_alignment";
  DROP TYPE "public"."enum__pages_v_blocks_image_content_cta_type";
  DROP TYPE "public"."enum__pages_v_blocks_image_content_cta_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_image_content_text_placement";
  DROP TYPE "public"."enum__pages_v_blocks_image_content_spacing_preset";
  DROP TYPE "public"."enum__pages_v_blocks_image_content_background_theme";
  DROP TYPE "public"."enum__pages_v_blocks_image_content_content_alignment";
  DROP TYPE "public"."enum__pages_v_blocks_faq_text_alignment";
  DROP TYPE "public"."enum__pages_v_blocks_faq_spacing_preset";
  DROP TYPE "public"."enum__pages_v_blocks_faq_background_theme";
  DROP TYPE "public"."enum__pages_v_blocks_faq_content_alignment";
  DROP TYPE "public"."enum__pages_v_blocks_faq_grid_spacing_preset";
  DROP TYPE "public"."enum__pages_v_blocks_faq_grid_background_theme";
  DROP TYPE "public"."enum__pages_v_blocks_faq_grid_content_alignment";
  DROP TYPE "public"."enum__pages_v_blocks_testimonial1_spacing_preset";
  DROP TYPE "public"."enum__pages_v_blocks_testimonial1_background_theme";
  DROP TYPE "public"."enum__pages_v_blocks_testimonial1_content_alignment";
  DROP TYPE "public"."enum__pages_v_blocks_testimonial3_cta_type";
  DROP TYPE "public"."enum__pages_v_blocks_testimonial3_cta_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_testimonial3_spacing_preset";
  DROP TYPE "public"."enum__pages_v_blocks_testimonial3_background_theme";
  DROP TYPE "public"."enum__pages_v_blocks_testimonial3_content_alignment";
  DROP TYPE "public"."enum__pages_v_blocks_testimonial4_testimonials_rating";
  DROP TYPE "public"."enum__pages_v_blocks_testimonial4_cta_type";
  DROP TYPE "public"."enum__pages_v_blocks_testimonial4_cta_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_testimonial4_spacing_preset";
  DROP TYPE "public"."enum__pages_v_blocks_testimonial4_background_theme";
  DROP TYPE "public"."enum__pages_v_blocks_testimonial4_content_alignment";
  DROP TYPE "public"."enum__pages_v_blocks_testimonial_grid_spacing_preset";
  DROP TYPE "public"."enum__pages_v_blocks_testimonial_grid_background_theme";
  DROP TYPE "public"."enum__pages_v_blocks_testimonial_grid_content_alignment";
  DROP TYPE "public"."enum__pages_v_blocks_pricing1_plans_cta_type";
  DROP TYPE "public"."enum__pages_v_blocks_pricing1_plans_cta_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_pricing1_spacing_preset";
  DROP TYPE "public"."enum__pages_v_blocks_pricing1_background_theme";
  DROP TYPE "public"."enum__pages_v_blocks_pricing1_content_alignment";
  DROP TYPE "public"."enum__pages_v_blocks_logo_carousel_populate_by";
  DROP TYPE "public"."enum__pages_v_blocks_logo_carousel_collection_type";
  DROP TYPE "public"."enum__pages_v_blocks_logo_carousel_logo_size";
  DROP TYPE "public"."enum__pages_v_version_hero_type";
  DROP TYPE "public"."enum__pages_v_version_status";
  DROP TYPE "public"."enum_posts_status";
  DROP TYPE "public"."enum__posts_v_version_status";
  DROP TYPE "public"."enum_projects_status";
  DROP TYPE "public"."enum__projects_v_version_status";
  DROP TYPE "public"."enum_institutes_type";
  DROP TYPE "public"."enum_technologies_category";
  DROP TYPE "public"."enum_users_role";
  DROP TYPE "public"."enum_redirects_to_type";
  DROP TYPE "public"."enum_forms_confirmation_type";
  DROP TYPE "public"."enum_payload_jobs_log_task_slug";
  DROP TYPE "public"."enum_payload_jobs_log_state";
  DROP TYPE "public"."enum_payload_jobs_task_slug";
  DROP TYPE "public"."enum_header_nav_items_link_type";
  DROP TYPE "public"."enum_header_buttons_type";
  DROP TYPE "public"."enum_header_buttons_style";
  DROP TYPE "public"."enum_header_buttons_icon";
  DROP TYPE "public"."enum_header_buttons_icon_position";
  DROP TYPE "public"."enum_header_logo_logo_mode";
  DROP TYPE "public"."enum_header_header_style";
  DROP TYPE "public"."enum_header_background_type";
  DROP TYPE "public"."enum_header_text_color";
  DROP TYPE "public"."enum_header_menu_position";
  DROP TYPE "public"."enum_footer_nav_items_link_type";
  DROP TYPE "public"."enum_footer_logo_logo_mode";
  DROP TYPE "public"."enum_site_settings_legal_policies_type";
  DROP TYPE "public"."enum_site_settings_social_media_platforms_platform";
  DROP TYPE "public"."enum_site_settings_branding_logo_mode";
  DROP TYPE "public"."enum_site_settings_branding_admin_logo_mode";
  DROP TYPE "public"."enum_site_settings_theme_settings_theme_mode";
  DROP TYPE "public"."enum_site_settings_theme_settings_default_theme";`)
}
