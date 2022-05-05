
  describe("some-evil-spec=608", () => {
    it("evil-block-608", () => {
      window.evil_608 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  