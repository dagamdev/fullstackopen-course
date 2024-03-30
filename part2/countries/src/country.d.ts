export type Countries = Country[]

export interface Country {
  name: Name
  tld?: string[]
  cca2: string
  ccn3?: string
  cca3: string
  cioc?: string
  independent?: boolean
  status: string
  unMember: boolean
  currencies?: Currencies
  idd: Idd
  capital?: string[]
  altSpellings: string[]
  region: string
  subregion?: string
  languages?: Languages
  translations: Translations
  latlng: number[]
  landlocked: boolean
  borders?: string[]
  area: number
  demonyms?: Demonyms
  flag: string
  maps: Maps
  population: number
  fifa?: string
  car: Car
  timezones: string[]
  continents: string[]
  flags: Flags
  coatOfArms: CoatOfArms
  startOfWeek: string
  capitalInfo: CapitalInfo
  postalCode?: PostalCode
  gini?: Gini
}

export interface Name {
  common: string
  official: string
  nativeName?: NativeName
}

export interface NativeName {
  eng?: Eng
  smo?: Smo
  tkl?: Tkl
  bis?: Bis
  fra?: Fra
  rus?: Rus
  tgk?: Tgk
  kon?: Kon
  lin?: Lin
  lua?: Lua
  swa?: Swa
  ber?: Ber
  mey?: Mey
  spa?: Spa
  srp?: Srp
  pol?: Pol
  mlt?: Mlt
  por?: Por
  zho?: Zho
  glv?: Glv
  tet?: Tet
  ara?: Ara
  arc?: Arc
  ckb?: Ckb
  fas?: Fas
  sag?: Sag
  deu?: Deu
  nld?: Nld
  jam?: Jam
  niu?: Niu
  ukr?: Ukr
  bel?: Bel
  afr?: Afr
  her?: Her
  hgm?: Hgm
  kwn?: Kwn
  loz?: Loz
  ndo?: Ndo
  tsn?: Tsn
  slk?: Slk
  ita?: Ita
  sin?: Sin
  tam?: Tam
  nrf?: Nrf
  lit?: Lit
  bul?: Bul
  msa?: Msa
  sot?: Sot
  rar?: Rar
  gil?: Gil
  kal?: Kal
  dan?: Dan
  fao?: Fao
  isl?: Isl
  cat?: Cat
  gle?: Gle
  hin?: Hin
  slv?: Slv
  hun?: Hun
  kin?: Kin
  dzo?: Dzo
  nau?: Nau
  crs?: Crs
  nno?: Nno
  nob?: Nob
  smi?: Smi
  som?: Som
  swe?: Swe
  pih?: Pih
  gsw?: Gsw
  roh?: Roh
  mri?: Mri
  nzs?: Nzs
  nep?: Nep
  urd?: Urd
  grn?: Grn
  kir?: Kir
  aym?: Aym
  que?: Que
  sqi?: Sqi
  run?: Run
  uzb?: Uzb
  ind?: Ind
  ell?: Ell
  tur?: Tur
  hye?: Hye
  ltz?: Ltz
  mlg?: Mlg
  heb?: Heb
  ces?: Ces
  cal?: Cal
  cha?: Cha
  fin?: Fin
  ron?: Ron
  tvl?: Tvl
  nya?: Nya
  mon?: Mon
  tir?: Tir
  kor?: Kor
  tuk?: Tuk
  bar?: Bar
  jpn?: Jpn
  aze?: Aze
  nfr?: Nfr
  mya?: Mya
  pov?: Pov
  fil?: Fil
  hat?: Hat
  pap?: Pap
  prs?: Prs
  pus?: Pus
  nor?: Nor
  kat?: Kat
  mkd?: Mkd
  bwg?: Bwg
  kck?: Kck
  khi?: Khi
  ndc?: Ndc
  nde?: Nde
  sna?: Sna
  toi?: Toi
  tso?: Tso
  ven?: Ven
  xho?: Xho
  zib?: Zib
  ssw?: Ssw
  nbl?: Nbl
  nso?: Nso
  zul?: Zul
  est?: Est
  ben?: Ben
  amh?: Amh
  lat?: Lat
  mfe?: Mfe
  vie?: Vie
  bjz?: Bjz
  cnr?: Cnr
  tha?: Tha
  zdj?: Zdj
  lao?: Lao
  div?: Div
  ton?: Ton
  hmo?: Hmo
  tpi?: Tpi
  hrv?: Hrv
  pau?: Pau
  khm?: Khm
  fij?: Fij
  hif?: Hif
  lav?: Lav
  bos?: Bos
  kaz?: Kaz
  mah?: Mah
}

