
  describe("some-evil-spec=614", () => {
    it("evil-block-614", () => {
      window.evil_614 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  