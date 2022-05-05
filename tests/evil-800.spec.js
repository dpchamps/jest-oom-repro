
  describe("some-evil-spec=800", () => {
    it("evil-block-800", () => {
      window.evil_800 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  