export interface Eng {
  official: string
  common: string
}

export interface Smo {
  official: string
  common: string
}

export interface Tkl {
  official: string
  common: string
}

export interface Bis {
  official: string
  common: string
}

export interface Fra {
  official: string
  common: string
}

export interface Rus {
  official: string
  common: string
}

export interface Tgk {
  official: string
  common: string
}

export interface Kon {
  official: string
  common: string
}

export interface Lin {
  official: string
  common: string
}

export interface Lua {
  official: string
  common: string
}

export interface Swa {
  official: string
  common: string
}

export interface Ber {
  official: string
  common: string
}

export interface Mey {
  official: string
  common: string
}

export interface Spa {
  official: string
  common: string
}

export interface Srp {
  official: string
  common: string
}

export interface Pol {
  official: string
  common: string
}

export interface Mlt {
  official: string
  common: string
}

export interface Por {
  official: string
  common: string
}

export interface Zho {
  official: string
  common: string
}

export interface Glv {
  official: string
  common: string
}

export interface Tet {
  official: string
  common: string
}

export interface Ara {
  official: string
  common: string
}

export interface Arc {
  official: string
  common: string
}

export interface Ckb {
  official: string
  common: string
}

export interface Fas {
  official: string
  common: string
}

export interface Sag {
  official: string
  common: string
}

export interface Deu {
  official: string
  common: string
}

export interface Nld {
  official: string
  common: string
}

export interface Jam {
  official: string
  common: string
}

export interface Niu {
  official: string
  common: string
}

export interface Ukr {
  official: string
  common: string
}

export interface Bel {
  official: string
  common: string
}

export interface Afr {
  official: string
  common: string
}

export interface Her {
  official: string
  common: string
}

export interface Hgm {
  official: string
  common: string
}

export interface Kwn {
  official: string
  common: string
}

export interface Loz {
  official: string
  common: string
}

export interface Ndo {
  official: string
  common: string
}

export interface Tsn {
  official: string
  common: string
}

export interface Slk {
  official: string
  common: string
}

export interface Ita {
  official: string
  common: string
}

export interface Sin {
  official: string
  common: string
}

export interface Tam {
  official: string
  common: string
}

export interface Nrf {
  official: string
  common: string
}

export interface Lit {
  official: string
  common: string
}

export interface Bul {
  official: string
  common: string
}

export interface Msa {
  official: string
  common: string
}

export interface Sot {
  official: string
  common: string
}

export interface Rar {
  official: string
  common: string
}

export interface Gil {
  official: string
  common: string
}

export interface Kal {
  official: string
  common: string
}

export interface Dan {
  official: string
  common: string
}

export interface Fao {
  official: string
  common: string
}

export interface Isl {
  official: string
  common: string
}

export interface Cat {
  official: string
  common: string
}

export interface Gle {
  official: string
  common: string
}

export interface Hin {
  official: string
  common: string
}

export interface Slv {
  official: string
  common: string
}

export interface Hun {
  official: string
  common: string
}

export interface Kin {
  official: string
  common: string
}

export interface Dzo {
  official: string
  common: string
}

export interface Nau {
  official: string
  common: string
}

export interface Crs {
  official: string
  common: string
}

export interface Nno {
  official: string
  common: string
}

export interface Nob {
  official: string
  common: string
}

