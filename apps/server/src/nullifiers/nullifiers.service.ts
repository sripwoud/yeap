import { Injectable } from '@nestjs/common'
import type { CreateNullifierDto, FindNullifierDto } from 'server/nullifiers/dto'
import { SupabaseService } from 'server/supabase/supabase.service'

@Injectable()
export class NullifiersService {
  constructor(private readonly supabase: SupabaseService) {}

  async create(createNullifierDto: CreateNullifierDto) {
    return this.supabase.from('nullifiers').insert(createNullifierDto)
  }

  private async find({ nullifier }: FindNullifierDto) {
    return this.supabase.from('nullifiers').select().eq('nullifier', nullifier)
  }

  async isNotAlreadyUsed({ nullifier }: FindNullifierDto) {
    const { data } = await this.find({ nullifier })
    if (data !== null && data.length > 0) throw new Error('Nullifier already used')
  }
}
