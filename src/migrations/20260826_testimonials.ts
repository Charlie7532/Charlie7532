import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

// This migration is a no-op placeholder — the actual table creation is handled
// by Payload's auto-generated migration when you run `pnpm payload migrate:create`.
// This file exists so the migration index entry is valid.
// After running migrate:create, replace this file's content with the generated SQL.

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  // Table creation is handled by Payload's auto-generated migration.
  // Run: pnpm payload migrate:create
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  // Drop is handled by Payload's auto-generated migration.
}