export interface Smi {
  official: string
  common: string
}

export interface Som {
  official: string
  common: string
}

export interface Swe {
  official: string
  common: string
}

export interface Pih {
  official: string
  common: string
}

export interface Gsw {
  official: string
  common: string
}

export interface Roh {
  official: string
  common: string
}

export interface Mri {
  official: string
  common: string
}

export interface Nzs {
  official: string
  common: string
}

export interface Nep {
  official: string
  common: string
}

export interface Urd {
  official: string
  common: string
}

export interface Grn {
  official: string
  common: string
}

export interface Kir {
  official: string
  common: string
}

export interface Aym {
  official: string
  common: string
}

export interface Que {
  official: string
  common: string
}

export interface Sqi {
  official: string
  common: string
}

export interface Run {
  official: string
  common: string
}

export interface Uzb {
  official: string
  common: string
}

export interface Ind {
  official: string
  common: string
}

export interface Ell {
  official: string
  common: string
}

export interface Tur {
  official: string
  common: string
}

export interface Hye {
  official: string
  common: string
}

export interface Ltz {
  official: string
  common: string
}

export interface Mlg {
  official: string
  common: string
}

export interface Heb {
  official: string
  common: string
}

export interface Ces {
  official: string
  common: string
}

export interface Cal {
  official: string
  common: string
}

export interface Cha {
  official: string
  common: string
}

export interface Fin {
  official: string
  common: string
}

export interface Ron {
  official: string
  common: string
}

export interface Tvl {
  official: string
  common: string
}

export interface Nya {
  official: string
  common: string
}

export interface Mon {
  official: string
  common: string
}

export interface Tir {
  official: string
  common: string
}

export interface Kor {
  official: string
  common: string
}

export interface Tuk {
  official: string
  common: string
}

export interface Bar {
  official: string
  common: string
}

export interface Jpn {
  official: string
  common: string
}

export interface Aze {
  official: string
  common: string
}

export interface Nfr {
  official: string
  common: string
}

export interface Mya {
  official: string
  common: string
}

export interface Pov {
  official: string
  common: string
}

export interface Fil {
  official: string
  common: string
}

export interface Hat {
  official: string
  common: string
}

export interface Pap {
  official: string
  common: string
}

export interface Prs {
  official: string
  common: string
}

export interface Pus {
  official: string
  common: string
}

export interface Nor {
  official: string
  common: string
}

export interface Kat {
  official: string
  common: string
}

export interface Mkd {
  official: string
  common: string
}

export interface Bwg {
  official: string
  common: string
}

export interface Kck {
  official: string
  common: string
}

export interface Khi {
  official: string
  common: string
}

export interface Ndc {
  official: string
  common: string
}

export interface Nde {
  official: string
  common: string
}

export interface Sna {
  official: string
  common: string
}

export interface Toi {
  official: string
  common: string
}

export interface Tso {
  official: string
  common: string
}

export interface Ven {
  official: string
  common: string
}

export interface Xho {
  official: string
  common: string
}

export interface Zib {
  official: string
  common: string
}

export interface Ssw {
  official: string
  common: string
}

export interface Nbl {
  official: string
  common: string
}

export interface Nso {
  official: string
  common: string
}

export interface Zul {
  official: string
  common: string
}

export interface Est {
  official: string
  common: string
}

export interface Ben {
  official: string
  common: string
}

export interface Amh {
  official: string
  common: string
}

export interface Lat {
  official: string
  common: string
}

export interface Mfe {
  official: string
  common: string
}

export interface Vie {
  official: string
  common: string
}

export interface Bjz {
  official: string
  common: string
}

export interface Cnr {
  official: string
  common: string
}

export interface Tha {
  official: string
  common: string
}

export interface Zdj {
  official: string
  common: string
}

export interface Lao {
  official: string
  common: string
}

export interface Div {
  official: string
  common: string
}

export interface Ton {
  official: string
  common: string
}

