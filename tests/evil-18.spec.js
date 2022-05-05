
  describe("some-evil-spec=18", () => {
    it("evil-block-18", () => {
      window.evil_18 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  