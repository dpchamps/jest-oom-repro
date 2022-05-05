
  describe("some-evil-spec=110", () => {
    it("evil-block-110", () => {
      window.evil_110 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  