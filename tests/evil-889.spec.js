
  describe("some-evil-spec=889", () => {
    it("evil-block-889", () => {
      window.evil_889 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  