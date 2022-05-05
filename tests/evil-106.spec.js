
  describe("some-evil-spec=106", () => {
    it("evil-block-106", () => {
      window.evil_106 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  