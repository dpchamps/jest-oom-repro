
  describe("some-evil-spec=47", () => {
    it("evil-block-47", () => {
      window.evil_47 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  