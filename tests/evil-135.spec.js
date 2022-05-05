
  describe("some-evil-spec=135", () => {
    it("evil-block-135", () => {
      window.evil_135 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  