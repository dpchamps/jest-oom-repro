
  describe("some-evil-spec=871", () => {
    it("evil-block-871", () => {
      window.evil_871 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  