
  describe("some-evil-spec=587", () => {
    it("evil-block-587", () => {
      window.evil_587 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  