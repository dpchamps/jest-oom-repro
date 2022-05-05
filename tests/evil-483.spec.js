
  describe("some-evil-spec=483", () => {
    it("evil-block-483", () => {
      window.evil_483 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  