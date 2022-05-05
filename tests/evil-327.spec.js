
  describe("some-evil-spec=327", () => {
    it("evil-block-327", () => {
      window.evil_327 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  