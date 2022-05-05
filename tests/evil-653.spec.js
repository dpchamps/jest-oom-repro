
  describe("some-evil-spec=653", () => {
    it("evil-block-653", () => {
      window.evil_653 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  