export interface Hmo {
  official: string
  common: string
}

export interface Tpi {
  official: string
  common: string
}

export interface Hrv {
  official: string
  common: string
}

export interface Pau {
  official: string
  common: string
}

export interface Khm {
  official: string
  common: string
}

export interface Fij {
  official: string
  common: string
}

export interface Hif {
  official: string
  common: string
}

export interface Lav {
  official: string
  common: string
}

export interface Bos {
  official: string
  common: string
}

export interface Kaz {
  official: string
  common: string
}

export interface Mah {
  official: string
  common: string
}

export interface Currencies {
  USD?: Usd
  NZD?: Nzd
  VUV?: Vuv
  TJS?: Tjs
  CDF?: Cdf
  DZD?: Dzd
  MAD?: Mad
  MRU?: Mru
  XOF?: Xof
  RSD?: Rsd
  PLN?: Pln
  EUR?: Eur
  MOP?: Mop
  GBP?: Gbp
  IMP?: Imp
  IQD?: Iqd
  IRR?: Irr
  XAF?: Xaf
  ZMW?: Zmw
  JMD?: Jmd
  AUD?: Aud
  UAH?: Uah
  BYN?: Byn
  XCD?: Xcd
  EGP?: Egp
  NAD?: Nad
  ZAR?: Zar
  NGN?: Ngn
  LKR?: Lkr
  SBD?: Sbd
  JEP?: Jep
  BRL?: Brl
  BGN?: Bgn
  SAR?: Sar
  XPF?: Xpf
  MYR?: Myr
  LSL?: Lsl
  CKD?: Ckd
  KID?: Kid
  LYD?: Lyd
  DKK?: Dkk
  JOD?: Jod
  TWD?: Twd
  LRD?: Lrd
  DJF?: Djf
  FOK?: Fok
  ISK?: Isk
  SGD?: Sgd
  INR?: Inr
  ANG?: Ang
  HUF?: Huf
  RWF?: Rwf
  BTN?: Btn
  SCR?: Scr
  NOK?: Nok
  SOS?: Sos
  MXN?: Mxn
  UYU?: Uyu
  SEK?: Sek
  CHF?: Chf
  NPR?: Npr
  PKR?: Pkr
  ARS?: Ars
  TZS?: Tzs
  PYG?: Pyg
  AED?: Aed
  KGS?: Kgs
  BOB?: Bob
  ALL?: All
  BIF?: Bif
  UZS?: Uzs
  IDR?: Idr
  AOA?: Aoa
  FKP?: Fkp
  AMD?: Amd
  MGA?: Mga
  ILS?: Ils
  HNL?: Hnl
  CZK?: Czk
  DOP?: Dop
  GHS?: Ghs
  BND?: Bnd
  MDL?: Mdl
  TVD?: Tvd
  MWK?: Mwk
  MNT?: Mnt
  GIP?: Gip
  ERN?: Ern
  KPW?: Kpw
  TMT?: Tmt
  STN?: Stn
  YER?: Yer
  TRY?: Try
  BBD?: Bbd
  QAR?: Qar
  SDG?: Sdg
  KZT?: Kzt
  BAM?: Bam
  UGX?: Ugx
  BMD?: Bmd
  FJD?: Fjd
  BWP?: Bwp
  COP?: Cop
  NIO?: Nio
  KHR?: Khr
  PGK?: Pgk
  PAB?: Pab
  GNF?: Gnf
  TOP?: Top
  MVR?: Mvr
  GMD?: Gmd
  SRD?: Srd
  LAK?: Lak
  KMF?: Kmf
  THB?: Thb
  CNY?: Cny
  BZD?: Bzd
  VND?: Vnd
  CUC?: Cuc
  CUP?: Cup
  MUR?: Mur
  SHP?: Shp
  PEN?: Pen
  ETB?: Etb
  BDT?: Bdt
  LBP?: Lbp
  BHD?: Bhd
  TTD?: Ttd
  MZN?: Mzn
  RON?: Ron2
  OMR?: Omr
  SZL?: Szl
  CAD?: Cad
  ZWL?: Zwl
  CLP?: Clp
  HKD?: Hkd
  SYP?: Syp
  MKD?: Mkd2
  KYD?: Kyd
  GEL?: Gel
  BSD?: Bsd
  KWD?: Kwd
  TND?: Tnd
  JPY?: Jpy
  GYD?: Gyd
  GTQ?: Gtq
  VES?: Ves
  CVE?: Cve
  AZN?: Azn
  GGP?: Ggp
  KES?: Kes
  SSP?: Ssp
  MMK?: Mmk
  CRC?: Crc
  SLL?: Sll
  PHP?: Php
  RUB?: Rub
  HTG?: Htg
  KRW?: Krw
  WST?: Wst
  AWG?: Awg
  AFN?: Afn
}

