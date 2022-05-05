
  describe("some-evil-spec=257", () => {
    it("evil-block-257", () => {
      window.evil_257 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  