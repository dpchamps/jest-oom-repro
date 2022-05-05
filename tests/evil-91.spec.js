
  describe("some-evil-spec=91", () => {
    it("evil-block-91", () => {
      window.evil_91 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  