export interface Usd {
  name: string
  symbol: string
}

export interface Nzd {
  name: string
  symbol: string
}

export interface Vuv {
  name: string
  symbol: string
}

export interface Tjs {
  name: string
  symbol: string
}

export interface Cdf {
  name: string
  symbol: string
}

export interface Dzd {
  name: string
  symbol: string
}

export interface Mad {
  name: string
  symbol: string
}

export interface Mru {
  name: string
  symbol: string
}

export interface Xof {
  name: string
  symbol: string
}

export interface Rsd {
  name: string
  symbol: string
}

export interface Pln {
  name: string
  symbol: string
}

export interface Eur {
  name: string
  symbol: string
}

export interface Mop {
  name: string
  symbol: string
}

export interface Gbp {
  name: string
  symbol: string
}

export interface Imp {
  name: string
  symbol: string
}

export interface Iqd {
  name: string
  symbol: string
}

export interface Irr {
  name: string
  symbol: string
}

export interface Xaf {
  name: string
  symbol: string
}

export interface Zmw {
  name: string
  symbol: string
}

export interface Jmd {
  name: string
  symbol: string
}

export interface Aud {
  name: string
  symbol: string
}

export interface Uah {
  name: string
  symbol: string
}

export interface Byn {
  name: string
  symbol: string
}

export interface Xcd {
  name: string
  symbol: string
}

export interface Egp {
  name: string
  symbol: string
}

export interface Nad {
  name: string
  symbol: string
}

export interface Zar {
  name: string
  symbol: string
}

export interface Ngn {
  name: string
  symbol: string
}

export interface Lkr {
  name: string
  symbol: string
}

export interface Sbd {
  name: string
  symbol: string
}

export interface Jep {
  name: string
  symbol: string
}

export interface Brl {
  name: string
  symbol: string
}

export interface Bgn {
  name: string
  symbol: string
}

export interface Sar {
  name: string
  symbol: string
}

export interface Xpf {
  name: string
  symbol: string
}

export interface Myr {
  name: string
  symbol: string
}

export interface Lsl {
  name: string
  symbol: string
}

export interface Ckd {
  name: string
  symbol: string
}

export interface Kid {
  name: string
  symbol: string
}

export interface Lyd {
  name: string
  symbol: string
}

export interface Dkk {
  name: string
  symbol: string
}

export interface Jod {
  name: string
  symbol: string
}

export interface Twd {
  name: string
  symbol: string
}

export interface Lrd {
  name: string
  symbol: string
}

export interface Djf {
  name: string
  symbol: string
}

export interface Fok {
  name: string
  symbol: string
}

export interface Isk {
  name: string
  symbol: string
}

export interface Sgd {
  name: string
  symbol: string
}

export interface Inr {
  name: string
  symbol: string
}

export interface Ang {
  name: string
  symbol: string
}

export interface Huf {
  name: string
  symbol: string
}

export interface Rwf {
  name: string
  symbol: string
}

export interface Btn {
  name: string
  symbol: string
}

export interface Scr {
  name: string
  symbol: string
}

export interface Nok {
  name: string
  symbol: string
}

