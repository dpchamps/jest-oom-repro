
  describe("some-evil-spec=738", () => {
    it("evil-block-738", () => {
      window.evil_738 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  