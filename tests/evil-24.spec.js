
  describe("some-evil-spec=24", () => {
    it("evil-block-24", () => {
      window.evil_24 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  