export interface Sos {
  name: string
  symbol: string
}

export interface Mxn {
  name: string
  symbol: string
}

export interface Uyu {
  name: string
  symbol: string
}

export interface Sek {
  name: string
  symbol: string
}

export interface Chf {
  name: string
  symbol: string
}

export interface Npr {
  name: string
  symbol: string
}

export interface Pkr {
  name: string
  symbol: string
}

export interface Ars {
  name: string
  symbol: string
}

export interface Tzs {
  name: string
  symbol: string
}

export interface Pyg {
  name: string
  symbol: string
}

export interface Aed {
  name: string
  symbol: string
}

export interface Kgs {
  name: string
  symbol: string
}

export interface Bob {
  name: string
  symbol: string
}

export interface All {
  name: string
  symbol: string
}

export interface Bif {
  name: string
  symbol: string
}

export interface Uzs {
  name: string
  symbol: string
}

export interface Idr {
  name: string
  symbol: string
}

export interface Aoa {
  name: string
  symbol: string
}

export interface Fkp {
  name: string
  symbol: string
}

export interface Amd {
  name: string
  symbol: string
}

export interface Mga {
  name: string
  symbol: string
}

export interface Ils {
  name: string
  symbol: string
}

export interface Hnl {
  name: string
  symbol: string
}

export interface Czk {
  name: string
  symbol: string
}

export interface Dop {
  name: string
  symbol: string
}

export interface Ghs {
  name: string
  symbol: string
}

export interface Bnd {
  name: string
  symbol: string
}

export interface Mdl {
  name: string
  symbol: string
}

export interface Tvd {
  name: string
  symbol: string
}

export interface Mwk {
  name: string
  symbol: string
}

export interface Mnt {
  name: string
  symbol: string
}

export interface Gip {
  name: string
  symbol: string
}

export interface Ern {
  name: string
  symbol: string
}

export interface Kpw {
  name: string
  symbol: string
}

export interface Tmt {
  name: string
  symbol: string
}

export interface Stn {
  name: string
  symbol: string
}

export interface Yer {
  name: string
  symbol: string
}

export interface Try {
  name: string
  symbol: string
}

export interface Bbd {
  name: string
  symbol: string
}

export interface Qar {
  name: string
  symbol: string
}

export interface Sdg {
  name: string
}

export interface Kzt {
  name: string
  symbol: string
}

export interface Bam {
  name: string
}

export interface Ugx {
  name: string
  symbol: string
}

export interface Bmd {
  name: string
  symbol: string
}

export interface Fjd {
  name: string
  symbol: string
}

export interface Bwp {
  name: string
  symbol: string
}

export interface Cop {
  name: string
  symbol: string
}

export interface Nio {
  name: string
  symbol: string
}

export interface Khr {
  name: string
  symbol: string
}

export interface Pgk {
  name: string
  symbol: string
}

export interface Pab {
  name: string
  symbol: string
}

export interface Gnf {
  name: string
  symbol: string
}

export interface Top {
  name: string
  symbol: string
}

export interface Mvr {
  name: string
  symbol: string
}

export interface Gmd {
  name: string
  symbol: string
}

export interface Srd {
  name: string
  symbol: string
}

export interface Lak {
  name: string
  symbol: string
}

export interface Kmf {
  name: string
  symbol: string
}

export interface Thb {
  name: string
  symbol: string
}

export interface Cny {
  name: string
  symbol: string
}

export interface Bzd {
  name: string
  symbol: string
}

export interface Vnd {
  name: string
  symbol: string
}

export interface Cuc {
  name: string
  symbol: string
}

export interface Cup {
  name: string
  symbol: string
}

export interface Mur {
  name: string
  symbol: string
}

export interface Shp {
  name: string
  symbol: string
}

export interface Pen {
  name: string
  symbol: string
}

export interface Etb {
  name: string
  symbol: string
}

export interface Bdt {
  name: string
  symbol: string
}

export interface Lbp {
  name: string
  symbol: string
}

