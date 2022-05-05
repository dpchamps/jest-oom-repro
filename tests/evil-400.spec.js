
  describe("some-evil-spec=400", () => {
    it("evil-block-400", () => {
      window.evil_400 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  