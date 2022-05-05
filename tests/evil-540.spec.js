
  describe("some-evil-spec=540", () => {
    it("evil-block-540", () => {
      window.evil_540 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  