export interface Bhd {
  name: string
  symbol: string
}

export interface Ttd {
  name: string
  symbol: string
}

export interface Mzn {
  name: string
  symbol: string
}

export interface Ron2 {
  name: string
  symbol: string
}

export interface Omr {
  name: string
  symbol: string
}

export interface Szl {
  name: string
  symbol: string
}

export interface Cad {
  name: string
  symbol: string
}

export interface Zwl {
  name: string
  symbol: string
}

export interface Clp {
  name: string
  symbol: string
}

export interface Hkd {
  name: string
  symbol: string
}

export interface Syp {
  name: string
  symbol: string
}

export interface Mkd2 {
  name: string
  symbol: string
}

export interface Kyd {
  name: string
  symbol: string
}

export interface Gel {
  name: string
  symbol: string
}

export interface Bsd {
  name: string
  symbol: string
}

export interface Kwd {
  name: string
  symbol: string
}

export interface Tnd {
  name: string
  symbol: string
}

export interface Jpy {
  name: string
  symbol: string
}

export interface Gyd {
  name: string
  symbol: string
}

export interface Gtq {
  name: string
  symbol: string
}

export interface Ves {
  name: string
  symbol: string
}

export interface Cve {
  name: string
  symbol: string
}

export interface Azn {
  name: string
  symbol: string
}

export interface Ggp {
  name: string
  symbol: string
}

export interface Kes {
  name: string
  symbol: string
}

export interface Ssp {
  name: string
  symbol: string
}

export interface Mmk {
  name: string
  symbol: string
}

export interface Crc {
  name: string
  symbol: string
}

export interface Sll {
  name: string
  symbol: string
}

export interface Php {
  name: string
  symbol: string
}

export interface Rub {
  name: string
  symbol: string
}

export interface Htg {
  name: string
  symbol: string
}

export interface Krw {
  name: string
  symbol: string
}

export interface Wst {
  name: string
  symbol: string
}

export interface Awg {
  name: string
  symbol: string
}

export interface Afn {
  name: string
  symbol: string
}

export interface Idd {
  root?: string
  suffixes?: string[]
}

export interface Languages {
  eng?: string
  smo?: string
  tkl?: string
  bis?: string
  fra?: string
  rus?: string
  tgk?: string
  kon?: string
  lin?: string
  lua?: string
  swa?: string
  ber?: string
  mey?: string
  spa?: string
  srp?: string
  pol?: string
  mlt?: string
  por?: string
  zho?: string
  glv?: string
  tet?: string
  ara?: string
  arc?: string
  ckb?: string
  fas?: string
  sag?: string
  deu?: string
  nld?: string
  jam?: string
  niu?: string
  ukr?: string
  bel?: string
  afr?: string
  her?: string
  hgm?: string
  kwn?: string
  loz?: string
  ndo?: string
  tsn?: string
  slk?: string
  ita?: string
  sin?: string
  tam?: string
  nrf?: string
  lit?: string
  bul?: string
  msa?: string
  sot?: string
  rar?: string
  gil?: string
  kal?: string
  dan?: string
  fao?: string
  isl?: string
  cat?: string
  gle?: string
  hin?: string
  slv?: string
  hun?: string
  kin?: string
  dzo?: string
  nau?: string
  crs?: string
  nno?: string
  nob?: string
  smi?: string
  som?: string
  swe?: string
  pih?: string
  gsw?: string
  roh?: string
  mri?: string
  nzs?: string
  nep?: string
  urd?: string
  grn?: string
  kir?: string
  aym?: string
  que?: string
  sqi?: string
  run?: string
  uzb?: string
  ind?: string
  ell?: string
  tur?: string
  hye?: string
  ltz?: string
  mlg?: string
  heb?: string
  ces?: string
  cal?: string
  cha?: string
  fin?: string
  ron?: string
  tvl?: string
  nya?: string
  mon?: string
  tir?: string
  kor?: string
  tuk?: string
  de?: string
  jpn?: string
  aze?: string
  nfr?: string
  mya?: string
  pov?: string
  fil?: string
  hat?: string
  pap?: string
  prs?: string
  pus?: string
  nor?: string
  kat?: string
  mkd?: string
  bwg?: string
  kck?: string
  khi?: string
  ndc?: string
  nde?: string
  sna?: string
  toi?: string
  tso?: string
  ven?: string
  xho?: string
  zib?: string
  ssw?: string
  nbl?: string
  nso?: string
  zul?: string
  est?: string
  ben?: string
  amh?: string
  lat?: string
  mfe?: string
  vie?: string
  bjz?: string
  cnr?: string
  tha?: string
  zdj?: string
  lao?: string
  div?: string
  ton?: string
  hmo?: string
  tpi?: string
  hrv?: string
  pau?: string
  khm?: string
  fij?: string
  hif?: string
  lav?: string
  bos?: string
  kaz?: string
  mah?: string
}

export interface Translations {
  ara: Ara2
  bre: Bre
  ces: Ces2
  cym: Cym
  deu: Deu2
  est: Est2
  fin: Fin2
  fra: Fra2
  hrv?: Hrv2
  hun: Hun2
  ita: Ita2
  jpn?: Jpn2
  kor: Kor2
  nld: Nld2
  per?: Per
  pol: Pol2
  por: Por2
  rus: Rus2
  slk: Slk2
  spa: Spa2
  srp: Srp2
  swe: Swe2
  tur: Tur2
  urd: Urd2
  zho?: Zho2
}

export interface Ara2 {
  official: string
  common: string
}

export interface Bre {
  official: string
  common: string
}

export interface Ces2 {
  official: string
  common: string
}

export interface Cym {
  official: string
  common: string
}

export interface Deu2 {
  official: string
  common: string
}

export interface Est2 {
  official: string
  common: string
}

export interface Fin2 {
  official: string
  common: string
}

export interface Fra2 {
  official: string
  common: string
}

export interface Hrv2 {
  official: string
  common: string
}

export interface Hun2 {
  official: string
  common: string
}

export interface Ita2 {
  official: string
  common: string
}

export interface Jpn2 {
  official: string
  common: string
}

export interface Kor2 {
  official: string
  common: string
}

export interface Nld2 {
  official: string
  common: string
}

export interface Per {
  official: string
  common: string
}

export interface Pol2 {
  official: string
  common: string
}

export interface Por2 {
  official: string
  common: string
}

export interface Rus2 {
  official: string
  common: string
}

export interface Slk2 {
  official: string
  common: string
}

export interface Spa2 {
  official: string
  common: string
}

export interface Srp2 {
  official: string
  common: string
}

export interface Swe2 {
  official: string
  common: string
}

export interface Tur2 {
  official: string
  common: string
}

export interface Urd2 {
  official: string
  common: string
}

export interface Zho2 {
  official: string
  common: string
}

export interface Demonyms {
  eng: Eng2
  fra?: Fra3
}

export interface Eng2 {
  f: string
  m: string
}

export interface Fra3 {
  f: string
  m: string
}

export interface Maps {
  googleMaps: string
  openStreetMaps: string
}

export interface Car {
  signs?: string[]
  side: string
}

export interface Flags {
  png: string
  svg: string
  alt?: string
}

export interface CoatOfArms {
  png?: string
  svg?: string
}

export interface CapitalInfo {
  latlng?: number[]
}

export interface PostalCode {
  format: string
  regex?: string
}

export interface Gini {
  "2010"?: number
  "2015"?: number
  "2012"?: number
  "2017"?: number
  "2018"?: number
  "2019"?: number
  "2014"?: number
  "2008"?: number
  "2011"?: number
  "2004"?: number
  "2016"?: number
  "2006"?: number
  "2013"?: number
  "2003"?: number
  "1998"?: number
  "2009"?: number
  "1999"?: number
  "1992"?: number
  "2005"?: number
}
